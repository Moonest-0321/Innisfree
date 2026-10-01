# 景停首頁 v1.1 交接

## 定案

- 正式版本：**v1.1**，於 2026-10-01 更新導覽與首頁快訊。
- 正式入口：`Innisfree-site/index.html`。
- 定案來源：`景停保留版-2026-09-30/`；目前正式快照存於 `Innisfree-site/versions/v1.1/`；前版存於 `Innisfree-site/versions/v1.0/`；相同原始設計另存於歷史目錄 `versions/v16/`。
- `Innisfree-site/versions/v18-before-retained-selection/` 是未採用的後續試驗版，不應作為正式網站或開發基底。

## 檔案

| 路徑 | 用途 |
| --- | --- |
| `index.html` | 首頁結構、內容、版本標示 |
| `style.css` | 色彩、排版、響應式樣式 |
| `script.js` | 拾頁與帆夢介紹彈窗 |
| `assets/` | Logo、favicon、字體及圖片 |
| `design/` | 設計探索與參考圖，非正式網站資產 |

## 現況與待辦

- 2026-10-01 已透過 GitHub Pages 發布根目錄網站至 `https://moonest-0321.github.io/Innisfree/`。新增首頁搜尋摘要、canonical、`robots.txt` 與單頁 sitemap；修改前快照保存在 `versions/v1.1-before-search-discovery/`。下一步由網站擁有者在 Google Search Console 驗證網址前綴資源、提交 sitemap 並要求檢索首頁。
- 本機靜態原型，未部署；沒有建置步驟或後端。
- v1.1 導覽改為「關於景停、拾頁、作品、帆夢」，並放大字級。首屏右下角新增跑馬燈，內容暫為待填提示；後續須替換為已核定的作品節錄或最新消息。
- 正式工作檔目前有待確認的跑馬燈調整：移除「景停快訊」與首屏底部橫線，把跑馬燈放在右半部中央偏上的位置，一次顯示兩則。節錄直接顯示文字與作者／作品，消息直接顯示內容（最多兩行），由下往上逐則切換。現用待提供提示，已存的 `versions/v1.1/` 快照維持原樣。
- 「關於景停」已依使用者 2026-10-01 提供的〈景停〉故事填入正式工作檔，保留原句與分段，新增桌面及窄螢幕篇章排版。修改前快照存於 `versions/v1.1-before-about-story/`；`versions/v1.1/` 仍是正式 v1.1 快照，版號尚未提升。
- 依使用者回饋，正式工作檔中的故事移除重複標題與逐行換行，改為緊湊段落；題句回到內文大小。調整前快照存於 `versions/v1.1-before-about-compact/`。
- 第二個主區塊已依使用者要求改標「拾頁」，左側預留較短文章、右側暫留白待決定。導覽「拾頁」現在指向此區塊；原品牌卡片改用 `pagelet-card` ID。「作品」導覽仍指向第二區塊的右側預留位置。修改前快照存於 `versions/v1.1-before-pagelet-section/`。
- 拾頁區塊左側已放入使用者定稿短詩「紙，白色的紙，跟水一樣⋯⋯躍然紙上。」並保留原分行；右側仍待決定。修改前快照存於 `versions/v1.1-before-pagelet-poem/`。
- 拾頁右側現有示意用的精選作品預覽卡，作品、作者、節錄皆為明確待填提示；保留 `data-featured-preview` 與 `data-preview-*` 欄位供未來接真實作品。下方「打開拾頁」指向拾頁專案文件記載的正式網址 `https://pagelet-nu.vercel.app/`。修改前快照存於 `versions/v1.1-before-pagelet-preview/`；後續應先確認正式網址仍可用。
- 原「品牌」區塊已改為「帆夢」獨立區塊，採拾頁的左右鏡像：左側畫面預覽示意與下載入口，右側預留短文。原拾頁／帆夢品牌卡及介紹彈窗已移除。帆夢專案狀態文件未提供可確認的公開下載位址，且指出目前不宜包裝成可公開下載的穩定版；下載入口因此標示「尚未開放」，待正式發行再接入。修改前快照存於 `versions/v1.1-before-sailune-section/`。
- 導覽已依三個主區塊調整為「關於景停、拾頁、帆夢」，移除已無獨立區塊的「作品」項目，並取消原本的位移定位。修改前快照存於 `versions/v1.1-before-three-item-nav/`。
- 依使用者要求，三項導覽改為靠左排列，緊接 Logo 右側。修改前快照存於 `versions/v1.1-before-left-nav/`。
- 導覽點擊改用短促的減速曲線捲動，更新網址錨點；滾輪、觸控與鍵盤操作會中斷動畫，偏好減少動態效果者直接跳轉。實作位於 `script.js`，修改前快照存於 `versions/v1.1-before-eased-navigation/`。
- 帆夢右側已放入使用者定稿句「平凡的夢，揚帆啟航的夢」，分兩行呈現。修改前快照存於 `versions/v1.1-before-sailune-line/`。
- 依使用者要求在標語下方加入更具體的帆夢特色簡介，提及按卷節寫作、大綱／人物／世界時間、正文與設定連結、自動儲存及 TXT／EPUB 匯出。此段為待使用者審閱的工作稿，尚非定稿文案；修改前快照存於 `versions/v1.1-before-sailune-description/`。
- 作品及品牌介紹目前多為留白；內容定稿後再填入。
- 帆夢正式下載位址仍待提供。
- 若要發布，需先確認公開文案、圖片和字體使用權，並做桌面與手機實機檢查。

## 接手方式

依 `README.md` 啟動本機預覽。後續修改只在 `Innisfree-site/` 正式工作檔進行，先遵循 `WORKFLOW.md`；保留版、v16 歷史快照與 v1.0 正式快照用於比對和還原。
