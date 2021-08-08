---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'aTokens'
description: 'All about Aavegotchi aTokens'
image: "atokens/aETH.svg"
contributors:
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/atokens/aETH.png">
<p class="headerImageText">The aETH aToken / Đồng aETH (aToken của Ethereum)</p>
</div>

Mỗi Gotchi đều tồn tại nhờ vào Spirit Force. Khi mở [portal](/portals), người triệu hồi (bạn chứ ai nữa!) sẽ có thể ấn định Spirit Force vào Gotchi của mình để có thể triệu hồi người bạn mới chào đời!

Vậy thì Spirit Force chính xác là gì?

Ban đầu, game Aavegotchi được thiết kế để chơi trên Ethereum Mainnet. Trong suốt thời gian ấy, Spirit Force chính là aToken. AToken là những token có thể sinh lợi tức từ[ Aave Protocol (Giao thức Aave)](https://aave.com). Chúng được đúc thông qua hoạt động gửi tiền vào giao thức và sẽ bị đốt khi rút tiền. Những đồng aToken được gắn với giá trị của những tài sản được gửi vào Aave Protocol theo tỷ lệ 1:1. những đồng aToken này có thể được tự do lưu giữ, chuyển khoản, và giao dịch. Xem phần [FAQ ](https://docs.aave.com/faq/)của Aave để có thêm nhiều thông tin về Aave Protocol.

Do phí gas trên Ethereum Mainnet cực cao nên việc triển khai Aavegotchi đã được chuyển sang [Polygon](/glossary#polygon), một giải pháp Layer 2. Việc chuyển đổi sang Polygon giúp các giao dịch được hoàn thành một cách nhanh chóng với phí giao dịch gần như bằng không. Điều này dễ đến việc chúng mình cần phải mang aToken lên Polygon. Our in-house coding genius and diamondboi, [Nick Mudge](/team#nick-mudge) managed to bridge **Aave V2 aTokens** from Ethereum Mainnet over to Polygon. These are known as **maTokens**. Aavegotchis belonging to Haunt 1 use **maTokens** as their Spirit Force.

Subsequently, Aave themselves shifted over to Polygon. Tokens from their Aave (Polygon) markets are known as **amTokens.** From Haunt 2 onwards, the Spirit Force for Aavegotchis will use **amTokens** instead.

This page will provide you with some helpful information on what are the available aTokens and how do you get them.

Do note that you eventually **need maTokens** to summon your Gotchis on Polygon. There are various ways to get maTokens without needing to go through aTokens. However, for the sake of representativeness, we explain how to get aTokens here.

In Aavegotchi, the terms "Spirit Force", "Collateral", "aTokens", and "maTokens" mean the same thing.

<div class="contentsBox">

**Nội dung**

<ol>
<li><a href=#about>Sơ lược</a></li>
<li><a href=#stablecoins>Stablecoin</a></li>
<li><a href=#cryptocurrencies>Tiền mã hoá</a></li>
<li><a href=#getting-atokens>Sở hữu aToken</a></li>
<li><a href=#converting-atokens-into-matokens>Chuyển đổi aToken thành maToken</a></li>
</ol>

</div>

## Sơ lược

While the underlying asset is loaned out to borrowers, aTokens accrue interest in real time, directly in your wallet! Seriously, you can watch your balance grow every minute.

aTokens can be classified into one of two categories: (1) cryptocurrencies, or (2) stablecoins. Cryptocurrencies are digital or virtual currencies that are secured by cryptography. Many cryptocurrencies are decentralized networks based on blockchain technology—a distributed ledger enforced by a disparate network of computers. Stablecoins are a class of cryptocurrencies that attempts to offer price stability by being pegged to an external reference such as the US Dollar (USD). The underlying mechanism of pegging differs across stablecoins, with each having its own risk profile.

The following [aTokens](https://docs.aave.com/developers/deployed-contracts/deployed-contract-instances) (cryptocurrencies and stablecoins) are available on the Aave Protocol. The *Supported by Aavegotchi* column indicates whether a given aToken will be available for Aavegotchi gameplay. The list of supported aTokens are not finalized; there will be twitter votes/DAO votes to add in more aTokens for Aavegotchi gameplay based on player demand.

## Stablecoin

table_stablecoins

## Tiền mã hoá

table_cryptocurrencies

## Sở hữu aToken

*The following steps are taken from the [Zero to Hero Guide 2.0](https://medium.com/aave/zero-to-hero-guide-2-0-dadce0f3e834) from Aave Medium. It has been replicated here for the reader's convenience.*

1). Head over to the <a href = "https://app.aave.com/">Aave Protocol</a> to get started!

2). Here you have a few options to link your crypto wallet, depending on which type of wallet you have:

<img src = "/atokens/connect-your-wallet.png" alt = "aave" class="bodyImage" />

3). Before you can use Aave Protocol, you’re going to want to have some crypto assets. The list of available crypto assets are shown in the <a href=#stablecoins>Stablecoins</a> and the <a href=#cryptocurrencies>Cryptocurrencies</a> sections above.

If you don’t own any crypto but you want to join the fun, you’ll need to convert your fiat currency (normal money, like dollars, euros, etc.) into a cryptographic asset (like one of the above).

Lucky for you, Aave recently introduced a fiat to crypto onramp where you can buy crypto assets directly from the Aave Protocol application! Now you can use Transak or Ramp Instant to buy the asset of your choice directly with a credit or debit card or wire transfer in just a few minutes (see below).

<img src = "/atokens/buy-with-fiat.png" alt = "aave" class="bodyImage" />

4). Once you have connected your wallet to the platform, you can deposit an asset into Aave Protocol. When you click “deposit”, the interface will show you what you have available in your wallet to deposit. You then select the asset you would like to deposit, choose how much to deposit, and then voilá, you’ve done it! *Note: there will be an "approve" transaction before the actual deposit transaction takes place. This is to grant permission to the deposit contract to use that particular asset you are depositing.*

<img src = "/atokens/deposit.gif" alt = "aave" class="bodyImage" />

As soon as your deposit transaction goes through, you benefit from the deposit interest rate. The aToken version of the asset can now be seen in your wallet.

## Chuyển đổi aToken thành maToken

Got your aTokens? Good!

Let's head over to the [maTokens](/matokens) page for Step 2!