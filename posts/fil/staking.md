---
author: Nick Mudge
date: '2020-04-23T07:00:00.000Z'
title: 'Staking'
description: 'Stake GHST, Make FRENS'
contributors:
  - "mudgen"
  - "unintelligent-nerd"
---


<div class="headerImageContainer">
<img class="headerImage" src="/staking/staking.png">
<p class="headerImageText">Stake GHST, Make FRENS!</p>
</div>

Staking refers to the process of locking up your cryptocurrency in return for rewards. This is no different in the Aavegotchi project. The native token, [GHST](/posts/ghst), can be staked in the Staking Contract to earn [FRENS](/posts/glossary#frens).

FRENS are a non-transferable balance within the Aavegotchi Staking Contract. FRENS cannot be purchased. They are meant to reward stakers for their contributions to the Aavegotchi project.

FRENS can be converted into Raffle Tickets or Drop Tickets:

* Raffle Tickets can be entered into periodic Raffles to win [Wearables](/wearables).

* Drop Tickets can be entered into NFT Raffles to win [Portals](/portals) and [REALM Parcels](/metaverse). Read more about Drop Tickets in the [Metaverse page](/metaverse).

Continue reading to learn how to stake GHST and earn prizes with your FRENS.

<div class="contentsBox">

**Contents**

<ol>
<li><a href=#purchasing-ghst>Purchasing GHST</a></li>
<li><a href=#how-to-stake>How to Stake</a></li>
<li><a href=#staking-contract-addresses>Staking Contract Addresses</a></li>
<li><a href=#purchasing-raffle-tickets>Purchasing Raffle Tickets</a></li>
<li><a href=#entering-raffles>Entering Raffles</a></li>
<li><a href=#past-raffles-statistics>Past Raffles Statistics</a></li>
<li><a href=#more-resources>More Resources</a></li>
</ol>

</div>

## Purchasing GHST
First, you need to get your hands on some GHST tokens to stake. Our [GHST token page](/posts/ghst) covers the various ways in which you can get yourself some.

## How to Stake
Once you have some GHST tokens, it is time to stake them! Staking takes place on Polygon (formerly Matic Network).

There are two ways to stake: (1) staking GHST tokens directly, and/or (2) staking [QuickSwap](/glossary#quickswap) LP tokens.

**Important: Staking on Mainnet has been discontinued! Please unstake and restake on Polygon.**

*Note: Pre-sale GHST tokens cannot be staked until they are unlocked.*

### Staking GHST tokens directly

First, you have to transfer your GHST tokens from Ethereum Mainnet to Polygon, a layer 2 solution.

This is done by using the [Bridge to Polygon Interface](https://aavegotchi.com/bridge). Approve the contract to use your GHST tokens. Once that transaction goes through, input the amount of GHST you would like to transfer to Polygon. Once your transaction has confirmed on Ethereum, it takes roughly 7-8 minutes for your balance to reflect on Polygon. Your balance will update automatically. Please be patient!

Next, you have to configure your Metamask to display your wallet balance. Do refer to this [Polygon Guide](/polygon) for detailed instructions on how one can configure their Metamask wallet to include Polygon.

Connect your Metamask to Polygon and head over to the [Polygon Staking Page](https://aavegotchi.com/stake-polygon) on the Aavegotchi DApp. Approve the contract to use your GHST tokens on Polygon. Once the transaction goes through, input the amount of GHST you would like to deposit. Presto! You are done!

*For every 1 GHST staked in this way, you receive 1 FRENS / Day.*

### Staking QuickSwap LP tokens

Currently, there are only 2 QuickSwap LP tokens that could be staked for FRENS:

* QuickSwap GHST-QUICK LP token
* QuickSwap GHST-USDC LP token

The first step involves transferring funds from Ethereum Mainnet to Polygon, a layer 2 solution.

Do refer to this [Polygon Guide](/polygon) for detailed instructions on how one can configure their Metamask wallet to include Polygon. Next, use the [Aavegotchi Bridge](https://aavegotchi.com/bridge) to transfer GHST and/or other assets to Polygon. The [maTokens Guide](/matokens) will show you how this is done.

Next, become a liquidity provider on either or both the [GHST-QUICK](https://info.quickswap.exchange/pair/0x8b1fd78ad67c7da09b682c5392b65ca7caa101b9) and [GHST-USDC](https://info.quickswap.exchange/pair/0x096c5ccb33cfc5732bcd1f3195c13dbefc4c82f4) pools on [QuickSwap](https://quickswap.exchange). You will receive LP tokens in return for your liquidity provision. For people who are interested in staking in the GHST-QUICK pool, you can get some QUICK token from [QuickSwap](https://quickswap.exchange). The most liquid pairs are currently QUICK-UNI, QUICK-WETH, QUICK-USDC, and GHST-QUICK.

Take these LP tokens and stake them in the [Aavegotchi Staking Interface](https://aavegotchi.com/stake-polygon) to get stkGHST receipt tokens. For the GHST-QUICK and GHST-USDC pools, these stkGHST receipt tokens are named stkGHST-QUICK and stkGHST-USDC, respectively.

For the stkGHST-QUICK receipt token **only**, you can stake them into the Quickswap Rewards pool at [https://quickswap.exchange/#/quick](https://quickswap.exchange/#/quick) to earn additional QUICK rewards. The Aavegotchi team is requesting for a similar incentive to be offered for the stkGHST-USDC receipt token.

*For every 1 GHST-QUICK LP token staked in this way, you receive 83 FRENS / Day (the team tries to keep the rate around 30-40% higher than just staking GHST alone. This rate is periodically adjusted up/down without warning to maintain the correct proportion).*

*For every 1 GHST-USDC LP token staked in this way, you receive 74 million FRENS / Day (10% more than just staking GHST).*

Why is there a huge difference in the number of FRENS earned through LP staking compared to staking GHST tokens directly? Staking LP tokens have the risk of [impermanent loss](/glossary#impermanent-loss). You are compensated for the increased risk you take.

Why is the GHST-USDC pool yielding 74 million FRENS a day? An early depositor in the GHST-USDC pool on QuickSwap messed up the ratio between the assets. Hence, when depositors add to the pool, they receive tiny amounts of LP tokens, like 0.00006. See this [tweet](https://twitter.com/coderdannn/status/1362423402871447554) for the lulz.

### Staking GHST on Polygon Cheetsheet!

The following diagram shows the two different routes to staking on Polygon that we have discussed above (<a href=#staking-ghst-tokens-directly>Staking GHST tokens</a> ; <a href=#staking-quickswap-lp-tokens>Staking in the GHST-QUICK pool</a>).

<img class = "bodyImage" src = "/staking/GHST-to-Matic-Cheatsheet.png" alt = "GHST to Matic Cheatsheet" />

## Staking Contract Addresses

The following table shows the various staking contract addresses on Polygon. The ghstStaking and stkGHSTQUICK contracts share the same contract address. Do check the contract address first before finalizing any transactions.

table_stakingContractAddresses

## Purchasing Raffle Tickets

Once you have enough FRENS, head to the [Shop Bulk Buy user interface](https://aavegotchi.com/tickets) to purchase raffle tickets with FRENS.

Unlike FRENS, Raffle Tickets can be transferred from one wallet to another. They can also be bought/sold on secondary marketplaces such as the [Baazaar](/baazaar).

The Raffle Tickets are also now available on OpenSea Polygon [here](https://opensea.io/collection/aavegotchi-raffle-tickets-polygon). You will be able to see the number of tickets minted for each category of tickets on OpenSea.

There are six different categories of raffle tickets, ranging from Common (least valuable) to Godlike (most valuable):

table_RaffleTickets

Blog post: \[Stake GHST, Make FRENS Live on Ethereum Mainnet!\]( https://aavegotchi.medium.com/stake-ghst-make-frens-live-on-ethereum-mainnet-658bd507d67b)

Users are allowed to buy tickets belonging to different categories in a single transaction. You do **not** need to create separate buy transactions for each category of raffle ticket.

## Entering Raffles

A raffle runs for a period of time. During this period, you can submit your raffle tickets for a chance to win prizes. Submitting raffle tickets into the draw involves an Ethereum transaction; it is not done automatically. If you have many different categories of raffle tickets and wish to enter them together as a bundle, this is also possible. You do **not** need to create separate transactions for entering each category of raffle tickets into the raffle.

When the raffle is over, you can find out what prizes you have won and can claim them.

If you choose not to participate in a given Raffle, you do not need to do anything with your raffle tickets. You can also accumulate raffle tickets for subsequent raffles if you like to do so.

As an example, the first raffle had a Chainlink Theme. Here were the prizes for the raffle:

<img class = "bodyImage" src = "/staking/link-raffle-prizes.png" alt = "Aavegotchi Chainlink-theme Raffle Prizes" />

A total of 6010 prizes.

Each prize will be allocated to a randomly drawn raffle ticket, where each ticket has an equal chance of winning.

You can improve your probability of winning by:
* Submitting multiple tickets
* Enter raffle ticket categories with more prizes (e.g. Common)

Random numbers for the Raffle prize winners are generated through Chainlink's [on-chain verifiable randomness generator](https://blog.chain.link/verifiable-random-functions-vrf-random-number-generation-rng-feature/).

After the raffle has concluded, winners can claim their prizes on Polygon Network and equip their Gotchis with those wearables.

## Past Raffles Statistics
Knowing how to stake FRENS and participate in Raffles is good, you say. But what about the numbers? What are the probabilities of winning a wearable based on past raffles? Visit the [Raffles Statistics page](/raffles-stats) for the historical data.

## More Resources

- [Aavegotchi Raffles — A FRENLY Guide](https://aavegotchi.medium.com/aavegotchi-raffles-a-frenly-guide-66f624c9bc60)
- [Aavegotchi ❤ Chainlink Raffle — You Just WON](https://aavegotchi.medium.com/aavegotchi-chainlink-raffle-you-just-won-af87712f1018)
- [Anon and the Green Ticket](https://aavegotchi.medium.com/anon-and-the-green-ticket-5776969b3a69)
