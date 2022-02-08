---
sidebar_position: 1
---

# Integrations

:::caution

Under Construction!

:::

SpicySwap was built with integrations in mind. There are 3 levels of integrations into the SpicySwap protocol: contract level, token level, or interface level.


## Token Level Integration

Token level integration is about using SpicySwap's LP tokens in an external product. Spicy LP tokens are FA2-stamdard with 18 decimals for high compatibility. These LP tokens can be used for yield farming, or other token locking products. This is a classic way of incentivizing liquidity in AMM pools, and there will be a number of farms on SalsaDAO using Spicy LP as the staking currency.

## Contract Level Integration

Integrating with SpicySwap at the contract level means sending a contract call into SpicySwap from an external contract. External contracts can call either the SpicySwap **router** or **core pool** contracts to execute DEX actions. Calling the router contract is simpler, but it is more efficient to call directly into the core pool contracts. The SpicySwap router can be used as a template to build contract level interfaces into core pools.

Integrating at the contract level is the most powerful way to use SpicySwap's functionality as a building block. On SpicySwap, developers can implement automatic buyback mechanisms for fair farming, implement cross-DEX arbitrage, use flash swaps, and more. Combining contract level integration with the on-chain time-weighted price average (TWAP) can enable dynamic interactions that change based on token price.

## Interface Level Integration

Long term, there will be an SDK released to help front-end developers build web interfaces into SpicySwap. This will allow DEX actions like swapping and managing liquidity to be available outside of the SpicySwap interface. This will be an important tool when creating Spicy-integrated projects or farms. More information will be released once SpicySwap hits mainnet.