---
sidebar_position: 8
slug: /new-pool
---

# Creating a New Liquidity Pool

## Custom Pools

Spicyswap is unique in that any user can add any Tezos based FA token to the list of Spicyswap supported assets, and likewise, any user can create a liquidity pool for any arbitrary pair of tokens that have been added. Both FA1.2 and FA2 tokens are fully supported.

If a pool for the pair you wish to add liquidity for has not yet been created, when you approve the ‘add’ transaction, you will effectively be creating the pool for that pair. This will require a one-time storage fee of around 4-6 XTZ.


## Adding a New Tokens & Pool

1. To add a new token to the list of Spicyswap supported assets, simply click on the token ticker icon, select ‘Add’ at the top of the drop down bar.

![alt text](/img/addpool.png)

2. This will generate a new pop-up where you will then manually paste the token contract address into the text box. You should also add the token ID if it applies. Once you’ve input the contract address and token ID, click ‘Add’ directly below the token ID text box. After doing so, the ticker and token symbol should then appear. To remove, click ‘Remove’.

![alt text](/img/addtokenaddress.png)
![alt text](/img/removetoken.png)

Once your new tokens have been added to the Spicyswap token list, to add liquidity for a pair with your a token, follow the instructions in for adding liquidity.