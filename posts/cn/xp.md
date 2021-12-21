---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'Aavegotchi 经验值 (XP)'
description: '在这里学习 Aavegotchi 经验值 (XP) ！'
contributors:
  - "unintelligent-nerd"
---

Aavegotchis 可以通过获得更多的经验 (XP) 来提升级别。 但到底每一个级别需要多少 XP 呢？ 我们提供以下数据供您参考！

<div class="contentsBox">

**内容**

<ol>
<li><a href=#公式>公式</a></li>
<li><a href=#经验值表>经验值表</a></li>
<li><a href=#tracking-xp-received>Tracking XP received</a></li>
</ol>

</div>

## 公式
以下公式为计算升级到下一个级别所需的 XP：

（当前等级 ^ 2）÷ 常数，其中常数 = 0.02

## 经验值表

下表显示每一级所需的 XP。 在理解数据之前，先要熟悉一些关键术语的定义：

* 当前级别：您的 Gotchi 的当前级别
* 下一个级别：您的 Gotchi 的下一个级别
* XP: 达到 **下一个级别** 列表中某个指定的下一个级别所需的经验值
* 差异：要达到 **下一个级别** 列表中某一的级别，需要的 XP 与上一行中的同一列的差异值
* 常数：计算下一个级别公式所需的 XP 时使用的固定值

Aavegotchi 所能达到的最高级别是 99。 对最高级别的任何更改都可以通过 [AavegotchiDAO](/dao) 提案来完成。

*注：Aavegotchis 从第一级开始。 “0级”也包括在表中，有兴趣的朋友可以参考公式进行计算。*

XP 表格

## Tracking XP received

Our frenly [aarchitect](/aarchitect) Frank Pfeift has created an application to track the XP that a Gotchi has received over its lifetime.

His app can be accessed [here](https://aavegotchi-xp-dashboard.vercel.app). Your Gotchi ID is the digits that are found at the end of the URL at your [Gotchi Profile Page](/aavegotchi-profile).