---
sidebar_position: 6
slug: /rationale-wtz
---

# 1.5.1 Rationale for WTZ

    Why WTZ?

The token standard for XTZ itself makes baking Tez while participating in DeFi difficult. There is at least one Tezos DEX (Quipuswap v1.2) that uses XTZ for liquidity providing, and which allows users to manually manage the delegation of their Tez for baking purposes. This model however has proven to be vulnerable to a unique [exploit](https://docs.google.com/presentation/d/1gYiVSpShYd0xSAVYWOvzGC8bMKBCG1tSUFHBzvdG4v4/mobilepresent?slide=id.p) related to claiming rewards and an option to veto selected bakers. Another design, Ctez, has been built to circumvent such issues by using personal collateral vaults that mint a user their own synthetic asset (Ctez) which algorithmically keeps a peg to the price of XTZ. Vault creators are able to select a baker of their choice, allowing them to use Ctez in DeFi while their XTZ remains in the vault baking. However, this design arguably involves more complexity than the average DeFi user cares to deal with, as it requires one to constantly monitor price targets which put their funds at risk of liquidation and which incurs large amounts of slippage at times (between XTZ and Ctez).

    WTZ Contract - KT1PnUZCp3u2KzWr93pn4DD7HAJnm3rWVrgn

WTZ uses a contract written by Codecrafting Labs (creators of [Cruncy.network](https://app.crunchy.network/#/wtz)).

![alt text](/img/wtzcrunchy.png) 
(Interface on [Cruncy.network](https://app.crunchy.network/#/wtz))

The contract allows users to:

    1) mint WTZ to their wallet by depositing XTZ, or, conversely

    2) burn WTZ from their wallet, redeeming XTZ back from the contract. 

By depositing XTZ, users can mint WTZ at a rate of ~1XTZ:1WTZ; by burning WTZ, users effectively withdraw XTZ at a rate of ~1WTZ:1.06XTZ. The exchange rate is determined by the fact that all XTZ deposited into the contract is being delegated to a baker, earning ~6% annual compounding interest. Put another way, since all XTZ that is deposited in the contract is delegated to a baker, any 1WTZ is redeemable for 1XTZ + any baking rewards that have accrued.

The WTZ contract is a public good that anyone is free to come in and out of at any time, and so long as any 1WTZ is being minted for every 1XTZ deposited, or, conversely, so long as any 1WTZ is being redeemed for 1.06XTZ, the peg will always be a true “1:1” without any slippage (or negligible). 

:::tip Note!

To be more exact on the swap ratio, for minting WTZ there is initially a slight discrepancy such that 1xtz = ~0.99WTZ. And for burning WTZ, since all deposits of XTZ are accruing baking rewards at a rate of ~6% on an annual basis, the projected ~1WTZ:1.06XTZ ratio is something that becomes more concrete as the WTZ contract approaches a full year of its existence.

:::

    Earn Staking Rewards While You DeFi

In sum, WTZ is designed to be a simple solution for baking Tez while participating in DeFi. And though users can mint WTZ/redeem XTZ manually on Crunchy, Spicyswap has a built in XTZ→WTZ router! This means that users have the option to either use WTZ that they have manually swapped, or they can simply select XTZ for all their DeFi needs, letting the Spicyswap XTZ→WTZ router take care of the wrapping business under-the-hood. With the XTZ→WTZ routing option, users have less to worry about! 

So, again, what does it mean to use XTZ “via” WTZ? It’s simple: select XTZ as you normally would for your swaps/liqudity, but just know that behind the scenes your Tez is being wrapped/unwrapped as WTZ through the WTZ router. This way, you can easily use XTZ on the Spicyswap DEX smoothly, any Tez you put into liquidity will always be earning baking rewards!

![alt text](/img/xtzviawtz.png)