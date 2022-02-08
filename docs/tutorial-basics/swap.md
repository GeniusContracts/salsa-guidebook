---
sidebar_position: 1
---

# Swap

:::tip

Looking for your token? Use the Add Token document as a guide.

:::

## How To Swap

Swapping is the most common functionality used on SpicySwap. Swapping is simple: a user can exchange one currency for another. 

To begin a swap on the SpicySwap interface, locate the **From** label and click **Select...**

Then, choose the desired currency from the token selection menu.

Locate the **To** label, and repeat the same process.

:::tip

Once selected, your token balance will show up under the token symbol. Verify that this is correct before swapping.

:::

Once the tokens are selected, the interface will check if a pool exists for the selected tokens. If there is a pool, the data is loaded from the SpicySwap API. We are going to proceed assuming a pool exists.

Next, enter the desired amount to send to the contract by entering a number into the **From** box (decimals are OK). When a number is entered, the interface will automatically calculate the amount you will recieve in the **To** box.

Or, enter the desired amount to recieve in the **To** box, and the interface will automatically calculate the amount you will need to send in the **From** box.

Once the amounts are confirmed, the **Swap** button should light up. This means you are ready to swap. Click **Swap** and the Beacon Wallet connection will initiate a smart contract call to execute the swap. Once the swap is confirmed, the interface will show an alert at the bottom of the screen.

If a pool doesn't exist, the main button will be disabled and show a **No Reserves** message. In this case, liquidity needs to be added. 

## Slippage

When swapping, an important factor is the amount of slippage. During periods of high network traffic, it's possible that the price on the SpicySwap interface has changed before a transaction goes through. The **Slippage %** protects the user by setting a limit on how much the price can change before the trade is cancelled. Setting high slippage means trades will execute more often, but price changes can lead to a large difference from the expected outcome. Setting low slippage means a user is better protected against price changes, but may experience more failed trades as a result.  

## The Contract Call

On the SpicySwap protocol, most users will not directly call the core pool contracts. These core pool contracts are built to keep liquidity providers as safe as possible by limiting functionality to low-level math functions. Users will mostly interact with the SpicySwap protocol by calling the SpicySwap **router** contract. The router is what applies slippage, execution deadlines, and crafts the final contract call to the core pool contract. 

The SpicySwap router also holds a map of all pools and automatically handles pool discovery. Users will only have to update operators to the router contract, rather than to each individual swaps contract. The SpicySwap router is also **upgradable and forkable**. It can be used as a general template for interfacing with the core pool contracts. It is possible to build an external router contract with custom logic for interfacing into SpicySwap. This architecture increases the flexibility of the entire SpicySwap protocol, while keeping liquidity providers as safe as possible.

For advanced users, it is entirely possible to call the core pool contracts directly as long as it's done carefully. Be careful, not using the router contract can result in **loss of funds** if any math or logic is buggy. For integrators, calling directly to the contract will be the best way to build bots and custom logic on top of SpicySwap. Calling the core pool directly does not require updating operators, so it is the most gas efficient way to programmatically trade on SpicySwap. An SDK and set of sample contract code is on the roadmap to support integrations.  