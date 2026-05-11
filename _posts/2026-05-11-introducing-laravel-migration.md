---
title: Introducing Laravel Migration — Data Migration Tooling
tags: [PHP, Laravel, Package]
image: https://i.imgur.com/BWLQFIW.jpeg
description: A Laravel package to simplify the process of running repeatable data migrations and tracking migrated records, with developer-friendly commands and memory-safe job chunking.
# external_url: https://github.com/paper-leaf-tech/laravel-migration
time: 2026-05-11T11:00:00Z
---

<h1 class="text-xl">Introducing Laravel Migration</h1>

<p>Pulling legacy data into a fresh Laravel app is a recurring problem across the projects I work on, and every time I'd reach for the same patterns: chunked reads, idempotent writes, traceable progress. <code class="inline-code">laravel-migration</code> bundles those patterns into a small set of commands.</p>

<h4>What it does</h4>
<ul>
    <li>Scaffold migration job classes with <code class="inline-code">php artisan migration:new-job {JobName}</code>.</li>
    <li>Run a single migration synchronously while iterating: <code class="inline-code">php artisan migration:run {OldTableName}</code>.</li>
    <li>Run the full set in dependency order: <code class="inline-code">php artisan migration:run --all</code>.</li>
    <li>Handle scale — from 100 rows to millions — with chunked, queueable jobs.</li>
</ul>

<h4>Why a package instead of one-off scripts</h4>
<p>Creating this package allowed me to implement a core migration functionality once which I can be confident to use in future projects. Through development on projects the package has become fairly battle tested, and is going to be my go to solution for implementing database migrations.</p>

<h4>Example: a typical handleItem</h4>
<pre>
<code class="language-php">public function handleItem($item): void
{
    $data = [
        'first_name' => $item->FNAME,
        'last_name'  => $item->LNAME,
        'email'      => $item->EMAIL_ADDR,
        'updated_at' => $item->EDTIME ? Carbon::parse($item->EDTIME) : now(),
    ];

    $record = new User();
    $record->fill($data);
    $record->saveQuietly();
}</code>
</pre>

<h4>Installation</h4>
<p>The package lives at <a href="https://github.com/paper-leaf-tech/laravel-migration" target="_blank" rel="noopener">paper-leaf-tech/laravel-migration</a>. Add the repository to your <code class="inline-code">composer.json</code> and require it:</p>

<pre>
<code class="language-json">"repositories": [
    {
        "type": "github",
        "url": "git@github.com:paper-leaf-tech/laravel-migration.git"
    }
]</code>
</pre>

<pre>
<code class="language-bash">composer require paper-leaf-tech/laravel-migration
php artisan laravel-migration:install</code>
</pre>

<h4>Memory considerations</h4>
<p>The chunked job design is intended to be conservative on both memory, as well as php execution time limits. You can modify the chunk size such that <code class="inline-code">handleItem</code> will process a limited count of items to satisfy memory limits.</p>

<!-- <h4>What's next</h4>
<p>TODO — roadmap items, lessons learned, and what you'd like feedback on.</p> -->
