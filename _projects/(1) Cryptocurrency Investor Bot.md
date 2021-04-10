---
name: Cryptocurrency Investor Bot
tools: [go]
image: https://i.imgur.com/9UJcSm5.jpg
description: This ongoing project, written with golang, acts as an automatic investment tool for trading crypto currencies through an exchange.
external_url: 
time: 2021-03-21T10:20:00Z
---

<div class="mb-8 flex flex-row">
    <h1 class="text-xl">Cryptocurrency Investor Bot</h1>
    <a href="//github.com/bAngerman/auto-investor" target="_blank" rel="noopener" class="fill-current ml-2">
        <svg role="img" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <use href="#github-svg"></use>
        </svg>
    </a>
</div>

<p>This project is a result of my recent interest in both golang, and investments into stocks. I found that while investing I was consistently executing the same flow of commands, which was to attempt to buy at a lower price, or during a dip, and sell a portion, or all of my investment when I could achieve a profit. This sort of automation is by no means a new idea, as there are proprietary tools individuals may use to automate their own trading. I saw this as an opportunity to expose myself to golang, and to create a tool for myself to automate trading.</p>

<p>The bot would be designed to accomplish these simple functionalities:</p>
<ol>
    <li>Establish a WebSocket connection to the exchange, maintaining the connection in order to complete any transactions.</li>
    <li>Subscribe to cryptocurrency tickers. When ticker message events occur it would need to evaluate the current holdings and execute actions.</li>
    <li>Follow a pre-defined ruleset, keeping in mind strategies including stop loss, securing unrealized gains, and establishing a history in attempts to "learn".</li>
</ol>

<p>Before I began to write functionality I had little idea on how to structure my project. I felt that the desired functionality went far beyond a single main.go file. I looked online for opinions on project structure and settled with some <a href="//github.com/golang-standards/project-layout" target="_blank" rel="noopener">unoffial golang project layout standards</a>.</p>

<p>Now that I had established a decent project structure I was able to move onto planning and writing functionality. My first challenge was creating an <a href="//apidoc.ndax.io" target="_blank" rel="noopener">API</a> wrapper in the golang language as I had not been able to find any supporting libraries. With the API wrapper somewhat fleshed out, I was able to begin working on likely the most difficult part of this project; determining the logic around when and why the bot should complete actions. As many cryptocurrencies are quite volatile, it is difficult to be correct with short term positions. Ideally the bot would be able to learn and understand trends in the market. This is dipping into machine learning, which I ultimately would like to integrate down the road. As a first step toward completion of this project a static ruleset around buying and selling would be adequate.</p>
