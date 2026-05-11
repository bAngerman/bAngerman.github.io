---
title: Introducing Laravel Translation — Manage in Google Sheets
tags: [PHP, Laravel, Package]
image: https://i.imgur.com/vtTml1k.jpeg
description: Sync Laravel translation files with a Google Spreadsheet so non-technical team members can manage translations, with surgical pull updates that preserve comments and formatting.
external_url: https://github.com/paper-leaf-tech/laravel-translation
time: 2026-05-11T11:30:00Z
---

<h1 class="text-xl">Introducing laravel-translation</h1>

<p>Keeping track of translations or strings in general are a recurring source of friction. Developers don't want to play copy editor, and translators don't want to touch PHP arrays. <code class="inline-code">laravel-translation</code> moves the source of truth to a Google Sheet and keeps your Laravel files in lock-step via a push/pull workflow. The Google Sheet becomes a version controlled source of truth, which can be populated from the codebase and then easily pulled back in when content is accurate.</p>

<h4>What it does</h4>
<ul>
    <li>🔄 <strong>Bi-directional sync</strong> — push translations to Google Sheets and pull updates back.</li>
    <li>✏️ <strong>Surgical pull</strong> — updates land in place via AST manipulation; comments, blank lines, indentation, and quote styles are preserved.</li>
    <li>🌍 <strong>Multi-language by default</strong> — <code class="inline-code">translations:push</code> with no argument syncs every locale under <code class="inline-code">lang/</code>.</li>
    <li>🔤 <strong>Translator-friendly sheets</strong> — non-English sheets show the English source alongside each translation.</li>
    <li>🔐 <strong>Service Account authentication</strong> — simple, secure auth using a Google service account.</li>
    <li>🗂️ <strong>Local JSON backups</strong> — sheet snapshots written to a gitignored folder before every push.</li>
</ul>

<h4>Why AST instead of regeneration</h4>
<p>The original version of this package regenerated translation files from scratch on every pull. That worked, but it nuked comments, blank lines, and any custom formatting. Switching to AST manipulation (via <code class="inline-code">nikic/php-parser</code>) means pull only touches the string values whose keys already exist in your file — nothing else moves.</p>

<h4>Sheet layout</h4>
<p>Each locale gets its own tab named <code class="inline-code">Translations - {locale}</code>:</p>

<ul>
    <li><strong>Source locale (en):</strong> Column A is the key, B is the original value, C is the editor's revised wording.</li>
    <li><strong>Other locales (fr, es, …):</strong> Column A is the key, B is the English source, C is the translation. Rows with an empty C are skipped on pull, falling through to Laravel's <code class="inline-code">fallback_locale</code>.</li>
</ul>

<h4>Installation</h4>
<p>The package lives at <a href="https://github.com/paper-leaf-tech/laravel-translation" target="_blank" rel="noopener">paper-leaf-tech/laravel-translation</a>.</p>

<pre>
<code class="language-json">"repositories": [
    {
        "type": "github",
        "url": "git@github.com:paper-leaf-tech/laravel-translation.git"
    }
]</code>
</pre>

<pre>
<code class="language-bash">composer require paper-leaf-tech/laravel-translation --dev
php artisan vendor:publish --tag=laravel-translation-config</code>
</pre>

<h4>The workflow</h4>
<ol>
    <li><strong>Initial push</strong> — <code class="inline-code">php artisan translations:push</code> from a project with <code class="inline-code">lang/en/</code> (and optionally other locales). Each locale gets its own tab.</li>
    <li><strong>Translators work in the sheet</strong> — non-source tabs show English in Column B and let translators fill Column C.</li>
    <li><strong>Pull</strong> — <code class="inline-code">php artisan translations:pull</code> writes Column C back to the matching <code class="inline-code">lang/{locale}/*.php</code> files. Untranslated rows are left alone.</li>
    <li><strong>Re-push</strong> when you add new keys to your code.</li>
</ol>

<h4>Guardrails on pull</h4>
<p>Pull intentionally won't create files, append new keys, or touch non-string values. Anything unexpected gets surfaced as a warning rather than silently rewriting your code:</p>

<pre>
<code class="language-bash">⚠ Skipped 1 new key(s) in lang/en/auth.php (add to code first, then re-pull):
    - auth.captcha.invalid</code>
</pre>

<!-- <p>TODO — talk through the reasoning: the codebase is authoritative for shape, the sheet is authoritative for content.</p>

<h4>What's next</h4>
<p>TODO — roadmap items, lessons learned, and what you'd like feedback on.</p> -->
