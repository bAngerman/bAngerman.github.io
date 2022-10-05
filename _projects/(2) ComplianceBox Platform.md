---
name: ComplianceBox Platform
tools: [PHP, Laravel, React Native]
image: https://compliancebox.ca/app/uploads/2020/10/cover-2000px-1024x576.jpg
description: This project serves as a one stop compliance package for truck drivers.
# external_url: https://paper-leaf.com/our-work/compliancebox-saas-app/
time: 2022-08-15T10:20:00Z
---

<div class="mb-8 flex flex-row">
    <h1 class="text-xl">ComplianceBox</h1>
    <!-- <a href="//github.com/bAngerman/auto-investor" target="_blank" rel="noopener" class="fill-current flex items-center ml-4">
        <svg role="img" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <use href="#github-svg"></use>
        </svg>
    </a> -->
</div>

<p>This is a SaaS application which enables truck drivers and their carriers to achieve compliance within their industry. The platform is composed of a Laravel dashboard and API, and a React Native app for Android and iOS. This project has had many phases of development of new features:</p>

<ol>
    <li>
        <h4>Phase 1</h4>
        <p>For this phase we focused on creating foundational support for entities within the system. Support for users, vehicles, inspections and defects were added. Within the Laravel application care was taken to create services which would support an API for the current phase, and in later phases, a administrative dashboard which would display similar information. During this phase the react native app was setup and integrated with the Laravel API. An initial design was implemented which would later be iterated upon.</p>
    </li>
    <li>
        <h4>Phase 2</h4>
        <p>This phase focused on the dashboard implementation of the SaaS platform. There was also the consideration of distinguishing different user roles as now the application could support basic users, and Companies which could contain driver and administrator roles. We used AdminLTE as a dashboard starting point for the dashboard implementation. Some difficulties encountered was the ability to generate mailable PDF representations of completed inspections to users, which we used the <a href="https://github.com/dompdf/dompdf" target="_blank" rel="noopener">DOM pdf library</a> for.</p>
    </li>
    <li>
        <h4>Phase 3</h4>
        <p>This phase was focused on implementing enhancements to existing features, in addition to adding the ability for app users to perform lubrication and maintenance on their vehicles, which would be available for viewing in the dashboard. This phase also added support for Work Tickets, which allowed drivers and dashboard administrators to communicate about issues on their vehicles which may be preventing their ability to work. This functionality made use of Websockets, which the app and dashboard both utilized <a href="https://pusher.com/" target="_blank" rel="noopener">Pusher</a>.</p>
    </li>
    <li>
        <h4>Phase 4</h4>
        <p>During this phase a document management system was added, which allowed drivers and administrators to manage documents associated with users, companies, and vehicles. During this phase we were focused on managing and securing file uploads to the platform. As truck drivers travelling through mountain passes can lose mobile internet, support for offline storage of these documents was also added. This was a simple system which allowed the driver to hand select documents which should be saved for offline viewing. Notifications and checks were also implemented extensively to ensure that drivers and vehicles were compliant, and reminders are in place to ensure users are notified of document expiry.</p>
    </li>
</ol>

<p>This project has been my largest contribution while working at Paper Leaf and I have enjoyed implementing new features in addition to iterating upon existing functionality to improve performance as the platform scales.</p
