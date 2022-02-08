---
sidebar_position: 2
---

# Manage Liquidity

## Overview

Each SpicySwap pool holds 2 FA-standard tokens. 

## Managing Liquidity

On the SpicySwap interface, a user will always be able to add liquidity to any two FA-standard tokens. If a pool does not exist, the button will show **Create Pool**, otherwise it will show **Add**.

Executing **Create Pool** will deploy the pool contract and the initial liquidity will be added, in one contract call. This transaction will cost more in transaction fees due to the origination of the contract. Please be sure to check the transaction fee when creating a pool.

To add liquidity, enter the desired amount for the first or second currency. The interface will automatically calculate the optimal value for the other currency. At the bottom, the interface will show the estimated amount of liquidity tokens recieved. The minimum amount of liquidity to create a pool is 1e-15, which is burnt on creation. When ready, execute **Add**.

To remove liquidity, loocate your balance for the pool nn the right-hand side, then enter the desired amount to remove. The interface will automatically calculate the estimated amount of each token that will be recieved. When ready, execute **Remove**.

## Spicy Liquidity Pool Tokens

Whenever liquidity is added, Spicy Liquidity Pool tokens are minted and sent to the user's address. These tokens represent the user's share in the pool, and each pool has a unique token. Whenever a trade occurs, a 0.2% fee is charged to the transaction sender. This fee is distributed to all LPs in the pool upon completion of the trade. To retrieve the underlying liquidity, plus any fees accrued, a user must "burn" their Spicy LP tokens, exchanging them for their portion of the liquidity pool.

Spicy LP tokens have 18 decimals and are fully FA2-compliant, this means they can be sold, transferred, or integrated in other projects.