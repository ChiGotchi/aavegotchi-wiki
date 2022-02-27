---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'Aavegotchi Improvement Proposals (AGIPs)'
description: 'Danh sách cách Aavegotchi Improvement Proposals (AGIPs)'
contributors:
  - "unintelligent-nerd"
---

Chào mấy fen. Tham dự vào Aavegotchi Improvement Proposals (AGIPs) là điều mà những gotchi có trách nhiệm sẽ làm! Bạn cần phải bỏ phiếu và tiếng nói của bạn sẽ được thể hiện.

Cộng đồng của chúng ta đã phát triển đến mức nào rồi? Hãy xem qua thông tin lưu trữ về những lần bầu chọn đã qua tại đây nhé!

Psst! Nhận [Huy Hiệu POAP](/poap) nếu bạn đã bỏ phiếu cho AGIP trước đây!

<div class="contentsBox">

**Nội dung**

<ol>
<li><a href=#tap-increase-for-scaling-sprint>Tăng lượng Tap để Phát Triển Sâu Rộng</a></li>
<li><a href=#add-fees-to-bonding-curve>Thêm Phí Giao Dịch Vào Bonding Curve</a></li>
<li><a href=#increase-daico-tap-for-ghst-purchases>Tăng lượng tap từ DAICO để mua lại GHST</a></li>
<li><a href=#proposal-for-haunt-2>Đề Xuất Về Haunt 2</a></li>
<li><a href=#give-unique-non-transferable-background-to-haunt-1-aavegotchis>Tặng background độc quyền cho những Aavegotchi từ Haunt 1 (không chuyển sang ví khác được)</a></li>
<li><a href=#add-fee-on-baazaar-to-support-rarity-farming>Tăng Phí Baazaar Để Hỗ Trợ Cho Rarity Farming</a></li>
<li><a href=#earn-xp-for-successful-signal-proposals>Nhận XP từ những Bản Đề Xuất Hội Ý thành công</a></li>
<li><a href=#voting-power-based-on-brs>Quyền bỏ phiếu dựa trên BRS</a></li>
<li><a href=#voting-power-based-on-wearables--maall-price>Quyền bỏ phiếu dựa trên Giá Trang Phục trong Maall</a></li>
<li><a href=#partnership-between-aavegotchidao--pixelcraft--and-dinoswap>Quan hệ đối tác giữa AavegotchiDAO, Pixelcraft, và DinoSwap</a></li>
<li><a href=#liquidity-manager---frens-committee>Ban Quản Lý Thanh Khoản / Hội Đồng FRENS</a></li>
<li><a href=#launch-haunt-2>Triển Khai Haunt 2</a></li>
<li><a href=#add-an-aging-mechanic-to-affect-aavegotchi-rarity-scores>Thêm Cơ Chế Trưởng Thành để ảnh hưởng đến điểm độ hiếm của Aavegotchi</a></li>
<li><a href=#earn-frens-with-ghst-matic-lp-tokens>Kiếm FRENS với token LP GHST-MATIC</a></li>
<li><a href=#create-a-wearables-taask-force>Thành Lập Biệt Đội Trang Phục</a></li>
<li><a href=#stake-100k-ghst-to-generate-minigame-rewards>Stake 100k GHST để tạo ra phần thưởng cho Minigame</a></li>
<li><a href=#adding-voting-power-to-realm-parcels>Tăng Sức Mạnh Bỏ Phiếu Cho REALM Parcel</a></li>
<li><a href=#gotchiverse-patch-v0-1>Gotchiverse Patch v0.1</a></li>
<li><a href=#providing-ghst-liquidity-on-synfutures>Cung cấp thanh khoản cho GHST trên SyncFutures</a></li>
<li><a href=#creating-the-dao-treasury-taask-force>Thành lập Biệt Đội DAO Treasury</a></li>
<li><a href=#adding-ghst-to-the-umbria-narni-bridge>Thêm GHST vào Cầu Umbria Narni</a></li>
<li><a href=#launch-rarity-farming-szn-3>Triển Khai Rarity Farming Mùa 3</a></li>
<li><a href=#co-sponsoring-the-goodghosting-pool>Đồng Tài Trợ Cho Quỹ GoodGhosting</a></li>
<li><a href=#name-of-aavegotchi-marketplace>Đặt tên cho cho Chợ Trao Đổi Vật Phẩm Aavegotchi</a></li>
<li><a href=#eligibility-of-ghst-usdc-lp-tokens-to-earn-frens>Khả năng nhận FRENS khi stake token LP của GHST-USDC</a></li>
<li><a href=#portals-purchased-in-one-transaction>Số lượng Portal mua được trong mỗi giao dịch</a></li>
</ol>

</div>

### Tăng lượng Tap để Phát Triển Sâu Rộng
**Aavegotchi Improvement Proposal #1**

**Tóm tắt đề xuất:** GHST Bonding Curve đã hoạt động được gần một tháng và điều đó có nghĩa là cơ hội để những người nắm giữ token GHST có thể điều chỉnh cơ chế tap của DAICO đã đến. AavegotchiDAO 1.0 được xây dựng trên nền tảng của Aragon và hoạt động trực tiếp với DAICO, nơi mà những người nắm giữ GHST có thể bỏ phiếu mỗi tháng một lần xem nên tăng hoặc giảm dòng tiền ngân quỹ dành cho team phát triển thông qua cơ chế tap. Cơ chế tap cung cấp lượng DAI được trích trực tiếp từ 7.5 triệu DAI được giữ trong GHST Bonding Curve.

Bọn mình đã kêu gọi cộng đồng Aavegotchi bầu chọn xem có nên tăng lượng tap từ 50k DAI/30 ngày thành 100k DAI/30 ngày hay không. 50k DAI không đủ để trang trải chi phí cho tất cả những thành tựu mà dự án đã đạt được (phát triển cộng đồng, token GHST, phát triển game), và những bước nhảy vọt tiếp theo sẽ còn đầy tham vọng hơn nữa. Những ràng buộc trong bộ code của AavegotchiDAO 1.0 giới hạn bản khuyến nghị này trong khuôn khổ chỉ có 50k DAI được thêm vào trong giai đoạn bầu cử của tháng này và do đó bọn mình đã khởi xướng trong đầu một chiến lược có mức ngân sách lên đến 100k DAI.

Ngân sách 50k DAI thêm vào sẽ được dùng trong 4 hạng mục khác nhau:
* Quỹ làm game giúp bọn mình có thể hoàn thiện thương lượng với những lập trình viên game chủ chốt.
* Những bản hợp đồng bổ sung dành cho những vị trí then chốt của các lĩnh vực marketing, design, và phát triển.
* Một bước tạo đà trong marketing giúp nhân rộng sự hiện diện của Aavegotchi.
* Phần thưởng dành cho cộng đồng để bọn mình có thể tiếp tục phát triển những chương trình (như team Aartists hay Aaprentices) nhằm tưởng thưởng cho những ai có nhiều cảm hứng nhất trong cộng đồng bọn mình.

**Thời gian vote:**15 - 19 tháng Mười 2020

**Kết quả:**

table_agip1

[Đường dẫn đến giao diện người dùng của Aragon](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/0/)

<hr />

### Thêm Phí Giao Dịch Vào Bonding Curve
**Aavegotchi Improvement Proposal #2**

**Tóm Tắt Bản Đề Nghị:** Bonding curve là nguồn thanh khoản chính của GHST. Những người mua và người bán số lượng lớn trong hiện tải không phải trả bất kỳ loại phí nào.

Trình tạo thị trường của chúng tôi có khả năng thêm phí vào các lệnh mua và bán.

Nhiều thành viên trong cộng đồng đã đề xuất thêm vào 0.3% phí giao dịch cho các hoạt động mua bán diễn ra trên bonding curve.

Việc này có thể được thực hiện khi gọi hàm `updateFees` trên bonding curve của bọn mình, nhưng điều này có nên được thực hiện hay không? Tất cả tuỳ thuộc vào bạn, AavegotchiDAO ơi.

Mọi loại phí sẽ tự động được chuyển đến địa chỉ của ngân quỹ DAO tại 0xffe6280ae4e864d9af836b562359fd828ece8020 và nó sẽ được xem là tài sản của AavegotchiDAO.

**Thời gian vote:**18 - 21 tháng Mười 2021

**Kết quả:**

table_agip2

[Đường dẫn đến giao diện người dùng của Aragon](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/1/)

<hr />

### Tăng lượng tap từ DAICO để mua lại GHST
**Aavegotchi Improvement Proposal #3**

**Tóm tắt bản đề nghị:**Phần thưởng cho người chơi và phần thưởng khuyến khích thanh khoản là rất quan trọng để có thể tạo đà phát triển cho hệ sinh thái Aavegotchi đến mức độ mà nó có thể tự duy trì dựa trên khối lượng giao dịch và các hoạt động kinh tế.

Bất cứ khi nào GHST được tiêu xài trong hệ sinh thái Aavegotchi, 33% trong số đó sẽ tự động được gửi đến địa chỉ đốt. Không giống như hầu hết những đồng tiền điện tử khác, việc đốt GHST (trừ trường hợp thông qua bonding curve) sẽ không làm giảm tổng giá trị của GHST, bởi giá trị đó được lưu giữ bởi lượng DAI ở trong bonding curve.

Tác dụng của việc đốt token là để giữ DAI ở trong bonding curve, góp phần quan trọng trong việc tăng tỷ lệ lưu trữ theo thời gian, giúp ổn định giá của GHST.

Để có thể bắt đầu việc đốt token (việc mà cuối cùng có thể biến GHST là một đồng stablecoin), bọn mình khuyên cộng đồng nên tăng lượng tap lên thành 150.000 DAI mỗi tháng. Điều này sẽ giúp cho số dư được lưu giữ trong bonding curve, cùng lúc đó cũng cung cấp thêm 50.000 DAI mỗi tháng để tài trợ cho phần thưởng dành cho người chơi và khuyến khích thanh khoản.

**Thời gian vote:**18 - 21 tháng Mười 2021

**Kết quả:**

table_agip3

[Đường dẫn đến giao diện người dùng của Aragon](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/2/)

<hr />

### Đề Xuất Về Haunt 2
**Aavegotchi Improvement Proposal #4**

**Tóm tắt Bản Đề Xuất** Nhiều thành viên trong cộng đồng cho rằng 10k Portal là không đủ để đáp ứng nhu cầu sở hữu Aavegotchi trong hiện tại. Do đó, việc triển khai sự kiện Haunt mới sẽ là một yếu tố cần thiết giúp đảm bảo rằng bất cứ ai muốn tham gia vào game đều sẽ sở hữu Aavegotchi. Bản Core Proposal đưa ra bốn lựa chọn khác nhau được thành viên trong cộng đồng gọi ý, bao gồm phương án không tổ chứ thêm sự kiện Haunt mới.

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://aavegotchi.medium.com/vote-when-haunt-2-making-haunts-more-unique-d975cbda4772).

Phương án 1: Không tổ chức sự kiện Haunt 1, sẽ thảo luận thêm trong một tháng nữa

Phương án 2: Mở bán 10k Portal, mỗi Portal có giá 100 GHST, mua được một portal với mỗi giao dịch

Phương án 3: Mở bán 25k Portal, giá 100 GHST mỗi cái, mỗi giao dịch được mua tổng cộng 5 cái (thuế ape tax sẽ nặng hơn)

Phương án 4: Pre-sale, mỗi ví sẽ có quyền đăng ký mua 1 Portal với giá 100 GHST. Trong thời gian diễn ra sự kiện pre-sale, tất cả Portal sẽ được đúc ra và chuyển sang cho chủ nhân của chúng.

**Thời gian vote:**17 - 24 tháng Mười 2021

**Kết quả:**

table_agip4

**Cách biệt trong số phiếu không đủ độ đồng thuận. Haunt 2 sẽ không được tổ chức vào thời điểm này!**

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmNqRry73rWXb9tdyHummihcK58ga83Ru15AJRF3beFJ35)

<hr />

### Tặng background độc quyền cho những Aavegotchi từ Haunt 1 (không chuyển sang ví khác được)
**Aavegotchi Improvement Proposal #5**

**Tóm tắt Bản Đề Xuất:**Nhiều người chơi lo rằng sự kiện Haunt 2 sẽ tương tự như [Haunt 1](/haunt) và những Haunt mới tạo ra sau này sẽ làm giảm giá trị của sự kiện Haunt "Nguyên thuỷ". Một trong những ý tưởng được đưa ra là mỗi Haunt sẽ nhận được một ảnh nền đặc biệt để dễ dàng phân biệt. Bản đề xuất này đã được bàn luận rất sôi nổi và được đồng tình nhiệt liệt trên Snapshot. Các bạn hãy lưu ý rằng dù cho quyết định của DAO là gì đi nữa thì tất cả các Aavegotchi đều sẽ nhận được những huy hiệu "Haunt" giúp phân biệt xem chúng được sinh ra từ sự kiện Haunt số mấy. Bản đề xuất này đặc biệt tập trung vào đề xuất tặng ảnh nền cho các Aavegotchi để chúng có thể trang bị vào ô trang phục BG và những ảnh nền này không thể chuyển sang Aavegotchi khác được.

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://aavegotchi.medium.com/vote-when-haunt-2-making-haunts-more-unique-d975cbda4772).

Phương án 1: Chỉ Haunt 1 mới nên được tặng ảnh nền đặc biệt

Phương án 2: Mỗi sự kiện Haunt sẽ nhận được một ảnh nền riêng

Phương án 3: Giữ nguyên như hiện tại

**Thời gian vote:**17 - 24 tháng Mười 2021

**Kết quả:**

table_agip5

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmfBrnUmfsX57vXWchr1mUNkqMWNeF6edEqdQq11MCvMHJ)

<hr />

### Tăng Phí Baazaar Để Hỗ Trợ Cho Rarity Farming
**Aavegotchi Improvement Proposal #6**

**Tóm Tắt Đề Xuất:** Sau khi Giải Thưởng dành cho Mùa 1 chính thức được công bố, bọn mình đã tìm hiểu thêm cách để kết nối ý kiến của cộng đồng với cơ cấu giải thưởng, bởi nó có mối quan hệ mật thiết với phí giao dịch trên Baazaar.

Hiện tại, 2% phí giao dịch đang được phân bổ cho Pixelcraft và 1% được phân bổ cho Ngân Quỹ của DAO. Mặc dù ngân quỹ không loại trừ việc hỗ trợ cho giải thưởng RF, nhưng hiện tại nó không được phép phân phát ở bất kỳ dạng nào cho quỹ giải thưởng RF của mỗi mùa. Bản đề xuất này hướng đến việc tăng trưởng phí Baazaar từ 3% đến 3,5%, cộng thêm 0,5% phí được chuyển thẳng đến quỹ giải thưởng Rarity Farming.

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://aavegotchi.medium.com/core-proposal-agip6-add-0-5-fee-on-baazaar-to-support-rarity-farming-5bf923c7f528).

Phương án 1: Có, tăng phí từ 3% thành 3,5%

Phương án 2: Không, giữ nguyên như cũ

**Thời gian vote:**7 - 13 tháng Mười 2021

**Kết quả:**

table_agip6

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmPUueFJwpCz6rBiucnBYPLxTv2tetzxXWwCi2gSQFMJMW)

<hr />

### Nhận XP từ những Bản Đề Xuất Hội Ý thành công
**Aavegotchi Improvement Proposal #7**

**Tóm tắt Đề Xuất:** Bọn mình hiện đang có rất nhiều Bản Đề Xuất Hội Ý / Cộng Đồng trên Snapshot và rất nhiều bài viết mới trên diễn đàn mỗi ngày. Hiện tại những bản đề xuất ấy vẫn còn xa mới đạt được mức tối thiểu 20%. Bản đề xuất thịnh hành nhất là của @JG về việc thêm phí trong rarity farming, hiện tại chỉ được 2 triệu GHST (11%) - thậm chí team đã phải quyết định đưa nó lên thành Core Proposal. Sau khi được nâng cấp lên thành Core, chúng ta đã đánh bại mức tối thiểu trong vòng vỏn vẹn 24h.

Bọn mình nghĩ rõ ràng có hai lý do chính cho vấn đề này. Một mặt, Snapshot của chúng ta hiện tại rất rối bời, một số Signal Proposal không theo bản mẫu mà bọn mình đã soạn ra. Mặt khác - và bọn mình nghĩ rằng lý do này quan trọng hơn cả, chính là việc mỗi lá phiếu dành cho Core Proposal sẽ lấy về 20 Kinh nghiệm (XP) cho Gotchi.

Bọn mình đề xuất tặng thêm vào một lượng Kinh nghiệm nhỏ (10 XP) cho bất kỳ những ai đã bỏ phiếu cho những bản Đề Xuất Signal thành công, nghĩa là những bản đề xuất này phải đạt mức tối thiểu và được nâng lên thành Core. Việc chỉ tặng XP cho những bản Đề Xuất Cộng Đồng có thể sinh ra những đề nghị kém chất lượng và việc này sẽ không phải là mục đích của bản đề xuất này.

Cho dù 10 XP không nhiều nhưng nó sẽ khuyến khích mọi người đọc kỹ Bản Đề Xuất Signal và bỏ phiếu cho những bản đề xuất chất lượng có cơ hội đạt mức tối thiểu cao hơn. Với vai trò là DAO, sự tương tác của cộng đồng là cực kỳ quan trọng và tôi tin đây là một bước đi nhỏ như đủ để chúng ta đi đúng hướng.

Nếu bản Proposal này đạt mức tối thiểu và được thông qua, tất cả Aavegotchi của những ai đã bỏ phiếu sẽ được nhận 10 XP!

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://aavegotchi.medium.com/vote-agip7-earn-xp-for-successful-signal-proposals-d5eafdb93aae).

Phương án 1: Vâng, SigProp nào thành công sẽ nhận được XP

Phương án 2: Không, SigProp sẽ không nhận được XP

**Thời gian vote:**12 - 18 tháng Năm 2021

**Kết quả:**

table_agip7

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmctiApzKZHoVsSpzWVfMVL1abRTUNXsoipupNGS52gEuZ)

<hr />

### Quyền bỏ phiếu dựa trên BRS
**Aavegotchi Improvement Proposal #8**

**Tóm tắt Đề xuất:** Thêm quyền bỏ phiếu cho Aavegotchi trong ví của người bỏ phiếu với tỷ lệ 1 GHST mỗi điểm BRS (điểm độ hiếm gốc, không bao gồm các trang phục được mặc).

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://aavegotchi.medium.com/vote-agip8-and-agip9-give-voting-power-to-aavegotchis-and-wearables-9c113373a0a2).

Phương án 1: Vâng, trao quyền bỏ phiếu cho Aavegotchi dựa trên BRS

Phương án 2: Không, Aavegotchi không nên có quyền bỏ phiếu

**Thời gian vote:**11 - 17 tháng 7 Năm 2021

**Kết quả:**

table_agip8

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmZnzgvkEzHvwkYPGLFQLtVvvoMzBXPWhznux1udHzbUim)

<hr />

### Quyền bỏ phiếu dựa trên Giá Trang Phục trong Maall
**Aavegotchi Improvement Proposal #9**

**Tóm tắt đề xuất:** Trao quyền bỏ phiếu của trang phục cho Aavegotchi ở trong tài khoản bỏ phiếu.

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://aavegotchi.medium.com/vote-agip8-and-agip9-give-voting-power-to-aavegotchis-and-wearables-9c113373a0a2).

Phương án 1: Vâng, trao quyền bỏ phiếu cho trang phục dựa trên giá ở Maall

Phương án 2: Không, trang phục không nên có quyền bỏ phiếu

**Thời gian vote:**11 - 17 tháng 7 Năm 2021

**Kết quả:**

table_agip9

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/Qmat7jeAS1W3BBq7yDi2jkHjNoywmUEfrF2FdPiS9CcGHa)

<hr />

### Quan hệ đối tác giữa AavegotchiDAO, Pixelcraft, và DinoSwap
**Aavegotchi Improvement Proposal #10**

**Tóm tắt Đề Xuất:** Một vài thành viên trong cộng đồng khá lo lắng về vấn đề thanh khoản của GHST trên Quickswap đang vơi đi và phần thưởng LP đang sụt giảm. Thay vì chỉ tăng thêm thanh khoản cho quỹ, bọn mình đang xem xem xét hợp tác với dự án một dự án tăng thanh khoản sớm được triển khai có tên gọi là DinoSwap. Điều khoản bao gồm việc cung cấp lượng token GHST trị giá 200k USD vào extinction pool có phần thưởng khuyến khích của họ và chi tiết đã được liệt kê phía dưới đây.

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://dao.aavegotchi.com/t/ghst-liquidity-rewards-on-new-launch-pixelcraft-dao-collaboration/1804).

Phương án 1: Đồng ý, chúng ta sẽ hợp tác với DinoSwap

Phương án 2: Không, không nên hợp tác với Dinoswap

**Thời gian vote:**13 - 20 tháng Năm 2021

**Kết quả:**

table_agip10

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmV3xdUskpTtd6JYyCgV7tjWeBGira2ZPFcdk2YDy3UPHE)

<hr />

### Ban Quản Lý Thanh Khoản / Hội Đồng FRENS
**Aavegotchi Improvement Proposal #11**

**Tóm Tắt Đề Xuất:**

*Vấn đề*

Để khuyến khích thanh khoản trên Quickswap, bạn có thể kiếm thêm phần thưởng FRENS khi stake token LP trên website của Aavegotchi. Dựa trên nguy cơ Tổn Thất Tạm Thời (Impermanent Loss), những con số này có thể thay đổi, mới đầu sẽ là +35% với GHST-QUICK, +20% với GHST=ETH và +10% với GHST-USDC. Do tỷ lệ này cần phải được điều chỉnh bằng tay và giá có thể thay đổi một tý khi đưa ra tỷ lệ, giải thưởng FRENS sẽ khác biệt khá nhiều; GHST-QUICK vào khoảng +90%, trong khi GHST-USDC chỉ được -10%.

*Giải pháp*

Trích lời [coderdan](/team#coder-dan): "Đã có nhiều tranh luận với hội đồng về việc quản lý nhiều phần khác nhau của Aavegotchi, và mình tin chắc rằng đây có thể là một ứng cử viên thú vị cho một cộng đồng như thế. Hiện tại chúng ta có ba cặp được khuyến khích bằng FRENS, nhưng điều này có thể thay đổi trong tương lại."

"Hội đồng" có thể là một chiếc ví nhiều chữ ký với ít nhất chín (có thể tối đa mười lăm) thành viên với danh tiếng tốt trong cộng đồng và tiếp cận rất nhiều với Gotchi. Nhiệm vụ then chốt của Hội Đồng Thanh Khoản là giám sát và điều chỉnh tỷ lệ FRENS để giữ được tỷ lệ đã định sẵn, bằng cách thực hiện việc gọi hợp đồng staking của GHST, vốn chỉ có thể thực hiện bởi vị trí "rateManager" được tạo ra cho hội đồng

Giờ đây hội đồng chỉ nên có một công việc - giữ cho tỷ lệ FRENS được cập nhật. Trong tương lai, nó có thể được mở rộng sang các đối tác, giám sát sự lạm phát điểm FRENS, v. v.

*Ứng viên*

Hai tuần trước, chúng tôi đã tạo ra một bài viết trên Discord (link ở phía trên) dành cho những ai mong muốn ứng tuyển. Kể từ đó, 11 người đã ứng tuyển. Tất cả ứng viên đều đã tham gia vào cộng đồng được một khoảng thời gian và dưa ra những lý do hợp lý để được lựa chọn. Do vẫn nằm trong khoảng 9-15 nên cách dễ dàng nhất chính là tất cả những người muốn tham gia đều sẽ trở thành hội đồng.

Tất cả tuỳ thuộc vào bạn, AavegotchiDAO ơi. Liệu chúng ta có nên thực hiện bước này để phân hoá Aavegotchi và đặt tỷ lệ FRENS vào bàn tay của:

Angst, Jarrod, Kenymccornick, UnfitStone, Notorious_BTC, Doxy, Kokusho, Grip, Almond-Stew, Shanekoy and Moon

[Bài viết Discourse (Ý tưởng/Bản đề xuất)](https://dao.aavegotchi.com/t/committee-idea-liquidity-managers-for-managing-the-frens-s-of-liquidity-pairs/1905)

[Bài viết Discourse (Ứng viên)](https://dao.aavegotchi.com/t/frens-committee-applications/1944)

Phương án 1: Vâng, hãy tạo ra Hội đồng FRENS

Phương án 2: Không, hãy giữ mọi thứ nguyên vẹn

**Thời gian bỏ phiếu:**17 - 25 tháng Năm 2021

**Kết quả:**

table_agip11

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmdLouPY9ipn2ezC2RR5Fjcz8auhX1uLajk9QS8nrctfsY)

<hr />

### Triển Khai Haunt 2
**Core Prop**

**Tóm Tắt Đề Xuất:** Gần đây số lượng Aavegotchi đã bị giới hạn ở mức 10k bởi chỉ có từng ấy Portal Haunt 1 tồn tại. Điều này khiến việc sở hữu được bé Aavegotchi đầu tiên trở nên khá đắt đỏ. Với việc sự kiện Haunt thứ 2 sẽ mở bán thêm 15k Portal, bọn mình mong có thể giải quyết được vấn đề này dù vẫn có thể giữ nguyên được sự độc đáo, tính sưu tập của các Aavegotchi Haunt 1.

Tầm nhìn của chúng tôi về lâu dài chính là ai cũng có thể chơi cùng các NFT, và bước đầu tiên để đạt được điều này chính là bỏ đi những meme về độ hiếm và tập trung vào việc mang đến những trải nghiệm độc đáo cho nhiều người dùng hơn.

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://dao.aavegotchi.com/t/coreprop-launch-haunt-2/2034)

Phương án 1: Có, hãy triển khai Haunt 2

Phương án 2: Không, đừng triển khai Haunt 2

**Thời gian vote:**19 - 26 tháng 7 Năm 2021

**Kết quả:**

table_launchHaunt2

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmTuVnGnZSUC4uWRVQrd3HwmJATtvJVpjNikCkifChyJwY)

<hr />

### Thêm Cơ Chế Trưởng Thành để ảnh hưởng đến điểm độ hiếm của Aavegotchi
**Aavegotchi Improvement Proposal #13**

**Tóm Tắt Đề Xuất:**

*Vấn đề*

Khi các thế hệ haunt mới được hình thành, dù chúng có được sửa lại các yếu tố ảnh hưởng đến việc sinh ra các chỉ số cho gotchi hay không thì số lượng gotchi có BRS cao được sinh ra sẽ rất nhiều. Do bản chất của rarity farming và phần thưởng của nó, sự xuất hiện đó ảnh hưởng cực lớn đến những ai đầu tư nhiều vào những thế hệ gotchi cũ, và những người không muốn bán đi gotchi do đã có sự gắn kết về mặt cảm xúc, hay ý định đầu tư nhiều hơn, hoặc khả năng "flip" sang những gotchi có BRS cao hơn, thuộc những thế hệ haunt sau này (do luật thuế). Hơn nữa, phương sai về chỉ số có thể xảy ra trong những thế hệ haunt mới, khiến cho nó gần như không thể tạo ra những quyết định tài chính lâu dài, do phương sai có thể khiến cho những thế hệ haunt trước đó lỗi thời. Điều này khiến cho mọi thứ phụ thuộc vào "may mắn".

*Giải pháp*

Cơ Chế Trưởng Thành là một bản đề xuất được trình bày lần đầu bởi thành viên Tistou trên Discord, được thiết kế để chỉ ra tất cả những vấn đề đã được đề cập, cũng như tại ra một cơ chế biến đổi mới thú vụ cho những Aavegotchi mà có thể được xây dựng trong tương lai (độ tuổi giới hạn dành cho các hoạt động, trang bị, phẩm chất của ngoại hình, v. v.). Nó tạo ra bước đệm khoảng 6 tháng trong suốt khoảng thời gian mà những gotchi lớn tuổi có được sự tặng trưởng BRS so với những gotchi vừa mới được triệu hồi. Khi những gotchi vừa mới được triệu hồi lớn dần, chúng sẽ nhanh chóng bắt kịp với những đối thủ già cõi hơn.

Trên tinh thần sử dụng những con số xảy ra trong tự nhiên, công thức này được đinh hình sau những số Fibonacci được nhân lên với 1 triệu, nhưng việc loại bỏ đi số 0 và 1 đầu tiên có vẻ hợp lý hơn cho trường hợp này. Đặc biệt, 10 số Fibonacci đầu tiên (thay thế cho số 0 đầu tiên) là 1, 1, 1, 2, 3, 5, 8, 13, 21, 34, có tổng là 89. Dựa theo công thức này thì cứ sau 1 triệu block sẽ được +1 BRS, rồi sau +1 BRS nữa sau 2 triệu block, +1 BRS nữa sau 3 triệu block, +1 BRS nữa sau 5 triệu block,..., đến khi đạt tổng +10 BRS sau 89 triệu block (khoảng 6.5 năm nếu sử dụng thời gian tạo block cơ bản là 2,3 giây -- mức trung bình kể từ ngày 1 tháng Năm).

Giải pháp này giúp tăng chỉ số một cách nhanh chóng chỉ trong một vài epoch, và san phẳng rõ rệt theo thời gian để tránh tình trạng các gotchi trở nên quá mạnh và cho phép những gotchi được triệu hồi gần đây có thể theo kịp chỉ trong 1 lần cộng thêm BRS cho gotchi lớn tuổi và từng trải hơn. Nó mang đến phần thưởng khuyến khích cho việc mở và triệu hồi gotchi từ cổng thay vì cứ khăng khăng giữ chúng, cả hai việc đều giúp tăng trưởng nền kinh tế trong game cũng như độ hiếm cũng chiếc cổng vẫn được giữ nguyên không mở. Hơn hết, đây là một hệ thống công bằng, không mang đến lợi ích cho riêng thế hệ haunt nào cả, và đơn giản là tưởng thưởng cho sự tương tác lâu dài, cũng như chống lại hiệu ứng của việc thay đổi mạnh mẽ và bất thình lình mà chúng ta đang thấy gần đây.

*Điều chỉnh Giải pháp*

* **Việc tích hợp sẽ được điều chỉnh nhẹ nhàng để có thể sử dụng những dữ liệu thời gian sinh ra on-chian thay vì block number, ** với thời gian epoch được định sẵn bằng cách sử dụng những con số fibonacci được đề xuất trong sigprop và thời gian tạo block trung bình trong hiện tại. Điều này khiến cho việc tích hợp trở nên đơn đơn giản hơn, cho phép tạo ra những dòng thời gian dễ dự đoán (do mẫu số block time là một hằng số, ngược lại với biến số dựa trên hoạt động on chain), cũng như để đảm bảo chức năng của cơ chế nếu bất kỳ vấn đề cấu trúc hoặc mạng lưới blockchain nào thay đổi trong tương lai. Những khoảng nghỉ trong thời gian pet sử dụng thời gian thực, vậy nên một tiền lệ cho việc này đã tồn tại.

* **Mức tối đa 10 BRS đã được bỏ đi.** Bản thân các khoảng nghỉ fibonacci là một giới hạn tự nhiên, khi thời gian để chạm đến một epoch tiếp theo xấp xỉ với một hàm số mũ. Ví dụ, sẽ mất hơn 4 năm để được cộng thêm BRS (+11 tổng cộng), sau đó là 6,5 năm nữa, rồi sau đó là 10,5 năm nữa, v. v.

* **Sự tích hợp này sẽ diễn ra vào lúc Rarity Farming Mùa 2 bắt đầu.** Một trong những mục đích của cơ chế trưởng thành là mang đến một bước đệm cho hiệu ứng của phương sai số liệu một khi thế hệ haunt mới được công bố. Để Haunt 1 có thể trải nghiệm xem việc này có mang lại tác dụng gì không thì nó cần phải được triển khai càng sớm càng tốt, bởi vào giữa màu 2, các gotchi H2 đều gần như sẽ đuổi kịp chỉ số cộng thêm của H1, và cách biệt chỉ 1 2 điểm BRS mà thôi.

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://aavegotchi. medium. com/agip13-should-aavegotchi-introduce-an-aging-boost-5ee12e8c9f0)

Phương án 1: Vâng, tích hợp cơ chế trưởng thành

Phương án 2: Không, đừng tích hợp lúc này

**Thời gian vote:**2 - 9 tháng Mười 2021

**Kết quả:**

table_agip13

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmcAQLdAyS9n7LWDu9qvRtdNqJa7FBStadrHq3xqjW9kCT)

<hr />

### Kiếm FRENS với token LP GHST-MATIC
**Aavegotchi Improvement Proposal #14**

**Tóm tắt Đề Xuất:** Polygon là một trong những lý do chính đứng sau thành công của Aavegotchi. Phí giao dịch cực thấp được thanh toán bằng MATIC đã cho phép đội ngũ phát triển một trò chơi với rất nhiều hoạt động diễn ra trên blockchain ví dụ như pet, đấu giá kiếm tiền, giao dịch trên Baazaar, và lưu trữ đồ hoạ của game Aavegotchi.

Vào đầu tháng Chín, Sushiswap đã bắt đầu phần thưởng 2x SUSHI để người dùng có thể farm từ cặp token LP GHST-MATIC trên Sushiswap.

Biệt Đội FRENS khuyến nghị về việc cho mang đến phần thưởng FRENS cho cặp LP GSHT-MATIC trên AMM.

Bọn mình khuyến nghị rằng tỷ lệ FRENS xác định được trả cho cặp LP GHST-MATIC lớn hơn so với phần thưởng đã xác định dành cho cặp LP GHST-ETH (120%) nhưng sẽ thấp hơn phần thưởng xác định dành cho cặp GHST-QUICK (135%).

Điều này là do nguy cơ Impermanent Loss (IL) dành cho GHST-MATIC cao hơn so với GHST-ETH nhưng thấp hơn so với GHST-QUICK. Bọn mình khuyến nghị mức xác định dành cho cặp LP GHST-MATIC là 130%.

Gần đây, phần lớn thành khoản dành cho GHST đều nằm ở Quickswap.

Hãy xem qua [https://frens-taaskforce.vercel.app/](https://frens-taaskforce.vercel.app/)

Điều này mang đến một cơ hội lớn để di chuyển một lượng thanh khoản đến cho AMM Sushiswap được sử dụng rộng rãi và giảm đi sự phụ thuộc vào Quickswap.

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://dao.aavegotchi.com/t/frens-incentive-for-matic-ghst-lp-pair-on-sushiswap/2336)

Phương án 1: Đúng, tặng FRENS cho GHST-MATIC

Phương án 2: Không, đừng đưa FRENS

**Thời gian vote:**12 - 19 tháng Mười 2021

**Kết quả:**

table_agip14

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0x42914b268d255efe0eea943d052e5dc7eab0cbbcde9d3cb809f027e3ea1f611f)

<hr />

### Thành Lập Biệt Đội Trang Phục
**Aavegotchi Improvement Proposal #15**

**Tóm Tắt Đề Xuất:**

*Động Lực*

Trong hệ sinh thái của Aavegotchi, trang phục đóng một vài trò quan trọng, vừa có khả năng tăng BRS trong rarity farming, tăng chỉ số trong minigame, khả năng đa dụng trong metaverse sắp tới, hoặc chỉ trang trí cho đẹp. Do sự phức tạp trong loạt chỉ số khả dĩ khác nhau của gotchi, và những chỉ số trang phục khác nhau, việc phân phối cân bằng các trang bị mặc được không phải là dễ dàng. Việc mang đến những trang bị mới mà không phân tích kỹ lưỡng có thể dễ dẫn đến việc trùng lặp (và bị loãng) các trang phục đang tồn tại và pha loãng thêm các tập hợp có thể áp dụng thực tế cho gotchis có phạm vi tính trạng theo những hướng nhất định.

*Chi Tiết*

Bản đề xuất này đề nghị tạo ra một Biệt Đội Trang Phục (WTF), ý tưởng này khởi nguồn từ những cuộc thảo luận liên quan đến những vấn đề trên. Tương tự Bội Đội FRENS, mục tiêu của WTF là hỗ trợ Pixelcraft trong việc phân tích sự phân bố hiện tại của bác vật phẩm nằm trong hệ sinh thái, từ ô đồ, độ hiếm, điểm điều chỉnh, và cách phân tích tốt nhất có thể áp dụng cho những vật phẩm trong tương lai. Biệt Đội này sẽ KHÔNG có khả năng định hướng vật phẩm sắp tới sẽ dược bán bằng cách nào và đó là gì, nhưng sẽ hoạt động hoàn toàn theo hướng cố vấn.

*Ứng cử viên*

Các ứng cử viên cho Biệt Đội này bao gồm những thành viên kỳ cực trong cộng đồng với nhiều kỹ năng có thể ứng dụng được, bao gồm kỹ năng phân tích số liệu, lập trình và kinh nghiệm lăn lộn trong hoạt động của baazaar, và kinh nghiệm từng làm việc với DAO. Biệt Đội này sẽ hưởng nhiều quyền lợi khi có càng nhiều tiếng nói và góc nhìn, vậy nên tất cả các ứng viên đều được tham gia. Việc thành lập Biệt Đội này sẽ là một bước tiến lớn đến việc tạo ra một hệ sinh thái cân bằng và giúp cho AavegotchiDAO trưởng thành.

**Danh sách tất cả ứng cử viên:** Kuwlness, JG1 (Fantasma#1777), Bearded, Actaeon, Thunderfish, Letsgobankless, Kokusho, Ader1990.eth, Machete, Aimo217 (AL#4105), Notorious_BTC, MonsterRNG, Goobz, Diddlypoo

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://dao.aavegotchi.com/t/wearables-taask-force/2350)

Phương án 1: Vâng, hãy thành lập WTF

Phương án 2: Không, đừng thành lập WTF

**Thời gian vote:**12 - 19 tháng Mười 2021

**Kết quả:**

table_agip15

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0xa1f06ffcdd5f5d51c5f82022e8a25ecc7672252f8a47d9ee484b9fe3b6cd5b3a)

<hr />

### Stake 100k GHST để tạo ra phần thưởng cho Minigame
**Aavegotchi Improvement Proposal #16**

**Tóm Tắt Đề Xuất:** Một vài người bạn đã cho thấy sự quan ngại về việc thiếu đi phần thưởng khi tham gia vào các sự kiện Minigame. Do hiện tại không có Biệt Đội Aarcade với ngân sách được chỉ định nên Gotchinomics đã nghĩ về việc stake 100k GHST vào Ngân Quỹ để hỗ trợ cho các phần thưởng trong tương lai.

*Vấn đề*

Aavegotchi mong muốn trở thành một trong những dự án PlaytoEarn trong giới gaming, và việc triển khai Gotchiverse Realm chính là nền tảng để đạt được mục tiêu dài hạn này. Tuy nhiên, vẫn có thể cải thiện những khả năng trong ngắn hạn thông qua những sự kiện gaming theo mùa. Vấn đề chủ yếu ở đây là thiếu ngân sách.

*Giải pháp*

Trước khi tạo ra một DAO dành riêng cho Aarcade, bước đầu tiên cho mang đến phần thưởng play2earn để tạo ra một nguồn tiền bền vững. Một phương pháp đơn giản và ít rủi ro là stake một phần ngân quỹ DAO, khoảng tầm 100k GHST, để tạo ra FRENS. Số tiền ấy có thể chuyển thành vé xổ số và mang tặng cho những người tham gia chơi mini game thông qua những sự kiện theo từng thời điểm.

*Các nguy cơ hiện hữu*

Stake GHST sẽ làm hòa tan một cách gián tiếp tỷ lệ giữa FRENS và vé. Tuy nhiên, do chúng được phân bổ thông qua phần thưởng mini game nên ảnh hưởng của nó sẽ tối thiểu so với khả năng tăng tương tác và thu hút người chơi mới.

*Lựa chọn thay thế*

Đợi đến khi Aarcade DAO triển khai và để cho ủy ban mới quyết định cách phân bố ngân quỹ. Tuy nhiên, phương án thay thế này có thể sẽ làm mất đi khoản thời gian quý báu mà trong đó chúng ta có thể tạo ra nhiều phần thưởng hấp dẫn hơn.

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://dao.aavegotchi.com/t/creation-of-an-aarcade-dao/2128)

Phương án 1: Đồng ý, stake 100k GHST

Phương án 2: Không, hãy đợi Aarcade DAO

**Thời gian vote:**10 - 17 tháng Mười Hai 2021

**Kết quả:**

table_agip16

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0xd654255f22e694369686e9791ff663f38a9f586bd4126831fc9d8ce384208964)

<hr />

### Tăng Sức Mạnh Bỏ Phiếu Cho REALM Parcel
**Aavegotchi Improvement Proposal #17**

**Tóm Tắt Đề Xuất:**

*Vấn đề:*

Với một dạng tài sản mới được thêm vào gia đình Aavegotchi dưới dạng các ô đất realm, một số lượng GHST mới được sinh ra. Việc này hiện tại khiến cho những ai đầu tư thật nhiều vào những ô đất mới sở hữu ít sức mạnh bỏ phiếu hơn nhiều trong Aavegotchi DAO.

*Giải pháp:*

Do những ô đất realm và Gotchiverse là những phần không thể thiếu của hệ sinh thái Aavegotchi nên mình tin rằng chỉ khi nào những người sở hữu realm có được một lượng sức mạnh tương ứng với số lượng ô đất mà họ sở hữu thì mới hợp lý. Điều này đảm bảo rằng ý kiến của tất cả mọi người đều sẽ được lắng nghe, và đó là một phần đặc biệt quan trọng trong những bản đề xuất tương lai, liên quan đến Gotchiverse.

Do mỗi ô đất đều có một kích thước pixel và cũng là thước đo cho số lượng khoáng sản bên trong mỗi ô đất, bản đề xuất mang đến những phương án sau đây:

1 pixel = 1 GHST sức mạnh bỏ phiếu (64, 256, 2056) HOẶC 1 pixel = 0,5 sức mạnh bỏ phiếu (32, 128, 1028)

Một phương pháp thay thế ở đây là mang cho mỗi ô đất một sức mạnh bỏ phiếu ngang bằng, dựa trên giá sàn đấu giá, người sở hữu vừa có một lượng sức mạnh vừ phải, vừa đảm bảo rằng tất cả đều có tiếng nói cho mình.

Phương án này sẽ mang đến lần lượt 100, 200, và 1300 GHST cho gói đất humble, reasonable, và spacious.

*Chỉnh sửa cho CoreProp*

Phương án "giá sàn Đấu Giá" đã được thêm vào. Điều này mang đến cách biệt số phiếu lên đến 20%, nghĩa là bất kỳ phương án nào cũng phải cao hơn 20% so với phương án cao thứ hai để được thông qua.

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://dao.aavegotchi.com/t/voting-power-for-land-plots/2508)

Phương án 1: 0,5 GHST sức mạnh vote cho mỗi pixel

Phương án 2: 1 GHST sức mạnh vote cho mỗi pixel

Phương án 3: Sức mạnh vote dựa trên giá sàn đấu giá

Phương án 4: Không trao sức mạnh bỏ phiếu cho REALM

**Thời gian vote:**10 - 17 tháng Mười Hai 2021

**Kết quả:**

table_agip17

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0x28b630e088240ee4bb4e680b071767b98b962a4006c71e71f00c782b86adfbab)

<hr />

### Gotchiverse Patch v0.1
**Aavegotchi Improvement Proposal #18**

**Tóm Tắt Đề Xuất:**

*Vấn đề:*

Dù Gotchiverse vẫn chưa lên sóng nhưng bọn mình đã xác định được một vài khu vực mà bọn mình tin rằng nên được điều chỉnh trước khi game ra mắt, và muốn những khía cạnh này nhận được sự chú ý của cộng đồng để thảo luận và quyết định xem có nên thực thi hay không.

Để đảm bảo không có thay đổi nào khiến đảo lộn cả lô cập nhật, ban đầu chúng tôi đã tạo ra sáu bản đề xuất SigProp riêng. Bản CoreProp này kết hợp các bản SigProp đã thành công vào trong Bản vá Gotchiverse v0.1!

*Giải pháp:*

Bản vá 0.1a

Sau khi bọn mình đã hoàn tất các chi tiết then chốt ví dụ như giá xây dựng và mức độ xây dựng trong bản Whitepaper sắp tới, bọn mình đã khám phá ra một trong những dự đoán chủ yếu của bọn mình đã đánh giá thấp số lượng Alchemica trong mỗi gói đất về mặt tổng số lượng. Bản vá sẽ giúp tăng lượng Alchemica của mỗi gói đất để chúng phù hợp với lượng token Alchemica, sự phân bổ, và mức xuất ban đầu.

Bản SigProp dành cho Bản vá 0.1a được thông qua với các con số như sau:

Yes: 13. GHST

No: 41.85k GHST

Bản vá 0.1b

Dù ý định ban đầu của bọn mình là làm cho boost chỉ có giá trị sử dụng một lần, nhưng rõ ràng nhiều thành viên trong cộng đồng lại hiểu rằng boost có thể tái tạo. Bản vá này sẽ cho phép boost tự tái tạo sau mỗi trận Đại Chiến.

Tuy nhiên, không giống như các gói đất, mức độ tái tạo là một số lượng cố định ở mỗi vòng. Ví dụ, một gói đất với "5" FUD tăng cường sẽ được tăng 5 FUD mỗi vòng.

Bản SigProp dành cho bản vá 0.1b cũng đã được thông qua một cách thuyết phục:

Yes: 10.36M GHST

No: 2.37M GHST

Bản vá 0.1c

Thậm chí khi Bản Vá 01. b đã được thông qua, boost vẫn sẽ có giá trị thấp nếu so với giá trị mà thị trường đã gán cho chúng, nếu so với một gói đất tương tự mà không có boost. Bản vé 0.1c đã đề xuất về việc tăng cường boost lên 5x để mang giá trị của boost đến gần hơn giá trị hiện tại trên thị trường.

Bản SigProp dành cho Bản vá 0.1c đã không thông qua và SẼ KHÔNG NẰM TRONG Bản vá v0.1:

Yes: 5.85M GHST

No: 8.04M GHST

Những bản SigProp trong tương lai sẽ được tạo ra để giải quyết từng phần của vấn đề này.

Bản vá 0.1d

Gotchiverse Litepaper đã đề cập rằng Kinship sẽ được trao đổi thành một lượng Alchemica, nghĩa là "đốt" kinship. Bọn mình chắc chắn muốn duy kỳ ý tương về việc dùng kinship để truyền nhưng sau khi suy nghĩ sâu hơn, giờ bọn mình tin rằng có cách tốt hơn để đạt được việc này.

Một giải pháp "thành tựu" không yêu cầu phải xóa kinship của Aavegotchi đã được đề xuất. Thay vào đó, những Aavegotchi có kinship cao sẽ truyền Alchemica ở mức cao hơn một chút, tùy vào mức thành tựu.

Bản SigProp dành cho Bản vá 0.1d cũng sẽ được thông qua:

Yes: 12.64M GHST

No: 431.93k GHST

Bản vá 0.1e & 0.1f

Các quận không tồn tại khi Citaadel trong bản Litepaper được xuất bản lần đầu. Khi nói vậy, bọn mình luôn tìm một khu vực hoặc nhóm khu vực dành cho Pixelcraft để phát triển những trải nghiệm chuyên sâu có thể tăng giá trị tổng thể của game. Tương tự, một trong những ý tưởng ban đầu (Citaadel trước khi nó được như hiện tại) là giữ lại một quản trường để có thể bỏ phiếu DAO theo thời gian thực. Ý tưởng về việc có được những trải nghiệm quản trị được game hóa đã là một phần trong những ý tưởng đầu tiên, giúp ươm mầm cho chu cầu sở hữu một thế giới ảo dành riêng cho Aavegotchi.

Bản Vá 0.1e & 0.1f đề xuất phân phối 1000 gói đất cho Pixelcraft và AavegotchiDAO tại quận 27/30. Cả hai Bản Vá đề đã được thông qua một cách thuyết phục:

Yes: 11.94M GHST / 12.14M GHST

No: 615.78k GHST / 734.92k GHST

Tổng kết

Và đó là tất cả nội dung của Bản Vá Gotchiverse đầu tiên! Giờ đây sẽ tùy thuộc vào bạn, AavegotchiDAO, để quyết định xem Patch v0.1 sẽ được tiến hành hay không.

Phương án 1: Vâng, tiến hành bản vá v0.1

Phương án 2: Không, đừng tích hợp Bản vá v0.1

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://dao.aavegotchi.com/t/gotchiverse-paatch-v0-1-thread/2791)

Phương án 1: Vâng, tiến hành bản vá v0.1

Phương án 2: Không, đừng tích hợp Bản vá v0.1

**Thời gian vote:**5 - 12 tháng Mười 2022

**Kết quả:**

table_agip18

[Đường link vote trên Snapshot](https://vote.aavegotchi.com/#/proposal/0x396844d504394f7f335f070d443c33455300ee21d90db6c4b089760a3e0469bf)

<hr />

### Cung cấp thanh khoản cho GHST trên SyncFutures
**Aavegotchi Improvement Proposal #19**

**Tóm Tắt Đề Xuất:**

Kể từ khi Aavegotchi thu thập được nhiều thanh khoản trên các sàn DEX dạng Spot thì giờ đã đến lúc để tạo và tăng cường cho thị trường giao dịch Tương Lai. Các thị trường phái sinh tạo nền khối lượng giao dịch toàn cầu cực lớn và cho phép người dùng tận dụng khoản đầu tư của mình. Việc thêm thanh khoản cho GHST trên SynFutures cho phép người chơi tận dụng longs (shorts) trên thị trường tương lai của Aavegotchi. Nhưng tại sao lại là SynFutures?

Những nhà đầu tư và background khủng SynFutures được đỡ đầu bởi Polychain, Pantera, Dragonfly, Framework, Standard Crypto, Woo, và nhiều hơn nữa. Background của team là sự kết hợp mạnh mẽ giữa tài chính truyền thống và DeFi. SynFutures là dự án duy nhất có thể hỗ trợ niêm yết bất kỳ tài sản nào, bởi bất kỳ ai, theo dạng mở (trong vòng 30 giây).

An Ninh Được đỡ đầu bởi kinh nghiệm từ kỹ sư tài chính TradFi và sự an ninh của giao thức DeFi, SynFutures có rất nhiều uếu tốt quản trị rủi ro (ví dụ như tất công flashloan, và phương thức EMA mượt mà, v.v.) và đã trải qua nhiều vòng kiểm định code từ bên ngoài.

Dễ dàng quản lý và bắt đầu sử dụng SynFutures hỗ trợ mô hình một token để thêm thanh khoản, nghĩa là Aavegotchi Treasury chỉ cần gửi GHST thay vì gửi hai loại token và gặp phải nguy cơ tổn thất tạm thời. Bọn mình xin một khoảng GHST trị giá 200k USD để bắt đầu pool. Thanh khoản có thể được rút bất kỳ lúc nào.

Tiềm Năng Phát Triển Khối lượng giao dịch và người dùng đang tăng lên nhanh chóng trên SynFutures. Trong ba tháng qua kể từ khi SynFutures Alpha được triển khai, bọn mình đã đạt được 47k người dùng và 1 tỷ khối lượng giao dịch. Tất cả việc này xảy ra mà không cần có token SynFutures, vốn có thể thu hút nhiều người dùng hơn.

Phân tích khối lượng Quickswap vs SynFutures: Tổng LP: 150k / 40k Tổng số trader: 100k / 20k Khối lượng giao dịch hàng ngày: $100M / $29M

Khối lượng giao dịch của SynFutures bằng 1/3 giao dịch trên Quickswap, số lượng trader bằng 1/5, tuy nhiên khối lượng giao dịch cho mỗi cặp có phần tập trung hơn. SynFutures có 108 cặp giao dịch trong khi Quickswap có hơn 22k cặp. Ví dụ, khối lượng giao dịch hàng ngày của MATIC-USDC trên SynFutures đóng vào khoảng 9 triệu USD, trong khi đó Quickswap đạt 14 triệu USD.

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://dao.aavegotchi.com/t/provide-ghst-as-liquidity-on-the-derivatives-dex-synfutures/2664)

Phương án 1: Đồng ý, stake GHST trị giá 200k USD

Phương án 2: Không đồng ý stake GHST trị giá 200k USD

**Thời gian vote:**2 - 9 tháng Hai 2022

**Kết quả:**

table_agip19

[Đường link vote trên Snapshot](https://vote.aavegotchi.com/#/proposal/0x560e97ce27e9c99470a0a609e36d4c4cd20e948eae92691ea2ba2afb984e7e41)

<hr />

### Thành lập Biệt Đội DAO Treasury
**Aavegotchi Improvement Proposal #20**

**Tóm Tắt Đề Xuất:**

Bọn mình đề xuất tạo ra Biệt Đội DAO Treasury (DTF). Hội đồng ban đầu sẽ bao gồm 8 thành viên với thâm niêm tham gia DAO trong vòng 6 tháng.

Vào ngày 12/07/2021, DAO Treasury (https://aavegotchi.com/treasury) có lượng DAI và GHST trị giá khoảng ~$11,408,400. Ban đầu, hội đồng sẽ thành lập các bản đề xuất về vấn đề mà DAO quan tâm và sau đó sẽ bỏ phiếu và nếu được thông qua thì sẽ được thi hành.

Tuyên bố Sứ mệnh

Biệt Đội Aavegotchi DAO là một hội đồng năng nổ được chỉ định để tạo ra các bản đề xuất quản lý ngân quỹ của DAO để cộng đồng và DAO có thể suy xét. Nhiệm vụ và mục tiêu ban đầu sẽ là: 1) Tăng và tối ưu ngân quỹ DAO với trọng tâm về an toàn, an ninh và minh bạch; 2) Hợp tác với Pixelcraft để hỗ trợ các công cụ phát triển và xác định và nền tảng cho việc quản lý DAO Treasury đang diễn ra, và 3) hỗ trợ và đảm bảo sự phát triển chung của cộng đồng Aavegotchi bằng cách tăng sự quan tâm, chủ động quản bá sự nhận biết, và duy trì sự tương tác của người dùng.

Ngân sách ban đầu

Sau cuộc thảo luận dài với biệt đội, cộng đồng, và cùng với coderdan, DTF muốn yêu cầu ngân sách 50k GHST. Ngân sách 50k GHST sẽ được chuyển từ Ngân Quỹ DAO sang chiếc ví Gnosis Safe với 8 chữ ký đồng thuận. Ngân sách này sẽ mở rộng sự linh hoạt của DAO một cách đáng kể trong việc khuyến khích và tặng thưởng cho cộng đồng, lập trình viên, nhà sáng tạo, và những người đóng góp chung. Ngân sách này sẽ không bao giờ được dùng để thưởng cho các thành viên trong DTF. Động lực chính của DTF sẽ là thành lập một bản đề xuất dành cho công dụng chung của DAO Treasury bằng cách đầu tư một ít trong số DAI/GHST trị giá 10 triệu USD trong các cơ hội sinh lãi suất. Với sự phát triển hiệu quả của Ngân Quỹ DAO, thậm chí những lợi nhuận khiêm tốn nhất cũng đủ để chi trả cho những yêu cầu ngân sách từ DTF. DTF sẽ đảm bảo việc kế toán dễ hiểu và cung cấp cho cộng đồng các tài liệu đối chứng để đảm bảo tính minh bạch. Một số công dụng tiềm năng từ ngân sách này bao gồm:

* Thưởng cho sự tương tác cộng đồng và trò chơi aaracde
* Thưởng cho các lập trình viên và nhà phát triển
* Thưởng cho các lập trình viên phát triển ứng dụng cộng đồng
* Thưởng cho các cống hiện nghệ thuật được cộng đồng công nhận
* Thưởng, công nhận, và phát triển mạng lưới content creater và những nỗ lực chung trong việc marketing
* Mở rộng Aavegotchi và những cơ hợi của GHST trong các ứng dụng tài chính phi tập trung

DTF đang phát triển một kế hoạch chi tiết và nhiều dự án pilot tiềm năng để có thể tận dụng tốt nhất những quỹ này. Bọn mình sẽ làm việc để phát triển các công cụ nhằm tối ưu hóa sự minh bạch trong việc sử dụng ngân sách. Chi phí nằm trong khoảng 50k GHST sẽ không cần sự đồng ý từ DAI để sử dụng nhanh nhất khoảng tiền này. Bất kỳ khoảng tiền nào được yêu cầu mà lớn hơn 50k GHST sẽ cần phải có sự bỏ phiếu từ DAO.

8 thành viên ban đầu của DTF

* BowtiedNerd
* Mori
* letsgobankless
* Addison
* Deucehearts
* BackfireCapital
* Swappi
* Dr Wagmi

Bọn mình rất biết yên sự hỗ trợ của cộng đồng Aavegotchi và mong chờ bản đề xuất đầu tiên của bọn mình.

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://dao.aavegotchi.com/t/establish-the-dao-treasury-taask-force/2460)

Phương án 1: Vâng, với ngân sách 50k GHST

Phương án 2: Vâng, nhưng không có ngân sách 50k GHST

Phương án 3: Không, đừng tạo ra DTF

**Thời gian vote:**2 - 9 tháng Hai 2022

**Kết quả:**

table_agip20

[Đường link vote trên Snapshot](https://vote.aavegotchi.com/#/proposal/0x17f3eec096b26e87b3441f7cad53108f6933fd32ac67417de6ef7c94970502e4)

<hr />

### Thêm GHST vào Cầu Umbria Narni
**Aavegotchi Improvement Proposal #21**

**Tóm Tắt Đề Xuất:**

Umbria Narni Bridge đã tích hợp GHST token, và đang giúp hỗ trợ quá trình chuyển dịch GHST cực rẻ giữa Ethereum <--> Polygon, nếu so sánh với cầu chính thức của Polygon. Umbria Narni tính phí chuyển mạng vòa khoảng 1/2 so với cầu chính thức của polygon và thâm chí là nhanh hơn rất nhiều (4 phút, so với > 1 giờ).

Umbria Narni có thể chuyển tối đa 20% tổng số GHST thanh khoản trong mỗi lần chuyển. Ví dụ, với lượng token GHST 100k có trong một bên của pool, cầu có thể chuyển tối đa lượng GHST trị giá 20k USD trong mỗi giao dịch.

Hiện nay đang có lượng token GHST trị giá 14000 USD mỗi bên. Số tiền này chủ yếu được tài trợ bởi Umbria. Điều này đã cho phép chiếc cầu có thể chuyển tối đã lượng GHST 700 USD mỗi giao dịch - vốn rất tốt, nhưng bọn mình để ý rằng nhiều người muốn chuyển nhiều hơn trong mỗi giao dịch.

We propose the Aavegotchi DAO add $100,000 of GHST to each bridge pool (1. Polygon and 2. Ethereum). There are a few advantages for doing so:

The Aavegotchi DAO will earn a 0.2% bridging fee whenever anyone uses the bridge to migrate GHST tokens between Ethereum <--> Polygon. So across time, the Aavegotchi DAO will make money. If the Narni bridge ever becomes an unnecessary solution, the Aavegotchi DAO can easily remove their liquidity and enjoy their profit.

Transactions up to approximately $21,000 of GHST will now be possible.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/add-ghst-stake-to-the-umbria-narni-bridge/2836)

Option 1: Yes, add $200k GHST

Option 2: No, do not add any GHST

**Voting Period:** 8 - 15 February 2022

**Kết quả:**

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0xeaac981066e143c46c7a616d2e6ff004d7d4d354005e077f01e3698041e4780a)

<hr />

### Triển Khai Rarity Farming Mùa 3
**Aavegotchi Improvement Proposal #22**

**Tóm Tắt Đề Xuất:**

*Vấn đề*

Currently, Rarity Farming Seasons happen sporadically and are difficult to account for in the cadence of Aavegotchi releases. It leaves investors wondering if they should hold onto their Gotchis and Wearables, or if they might find better ROI flipping into the next rounds. It would be desirable to have a bit of certainty / predictability for both investor sentiment and for planning purposes.

*Giải pháp*

If possible funding-wise, Rarity Farming should happen three times a year. It would fit in with the seasonal nature we are already following, and if properly planned could be sustainable based on GBM Sales in-between seasons, Treasury revenue via staking and partnerships (such as the Umbra Bridge proposal), and other streams of revenue such as DAO Grants. The author of this proposal believes Rarity Farming is an essential part of the Gotchiverse ecosystem, and something to build out and improve upon rather than scrap.

*Phân Phối*

For Season 3, I suggest we go back to the standard reward ratio, as was tried and tested in Rarity Farming Season 1. The rookies of the similarly named rookie board are now all grown up and ready to compete with the big boys. This would mean 70% of payouts go to the BRS leaderboard, 20% to the Kinship leaderboard and 10% to the XP leaderboard.

Based on Forum discussions this would be the final model for SZN3:

* 4 Rounds (2 weeks each)
* 1.5 Million GHST Rewards Pool (1.4m GHST funded already)
* 70% BRS
* 20% Kinship
* 10% XP
* Top 5k Gotchis (20%) → Top 7.5k Gotchis (30%)
* 3 Seasons per Year (approx. schedule below)
* SZN 3: February - March
* SZN 4: June - July
* SZN 5: October - November

Updated Rewards Sheet: [Rarity Farming SZN 3 Distribution Model](https://docs.google.com/spreadsheets/d/1jH6IEJ7Xu_YvblgEPX9UpT-phLelJ5XsmknkaxQOg7A/)

Since there is a ~100k GHST discrepancy between the proposed amount to be distributed and GHST currently in the rewards pool, this proposal includes a funding request for the remaining amount to be taken out of the AavegotchiDAO Treasury.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/season-3-for-q1-2022/2779)

Option 1: Yes, launch RF SZN 3

Option 2: Yes, but different params

Option 3: No, don't launch RF SZN 3

**Voting Period:** 8 - 15 February 2022

**Kết quả:**

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0x5ffa4d3b8f4c1d744424af5c0f079ebfa286c9aec9c35e898c2c02bee87a0b60)

<hr />

### Đồng Tài Trợ Cho Quỹ GoodGhosting
**Aavegotchi Improvement Proposal #23**

**Tóm Tắt Đề Xuất:**

*What is GoodGhosting?*

GoodGhosting is a no-loss savings game, built on top of Aave. We launched our very first DeFi savings pools on Polygon, during the summer of 2021. So far, we have helped over 7000 users to save over $600k worth of assets on Polygon. All while collecting some nice NFTs and climbing our leaderboard.

The GoodGhosting team believes in a world where saving is rewarding, easy and fun. Yet, traditional saving is none of that. We build decentralized social saving applications that combine game design elements with goal-based saving. We want to help our community to develop better financial habits, and have fun at the same time.

*Potential collaboration*

We want to expose the GoodGhosting community to Aavegotchi, by introducing an Aavegotchi-themed savings pool. This pool will require players to save in GHST tokens, and earn them more GHST on top. We see it as a fun opportunity to cross-pollinate the GoodGhosting and Aavegotchi communities.

Aavegotchi is a one-of-a-kind project we have been keeping a close eye on from the very start. Both as players and as ecosystem residents. In our opinion, it envisions everything that DeFi and Web3 is about 👻

Besides inviting all Aavegotchi users and the DAO itself to participate in the upcoming GHST savings pool, GoodGhosting would like to request the AavegotchiDAO to consider co-sponsoring this pool.

*Our Request*

* A total of 7000 GHST in sponsorship for this savings pool. To be shared between all winning players.
* The ability to reward successful savers with Gotchi XP, or alternatively FRENS. Considering GoodGhosting an extensive mini-game that encourages people to stack more GHST.
* An allocation of Aavegotchi NFTs (worth up to 3000 GHST) to be raffled to random participants and/or to all winners. These could be Wearables, Gotchi’s, Raffle tickets or Realm parcels.

These could either be provided by the AavegotchiDAO, or alternatively purchased by the GoodGhosting team on the Bazaar. For these additional incentives, we hope to provide benefits to a small handful of lucky winners (via a raffle system), and/or a smaller reward that is feasible to be delivered to all winners.

*What can GoodGhosting bring to the table?*

* Up to 4000 WMATIC tokens in sponsorship (from our DeFiForAll grant). To be shared between all winning players.
* An influx of new users into the Aavegotchi ecosystem. So far over 20500 users joined our Celo and Polygon savings pools. Most have not yet been exposed to Aavegotchi or GHST, and many are likely to join the Gotchigang.
* We will create a YouTube video explaining Aavegotchi, and how to obtain the GHST token on Polygon. Directed at our community members.
* We will allow users to play GoodGhosting using their Aavegotchis as avatar. This will show up in the shared ‘Players’ tab, as well as in the individual player profiles on Goodghosting.com
* Some very special NFTs by our in-house artist Mali3D
* An increased GG score for all successful savers

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/aavegotchidao-x-goodghosting-collaboration-request/2975/)

Option 1: Yes, 10k GHST for rewards + XP

Option 2: Yes, but under different terms

Option 3: No, do not support GG

**Voting Period:** 9 - 15 February 2022

**Kết quả:**

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0xdef7d35ea26832b4edffda176458f86744f402d7db151993ffe34f8122da7113)

<hr />

### Đặt tên cho cho Chợ Trao Đổi Vật Phẩm Aavegotchi
**Vote bằng Snapshot**

**Tóm tắt Bản Đề Xuất:** Chợ Trao Đổi NFT của Aavegotchi nên được gọi là gì?

Aavegotchi sẽ khởi chạy khu chợ NFT của riêng mình trên Polygon khi game khởi chạy!

Vậy ta nên gọi khu chợ chính chủ của Aavegotchi là gì nhỉ?

Lựa chọn A: Aavegotchi Baazaar

Lựa chọn B: Aavegotchi Maarket

Lựa chọn C: Không chọn 2 đáp án trên

Số phiếu tối thiểu để bản đề xuất này được thi hành là 500.000 GHST. Nếu không đạt được số phiếu tối thiểu này thì Pixelcraft sẽ chọn.

Nếu lựa chọn C được bầu nhiều nhất thì mấy fen nên chuẩn bị trước đáp án thay thế đi nhá!

**Thời gian vote:**8 - 11 tháng Hai 2021

**Kết quả:**

table_marketplaceName

[Đường link vote trên Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmRiRaQuwLuNr88yxvX61vtKM56NrY3KaMk4bk6w7g47fy)

<hr />

### Khả năng nhận FRENS khi stake token LP của GHST-USDC

**Vote bằng Snapshot**

**Tóm tắt Đề Xuất:** Stake GHST-USDC LP token thì có thể nhận FRENS được hay không?

Chương trình dịch chuyển thanh khoản của bọn mình đang thành công rực rỡ với hơn 8 tr GHST được chuyển đến Polygon. Tuy nhiên, theo ý kiến của nhiều thành viên trong cộng đồng, thanh khoản của cặp GHST-USDC không đủ sau để có thể hỗ trợ swap lượng lớn token USDC thành GHST trên Quickswap.

Bọn mình tin cách để giải quyết vấn đề này chính là thêm GHST-USDC thành một cặp token có thể nhận FRENS trên [https://aavegotchi.com/stake-polygon](https://aavegotchi.com/stake-polygon). Tương tự như khi GHST-QUICK nhận lại token stkGHST-QUICK, GHST-USDC có thể sẽ giúp người dùng nhận lại token stkGHST-USDC, để có thể nhận giải thưởng trên Quickswap, nếu team cảm thấy điều này là cần thiết.

Bởi điều này ảnh hưởng trực tiếp đến lối chơi nên bọn mình tin rằng đây chính là ứng cử viên sáng giá cho cuộc bầu chọn Snapshot đầu tiên trên Polygon.

Bọn mình đặt ra giới hạn thi hành tối thiểu là 500.000 GHST.

Token LP cặp GHST-USDC sẽ nhận được lượng FRENS tương tự như khi stake GHST, bởi tổn thất tạm thời khá nhỏ và phí thì lại nhiều.

**Thời gian vote:**8 - 11 tháng Hai 2021

**Kết quả:**

table_ghstUsdcLp

[Đường link vote trên Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmUpXPA5JF4ed9GUy5hNUTA7rT7VQjL7QXUTSxbtLQ1RqA)

<hr />

### Số lượng Portal mua được trong mỗi giao dịch

**Vote bằng Snapshot**

**Tóm tắt Bản Đề Xuất:** Có thể mua được tổng cộng bao nhiêu portal trong mỗi giao dịch?

Giai đoạn thảo luận dành cho chủ đề này đã kết thúc và giờ là lúc để bỏ phiếu! Những lựa chọn được tán thành nhiều nhất là: 1, 5, và 10 Portal cho mỗi giao dịch.

Anh bạn [@coderdannn](/team#coder-dan) của chúng ta cũng đã gợi ra một ý tưởng hết sức là lý tưởng kết hợp các phương án trên: một loại phí "Ape Tax" sẽ được thêm vào và người dùng mua càng nhiều Portal trong một giao dịch thì phí này sẽ càng cao. Giá Portal sẽ có các cấp độ như sau:

* Mua từ 0 đến 5 portal: mỗi Portal sẽ có giá là 100 GHST

* Portal thứ 6 đến portal thứ 15 sẽ có giá là 200 GHST mỗi cái

* Portal thứ 16 đến portal thứ 25 sẽ có giá 300 GHST mỗi cái

Phương án này sẽ mang đến cho ta tổng cộng 4 lựa chọn: mỗi giao dịch sẽ có thể mua 1, 5, 10 hoặc 25 portal (kèm thuế ape tax).

Hãy dùng token $GHST để nói lên quan điểm của mình và bỏ phiếu nào!

Thời gian vote kéo dài 72 tiếng Số phiếu tối thiểu để Phương án đề xuất được thi hành là 10% lượng GHST trên Polygon (khoảng 1tr1 GHST)

Chủ đề thảo luận của AavegotchiDAO 👇

[https://dao.aavegotchi.com/t/how-many-portals-should-be-bought-in-one-txn/17](https://dao.aavegotchi.com/t/how-many-portals-should-be-bought-in-one-txn/17)

**Thời gian vote:**23 - 26 tháng Hai 2021

**Kết quả:**

table_portalsPurchased

[Đường link vote trên Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmUhKcn5YjKAPeGA1SfKQkNfw3P3hGRPgSGnTJGsfzw4Xi)