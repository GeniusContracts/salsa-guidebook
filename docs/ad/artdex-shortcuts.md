---
sidebar_position: 6
slug: /artdex-shortcuts
---

# QuickSweep, Offer, & List

<p align="center"><img src="/artdex-shortcuts.png" /></p>

ArtDEX offers **shortcuts** to traders looking to execute the most common transactions quickly. Our line-up of shortcuts:

## 1. QuickSweep
You can use **QuickSweep** to quickly purchase the lowest priced items from a collection.

<p align="center"><img src="/artdex-sweep.png" /></p>

The ArtDEX interface will search across pools the lowest priced items and calculate the best deal for sweeping the floor.

This shortcut is useful for **instant onboarding** into an NFT project, especially if you think prices will go up soon.

### QuickSweep Usage

<p align="center"><img src="/artdex-sweep-done.png" /></p>

Use the slider to select the number of NFTs you want, review the total, and click **Add Items**

### Why use QuickSweep?

On a classic NFT marketplace, sweeping the floor is not easy. With classic listing systems, most of the NFT liquidity will be concentrated around the floor price. This means that a sudden influx of users will create **liquidity shortages** at the new floor price, and interested users will have to wait for liquidity providers to **relist** NFTs at the correct price.

On ArtDEX, our **persistent NFT liquidity** reacts more quickly to market changes [via bonding curves](/artdex-pools#why-use-bonding-curves) meaning liquidity providers can safely list more NFTs at the same time. This means that there is no need to wait for liquidity providers to relist assets in the event of a sudden price increase. 

Thus, users can sweep NFTs faster on ArtDEX.

## 2. Collection Offer

**Collection Offer** is a shortcut for quickly making a new one-way trading pool that purchases NFTs from other users.

<p align="center"><img src="/artdex-cxn-offer.png" /></p>

If you have funds, but don't see your desired NFT collection trading on ArtDEX yet, this is a good way to get new NFTs.

:::tip 

Collection Offers are ArtDEX pools, meaning a new contract will be deployed. We recommend making one Collection Offer and reusing it when needed.

:::

:::caution 

Since this is a one-way trading pool, you cannot set a User Fee.

:::

### Collection Offer Usage

<p align="center"><img height="600px" src="/artdex-cxn-offer-done.png" /></p>

To use Collection Offer, input the number of items you want from this set. 

Then, you'll chose the price you'd like to pay. Use the **Floor Price** to get your NFTs faster.

You may configure a delta, similar to the process in [Create Pool](/artdex-pools#spot-price) section on parameters. 

Your offer price will **decrease** according to the delta every time a user sells an NFT into your new pool.

When you've chosen your desired parameters, click or tap **Estimate** to review and deploy your pool.

### Why use Collection Offers?

You can use these offers as a type of **NFT limit buy order**.

For example: let's say you think the floor price of a collection will drop from **30 XTZ** to **20 XTZ** in the future. On a classic NFT marketplace, you'd create an offer for **20 XTZ**.

The process on ArtDEX using pools is similar, you'd set the spot price at **20 XTZ** and drop some XTZ in the reserves.

The difference with ArtDEX: you can configure a **bonding curve & delta** that will help your pool react to an even deeper price drop. 

With a **5 XTZ** linear delta, your pool would purchase at **20 XTZ** then be able to buy the dip at **15 XTZ** if there is a major crash in the floor price.

On a classic NFT marketplace, you'd have to manage multiple offers and be attentive at all times to get your limit order right. 

**With ArtDEX, it's easier.**

## 3. List NFTs

**List NFTs** is a shortcut for making a new one-way trading pool that sells NFTs to other users.

<p align="center"><img src="/artdex-cxn-list.png" /></p>

:::tip 

Listings are ArtDEX pools, meaning a new contract will be deployed. We recommend making one Listing and reusing it when needed.

:::

:::caution 

Since this is a one-way trading pool, you cannot set a User Fee.

:::

### List NFTs Usage

<p align="center"><img height="600px" src="/artdex-cxn-list-done.png" /></p>

To use List NFTs, input the price you'd like other users to pay for your NFTs. Use the **Best Offer** to sell your NFTs faster.

You may configure a delta, similar to the process in Create [Create Pool](/artdex-pools#spot-price). 

Your pool's price will **increase** according to the delta every time a user buys an NFT from your new pool.

When you've chosen your desired parameters, click or tap **Estimate** to review and deploy your pool.


### Why use List NFTs?

Listings can be used as an **NFT limit sell order**.

For example: let's say you think the floor price of a collection will increase from **20 XTZ** to **30 XTZ** in the future. On a classic NFT marketplace, you'd create an listing for **30 XTZ**.

The process on ArtDEX using pools is similar, you'd set the spot price at **30 XTZ** and drop your NFTs in the reserves.

The difference with ArtDEX: is that you can configure a **bonding curve & delta** that will help your pool react to even higher price increases. 

With a **10 XTZ** linear delta, your pool would sell NFTs at **30 XTZ** then be able to sell even higher at **40 XTZ** if there is a major pump in the floor price.

**This is not an uncommon scene in the NFT space.** NFT collections may have one big pump and never go up again. If your aim is to sell high, you'll want to provide liquidity that reacts to market changes.

On a classic NFT marketplace, you'd have to manage multiple offers and be attentive at all times to get your limit orders right. 

**With ArtDEX, it's easier.**

--

Congratulations. You are now equipped with all the knowledge needed to efficiently trade and provide liquidity on ArtDEX!

Now, lets move into the advanced theory behind [arbitrage on ArtDEX](/artdex-arbitrage).