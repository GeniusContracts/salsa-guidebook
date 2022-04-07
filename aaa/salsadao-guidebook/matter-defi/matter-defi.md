---
sidebar_position: 1
slug: /matter-defi
---

# 2.1 What is Matter DeFi Core? 
    
    What is Matter DeFi Core?   

Matter DeFi Core is one of the auxiliary dApps of the SalsaDAO ecosystem - it is a farming platform that incentivizes providing liquidity to Spicyswap. By staking Spicyswap liquidity pool tokens (SSLP), liquidity providers are rewarded $MTTR tokens by the protocol.

    Sustainability through Burn Mechanics

The hallmark feature of Matter DeFi is its automatic buy-back-and-burn mechanics. Staking and unstaking SSLP in a Matter DeFi farm each incur a 5% fee respectively - 5% fee on the way in, 5% fee on the way out. These fees get converted into WTZ which is then used to buy back MTTR from the WTZ/MTTR pool. To perform this operation, the contract utilizes the platforms own Heartbeat Oracle to prevent any front-running on prices. The bought back MTTR gets burned, and this helps to keep the tokenomics deflationary. 

 Thanks to its tokenomic design, the value proposition of Matter DeFi is that it is a genuinely sustainable and long-term farming solution because it is designed to keep LP service rewards stable, or otherwise steadily increasing as liquidity is drawn into Spicyswap.

Here is a diagram of the mechanics (see more on the FAQ [here](https://matterdefi.xyz/#/help)):

![alt text](/img/matterdiagram.png)

    Systematic Integration with Spicyswap & the Upshot for $SPI  

An important trade off with Matter DeFi's deflationary tokenomics is that it requires us to rethink the "mega-APR" approach to farming incentives implemented by other platforms. Arguably Matter DeFi's more "conservative" approach will eventually prove itself to be a more successful farming model as it leverages systematic integration with the larger SalsaDAO ecosystem. 

Take for example how Spice farming feeds off of Spicyswap transaction volume, i.e. volume on Spicyswap leads to more fees for Spice farmers to harvest, as 0.1% of swap fees go into Spice farms. (For more information on Spice Farming, see [Spicyswap Docs, section 1.9](/$spi).) The fact that Matter DeFi is integrated with Spicyswap therefore means that the automatic buy-back-and-burn mechanics used under the hood automatically increases the volume of Spicyswap since all of the transactions on Matter DeFi are routed through the Spicyswap DEX. Thus, Matter DeFi not only promotes more liquidity on Spicyswap, but it promotes more volume as well, which beneifts users who farm with the $SPI utility token - users who may or may not be direct users of Matter DeFi itself. 

Ultimately we believe this is the kind of systematic financial and social compounding we need to ensure the success of Tezos DeFi to come.

    Watch the Burn

The total amount of $MTTR emitted to $MTTR burned through buy backs is displayed at the top of the Matter DeFi homepage. (Be sure to follow the [Matter Burn Bot](https://twitter.com/MatterBurnBot) on twitter to stay up-to-date with burns in real time!)

![alt text](/img/matterburnstats.png)

