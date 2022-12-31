---
sidebar_position: 7
slug: /artdex-arbitrage
---

# Arbitrage Guide

:::caution 

Make sure you have all the ArtDEX basics covered before exploring arbitrage! This is a heavily technical article.

:::

<p align="center"><img src="/artdex-arbitrage.png" /></p>

## A New Paradigm

ArtDEX represents **a new paradigm** for NFT trading, so it's important that we go over the theory of how ArtDEX interacts with the wider NFT space.

In the discussion around [bonding curves](/artdex-pools#why-use-bonding-curves), we've shown that ArtDEX's main utility offering is the ability to provide NFT liquidity that can **automatically react** to changes in the market, without user intervention.

Similar to the main utility offering for Token DEXs, the true power of ArtDEX can be summarized as **pricing flexibility**.

Technically, users do "provide liquidity" to classic NFT marketplaces, but this liquidity is **static** and requires active management by those providing NFTs or XTZ to the market.

**A critical point:** classic NFT marketplaces have **no solution** for two-sided liquidity providing. Users are **required** to manage offers and listings as seperate entities, even if they'd like to do a bit of both.

## The Role of ArtDEX

Taking ArtDEX's true utility into account, how do ArtDEX pools interact with the general NFT space?

In terms of timelines, ArtDEX will initially start out as mainly a source for **tail-arbitrage opportunities** from larger markets.

> But what does that mean???

This basically means that when global prices change for a specific collection, you can:

1. Buy items from external markets and sell them on ArtDEX
2. Buy items on ArtDEX and sell them on external markets

We call this **tail-arbitrage** because the basis price is likely to be updated on the external market, and ArtDEX markets will react to that.

## Arbitrage on ArtDEX

It's important to talk about arbitrage opportunities because the existence of our bi-directional **Trade Pools** means that there will be more opportunities to earn profits by rebalancing prices across markets & pools.

As previously explained: [bonding curves](/artdex-pools#why-use-bonding-curves) essentially track the overall market price up and down, with no user intervention needed. This means a highly volatile NFT collection can lead to higher arbitrage profits and more **user fees** for the liquidity provider.

> Isn't arbitrage bad for the **Trade Pool** liquidity provider?

Nope! The core idea around liquidity providing is that LPs *willingly* create these arbitrage opportunities between markets, and set their **user fee** to take a cut of the arbitrageur's gains. This idea holds true in both NFT and token DEX protocols.

<!-- While earning their **user fee**, a liquidity provider that doesn't necessarily care about holding the NFTs for a specific collection. So they can still make profits from user fees by providing the liquidity for these arbitrage actions. -->

While it is true that the LP could choose to not provide liquidity and just take the arbitrage themselves, this requires **more time, attention, and tehcnical skill** than simply providing liquidity for trading.

## How to Arbitrage on ArtDEX

Lets go through examples of how you can arbitrage between ArtDEX and external markets.

### Example 1

**Situation**: The best offer on ArtDEX for NFT-A is **15 XTZ** and the floor price for NFT-A on objkt.com is **10 XTZ**.

**Cause**: A drop in the floor price on a larger external market causes ArtDEX pricing to be out of sync. 

**Action**: Big Brain User buys items on objkt.com for it's floor price of **10 XTZ**, and sells on ArtDEX for **15 XTZ**, gaining **5 XTZ** in the process.

**ArtDEX Benefits**: after the **15 XTZ** sale, the pool decreases its spot price by **5 XTZ** delta, and is now in line with the market.

### Example 2

**Situation**: The floor price on ArtDEX for NFT-A is **10 XTZ** and the best offer for NFT-A on objkt.com is **15 XTZ**.

**Cause**: A sudden increase in price on a larger external market causes ArtDEX pricing to be out of sync. 

**Action**: Big Brain User buys items on ArtDEX for it's floor price of **10 XTZ**, and sells on objkt.com for **15 XTZ**, gaining **5 XTZ** in the process.

**ArtDEX Benefits**: after the **10 XTZ** purchase, the pool increases its spot price by **5 XTZ** delta, and is now in line with the market.

*In real life, most opportunities will likely be taken at around 0.1 - 1 XTZ profit per trade. Expect arb-bots to hit the scene soon.*

## The Future of ArtDEX

While tail-arbitrage will be the most lucrative way to use ArtDEX at the beginning, the outlook changes as more ArtDEX-native releases lead to more liquidity on ArtDEX.

Creators can use ArtDEX trading pools as a lucrative way to earn residual income on their NFT collections. Creators can set aside a certain percentage for a Trade Pool on ArtDEX, and set a healthy User Fee of **5-15%**.

In this future case, ArtDEX will become the **primary** market for pricing this collection, and other markets will need to react to ArtDEX.