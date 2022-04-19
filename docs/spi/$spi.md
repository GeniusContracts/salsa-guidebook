---
sidebar_position: 9
slug: /SPI
---

# SPI Token & Fee Farming

<p align="center"><img style={{height: "100px"}} src="/img/sswap-token.png" /></p>

## What is Spice Fee Farming?

Another one of Spicyswap’s unique features is the SPI utility token. As mentioned in [Add Liquidity](/addliquidity), a 0.2% fee on all swaps is paid to liquidity providers, but an additional 0.1% swap fee is paid out to the SPI fee farms. With the SPI token, users can farm an additional 0.1% on all swap fees. This is called Spice Farming.

Fee farming with SPI/WTZ SSLP tokens is a unique part of Spicyswap’s value proposition as it essentially allows users to develop unique farming strategies where they can collect fees on a pair without having to be exposed to the volatility of the underlying assets in that pair. 

In other words, users get to collect fees on a pair they are not themselves adding liquidity to which effectively allows them to avoid the impermanent loss that comes with being a liquidity provider. This also opens up the door to conservative fee farming strategies where users can remain in pairs that show consistent, yet steady volume activity, or users can be more adventurous and chase high volume liquidity (on newly launched tokens, e.g.).

With the release of V2 Spice Farms, single-sided SPI has been added as a staking token. The overall 0.1% fee is split, with 2/3 going to Spice LP Farms and 1/3 going to Single Spice Farms. The difference in rewards is due to higher risks while Spice LP Farming compared to Single Spice.

## V1 Deprecation Notice

These instructions are based on the V2 Spice Farms, which include LP and single-sided staking. Rewards have stopped accruing to V1 farms and you can manage your V1 Spice Farm positions on the [User Dashboard](https://spicyswap.xyz/#/dashboard)

## Getting Started

There are two types of Spice Farms available to stakers. You may stake SPI/WTZ SSLP tokens or single-sided SPI tokens. 

To begin Spice LP Farming, you will need to first mint SPI/WTZ SSLP tokens by adding liquidity to the SPI/WTZ pool. (For instructions on how to add liquidity, see [Add Liquidity](/addliquidity).)

To begin Single Spice Farming, simply purchase the tokens by swapping XTZ on [SpicySwap](https://spicyswap.xyz/#/app?tool=swap&tokenLeft=xtz&tokenRight=KT1CS2xKGHNPTauSh5Re4qE3N9PCfG5u4dPx:0)

Spice Fees, and the associated APRs can be viewed on the Analytics page at the far right of the ‘Pools’ table.

![alt text](/img/spicefees.png)

## Finding the Farm Page

After minting SPI/WTZ SSLP tokens, users will navigate to the Spice Farm page either by navigating directly to the Spice Fee Farm page by clicking ‘Farm’ on the Spicyswap landing page in the 'Farming Opportunities' section:

![alt text](/img/farmopportunities.png)

or by opening up Spicyswap and toggling on the ‘Farm’ option:

![alt text](/img/togglefarm.png)

## Select a Pair to Farm

Once on the Spice Fee Farm page, you can select which pool to farm fees from by clicking the ticker icon and selecting tokens from the drop down bar:

![alt text](/img/farmpagev2.jpg)

## Stake SSLP or SPI

After selecting the pair you wish to farm fees on, use "Add" on either Spice LP or Single Spice farms to open the staking form. The form will open with your desired staking token and SpicySwap pool pre-selected.

![alt text](/img/farmpageall.jpg)

Once the screen is open, manually input an amount of either SPI/WTZ LP or SPI tokens.

![alt text](/img/farmaddspi.jpg)

If everything looks fine, click ‘Stake’:

## Claiming Fee Rewards

Once SSLP or SPI tokens have been staked in the desired pair, the amount of unclaimed rewards to be harvested will appear on the interface. To claim Spice Fee Farm rewards, click ‘Claim LP Tokens’:

![alt text](/img/farmclaimv2.jpg)

## Unstake SSLP or SPI

If you ever wish to unstake your SPI/WTZ SSLP or SPI tokens from Spice Farms, use "Remove" on either Spice LP or Single Spice farms to open the unstaking form

![alt text](/img/farmremovespi.jpg)

## Quick Manage Bar

At the bottom of the Spice Farms page, there is a section that displays all of your current staking positions. Use this bar to jump from farm to farm quickly and instantly stake or unstake.

![alt text](/img/farmmanage.jpg)

## Recipes

Use Recipes to quickly enter and exit Spice LP Farms without managing liquidity. For example, you may stake into Spice LP farms with just XTZ or unstake from Spice LP Farms directly to XTZ. SpicyPro Recipes handles the steps in between automatically. For more Recipes, check [Recipes](/recipes)

:::tip Note!

Important to note is that claimable Spice Fee rewards do not update until SSLP is either minted or burned for the pair one is staking against. 

For example, if you are staking SPI/WTZ SSLP in the sDAO/WTZ pool, the claimable rewards will not update until more sDAO/WTZ SSLP is minted or burned, no matter the amount. Rewards are paid out in SSLP tokens of the pair you are staking against.

With V2 of Spice Farms, there is now a small subsidy taken from the fees held in the contract. The Spice Farm contract will now forcefully update the pool rewards on every staking action, via a subsidized SSLP token burn. This action will update the rewards for all stakers participating in the selected pool. 

This closes a small loophole that existed in the V1 Spice Farms due to the way rewards are pushed from SpicySwap.

:::