---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'Aavegotchi Improvement Proposals (AGIPs)'
description: 'Eine Liste der Aavegotchi Improvement Proposals (AGIPs)'
contributors:
  - "unintelligent-nerd"
---

Hallo zusammen. An Aavegotchi Improvement Proposals (AGIPs) teilnehmen ist das, was verantwortungsvolle Gotchis tun! Du musst wählen gehen und deine Stimme einbringen.

Wie weit sind wir als Community schon gekommen? Schau dir hier unser Archiv der vergangenen Abstimmungen an!

<div class="contentsBox">

**Inhalte**

<ol>
<li><a href=#tap-increase-for-scaling-sprint>Erhöhung des Taps für den Scaling-Sprint</a></li>
<li><a href=#add-fees-to-bonding-curve>Hinzufügen von Gebühren zur Bonding Curve</a></li>
<li><a href=#increase-daico-tap-for-ghst-purchases>Erhöhung des DAICO-Taps für GHST-Käufe</a></li>
<li><a href=#proposal-for-haunt-2>Vorschlag für Haunt 2</a></li>
<li><a href=#give-unique-non-transferable-background-to-haunt-1-aavegotchis>Einzigartiger, nicht-transferierbarer Hintergrund für Haunt 1 Gotchis</a></li>
<li><a href=#add-fee-on-baazaar-to-support-rarity-farming>Hinzufügen einer Baazaar-Gebühr für Rarity Farming</a></li>
<li><a href=#earn-xp-for-successful-signal-proposals>XP für erfolgreiche Signal Proposals verdienen</a></li>
<li><a href=#voting-power-based-on-brs>Stimmgewicht basierend auf BRS</a></li>
<li><a href=#voting-power-based-on-wearables--maall-price>Stimmgewicht basierend auf den Maall-Preisen von Kleidungsstücken</a></li>
<li><a href=#partnership-between-aavegotchidao--pixelcraft--and-dinoswap>Partnerschaft zwischen AavegotchiDAO, Pixelcraft, und DinoSwap</a></li>
<li><a href=#name-of-aavegotchi-marketplace>Name des Aavegotchi Marktplatzes</a></li>
<li><a href=#eligibility-of-ghst-usdc-lp-tokens-to-earn-frens>FRENS verdienen mit GHST-USDC LP Tokens</a></li>
<li><a href=#portals-purchased-in-one-transaction>Anzahl Portale in einer Transaktion</a></li>
</ol>

</div>

### Erhöhung des Taps für den Scaling-Sprint
**Aavegotchi Improvement Proposal #1**

**Zusammenfassung des Vorschlags:** Die GHST Bonding Curve ist seit fast einem Monat live und damit kommt die erste Gelegenheit für GHST-Halter, den DAICO Tap Mechanismus anzupassen. AavegotchiDAO 1.0 basiert auf der Aragon-Plattform und funktioniert wie ein unkomplizierter DAICO, bei dem GHST-Halter einmal im Monat darüber abstimmen können, den Geldfluss zum Kernteam über den Tap zu erhöhen oder zu verringern. Der Tap liefert DAI direkt aus der GHST Bonding Curve, wo derzeit über 7.5 Millionen DAI gesichert sind.

Wir bitten die Aavegotchi-Community um eine Abstimmung, um den Tap von 50K DAI / 30 Tage auf 100K DAI / 30 Tage zu erhöhen. 50k DAI reichten nicht aus, um alle erreichten Meilensteine (Community-Wachstum, GHST Token, Spielentwicklung) abzudecken und der nächste Sprint ist noch ehrgeiziger. Die programmierten Beschränkungen des AavegotchiDAO 1.0 begrenzen diesen Vorschlag auf eine Erhöhung der DAI um nur 50k für die Abstimmungsperiode in diesem Monat. Daher haben wir unsere Strategie mit einem Gesamt-DAI-Tap von 100k im Hinterkopf geplant.

Das Budget sieht vor, die zusätzlichen 50k DAI in 4 verschiedene Kategorien aufzuteilen:
* Ein Fonds für Spielehersteller, damit wir die Bedingungen mit wichtigen Spieleentwicklern festigen können.
* Zusätzliche Verträge für Schlüsselpositionen in Marketing, Design und Entwicklung.
* Ein Marketing-Boost, der dafür sorgt, dass die Präsenz von Aavegotchi ausgebaut wird.
* Community-Belohnungen, damit wir weiterhin Programme (wie die Aartists- und Aapprentices-Teams) entwickeln können, die Anreize für die Inspiriertesten in unserer Community schaffen.

**Abstimmungszeitraum:** 15. - 19. Oktober 2020

**Ergebnis:**

table_agip1

[Link zur Abstimmung über das Aragon UI](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/0/)

<hr />

### Hinzufügen von Gebühren zur Bonding Curve
**Aavegotchi Improvement Proposal #2**

**Zusammenfassung des Vorschlags:** Die Bonding Curve ist die Hauptquelle der Liquidität von GHST. Grosse Spieler im Markt können derzeit ohne Gebühren kaufen und verkaufen.

Unser Market Maker bietet die Möglichkeit, Gebühren für Kauf- und Verkaufsaufträge zu erheben.

Mehrere Community-Mitglieder haben vorgeschlagen, Gebühren von bis zu 0.3% für den Kauf und Verkauf durch die Curve zu erheben.

Dies ist möglich, indem wir die `updateFees` Funktion auf unserer Bonding Curve aufrufen, aber sollten wir das tun? Es liegt an euch, dem AavegotchiDAO.

Alle verdienten Gebühren würden automatisch an die DAO Treasury Adresse 0xffe6280ae4e864d9af836b562359fd828ece8020 überwiesen und als Vermögen des AavegotchiDAO betrachtet werden.

**Abstimmungszeitraum:** 18. - 21. Januar 2021

**Ergebnis:**

table_agip2

[Link zur Abstimmung über das Aragon UI](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/1/)

<hr />

### Erhöhung des DAICO-Taps für GHST-Käufe
**Aavegotchi Improvement Proposal #3**

**Zusammenfassung des Vorschlags: ** Spielerbelohnungen und Liquiditätsanreize sind entscheidend, um das Aavegotchi Ökosystem auf ein Level zu heben, auf dem es sich durch Handelsvolumen und wirtschaftliche Aktivität selbst tragen kann.

Immer wenn GHST im Aavegotchi Ökosystem ausgegeben wird, werden 33% davon automatisch an eine Burn Adresse geschickt. Im Gegensatz zu den meisten Kryptowährungen senkt das Verbrennen von GHST (ausser über die Bonding Curve) nicht tatsächlich den Gesamtwert von GHST, da dieser Wert als DAI innerhalb der Bonding Curve gespeichert wird.

Durch das Verbrennen wird DAI in der Bonding Curve gefangen, wodurch sich der Reservesatz mit der Zeit erhöht, was den Preis von GHST stabilisiert.

Um das Verbrennen zu kompensieren (was GHST letztendlich zu einem Stablecoin machen könnte), raten wir der Community, den Tap auf 150'000 DAI pro Monat zu erhöhen. Dies wird dazu beitragen, die Reserve der Bonding Curve auszugleichen und gleichzeitig zusätzliche 50'000 DAI pro Monat bereitzustellen, die in Spielerbelohnungen und Liquiditätsanreize fliessen werden.

**Abstimmungszeitraum:** 18. - 21. Januar 2021

**Ergebnis:**

table_agip3

[Link zur Abstimmung über das Aragon UI](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/2/)

<hr />

### Vorschlag für Haunt 2
**Aavegotchi Improvement Proposal #4**

**Zusammenfassung des Vorschlags: ** 10'000 Portale sind wohl nicht genug, um die aktuelle Nachfrage nach Aavegotchis zu befriedigen. Darum könnte es notwendig sein, einen neuen Haunt einzurichten. So wird sichergestellt, dass alle, die teilnehmen wollen, ein Aavegotchi besitzen können. Dieses Core Proposal bietet vier verschiedene Optionen, die von Community-Mitgliedern vorgeschlagen wurden - einschliesslich einer Option, keinen neuen Haunt einzurichten.

Details zum AGIP gibt es [hier](https://aavegotchi.medium.com/vote-when-haunt-2-making-haunts-more-unique-d975cbda4772).

Option 1: Kein neuer Haunt, Erneuter Versuch in einem Monat

Option 2: 10K Portale, 100 GHST, 1 pro txn

Option 3: 25K Portale, 100 GHST, 5 pro txn (mit strenger "Ape Tax")

Option 4: Vorverkauf, bei dem jedes Wallet 1 Portal für 100 GHST kaufen kann. Wenn der Vorverkaufszeitraum endet, werden alle Portale geminted und an ihre Besitzer übertragen.

**Abstimmungszeitraum:** 17. - 24. März 2021

**Ergebnis:**

table_agip4

**Stimmenunterschied nicht erfüllt. Vorerst kein Haunt 2!**

[Link zur Abstimmung auf Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmNqRry73rWXb9tdyHummihcK58ga83Ru15AJRF3beFJ35)

<hr />

### Einzigartiger, nicht-transferierbarer Hintergrund für Haunt 1 Gotchis
**Aavegotchi Improvement Proposal #5**

**Zusammenfassung des Vorschlags:** Viele Spieler sind besorgt, dass Haunt 2 dem Haunt 1 zu ähnlich sein wird und die neu geschaffenen Portale den "Genesis" Haunt abwerten werden. Einer der Vorschläge ist, jedem Haunt spezielle Hintergründe zu geben, um sie leicht identifizierbar zu machen. Dieser Vorschlag wurde hervorragend diskutiert und fand im zugehörigen Snapshot grosse Unterstützung. Beachte, dass unabhängig von der Entscheidung des DAOs in dieser Angelegenheit alle Aavegotchis spezielle, nicht übertragbare "Haunt" Badges erhalten werden. Dieser Vorschlag konzentriert sich speziell auf die Idee eines nicht übertragbaren Hintergrunds, der in den BG (Background) Kleidungsstück-Slot des Aavegotchi eingebaut werden kann.

Details zum AGIP gibt es [hier](https://aavegotchi.medium.com/vote-when-haunt-2-making-haunts-more-unique-d975cbda4772).

Option 1: Nur Haunt 1 sollte einen speziellen Hintergrund bekommen

Option 2: Jeder Haunt sollte seinen eigenen einzigartigen Hintergrund haben

Option 3: Weder noch, so belassen wie es ist

**Abstimmungszeitraum:** 17. - 24. März 2021

**Ergebnis:**

table_agip5

[Link zur Abstimmung auf Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmfBrnUmfsX57vXWchr1mUNkqMWNeF6edEqdQq11MCvMHJ)

<hr />

### Hinzufügen einer Baazaar-Gebühr für Rarity Farming
**Aavegotchi Improvement Proposal #6**

**Zusammenfassung des Vorschlags: ** Mit der offiziellen Ankündigung der SZN1-Belohnungen untersuchen wir, wie die Interessen der Community und die Belohnungsstrukturen in Bezug auf die Baazaar-Gebühren in Einklang gebracht werden können.

Derzeit gehen 2% an Pixelcraft und 1% an das DAO Treasury. Obwohl ein Teil der Treasury-Gelder aktuell für Rarity Farming (RF) Belohnungen zur Verfügung stehen, muss dies nicht jede Saison in einem bestimmten Verhältnis erfolgen. Dieser Vorschlag zielt darauf ab, die Baazaar-Gebühren von 3% auf 3.5% zu erhöhen, wobei die zusätzlichen 0.5% direkt in den Rarity Farming Belohnungspool fliessen.

Details zum AGIP gibt es [hier](https://aavegotchi.medium.com/core-proposal-agip6-add-0-5-fee-on-baazaar-to-support-rarity-farming-5bf923c7f528).

Option 1: Ja, Erhöhung der Gebühren von 3% auf 3.5%

Option 2: Nein, die Gebühren bleiben wie sie sind

**Abstimmungszeitraum:** 7. - 13. April 2021

**Ergebnis:**

table_agip6

[Link zur Abstimmung auf Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmPUueFJwpCz6rBiucnBYPLxTv2tetzxXWwCi2gSQFMJMW)

<hr />

### XP für erfolgreiche Signal Proposals verdienen
**Aavegotchi Improvement Proposal #7**

**Zusammenfassung des Vorschlags:** Wir haben derzeit eine Menge Signal-/Community-Vorschläge auf Snapshot und täglich neue Beiträge in unserem Forum. Bisher konnte keiner dieser Vorschläge auch nur in die Nähe des Quorums von 20% kommen. Der beliebteste Vorschlag von @JG, zusätzliche Gebühren für Rarity Farming zu erheben, erhielt nur etwa 2 Millionen GHST an Stimmen (~11%) - und das, obwohl das Team beschlossen hat, ihn als Kernvorschlag aufzunehmen. Nachdem der Vorschlag zu einem "Core Proposal" geändert wurde, haben wir das Quorum in weniger als 24 Stunden durchbrochen.

Ich denke, es gibt zwei ziemlich offensichtliche Gründe dafür. Auf der einen Seite ist unser Snapshot im Moment etwas chaotisch, da einige Signalvorschläge überhaupt nicht der Vorlage folgen. Auf der anderen Seite - und ich denke, das ist der wichtigere Punkt - bekommt man 20 Erfahrungspunkte (EXP) für sein Aavegotchi, wenn man für einen Kernvorschlag (Core Proposal) stimmt.

Ich schlage vor, einen kleinen Erfahrungsbonus (10 EXP) für Leute einzuführen, die über erfolgreiche Community-Vorschläge (Signal Proposals) abgestimmt haben, d.h. Vorschläge, die das Quorum erreichen und zu Kernvorschlägen aufgewertet werden. Einfach EXP für alle Community-Vorschläge zu verschenken, könnte zu mehr qualitativ schlechten Vorschlägen führen, was nicht das Ziel dieses Vorschlags sein sollte.

Auch wenn 10 EXP vielleicht nicht viel sind, gibt es Leuten einen Anreiz, die Signal Proposals tatsächlich durchzusehen und über hochwertige Vorschläge abzustimmen, die eine höhere Chance auf das Erreichen des Quorums haben. Als DAO ist das Engagement der Community extrem wichtig und ich glaube, dass dies ein kleiner, aber wichtiger Schritt in die richtige Richtung ist.

Wenn dieser Vorschlag das Quorum erreicht und angenommen wird, erhalten alle Aavegotchis im Besitz von Leuten, die abgestimmt haben, 10 EXP!

Details zum AGIP gibt es [hier](https://aavegotchi.medium.com/vote-agip7-earn-xp-for-successful-signal-proposals-d5eafdb93aae).

Option 1: Ja, erfolgreiche SigProps geben EXP

Option 2: Nein, SigProps sollten kein EXP geben

**Abstimmungszeitraum:** 12. - 18. Mai 2021

**Ergebnis:**

table_agip7

[Link zur Abstimmung auf Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmctiApzKZHoVsSpzWVfMVL1abRTUNXsoipupNGS52gEuZ)

<hr />

### Stimmgewicht basierend auf BRS
**Aavegotchi Improvement Proposal #8**

**Zusammenfassung des Vorschlags:** Hinzufügen von Stimmgewicht für Aavegotchis, die in der Adresse eines Wählers gehalten werden - mit einer Rate von 1 GHST pro BRS (Base Rarity Score, ohne ausgerüstete Kleidungsstücke).

Details zum AGIP gibt es [hier](https://aavegotchi.medium.com/vote-agip8-and-agip9-give-voting-power-to-aavegotchis-and-wearables-9c113373a0a2).

Option 1: Ja, Aavegotchis erhalten Stimmrecht basierend auf BRS

Option 2: Nein, Aavegotchis sollten kein Stimmrecht haben

**Abstimmungszeitraum:** 11. - 17. Juni 2021

**Ergebnis:**

table_agip8

[Link zur Abstimmung auf Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmZnzgvkEzHvwkYPGLFQLtVvvoMzBXPWhznux1udHzbUim)

<hr />

### Stimmgewicht basierend auf den Maall-Preisen von Kleidungsstücken
**Aavegotchi Improvement Proposal #9**

**Zusammenfassung des Vorschlags:** Hinzufügen von Stimmgewicht für Kleidungsstücke in der abstimmenden Adresse.

Details zum AGIP gibt es [hier](https://aavegotchi.medium.com/vote-agip8-and-agip9-give-voting-power-to-aavegotchis-and-wearables-9c113373a0a2).

Option 1: Ja, Kleidungsstücke erhalten Stimmrecht basierend auf dem Maall-Preis

Option 2: Nein, Kleidungsstücke sollten kein Stimmgewicht geben

**Abstimmungszeitraum:** 11. - 17. Juni 2021

**Ergebnis:**

table_agip9

[Link zur Abstimmung auf Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/Qmat7jeAS1W3BBq7yDi2jkHjNoywmUEfrF2FdPiS9CcGHa)

<hr />

### Partnerschaft zwischen AavegotchiDAO, Pixelcraft, und DinoSwap
**Aavegotchi Improvement Proposal #10**

**Zusammenfassung des Vorschlags: ** Einige Community-Mitglieder sind besorgt über die schwindende Liquidität von GHST auf Quickswap und ihre allmählich abnehmenden LP-Belohnungen. Anstatt dem Pool einfach mehr Liquidität zuzuweisen, erwägen wir eine Partnerschaft mit einem bald startenden Liquiditätsaggregator namens DinoSwap. Die Bedingungen beinhalten insgesamt 200k USD an GHST Token, die den "Extinction Pools" zugeteilt werden, deren Details weiter unten beschrieben werden.

Details zum AGIP gibt es [hier](https://dao.aavegotchi.com/t/ghst-liquidity-rewards-on-new-launch-pixelcraft-dao-collaboration/1804).

Option 1: Ja, gehen wir eine Partnerschaft mit DinoSwap ein

Option 2: Nein, keine Partnerschaft mit DinoSwap

**Abstimmungszeitraum:** 13. - 20. Juni 2021

**Ergebnis:**

table_agip10

[Link zur Abstimmung auf Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmV3xdUskpTtd6JYyCgV7tjWeBGira2ZPFcdk2YDy3UPHE)

<hr />

### Name des Aavegotchi Marktplatzes
**Snapshot Abstimmungen**

**Zusammenfassung des Vorschlags:** Wie soll der Aavegotchi NFT-Marktplatz genannt werden?

Aavegotchi lanciert seinen eigenen NFT-Marktplatz auf Polygon zeitgleich mit dem Spiel!

Wie sollen wir den offiziellen Aavegotchi-Marktplatz nennen?

Wahl A: Aavegotchi Baazaar

Wahl B: Aavegotchi Maarket

Wahl C: Weder noch

Das Quorum für diese Abstimmung liegt bei 500'000 GHST. Sollte das Quorum nicht erreicht werden, wird Pixelcraft Strohhalme ziehen.

Wenn "Keiner von beiden" gewinnt... dann solltet ihr euch lieber ein paar gute Alternativen einfallen lassen!

**Abstimmungszeitraum:** 8. - 11. Februar 2021

**Ergebnis:**

table_marketplaceName

[Link zur Abstimmung auf Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmRiRaQuwLuNr88yxvX61vtKM56NrY3KaMk4bk6w7g47fy)

<hr />

### Anspruch von GHST-USDC LP Token auf FRENS

**Snapshot Abstimmungen**

**Zusammenfassung des Vorschlags:** Sollten GHST-USDC LP Tokens auch FRENS verdienen können?

Unser Liquiditätsmigrationsprogramm war ein grosser Erfolg, mit bereits über 8 Mio. GHST, die auf Polygon migriert wurden. Wie viele Community-Mitglieder jedoch festgestellt haben, ist die Liquidität für das GHST-USDC Paar noch nicht ausreichend, um den Handel grosser Mengen an USDC für GHST auf Quickswap zu unterstützen.

Wir glauben, dass die Aufnahme von GHST-USDC als ein Paar, das für FRENS auf [https://aavegotchi.com/stake-polygon](https://aavegotchi.com/stake-polygon) zugelassen ist, eine Möglichkeit zur Abhilfe darstellt. Genauso wie GHST-QUICK einen "Quittungstoken" stkGHST-QUICK hat, kann auch der gestakete GHST-USDC einen stkGHST-USDC Token ausgeben. Dieser kann für Belohnungen auf Quickswap in Frage kommen, wenn ihr Team es für nötig hält.

Da diese Entscheidung direkten Einfluss auf das Gameplay hat, glauben wir, dass sie ein reifer Kandidat für unsere erste Snapshot-Abstimmung auf Polygon ist.

Wir setzen ein Quorum von 500'000 GHST fest, damit diese Abstimmung in Kraft treten kann.

Mit dem GHST-USDC LP Token werden gleich viele FRENS wie mit dem normalen Staking von GHST verdient, da der Impermanent Loss minimal ist und die Gebühren erheblich sind.

**Abstimmungszeitraum:** 8. - 11. Februar 2021

**Ergebnis:**

table_ghstUsdcLp

[Link zur Abstimmung auf Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmUpXPA5JF4ed9GUy5hNUTA7rT7VQjL7QXUTSxbtLQ1RqA)

<hr />

### Anzahl Portale in einer Transaktion

**Snapshot Abstimmungen**

**Zusammenfassung des Vorschlags:** Wie viele Portale können in einer Transaktion gekauft werden?

Die Diskussionsphase für dieses Thema ist beendet und nun ist es an der Zeit abzustimmen! Die beliebtesten Optionen waren: 1, 5, und 10 Portale pro Transaktion.

Unser Fren [@coderdannn](/team#coder-dan) warf auch eine interessante Idee in den Mix: Eine "Ape Tax", bei der eine höhere Anzahl von Portalen in einer einzigen Transaktion gekauft werden könnte, aber zu einem höheren Preis. Die Portale würden so gestaffelt sein:

* 0-5: je 100 GHST

* 6-15: je 200 GHST

* 16-25: je 300 GHST

Damit bleiben uns vier Optionen: 1, 5, 10, und 25 (mit Ape Tax).

Lasst eure $GHST Tokens für euch sprechen und stimmt ab!

Abstimmungszeitraum: 72 Std. Mindestquorum: 10% aller GHST auf Matic (~1.1M GHST)

AavegotchiDAO Diskussion 👇

[https://dao.aavegotchi.com/t/how-many-portals-should-be-bought-in-one-txn/17](https://dao.aavegotchi.com/t/how-many-portals-should-be-bought-in-one-txn/17)

**Abstimmungszeitraum:** 23. - 26. Februar 2021

**Ergebnis:**

table_portalsPurchased

[Link zur Abstimmung auf Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmUhKcn5YjKAPeGA1SfKQkNfw3P3hGRPgSGnTJGsfzw4Xi)