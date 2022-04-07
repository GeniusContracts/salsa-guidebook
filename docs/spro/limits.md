---
sidebar_position: 2
slug: /limits
---

# SpicyPro Limit Orders

## Welcome to Limit Orders!

Limit Orders are a new part of our SpicyPro suite of features. With Limits, you may create and post swaps that will only execute when a certain price threshold is crossed.

Limit Orders are designed to mimic the functionality of classic centralized exchanges and orderbooks. We've created a specialized orderbook and interface for SpicyPro Limits.

Limit Orders can be posted for any pool, trading any token pair. Read the following information for things to keep in mind when using Limits.

<p align="center"><img src="/img/spro-lim-over.jpg" /></p>

## Contract Interactions

The SpicyPro Limit Orders contract is the core layer that holds all limit orders. Posting a Limit Order will generate a new order, then lock the Token In amount and Execution Bounty in the contract. Operators (or approvals) are updated as part of your transaction to enable this transfer.

Each Limit Order is a discrete unit. This means that each order is fully collateralized, and all funds necessary for the trade are locked at posting time.

Each Limit Order is free to be cancelled at any time.

Limit Orders have guaranteed price safety. Once you post, your order will never execute unless the trigger price is acheived and the correct Token Out amount is received.

Limit Orders may be executed by any user. On execution, the Bounty is paid to the executor and your trade will execute as defined at posting time. Executors cannot make any changes to your order.

Limit Orders are fully WTZ-based during initial launch, please wrap XTZ to use Limit Orders if you have no WTZ.

## DEX Considerations

Limit orders on a DEX like SpicySwap are a different in nature from classic limit orders on a centralized exchange (CEX). Keep the following information in mind when navigating SpicyPro Limit Orders.

### "Buy"/"Sell"

CEX orderbooks usually have a pre-defined primary and secondary token, but this is not the case on a DEX. SpicySwap is a fully dynamic token-to-token DEX, meaning that either of the paired tokens in a pool must be respected as potentially primary or secondary.

On the SpicyPro Limits interface, you'll notice we use the terminology "Token In" and "Token Out" to be clear about what will occur in the DEX contracts.

### Preferred Price

Similar to the considerations above, both prices in a pair must be respected as potentially primary or secondary.

In this case, we've created the preferred price concept. This simply means that for each price we prioritize one of the two prices. For all charts, tables, and metrics, we use the preferred price. You may use the inverted price when making limit orders, but sticking to preferred price will work for most users.

Currently, SpicyPro Limit Orders give first priority to USD price and second to WTZ price. If neither USD nor WTZ is in a pair we fall back to default, but most pairs use either USD or WTZ as an anchor.

Example: uUSD/WTZ will prefer USD per WTZ, while SPI/WTZ will prefer WTZ per SPI.

### Order Execution

SpicyPro Limit Orders are fully decentralized, meaning anyone can post or execute orders.

Executors play the role of completing orders by interacting with the core Limits contract with a bot.

Executors can not change your order at any time. The Limits contract always ensures that you receive the at least target amount stored in the contract.

Executors can make a profit by executing orders. Every order is required to have an Execution Bounty attached, to pay for blockchain fees. This bounty is sent to the executor when the trade completes. This is similar to the fee market architecture that Tezos uses for decentralized execution. In the same way, a higher Execution Bounty will lead to more timely execution.

The Execution Bounty is paid in WTZ.

This architecture was chosen so that Genius Contracts is not the single point of failure for order execution. GC will be running an execution bot, but we'd like to get more executors on board to improve platform scalability as a whole. Check out Genius Contracts Github to see our bot code!

## Fees, Slippage, and Price Impact

SpicyPro Limit Orders takes no extra fee, all you pay is the normal swap fee.

SalsaDAO Treasury takes a 0.1% hosting fee from the Execution Bounty before it is sent to the executor. This fee is also applied on order cancellation before the execution bounty is refunded.

With SpicyPro Limit Orders, you do not set explicit boundaries for slippage or price impact. If the price or slippage impact of your order is high enough that the amount out dips below the minimum, the execution will fail. This protects against any front-running or pool manipulation that may occur during execution.

When trading large amounts, your order may be delayed until the price increases or decreases enough to successfully fill it.

## How to Post

<p align="center"><img src="/img/spro-lim-order.jpg" /></p>

1. Choose your desired token pair to trade. Any pool works.

2. Verify that the token you'd like to lock in an order is reflected where the **Amount In** field is.

3. Select your **Trigger Price**. You may use the slider to select or enter a price. The interface automatically validates that the Trigger Price doesn't go out of bounds.

4. Verify the **Amount Out** contains the token and amount you desire.

5. Set your **Execution Bounty**. We've posted some guideline values, but any number works. Beware, if the Execution Bounty is too low, your order may be lower priority.

6. **Post** to immediately send your order to the engine. **Queue** if you'd like to make a few more orders.