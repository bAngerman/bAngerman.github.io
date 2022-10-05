---
name: Veto Mobile App
tools: [PHP, Laravel, React Native]
image: https://i.imgur.com/i82JNzi.png
description: A mobile application to help users find restaurants in their location
# external_url: https://paper-leaf.com/our-work/compliancebox-saas-app/
time: 2022-13-15T10:20:00Z
---

<div class="mb-8 flex flex-row">
    <h1 class="text-xl">Veto</h1>
    <!-- <a href="//github.com/bAngerman/auto-investor" target="_blank" rel="noopener" class="fill-current flex items-center ml-4">
        <svg role="img" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <use href="#github-svg"></use>
        </svg>
    </a> -->
</div>

<p>This simple mobile application interfaces with a Laravel based API. The mobile app sends restaurant query information to the API, including location information, and the API performs interacts with the Google Places API to generate a list of restaurants. A group of users in the same voting session can then view, and vote on results using a tinder-like UI. When voting is complete an algorithm generates results, including the winning restaurant which is then presented to the users device.</p>

<p>In terms of technical challenges, we were mostly focused on increasing the speed of the interactions with the Google Places API. We achieved some speed improvements by performing API lookups concurrently, and implementing some minor caching. In theory as the app grows it should become much more efficient.</p>
