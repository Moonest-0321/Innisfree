# 景停首頁 v1.2 交接

## 定案

- 正式版本：**v1.2**，於 2026-10-02 定案並準備推送本輪首頁美術更新。
- 正式入口：`Innisfree-site/index.html`。
- 定案來源：v1.1 正式工作檔與後續美術調整；目前正式快照存於 `Innisfree-site/versions/v1.2/`；前版存於 `Innisfree-site/versions/v1.1/`。
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

- 2026-10-02 使用者同意推送，目前的二樓亭內觀景背景、三區視覺線索、字體層級與首屏排版定案為 v1.2。
- 2026-10-02 依使用者提出的新視角，首屏向量圖改成從二樓亭閣向外看：屋簷、兩側立柱與欄杆只作前景畫框，主畫面是雨雲下的湖、遠岸屋舍、小船與水面波紋；亭內保留一盞燈與石桌角。原雙層亭閣外觀試作存於 `versions/v1.1-before-pavilion-view/`。目前背景仍待審視，版號未提升。
- 2026-10-02 使用者指出首屏亭閣像廟，且故事中的亭子有二樓。已重畫 `assets/hero-landscape.svg`：收斂屋頂曲線，改成兩層開放式臨湖亭；一樓以細柱與平台示意，二樓放石桌、壺煙、竹葉與兩盞燈。改動前快照存於 `versions/v1.1-before-two-story-pavilion/`；待使用者審視，版號未提升。
- 2026-10-02 依使用者建議，首屏向量圖進一步取材自〈景停〉文章：遠處雨雲與稀疏雨線、亭中石壺與竹葉、上升的煙、離岸小船。維持空景與留白，未直接畫人物。改動前快照存於 `versions/v1.1-before-story-hero/`；這輪仍待審視，版號未提升。
- 2026-10-02 依使用者同意，首屏寫實 AI 圖已替換成 `assets/hero-landscape.svg`：亭閣輪廓、暖燈與湖面線條，並延續目前的題句位置。原 `assets/pavilion.png` 保留但首頁不再使用。替換前快照存於 `versions/v1.1-before-vector-hero/`；新版背景尚待使用者審視，版號未提升。
- 2026-10-02 首屏題句曾試著小幅下移，使用者認為幅度不足；目前改為靠近首屏底線，桌面保留約 42–78px、窄螢幕約 34–54px 的題句下方間距。此輪修改前快照存於 `versions/v1.1-before-low-hero-title/`；版號未提升。
- 2026-10-02 曾以 `assets/pavilion.png` 試排首屏右側遠景；使用者認為 AI 感太強，現已由簡化向量背景取代。寫實圖試排前快照存於 `versions/v1.1-before-hero-image-study/`。
- 2026-10-02 依使用者指定的美術建議第 4 點收斂首屏：題句改為主要焦點，首屏重複 Logo 縮小並淡化成角落印記，移除只有待填文字的快訊展示。快訊內容日後核定後再決定是否恢復。修改前快照存於 `versions/v1.1-before-hero-focus/`；版號仍為 v1.1。
- 2026-10-02 正式工作檔加入三區視覺線索：關於景停的湖面漣漪、拾頁的淡紙紋、帆夢的星帆圓弧；並統一題句／敘事／介面字體層級。修正 Google Fonts `@import` 順序，避免字體載入規則失效。修改前獨立快照存於 `versions/v1.1-before-art-direction-typography/`。此輪尚未由網站擁有者定案，因此版號仍為 v1.1。
- 2026-10-01 已透過 GitHub Pages 發布根目錄網站至 `https://moonest-0321.github.io/Innisfree/`。新增首頁搜尋摘要、canonical、`robots.txt` 與單頁 sitemap；修改前快照保存在 `versions/v1.1-before-search-discovery/`。下一步由網站擁有者在 Google Search Console 驗證網址前綴資源、提交 sitemap 並要求檢索首頁。
- 網站為靜態頁面，使用 GitHub Pages 發布；沒有建置步驟或後端。
- v1.1 曾加入首屏跑馬燈，內容為待填提示；目前正式工作檔已移除這段展示，歷史版仍保留。
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
