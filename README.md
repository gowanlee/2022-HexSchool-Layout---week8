# 2022-HexSchool-Layout---week8

2022 六角切版直播班 - 第八週

本週學習重點：

1. 如果設計師設計時沒有用格線系統，開發時就不要硬用Bootstrap

2. [SMACSS](https://docs.google.com/presentation/d/1BM12w_u-Y-oTqYAIBhq7CtUhcQ5IE-ZIg2PO205iVVs/edit#slide=id.p197)
    - 冒號後面加一個空格 `color: #fff;`
    - 中括號前面加一個空格 `.header {}`
    - 用//取代/**/註解，因為//不會被編譯成css
    - 不要將@import架構擴展到三層 `@import "components/card"`
    - 不要用ID選擇器，因為權重太高覆蓋極度困難
    - 不要在class上綁HTML標籤，因為這樣如果要更改HTML架構時就要兩邊同時更改 `.card img {}`
    - 在HTML裡，使用兩個空白間隔不同class名稱 `<div class="box  box1"></div>`
    - 以減號（-）連接class `<div class="product-card"></div>`
    - 把同性質的css屬性放一起
    - 可以利用子模組的方式減少相同code出現
    - 用is- 來設定狀態 `is-error、is-hidden`

3. [OOCSS](https://ithelp.ithome.com.tw/articles/10184862)
    - 結構與樣式分離
    - 容器與內容分離

4. [BEM](https://ithelp.ithome.com.tw/articles/10160545)

5. 小型網站開發可以用Bootstrap、大型網站開發可以用tailwind

6. 未來可以朝不要有自訂語意的class名稱、盡量不要有pages的scss，盡量用元件 component（出現兩處以上）跟通用類別 utilities做到 
