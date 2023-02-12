---
sidebar_position: 1
slug: /artdex-mint
---

# Minting on ArtDEX

<p align="center"><img src="/artdex_1_1.png" /></p>

In the **Version 1.1** Update, minting has been added directly to <a target="_blank" href="https://salsadao.xyz/#/mint">ArtDEX</a>!

We built and added native minting as a response to interested artists who wanted to release projects directly on ArtDEX, without having to mint on an external marketplace and migrate NFTs.

## New Architecture

Before we get into the minters, we'd like to explain two new contracts we've built to make launching on ArtDEX easier.

### ArtDEX Mintery

<p align="center"><img height="150px" src="/artdex_logo.png" /></p>

The **ArtDEX Mintery** is a shared minting contract that will allow users to mint directly on ArtDEX. 

The minting process is similar to HEN, TEIA, and Versum, meaning each new mint is an independent FA2-standard token that can have up to 10,000 editions.

(Our mintery item symbol is **ARTWK**, a shortened version of artwork.)

Our interface will automatically handle IPFS uploading through our private gateway, similar to other top-class minting experiences. We will move to support files like documents and 3D models in the near future.

The Mintery works hand-in-hand with the **ArtDEX Multipool**, to complete the full minting process.

### ArtDEX Multipool

<p align="center"><img src="/multipool.png" /></p>

Multipool is a special pool deployment contract that works using bigmaps, meaning that pools are stored directly in the Multipool contract and not in a new contract. 

**This brings the costs of pool creation down from 3xtz to 0.1xtz.**

Multipool is the new default on ArtDEX, and it is the right choice for most users.

There are just a couple drawbacks when using the shared pool. One is the minor loss of decentralization, which is always going to come when moving from external contracts to one shared contract. The other is that external contracts can accept airdrops and other holding-based rewards for NFTs that offer them.

(Users will still be able to choose between using Multipool and making a new contract for any pool creation on ArtDEX.)

### Minter Contracts

The new mintery & multipool contracts are important, but those are only the step 1 of the minting process on ArtDEX. 

We want to make both **minting and pool deployment** simple for creators, so we’ve developed 2 shortcut contracts that will help you onboard to ArtDEX faster.

<p align="center"><img src="/minters.png" /></p>

**Quickmint** & **Deepmint** allow you to mint new ARTWKs and immediately create a pool to sell your new NFTs.

**Dynamint** is under construction, and will be a solution for creating high-supply, generative 1/1 NFTs.

Now that we're done with introductions, you can head to the <a target="_blank" href="https://salsadao.xyz/#/mint">minting</a> page and choose a minter.

[Let's start with Quickminter!](/artdex-qm)

