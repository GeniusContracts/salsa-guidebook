---
sidebar_position: 2
slug: /artdex-qm
---

# Quickminter Guide

<p align="center"><img height="150px" src="/quickminter.png" /></p>

Welcome to **Quickminter**, a creator's best friend!

With Quickminter, you can mint new NFTs and place them in a **Sell** pool on ArtDEX in just one transaction!

## 1. Minting

:::tip 

Note! This minting form was inspired by <a target="_blank" href="teia.art">TEIA</a>

:::

<p align="center"><img src="/mint-page.png" /></p>

When you choose Quickminter, the first form you will encounter is the **minting form**.

*These instructions will be exactly the same for Deepminter.*

To begin, simply choose a title, discription, some comma-separated tags, a license, and a language.

All of these initial fields are **optional**, you can easily mint NFTs with no name/description, but they'll be harder to discover.

Then, if your work is **NSFW or has crazy flashing lights**, please tell your fellow Tezos users by checking the boxes. Accessibility is important for everyone!

The following fields have some restrictions and important notes.

### Editions

This field is the total amount of editions you'd like to mint. In a further step, you'll be able to choose the amount to send to the pool.

**The maximum is 10,000 and you cannot mint more editions later.**

### Legacy Royalties

In Legacy Royalties, you can set an amount for external marketplaces that support off-chain royalties. **This field was built to be supported on Objkt**.

On ArtDEX, we pay out **Creator Tips** on each trade. This tip percentage is set by $sDAO holders, and has a minimum of 2%. 

This is a subtle difference, but an important one, as we move forward on the path to building fully on-chain royalties.

### Artifact Types & Size Limits

The currently supported filetypes on ArtDEX can be found under the Artifact upload box.

**File Size Limit: 100mb**

**If your file is not an image type, you'll need to upload a cover image as well**

The cover helps us store a smaller thumbnail image that can be used to represent the NFT asset in wallets.

--

<p align="center"><img src="/uploaded-nft.png" /></p>

Now that your details are complete, use the **Upload & Review >** button.


## 2. Uploading

<p align="center"><img src="/upload-page.gif" /></p>

Once you arrive at this page, simply wait for the automated process to upload your IPFS data.

We use a similar IPFS setup to TEIA, leveraging <a target="_blank" href="https://nft.storage/">NFT.Storage</a> as our upload gateway.

Use the **Review** links to check your artifact, cover, thumbnail, and final metadata.

*Forgot a field? No problem, you can go back and modify your mint ant any step.*

If everything looks right, hit **Confirm** to move forward.

## 3. Configuring your Sale

<p align="center"><img src="/ipfs-done.png" /></p>

Once your mint is complete and all files are on IPFS, the mint form will be hidden. Use **Modify My Mint** to go back and re-upload.

<p align="center"><img src="/qm-sale.png" /></p>

Now all of the minting is complete, it's time to configure your sale. With Quickminter, we've made a super simple form with less options for configuration.

**Starting Price**: Your sale will start at this price.

**Max Price**: After every sale, the [price will increase](/artdex-pools#why-use-bonding-curves) from the Starting Price up to Max Price.

**Volatility**: This setting affects how fast the price moves in your sale. We recommend using **Lower**.

**How many?**: Choose # of editions you'd like to sell in the pool.

After you've entered these values, you'll see the expected profits for your sale at half-sellout (50%) and full-sellout (100%).

Use **Mint & Deploy** to add the transaction to your cart, then either go back ant mint again or **Open Cart** and execute the mint.

<p align="center"><img src="/qm-done.png" /></p>

--

That's it! Once your transaction is complete, go to **ArtDEX Home > My Stuff > My Mints** to find your new NFTs.

*(Metadata may take a minute to be indexed!)*