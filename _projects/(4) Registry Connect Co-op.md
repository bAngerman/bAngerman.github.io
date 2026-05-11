---
name: Registry Connect Co-op
tools: [PHP, Laravel]
image: https://i.imgur.com/AuGnqm4.jpeg
description: Application supporting Alberta registry agents in completing online Vehicle Registration Renewals
# external_url: https://eregistry.ca
time: 2026-05-11T10:05:00Z
published: false
---

<div class="mb-8 flex flex-row">
    <h1 class="text-xl">Registry Connect Co-op</h1>
</div>

<p>This application allows people living in Alberta to apply for Vehicle Registration Renewals online. The application is composed of two separate dashboards, supporting users, and registry clerks respectively. The system also allows users to configure reminders, which will send notifications to users. The scale of this project is large, supporting many Albertans and allowing many registries to offer this service.</p>

<p>We are using <a href="https://laravel.com/" target="_blank" rel="noopener">Laravel</a> and <a href="https://filamentphp.com/" target="_blank" rel="noopener">Filament</a> for this application. The application is supported by multi server infrastructure supporting a dedicated queue worker, redis, and load balancer instance - this was a requirement due to the scale of the system.</p>

<div>
    <h4>Highlights</h4>
    <ul>
        <li>Job based migration script supported transfering many thousands of records</li>
        <li>Domain logic lives in single-purpose services, enforcing shared battle-tested code paths</li>
        <li>Reminder engine processes 1M+ scheduled notifications per year</li>
    </ul>
</div>

<!-- <div>
    <h4>Challenges</h4>
    <p>TODO — technical or product challenges encountered and how they were resolved.</p>
</div> -->
