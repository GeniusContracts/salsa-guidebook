---
sidebar_position: 3
slug: /svaults
---

# SpicyPro SVaults

## Welcome to SpicyPro SVaults!

<p align="center"><img src="/img/spro-v-over.jpg" /></p>

Spicy Vaults (SVaults) are a new part of our SpicyPro suite of features. This is a cross-project integration, combining the power of SpicySwap's unique flash loans with CDP-based lending dApps, such as Youves or Kolibri.

## Contract Interactions

The SpicyPro SVault Deployer contract is where SVaults are created. Users can make any amount of personal SVaults, but the interface will only show up to 10 vaults for general performance reasons. As we scale up, this limit will be increased.

Once the SVault is deployed, users will not need to interact with any GC contract but their SVaults. SVaults are fully owned by the creator, and GC cannot execute actions on users' SVaults.

SVaults are currently built for Youves. After the initial release, GC will be developing a Kolibri-connected SVault contract which will replicate the SVault experience for Kolibri users.

Most normal vault actions simply proxy the request from the user to the SVault to the underlying Youves vault (yvault). Withdraw, Mint, Burn, and SetDelegate are the proxied calls. Users may deposit XTZ directly to their yvault, so there is no need to proxy XTZ deposits.

## Classic Operations

As denoted above, the classic functions that CDP-based vault offer are: deposit/withdraw collateral and mint/burn synthetic assets. On SVault initialization, a new yvault will be created using the Youves uUSD engine. This yvault is linked to your SVault, and only your SVault has permissions to call entrypoints on the yvault (except deposit). You must send 1xtz to initizlize your new yvault.

For maximum security the SVault is built to hold no assets itself, so please do not send any funds directly to the SVault. Always use the proxied entrypoints so that funds reach the yvault successfully.
## Pro Operations

The main reason that SVaults exist is to enable flash loan usage for end-users. Flash loans are a type of swap where funds are taken from Spicy pools at the beginning of the transaction, used, and then paid back at the end. This is in contrast to classic DEX swapping where a user sends funds to a liquidity pool to recieve other assets. Flash loans are currently only available on SpicySwap.

For yvault-based SVaults, the WTZ/uUSD SpicySwap pool is used for all flash loans. This means that the amount users can flash is limited by the amount of liquidity in that pool.

Flash Loan operations require 0 funds from the requestor, and send 0 funds back. Flash loan tools are quick ways to manipulate your collateral ratio and XTZ exposure level.

### Pro Operation: Add Leverage

Add Leverage is an action that allows a user to increase their exposure to XTZ in one click. Normal leveraging of CDP vaults requires multiple mint-and-swap actions, which is cumbersome for users and costs more in gas and fees. With SVaults, users can instantly increase the amount of XTZ in their underlying yvault at no cost other than gas fees for one transaction.

On Add Leverage execution, your SVault will flash the desired amount of WTZ from SpicySwap, unwrap it via the WTZ Swap contract, then deposit the XTZ in your yvault. In the same transaction, your SVault will then mint uUSD and transfer it directly to SpicySwap to repay the flash loan. No funds are necessary to execute this action. Fees for the flash loan, unwrapping, and minting will have an effect on the final collateral ratio of the vault.

Leveraging is always a risk, please use care. Treat all flashed funds as if you own them.

### Pro Operation: Self-Liquidation

Self-Liquidation is an action that allows a user to decrease their uUSD debt in one click. Self-Liquidation instantly pays back some or all of your debt via flashed uUSD, then withdraws XTZ collateral from the yvault to pay back the SpicySwap pool. This action is used to instantly de-risk or de-leverage in times of high volatility.

Self-Liquidation also can be used to instantly increase collateral ratio, to keep the vault safe from liquidation. This applies mainly when you are doing something other than leverage with your minted uUSD (providing liquidity, staking, farming yield, HODL, etc). Instead of taking the time to visit every dApp to retrieve uUSD, users can instantly act upon their collateral ratio without actually holding uUSD. Users must increase their collateral ratio as fast as possible when approaching liquidation.

*Remember: one can Self-Liquidate their whole yvault OR just Self-Liquidate a portion of their debt.*

## Extending SVaults With "do()"

Each SVault contains an opt-in entrypoint named do(). This is an entrypoint that sits in each SVault which takes an arbitrary lambda and executes the code. This is a feature for very advanced users and should be used with care. Only the owner can call do() with a lambda, so SVault security is still upheld.

Users must opt-in to use do() by calling enableDo() one time. This opt-in is non-reversible so please use care.

Contract wizards can use do() to build on SVaults. For example, an SVault could execute a custom set of transactions on Mint, like providing LP. An SVault could also attempt to auto-normalize its yvault to a targeted collateral ratio for safety. The possibilites are truly endless, especially when combining Pro Operations and do().

Genius Contracts will also be developing boilerplate lambdas that users may do() to enable more advanced actions without needing smart contract knowledge. Long term, we expect that do() will be enabled on many SVaults.

## How to Manage SVaults

### Spawn SVault

<p align="center"><img src="/img/spro-v-spawn.jpg" /></p>

1. Click **New Vault** to request a new SVault contract from the deployer. The interface will load up to 10 SVaults.

### Initialize SVault

<p align="center"><img src="/img/spro-v-init.jpg" /></p>

1. Click **Initialize** to create the underlying YVault on the Youves Engine. This operation requires 1 XTZ, which will be deposited into the YVault.

### Proxied Interactions

<p align="center"><img src="/img/spro-v-proxy.jpg" /></p>

These are the basic Youves Vault actions that are simply sent to the underlying YVault. Deposit, Withdraw, Mint uUSD, and Burn uUSD all work exactly as they would on Youves. Read Youves docs to understand YVaults and CDP-based lending systems.

### Add Leverage

<p align="center"><img src="/img/spro-v-addlev.jpg" /></p>

1. Choose your desired amount of XTZ leverage to add.

2. Verify that your vault is staying over the 300% Collateralization Ratio limit.

3. Note your Liquidation Price. Adding Leverage is a risky action.

4. Execute by clicking **Add Leverage**.


### Self-Liquidate

<p align="center"><img src="/img/spro-v-self-liq.jpg" /></p>

1. Choose your desired amount of uUSD Debt to liquidatr.

2. Verify that your vault is staying over the 300% Collateralization Ratio limit.

3. Note your Liquidation Price. Adding Leverage is a risky action.

4. Execute by clicking **Add Leverage**.