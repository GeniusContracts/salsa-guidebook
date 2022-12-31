---
sidebar_position: 4
slug: /artdex-pools
---

# Creating Pools

:::caution 

Each ArtDEX pool is it's own contract. We recommend that users only create 1-2 pools in a collection and modify parameters when necessary.

:::

## What is an ArtDEX Pool?

<p align="center"><img src="/artdex-nft-xtz.png" /></p>

User-created pools are the backbone of the ArtDEX protocol. These pools act as automated market makers (AMMs) for NFT liquidity, meaning they can facilitate trades on the owners behalf, based on predefined parameters.

Providing liquidity in an ArtDEX pool is similar to providing liquidity in a token DEX pool. Other users will be able to come to ArtDEX and execute trades against your pool at any time. One major difference is that ArtDEX pools are **personal**, rather than shared. 

Token DEX liquidity pools are made up of many different users' funds in one large pool. ArtDEX is made up of **many pools**, each owned by a different user. With the help of the **ArtDEX Interface** to aggregate all of these pools, the end result is nearly the same. 

In summary, ArtDEX's pool-based system is a concept similar to liquidity pools in token DEX protocols. Now that we've gone over the theory of ArtDEX pools, lets create one.

<p align="center"><img src="/artdex-create-pool-btn.png" /></p>

To get started, visit a collection market page and click or tap **Create Pool**.

## Pool Type

<p align="center"><img src="/artdex-create-pool.png" /></p>

Now that we've opened the pool creation form, the first thing to do is pick what type of pool you'd like to make. This **pool type** defines the type of liquidity you'll be adding to ArtDEX.

### Buy NFTs with XTZ

The first type is the Buy Pool. When making a Buy Pool, you'll **deposit XTZ** for the purpose of purchasing others' **NFTs**. 

This means that other users will come into the ArtDEX interface and sell their NFTs to your pool.

This pool type can also be considered a **standing offer**.


### Sell NFTs for XTZ

The second type is the Sell Pool. When making a Sell Pool, you'll **deposit NFTs** for the purpose of selling them for **XTZ**. 

This means that other users will come into the ArtDEX interface and buy NFTs from your pool.

This pool type can also be considered a **listing**.

### Deposit NFTs & XTZ

The third, and most powerful pool type is the **Trade Pool**. With a Trade Pool, you'll **deposit both NFTs and XTZ** to allow trades in both directions. 

This means that other users will come into the ArtDEX interface and either buy NFTs from your pool, or sell NFTs to your pool.

With this pool type, you can set a **user fee** that is paid to you after every trade.

### Moving On

Depending on the pool type, some options may not be available in the form. **From here on we will be assuming that the Trade Pool type was chosen.**

Once the pool type is chosen, its time to set the pool parameters.

## Spot Price

<p align="center"><img src="/artdex-spot-price.png" /></p>

Spot Price is the **most important** parameter for your pool, as it sets the price that users will **pay or receive** upon trading with your pool.

If **selling NFTs** to your pool is allowed, the final sell price will be exactly the spot price.

If **buying NFTs** from your pool is allowed, the final buy price will be exactly the spot price plus one delta stage (if it exists).

*The buy price is always one delta stage higher to avoid potential arbitrage opportunities arising from buying and selling in the same transaction. [[Source]](https://github.com/sudoswap/lssvm/blob/main/src/bonding-curves/LinearCurve.sol)*

Choosing the spot price is important, especially if the collection is actively traded on other marketplaces. You'll want to set the initial spot price close to the price available on external marketplaces, to decrease immediate arbitrage opportunities.

<p align="center"><img src="/artdex-spot-price-quick.png" /></p>

If pools for this collection already exist on ArtDEX, the floor price and highest offer price will be loaded automatically. Click either price to use it as your spot price.

**To sell NFTs faster**, choose a price closer to the highest offer. 

**To buy NFTs faster**, choose a price closer to the floor.

If you are releasing an NFT collection on ArtDEX, you have more freedom as this spot price will set the baseline price for the majority of your collection's NFT liquidity. This means there will be no arbitrage opportunities in external markets.

Once the spot price is chosen, its time to decide on the bonding curve and delta.

## Configuring Delta

<p align="center"><img src="/artdex-delta.png" /></p>

Once you've chosen the initial spot price, you can choose a **bonding curve and delta** that will modify the spot price after each trade. 

We currently offer the Linear and Exponential bonding curves, with more curves under development.

**Linear**: Changes price by a set number of XTZ after each trade.

**Exponential**: Changes price by a certain percentage after each trade.

When using bonding curves:

**After an NFT is bought from your pool**, the spot price will generally go up. 

**After an NFT is sold to your pool**, the spot price will generally go down.

## Why use bonding curves?

<p align="center" ><img height="200px" src="/shutterstock_2097520054.jpg" /></p>

Bonding curves on ArtDEX pools are key to enabling **persistent NFT liquidity**. 

When providing liquidity for automated trading, bonding curves help your pool **react to changes in the market**, without needing user intervention.

**For example**: let's say you wanted to provide liquidity on ArtDEX for NFT-A at **50 XTZ**, because you see the floor price on a larger market at **50 XTZ.** 

<p align="center"><img height="200px" src="/artdex-bond-1.png" /></p>

One day later, the project releases some news that leads to heavy demand for NFT-A, and the floor price is pushed up to **70 XTZ**.

Without a bonding curve, your pool can't react to the changes in the market, and the price will stay at **50 XTZ**. This means that other users will profit from arbitrage, purchasing your mispriced NFTs at **50 XTZ** and selling them on a more expensive market.

<p align="center"><img height="200px" src="/artdex-bond-2.png" /></p>

In this case, you could have configured a **bonding curve** that would change the price in the pool automatically after each trade. 

With a bonding curve configured, users purchasing from your pool would have caused the spot price to **increase** by a certain amount of XTZ.

Choosing a linear curve and 10 XTZ delta in this case, would have meant that this pool was rebalanced to the correct price in **just two trades**.

<p align="center"><img height="200px" src="/artdex-bond-3.png" /></p>

There may still be a small arbitrage opportunity, but your pool automatically follows the market on its bonding curve to minimize arbitrage.

The interaction of bonding curves, spot prices, and external NFT markets creates an opportunity to safely earn **more trading fees** from arbitrageurs that trade across marketplaces.

Arbitraguers are important to any trading ecosystem, but the arbitrage opportunity needs to be kept in check with bonding curves.

Configuring a bonding curve on your pool is important for providing any long-term NFT liquidity. 

## User Fee

<p align="center"><img src="/artdex-user-fee.png" /></p>

If you are creating a **Trade Pool**, feel free to set an extra fee that traders will pay directly to you when interacting with your pool.

We recommend a fee closer to 1-2% generally, and 5-15% when releasing a new collection on ArtDEX.

Following the above discussion on bonding curves, the user fee is the **premium** that potential arbitrageurs will pay pool owners to profit from arbitraging price changes.

[Read more on the topic of arbitrage on ArtDEX.](/artdex-arbitrage)

## Deposit Assets

Once you've chosen your desired parameters, it's time to choose the assets to deposit into your pool.

### Deposit NFTs

<p align="center"><img src="/artdex-choose-nft.png" /></p>

**If buying NFTs from your pool is allowed**, you may now choose which NFTs to lock in your pool.

### Deposit XTZ

<p align="center"><img src="/artdex-choose-xtz.png" /></p>

**If selling NFTs to your pool is allowed**, you may now choose how much XTZ to lock for trading.

## Estimator

We're almost there! Once you are finished choosing parameters for your pool, click **Estimate >** to see how much buying & selling will cost in your new pool.

<p align="center"><img height="600px" src="/artdex-estimate.png" /></p>

Pulling the sliders will update the graph and show an estimate of total costs to future users.

Use the estimator to confirm that all of your parameters are correct.

<p align="center"><img src="/artdex-create-finalize.png" /></p>

Congrats! It's now time to create your pool using the ArtDEX Deployer. Click **Create** when ready.


:::tip 

This will create a new smart contract, expect the transaction costs to be around 2-3 XTZ.

:::

Your new pool contract will be automatically added to the ArtDEX interface for other users to trade with.

Now that you've created a pool, let's learn [how to change its parameters](/artdex-modify).