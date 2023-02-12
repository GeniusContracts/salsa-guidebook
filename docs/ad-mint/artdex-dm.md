---
sidebar_position: 3
slug: /artdex-dm
---

# Deepminter Guide

<p align="center"><img height="150px" src="/deepminter.png" /></p>

Welcome to **Deepminter**, every option is here!

With Deepminter, you can mint new NFTs and customize a **Sell** or **Trade** pool on ArtDEX in just one transaction!

## 1. Minting

:::tip 

Note! This minting form was inspired by <a target="_blank" href="teia.art">TEIA</a>

:::

<p align="center"><img src="/mint-page.png" /></p>

When you choose Deepminter, the first form you will encounter is the **minting form**.

*These instructions will be exactly the same for Quickminter.*

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

<p align="center"><img src="/dm-sale.png" /></p>

Now all of the minting is complete, it's time to configure your sale. 

With Deepminter, the options will be exactly the same as normally [creating a pool](/artdex-pools).

We recommend using the Multipool option to keep costs down.

--

That's it! Once your transaction is complete, go to **ArtDEX Home > My Stuff > My Mints** to find your new NFTs.

*(Metadata may take a minute to be indexed!)*