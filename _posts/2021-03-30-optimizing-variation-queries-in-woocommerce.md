---
title: Optimizing Variation Queries in WooCommerce
tags: [PHP, WordPress, WooCommerce]
image: https://i.imgur.com/ZrCmRrW.jpg
description: The WooCommerce function get_available_variations() does a lot. Here's how you can trim it back to do as much as you need.
external_url: 
time: 2021-03-30T17:52:00Z
---

<h1 class="text-xl">Optimizing Variation Queries in WooCommerce</h1>

<p>When working on a WooCommerce project with a heavy focus on variable products, I found that the helper function <code class="inline-code">get_available_variations()</code> worked well, but came with a large performance impact. A default WooCommerce shop is set up to expose simple product information on the top level shop archive, while variations of the product would be exposed on the single product pages. A recent project of mine required the majority of variation information on the archive, and I found that even when loading ~16 products per page, the page load speed became incredibly sluggish using the WooCommerce provided function.</p>

<p>When diving into the plugin code around the function, I found that the information returned by this function was robust, but too much for my use case. A total of 22 key/value pairs is returned for each variation. The majority of these key/values are the result of a query. As you can imagine, calling this for each product on the shop archive can exponentially explode the number of queries on a page load. As I only needed some meta information  about variations, I was able to achieve a more linear number of queries (1 query to get instock variations, +1 / variation).</p>

<p>The function expects a product object to be passed in. This is usually available on WooCommerce templates via the <code class="inline-code">global $product;</code> declaration. You can otherwise create this product object by calling <code class="inline-code">$product = wc_get_product( $product_id );</code>.</p>

<pre>
<code class="language-php">/**
 * Acts similar to $product->get_available_variations()
 * but retrieves less information and performs less queries.
 */
function woo_get_variations( $product = null ) {
    global $wpdb;

    if ( is_null( $product ) ) {

        // Exit, not a product.
        if ( get_post_type( get_the_ID() ) !== 'product' ) {
            return null;
        }

        // Use current loop product.
        $product = wc_get_product( get_the_ID() );
    }

    // Return value.
    $variations = [];

    // Unique transient key per product ID.
    $transient_key = sprintf( "product_%s_variations", $product->get_id() );

    // Check for transient before running more expensive queries.
    if ( false === ( $variations = get_transient( $transient_key ) ) ) {

        $children = $product->get_children();
        $children_IN = implode( ",", $children );

        $post_table = $wpdb->prefix . "posts";
        $woo_table = $wpdb->prefix . "wc_product_meta_lookup";

        // Query using WooCommerce Product Meta table rather than post meta.
        $available_variations = $wpdb->get_results(
            "SELECT posts.ID
            FROM $post_table AS posts
            LEFT JOIN $woo_table AS product_meta
                ON product_meta.product_id = posts.ID
            WHERE posts.ID IN ( $children_IN )
            AND posts.post_status = 'publish'
            AND posts.post_type = 'product_variation'
            AND product_meta.stock_status = 'instock'
            "
        , ARRAY_A );

        $available_variations = wp_list_pluck( $available_variations, 'ID' );

        /**
         * We need the following information on each variation.
         * Customize this for your own usage.
         * ID               - id
         * Color            - color
         * Width            - width
         * Size             - size
         * Image ID         - image_id
         * Stock            - stock
         */
        foreach ( $available_variations as $variation ) {

            // Fetch all postmeta for variation in a single query.
            $v_meta = get_post_meta( $variation );

            if ( $v_meta ) {

                // Append information to return value.
                // Customize these metas for your own use case.
                $variations[] = [
                    'id'       => $variation,
                    // See following helper function `safe_meta_get()`.
                    'color'    => safe_meta_get( $v_meta, 'attribute_pa_color' ),
                    'width'    => safe_meta_get( $v_meta, 'attribute_pa_width' ),
                    'size'     => safe_meta_get( $v_meta, 'attribute_pa_size' ),
                    'stock'    => safe_meta_get( $v_meta, '_stock' ),
                    'image_id' => safe_meta_get( $v_meta, '_thumbnail_id' ),
                ];
            }
        }

        set_transient( $transient_key, $variations, DAY_IN_SECONDS * 2 );
    }

    return maybe_unserialize( $variations );
}

/**
 * Reduce repitition in woo_get_variations().
 */
function safe_meta_get( $meta, $key ) {
    return ( isset( $meta[ $key ] ) && count( $meta[ $key ] ) ) ? $meta[ $key ][0] : null;
}</code>
</pre>
