---
sidebar_position: 1
slug: /matter-defi
---

# Introducing Matter DeFi

<p align="center"><img src="/img/mttr-live.png" /></p>

Matter DeFi is a yield farming platform aimed to incentivize providing liquidity on [Spicyswap DEX](/spicyswap). Users may stake SpicySwap LP Tokens to earn the protocol token MTTR. 

Matter DeFi's flagship feature is the contract-level automatic buyback and burn of the MTTR token. Automatic buyback ensures that there is lasting buy pressure for MTTR, leading to truly sustainable yields. All fees generated on staking and unstaking are used to buyback the MTTR token on SpicySwap.

The automated buyback and burn is a feature only possible through integration with the SpicySwap DEX Protocol. Protocol integrations at the contract level, like automated DEX actions, will help usher in a new phase of Tezos DeFi.

## What is Matter Core?   

<p align="center"><img style={{height: "200px"}} src="/img/mttr-token.png" /></p>

Matter Core is main module on Matter DeFi - it is a farming platform that incentivizes providing liquidity to Spicyswap. By staking Spicyswap liquidity pool tokens (SSLP), liquidity providers are rewarded MTTR tokens by the protocol.

## Sustainability through Burn Mechanics

The hallmark feature of Matter Core is its automatic buy-back-and-burn mechanics. Staking and unstaking SSLP in a Matter Core farm each incur a 5% fee respectively - 5% fee on the way in, 5% fee on the way out. These fees get converted into WTZ which is then used to buy back MTTR from the WTZ/MTTR pool. To perform this operation, the contract utilizes the platforms own Heartbeat Oracle to prevent any front-running on prices. The bought back MTTR gets burned, and this helps to keep the tokenomics deflationary. 

Thanks to its tokenomics and integrations, the value proposition of Matter Core is that it is a genuinely sustainable and long-term farming solution because it is designed to keep LP service rewards stable, or otherwise steadily increasing as liquidity is drawn into Spicyswap.

<p align="center"><img src="/img/matterdiagram.png" /></p>

## Systematic Integration with Spicyswap & the Upshot for SPI  

<p align="center"><img style={{height: "50px"}} src="/img/mttr-token.png" /><img style={{height: "50px"}} src="/img/sswap-logo-LP.png" /></p>

An important trade off with Matter Core's deflationary tokenomics is that it requires us to rethink the "mega-APR" approach to farming incentives implemented by other platforms. Arguably Matter DeFi's more "conservative" approach will eventually prove itself to be a more successful farming model as it leverages systematic integration with the larger SalsaDAO ecosystem. 

Take for example how Spice farming feeds off of Spicyswap transaction volume, i.e. volume on Spicyswap leads to more fees for Spice farmers to harvest, as 0.1% of swap fees go into Spice farms. (For more information on Spice Farming, see [Spicyswap Docs, section 1.9](/SPI).) 

The fact that Matter Core is integrated with Spicyswap therefore means that the automatic buy-back-and-burn mechanics used under the hood automatically increases the volume of Spicyswap since all of the transactions on Matter Core are routed through the Spicyswap DEX. Thus, Matter Core not only promotes more liquidity on Spicyswap, but it promotes more volume as well, which beneifts users who farm with the SPI utility token - users who may or may not be direct users of Matter Core itself. 

Ultimately we believe this is the kind of systematic financial and social compounding we need to ensure the success of Tezos DeFi to come.

## Watch the Burn

The total amount of MTTR emitted to MTTR burned through buy backs is displayed at the top of the Matter DeFi homepage. (Be sure to follow the [Matter Burn Bot](https://twitter.com/MatterBurnBot) on twitter to stay up-to-date with burns in real time!)

The overall goal is for "Total Burnt" to always be above "Total Emissions". If this is true, then we can say with certainty that MTTR emissions are not contributing to inflation or imbalanced selling pressure.

<p align="center"><img src="/img/matterburnstats.png" /></p>
