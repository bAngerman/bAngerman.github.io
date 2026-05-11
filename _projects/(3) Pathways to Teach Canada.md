---
name: Pathways to Teach Canada
tools: [PHP, Laravel]
image: https://i.imgur.com/KNHKdcM.jpeg
description: Helping internationally educated teachers begin teaching in Canada
external_url: https://pathwaystoteach.ca
time: 2026-05-11T10:00:00Z
---

<div class="mb-8 flex flex-row">
    <h1 class="text-xl">Pathways to Teach Canada</h1>
</div>

<p>This project was composed of two applications. While both use <a href="https://laravel.com/" target="_blank" rel="noopener">Laravel</a> and <a href="https://filamentphp.com/" target="_blank" rel="noopener">Filament</a>, the application served different purposes to support internationally educated teachers to be evaluated and ultimately work as a teacher in Canada. One application was built as a content site, heavily utilizing Filaments builder form component to control the dynamic layout of pages. The other system is a full Portal, handling business logic and connecting the IET (Internationally Educated Teacher) to 3rd parties which performed evaluations on documents or abilities.</p>

<p>The system made heavy use of Filament, building out tables and forms with some custom aspects to support the design. We have integrated Stripe via Laravel Cashier to handle payments. As well, there are extensive integrations with 3rd party systems to facilitate the user's journey through systems. It is also important to note that this Portal acted as the Identity Provider for SSO with the 3rd parties. <a href="https://laravel.com/docs/13.x/passport" target="_blank" rel="noopener">Laravel Passport</a> was used to make this possible.</p>

<div>
    <h4>Highlights</h4>
    <ul>
        <li>Integrated with several APIs to connect 3rd party systems to the Portal</li>
        <li>Supported thousands of IET users with gaining teaching accreditation in Canada</li>
        <li>Built robust export tooling</li>
    </ul>
</div>
