// コンテンツのデータ。CSV(data/data_mood.csv, data/data_idols.csv)を更新したら、このファイルを差し替えてください
// url: ストーリー / site: 特設サイト / music: 関連楽曲 / image: 画像
// tags: ジャンル(data_mood.csv) / idols: 出演者(data_idols.csv)

// 出演者の一覧(data_idols.csv の列の順番。出演者検索のプルダウンに使う)
const IDOLS = ["天ヶ瀬 冬馬", "御手洗 翔太", "伊集院 北斗", 
    "天道 輝", "桜庭 薫", "柏木 翼", 
    "都築 圭", "神楽 麗", 
    "鷹城 恭二", "ピエール", "渡辺 みのり", 
    "蒼井 悠介", "蒼井 享介", 
    "握野 英雄", "木村 龍", "信玄 誠司", 
    "猫柳 キリオ", "華村 翔真", "清澄 九郎", 
    "秋山 隼人", "冬美 旬", "榊 夏来", "若里 春名", "伊瀬谷 四季", 
    "紅井 朱雀", "黒野 玄武", 
    "神谷 幸広", "東雲 荘一郎", "アスラン=BBⅡ世", "卯月 巻緒", "水嶋 咲", 
    "岡村 直央", "橘 志狼", "姫野 かのん", 
    "硲 道夫", "舞田 類", "山下 次郎", 
    "大河 タケル", "円城寺 道流", "牙崎 漣", 
    "秋月 涼", "兜 大吾", "九十九 一希", 
    "葛之葉 雨彦", "北村 想楽", "古論 クリス", 
    "天峰 秀", "花園 百々人", "眉見 鋭心"];

const CONTENTS = [
 {
  "id": "A0101",
  "name": "Cybernetics Wars ～機械仕掛けの反逆者～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/r9lwz7nwe7qp1de/",
  "site": "",
  "music": "",
  "image": "img/A0101.png",
  "tags": ["SF", "シリアス", "バトル・アクション", "アイドルが死ぬ"],
  "idols": ["鷹城 恭二", "ピエール", "渡辺 みのり", "大河 タケル", "円城寺 道流", "牙崎 漣"]
 },
 {
  "id": "A0102",
  "name": "Cybernetics Wars ZERO ～願いを宿す機械の子～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/nx0jeoede78kyv5/",
  "site": "",
  "music": "https://open.spotify.com/intl-ja/track/0haOj8nSo5ru4DIXvEwlKO?si=61c52ef0791b49f8",
  "image": "img/A0102.png",
  "tags": ["SF", "シリアス", "バトル・アクション", "友情", "アイドルが死ぬ"],
  "idols": ["天ヶ瀬 冬馬", "都築 圭", "華村 翔真", "冬美 旬", "東雲 荘一郎"]
 },
 {
  "id": "A0103",
  "name": "Cybernetics Wars 2 ～希望を繋ぐ解放者～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/028vl344236dm51/",
  "site": "",
  "music": "",
  "image": "img/A0103.png",
  "tags": ["SF", "シリアス", "バトル・アクション"],
  "idols": ["天道 輝", "握野 英雄", "紅井 朱雀", "神谷 幸広", "舞田 類", "葛之葉 雨彦"]
 },
 {
  "id": "A0104",
  "name": "Cybernetics Wars 完結編",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/r9lwz7nwe7qp1de/",
  "site": "",
  "music": "",
  "image": "",
  "tags": ["SF", "シリアス", "バトル・アクション", "友情", "家族愛・兄弟愛", "アイドルが死ぬ"],
  "idols": ["天ヶ瀬 冬馬", "天道 輝", "都築 圭", "鷹城 恭二", "ピエール", "渡辺 みのり", "握野 英雄", "華村 翔真", "冬美 旬", "紅井 朱雀", "神谷 幸広", "東雲 荘一郎", "舞田 類", "大河 タケル", "円城寺 道流", "牙崎 漣", "葛之葉 雨彦"]
 },
 {
  "id": "A0201",
  "name": "劇星☆戦隊ドラスターズ -激闘！ダブルデビル-",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/20x8g3rx9e3kmnp/",
  "site": "",
  "music": "",
  "image": "img/A0201.png",
  "tags": ["現代", "バトル・アクション", "子ども向け"],
  "idols": ["天道 輝", "桜庭 薫", "柏木 翼", "蒼井 悠介", "蒼井 享介"]
 },
 {
  "id": "A0202",
  "name": "劇星☆戦隊ドラスターズ～君が選ぶ未来への道～",
  "url": "https://asobistory.asobistore.jp/connectwithmusic/detail/q3key9g7r4pj1d9/",
  "site": "",
  "music": "https://open.spotify.com/intl-ja/track/0IxUhyiCXvqy6yVS7MCpQq?si=8e731fcc557d4ecd",
  "image": "img/A0202.png",
  "tags": ["現代", "バトル・アクション", "子ども向け"],
  "idols": ["天道 輝", "桜庭 薫", "柏木 翼", "蒼井 悠介", "蒼井 享介"]
 },
 {
  "id": "A0301",
  "name": "Best Game ～女神はどちらに微笑むか～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/25gn8ovxk7mx1k4/",
  "site": "",
  "music": "",
  "image": "img/A0301.png",
  "tags": ["シリアス", "サスペンス", "バイオレンス", "家族愛・兄弟愛", "極道・マフィア"],
  "idols": ["東雲 荘一郎", "アスラン=BBⅡ世", "硲 道夫", "舞田 類", "山下 次郎"]
 },
 {
  "id": "A0302",
  "name": "Best Game2 ～命運を賭けるトリガー～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/mdz6l7z8k7wg4xp/",
  "site": "",
  "music": "https://open.spotify.com/intl-ja/track/0utIWsT2u7Vyq0AgHg2Tq4?si=b3a2d9578e7548f0",
  "image": "img/A0302.png",
  "tags": ["シリアス", "バトル・アクション", "サスペンス", "バイオレンス", "極道・マフィア", "アイドルが死ぬ"],
  "idols": ["握野 英雄", "華村 翔真", "榊 夏来", "神谷 幸広", "岡村 直央", "北村 想楽"]
 },
 {
  "id": "A0401",
  "name": "超常学園～覚醒スル切札～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/e6qlpoqd67k4j2v/",
  "site": "",
  "music": "",
  "image": "img/A0401.png",
  "tags": ["現代", "バトル・アクション", "学園"],
  "idols": ["秋山 隼人", "冬美 旬", "榊 夏来", "若里 春名", "伊瀬谷 四季"]
 },
 {
  "id": "A0402",
  "name": "超常事変～対立スル正義～",
  "url": "",
  "site": "https://idolmaster-official.jp/live_event/sidem_prs2023/movie/",
  "music": "https://open.spotify.com/intl-ja/album/0dGEmk2aSP5DC7KDq0jPqi?si=z-ORLwViQeivkPGD3FBCQA",
  "image": "https://youtu.be/OAwQSAUa6TE?si=WVcud3IokcZsHnVP",
  "tags": ["バトル・アクション", "友情", "学園"],
  "idols": ["天ヶ瀬 冬馬", "御手洗 翔太", "伊集院 北斗", "天道 輝", "桜庭 薫", "柏木 翼", "都築 圭", "神楽 麗", "鷹城 恭二", "ピエール", "渡辺 みのり", "蒼井 悠介", "蒼井 享介", "握野 英雄", "木村 龍", "信玄 誠司", "猫柳 キリオ", "華村 翔真", "清澄 九郎", "秋山 隼人", "冬美 旬", "榊 夏来", "若里 春名", "伊瀬谷 四季", "紅井 朱雀", "黒野 玄武", "神谷 幸広", "東雲 荘一郎", "アスラン=BBⅡ世", "卯月 巻緒", "水嶋 咲", "岡村 直央", "橘 志狼", "姫野 かのん", "硲 道夫", "舞田 類", "山下 次郎", "大河 タケル", "円城寺 道流", "牙崎 漣", "秋月 涼", "兜 大吾", "九十九 一希", "葛之葉 雨彦", "北村 想楽", "古論 クリス", "天峰 秀", "花園 百々人", "眉見 鋭心"]
 },
 {
  "id": "A0501",
  "name": "Side of ASTERIA ～異世界の遺産と赤黒の剣～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/mdz6l7zvk3wg4xp/",
  "site": "",
  "music": "",
  "image": "img/A0501.png",
  "tags": ["ファンタジー", "バトル・アクション", "冒険"],
  "idols": ["鷹城 恭二", "ピエール", "渡辺 みのり", "蒼井 悠介", "蒼井 享介"]
 },
 {
  "id": "A0502",
  "name": "Side of ASTERIA ～天を射る矢と風舞う約束～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/nx0jeoe0e38kyv5/",
  "site": "",
  "music": "",
  "image": "img/A0502.png",
  "tags": ["ファンタジー", "バトル・アクション", "冒険"],
  "idols": ["神楽 麗", "秋山 隼人", "黒野 玄武", "山下 次郎", "牙崎 漣"]
 },
 {
  "id": "A0601",
  "name": "ビーストクロニクル ～炎をまといし獣～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/w521g3j287zxpj6/",
  "site": "",
  "music": "",
  "image": "img/A0601.png",
  "tags": ["現代", "バトル・アクション", "友情", "学園", "子ども向け"],
  "idols": ["握野 英雄", "木村 龍", "信玄 誠司", "岡村 直央", "橘 志狼", "姫野 かのん"]
 },
 {
  "id": "A0602",
  "name": "ビーストクロニクル ～Risin' Soul～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/8p91g3pllowlmv0/",
  "site": "",
  "music": "https://open.spotify.com/intl-ja/track/0hszOTvgZxO68YWLqRv2Nz?si=9d711a2d9abc4160",
  "image": "img/A0602.png",
  "tags": ["現代", "バトル・アクション", "友情", "子ども向け"],
  "idols": ["秋山 隼人", "橘 志狼", "舞田 類", "大河 タケル", "兜 大吾", "古論 クリス"]
 },
 {
  "id": "A0701",
  "name": "きせきの魔法のぞミラ♪メロディ ～ミラクルLIVE～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/w521g3jr21ozxpj/",
  "site": "",
  "music": "",
  "image": "img/A0701.png",
  "tags": ["現代", "ファンタジー", "子ども向け"],
  "idols": ["岡村 直央", "橘 志狼", "姫野 かのん", "硲 道夫", "舞田 類", "山下 次郎"]
 },
 {
  "id": "A0702",
  "name": "きせきの魔法のぞミラ♪メロディW！ng ～輝きのチカラ～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/zmekq365wo6nwlv/",
  "site": "",
  "music": "",
  "image": "img/A0702.png",
  "tags": ["現代", "ファンタジー", "バトル・アクション", "友情", "子ども向け"],
  "idols": ["神谷 幸広", "東雲 荘一郎", "アスラン=BBⅡ世", "卯月 巻緒", "水嶋 咲", "岡村 直央", "橘 志狼", "姫野 かのん", "硲 道夫", "舞田 類", "山下 次郎"]
 },
 {
  "id": "A0801",
  "name": "深緑のGymnasium",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/15vljod6kk7gznk/",
  "site": "",
  "music": "",
  "image": "img/A0801.png",
  "tags": ["ミステリー", "ヒューマンドラマ", "友情", "家族愛・兄弟愛", "学園"],
  "idols": ["蒼井 悠介", "蒼井 享介", "岡村 直央", "橘 志狼", "姫野 かのん"]
 },
 {
  "id": "A0802",
  "name": "名探偵アーロンの事件簿 ～チェスピースの指し示す真実～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/w521g3jp83zxpj6/",
  "site": "",
  "music": "",
  "image": "img/A0802.png",
  "tags": ["シリアス", "ミステリー", "サスペンス", "友情", "アイドルが死ぬ"],
  "idols": ["天ヶ瀬 冬馬", "御手洗 翔太", "伊集院 北斗", "握野 英雄", "木村 龍", "信玄 誠司"]
 },
 {
  "id": "A0803",
  "name": "緑陰のGymnasium",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/1r9dmo2enoez4w0/",
  "site": "",
  "music": "https://open.spotify.com/intl-ja/track/6XBIj30IFGFsQ2aD18LwQk?si=f29c9a3d523847d4",
  "image": "img/A0803.png",
  "tags": ["ファンタジー", "ミステリー", "ヒューマンドラマ", "友情", "学園"],
  "idols": ["ピエール", "冬美 旬", "黒野 玄武", "卯月 巻緒", "山下 次郎", "北村 想楽"]
 },
 {
  "id": "A0901",
  "name": "シャドウ・ナイン",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/w521g3jw87zxpj6/",
  "site": "",
  "music": "",
  "image": "img/A0901.png",
  "tags": ["SF", "バトル・アクション", "サスペンス"],
  "idols": ["桜庭 薫", "鷹城 恭二", "蒼井 享介", "東雲 荘一郎", "葛之葉 雨彦"]
 },
 {
  "id": "A0902",
  "name": "ランページ",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/e6qlpoqzqok4j2v/",
  "site": "",
  "music": "",
  "image": "img/A0902.png",
  "tags": ["SF", "バトル・アクション", "サスペンス"],
  "idols": ["桜庭 薫", "鷹城 恭二", "ピエール", "信玄 誠司", "清澄 九郎", "神谷 幸広", "北村 想楽"]
 },
 {
  "id": "A0903",
  "name": "アンダーエッジ",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/x8kj07lqd3dl1mp/",
  "site": "",
  "music": "",
  "image": "img/A0903.png",
  "tags": ["SF", "バトル・アクション", "サスペンス"],
  "idols": ["天ヶ瀬 冬馬", "桜庭 薫", "鷹城 恭二", "信玄 誠司", "清澄 九郎", "伊瀬谷 四季", "紅井 朱雀", "大河 タケル", "兜 大吾"]
 },
 {
  "id": "A1001",
  "name": "最恐怪奇譚～戦慄のメロディ～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/1xnk9o5dk75rvpj/",
  "site": "",
  "music": "",
  "image": "img/A1001.png",
  "tags": ["現代", "サスペンス", "ホラー"],
  "idols": ["天ヶ瀬 冬馬", "御手洗 翔太", "伊集院 北斗", "都築 圭", "神楽 麗"]
 },
 {
  "id": "A1002",
  "name": "最恐幻怪譚 ～霊館のメモリー～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/rkg0qo09m9o514d/",
  "site": "",
  "music": "",
  "image": "img/A1002.png",
  "tags": ["現代", "サスペンス", "ホラー", "ヒューマンドラマ", "友情"],
  "idols": ["握野 英雄", "木村 龍", "信玄 誠司", "秋山 隼人", "榊 夏来"]
 },
 {
  "id": "A1101",
  "name": "Guardians of Sanctuary ～古き森の盟約～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/mdz6l7zrmnowg4x/",
  "site": "",
  "music": "",
  "image": "img/A1101.png",
  "tags": ["ファンタジー", "バトル・アクション"],
  "idols": ["都築 圭", "神楽 麗", "大河 タケル", "円城寺 道流", "牙崎 漣"]
 },
 {
  "id": "A1102",
  "name": "Guardians of Sanctuary ～神託の英雄～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/e6qlpoqg17k4j2v/",
  "site": "",
  "music": "",
  "image": "img/A1102.png",
  "tags": ["ファンタジー", "友情", "冒険", "アイドルが死ぬ"],
  "idols": ["天ヶ瀬 冬馬", "御手洗 翔太", "伊集院 北斗", "秋月 涼", "兜 大吾", "九十九 一希"]
 },
 {
  "id": "B0002",
  "name": "幕末瞬星録 ～誠に誓う意志～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/zmekq36nwo6nwlv/",
  "site": "",
  "music": "",
  "image": "img/B0002.png",
  "tags": ["歴史", "バトル・アクション"],
  "idols": ["天道 輝", "桜庭 薫", "柏木 翼", "紅井 朱雀", "黒野 玄武"]
 },
 {
  "id": "B0003",
  "name": "WILD BOYS ～激情の拳～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/15vljod6ex7gznk/",
  "site": "",
  "music": "",
  "image": "img/B0003.png",
  "tags": ["シリアス", "バトル・アクション", "バイオレンス", "アイドルが死ぬ"],
  "idols": ["天ヶ瀬 冬馬", "御手洗 翔太", "伊集院 北斗", "秋月 涼", "兜 大吾", "九十九 一希"]
 },
 {
  "id": "B0004",
  "name": "三国瞬星録 ～神彩英抜の軍師～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/py5ej7m6e39nx6w/",
  "site": "",
  "music": "",
  "image": "img/B0004.png",
  "tags": ["歴史", "バトル・アクション"],
  "idols": ["猫柳 キリオ", "華村 翔真", "清澄 九郎", "紅井 朱雀", "黒野 玄武"]
 },
 {
  "id": "B0005",
  "name": "操り人形たちの円舞曲",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/20x8g3r1yg7kmnp/",
  "site": "",
  "music": "",
  "image": "img/B0005.png",
  "tags": ["ファンタジー", "ヒューマンドラマ", "家族愛・兄弟愛", "童話・昔話",],
  "idols": ["天道 輝", "桜庭 薫", "柏木 翼", "鷹城 恭二", "ピエール", "渡辺 みのり"]
 },
 {
  "id": "B0006",
  "name": "GHOST SNIPERS！",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/e6qlpoq851ok4j2/",
  "site": "",
  "music": "",
  "image": "img/B0006.png",
  "tags": ["現代", "ギャグ・コメディ", "バトル・アクション", "ホラー"],
  "idols": ["蒼井 悠介", "蒼井 享介", "硲 道夫", "舞田 類", "山下 次郎"]
 },
 {
  "id": "B0007",
  "name": "源平瞬星録 ～搦め手の戦法～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/54qw071weo9m1pz/",
  "site": "",
  "music": "",
  "image": "img/B0007.png",
  "tags": ["歴史", "シリアス", "バトル・アクション", "バイオレンス", "アイドルが死ぬ"],
  "idols": ["天ヶ瀬 冬馬", "御手洗 翔太", "伊集院 北斗", "猫柳 キリオ", "華村 翔真", "清澄 九郎"]
 },
 {
  "id": "B0008",
  "name": "Pirate's treasure ～不滅の海賊船～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/8p91g3p2v17wlmv/",
  "site": "",
  "music": "",
  "image": "img/B0008.png",
  "tags": ["バトル・アクション", "冒険"],
  "idols": ["紅井 朱雀", "黒野 玄武", "葛之葉 雨彦", "北村 想楽", "古論 クリス"]
 },
 {
  "id": "B0009",
  "name": "怪盗団シャノアール ～呪われし女神の涙～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/25gn8ovv6omx1k4/",
  "site": "",
  "music": "",
  "image": "img/B0009.png",
  "tags": ["現代", "バトル・アクション", "ミステリー"],
  "idols": ["鷹城 恭二", "ピエール", "渡辺 みのり", "岡村 直央", "橘 志狼", "姫野 かのん"]
 },
 {
  "id": "B0011",
  "name": "Write for someone ～追憶の空～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/8p91g3pyl3wlmv0/",
  "site": "",
  "music": "",
  "image": "img/B0011.png",
  "tags": ["ファンタジー", "友情", "アイドルが死ぬ"],
  "idols": ["渡辺 みのり", "清澄 九郎", "硲 道夫", "九十九 一希", "北村 想楽"]
 },
 {
  "id": "B0012",
  "name": "Bullets of Heresy",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/m5142oxg4038qjy/",
  "site": "",
  "music": "",
  "image": "img/B0012.png",
  "tags": ["バトル・アクション", "バイオレンス", "極道・マフィア"],
  "idols": ["都築 圭", "神楽 麗", "大河 タケル", "円城寺 道流", "牙崎 漣"]
 },
 {
  "id": "B0013",
  "name": "Long Night ～悪夢のホテル～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/x8kj07l2d3dl1mp/",
  "site": "",
  "music": "",
  "image": "img/B0013.png",
  "tags": ["シリアス", "ミステリー", "サスペンス", "ホラー", "家族愛・兄弟愛", "アイドルが死ぬ"],
  "idols": ["神谷 幸広", "東雲 荘一郎", "アスラン=BBⅡ世", "卯月 巻緒", "水嶋 咲"]
 },
 {
  "id": "B0014",
  "name": "仁義の徒花",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/z9j0g3wxy7v2nl6/",
  "site": "",
  "music": "",
  "image": "img/B0014.png",
  "tags": ["現代", "ギャグ・コメディ", "バトル・アクション", "バイオレンス", "極道・マフィア", "アイドルが死ぬ"],
  "idols": ["鷹城 恭二", "ピエール", "渡辺 みのり", "秋月 涼", "兜 大吾", "九十九 一希"]
 },
 {
  "id": "B0015",
  "name": "陰陽師大戦 ～宿命の二人～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/20x8g3r9v3kmnpr/",
  "site": "",
  "music": "",
  "image": "img/B0015.png",
  "tags": ["ファンタジー", "歴史", "シリアス", "バトル・アクション", "アイドルが死ぬ"],
  "idols": ["硲 道夫", "舞田 類", "山下 次郎", "葛之葉 雨彦", "北村 想楽", "古論 クリス"]
 },
 {
  "id": "B0016",
  "name": "異世界アーサーの聖杯伝説",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/81k50384voq6rwv/",
  "site": "",
  "music": "",
  "image": "img/B0016.png",
  "tags": ["ファンタジー", "バトル・アクション", "冒険", "童話・昔話"],
  "idols": ["鷹城 恭二", "ピエール", "渡辺 みのり", "榊 夏来", "若里 春名"]
 },
 {
  "id": "B0017",
  "name": "人狼GAME×Dark Night Party",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/py5ej7mzeo9nx6w/",
  "site": "",
  "music": "",
  "image": "img/B0017.png",
  "tags": ["シリアス", "バトル・アクション", "ミステリー", "サスペンス", "バイオレンス", "アイドルが死ぬ"],
  "idols": ["握野 英雄", "木村 龍", "信玄 誠司", "卯月 巻緒", "水嶋 咲"]
 },
 {
  "id": "B0018",
  "name": "くるみ割り人形と不思議なクリスマス",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/r9lwz7nmv3qp1de/",
  "site": "",
  "music": "",
  "image": "img/B0018.png",
  "tags": ["ヒューマンドラマ", "恋愛・ロマンス", "童話・昔話"],
  "idols": ["天ヶ瀬 冬馬", "御手洗 翔太", "伊集院 北斗", "東雲 荘一郎", "水嶋 咲"]
 },
 {
  "id": "B0019",
  "name": "戦乱忍者大戦 ～動き出す宿命～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/q96zj79253dnvl4/",
  "site": "",
  "music": "",
  "image": "img/B0019.png",
  "tags": ["ファンタジー", "歴史", "バトル・アクション", "家族愛・兄弟愛"],
  "idols": ["蒼井 悠介", "蒼井 享介", "神谷 幸広", "東雲 荘一郎", "卯月 巻緒"]
 },
 {
  "id": "B0020",
  "name": "猫街闘争 ～猫たちの領域～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/54qw0715eo9m1pz/",
  "site": "",
  "music": "",
  "image": "img/B0020.png",
  "tags": ["現代", "バトル・アクション", "家族愛・兄弟愛"],
  "idols": ["都築 圭", "神楽 麗", "猫柳 キリオ", "華村 翔真", "清澄 九郎"]
 },
 {
  "id": "B0021",
  "name": "青春COLORS ～高道高校男子バレー部～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/mwx6gog9m7kpz24/",
  "site": "",
  "music": "",
  "image": "img/B0021.png",
  "tags": ["現代", "バトル・アクション", "友情", "学園"],
  "idols": ["秋山 隼人", "冬美 旬", "榊 夏来", "若里 春名", "伊瀬谷 四季"]
 },
 {
  "id": "B0022",
  "name": "Warlock of darkness ～混沌の果てに～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/1xnk9o55ro5rvpj/",
  "site": "",
  "music": "",
  "image": "img/B0022.png",
  "tags": ["ファンタジー", "バトル・アクション", "サスペンス"],
  "idols": ["冬美 旬", "榊 夏来", "葛之葉 雨彦", "北村 想楽", "古論 クリス"]
 },
 {
  "id": "B0023",
  "name": "ブルード兄弟の大冒険 ～ようせい島と伝説の歌～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/x8kj07lrp57dl1m/",
  "site": "",
  "music": "",
  "image": "img/B0023.png",
  "tags": ["ファンタジー", "ヒューマンドラマ", "冒険", "子ども向け"],
  "idols": ["蒼井 悠介", "蒼井 享介", "岡村 直央", "橘 志狼", "姫野 かのん"]
 },
 {
  "id": "B0024",
  "name": "KIDS GANG ～3兄弟と黒マントの怪人～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/xdqjr3ky6ovyg9l/",
  "site": "",
  "music": "",
  "image": "img/B0024.png",
  "tags": ["現代", "ギャグ・コメディ", "子ども向け"],
  "idols": ["都築 圭", "神楽 麗", "岡村 直央", "橘 志狼", "姫野 かのん"]
 },
 {
  "id": "B0025",
  "name": "天下無双武蔵伝 ～刹那の剣戟～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/rkg0qo0dg3514dn/",
  "site": "",
  "music": "",
  "image": "img/B0025.png",
  "tags": ["歴史", "バトル・アクション", "ヒューマンドラマ", "アイドルが死ぬ"],
  "idols": ["秋山 隼人", "榊 夏来", "伊瀬谷 四季", "硲 道夫", "舞田 類", "山下 次郎"]
 },
 {
  "id": "B0026",
  "name": "Moonlit Night Encounter",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/54qw071neo9m1pz/",
  "site": "",
  "music": "",
  "image": "img/B0026.png",
  "tags": ["ファンタジー", "シリアス", "バイオレンス", "家族愛・兄弟愛"],
  "idols": ["天ヶ瀬 冬馬", "御手洗 翔太", "伊集院 北斗", "硲 道夫", "舞田 類", "山下 次郎"]
 },
 {
  "id": "B0027",
  "name": "異世界桃太郎の甘味伝説",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/z9j0g3wgyov2nl6/",
  "site": "",
  "music": "",
  "image": "img/B0027.png",
  "tags": ["ファンタジー", "バトル・アクション", "ヒューマンドラマ", "童話・昔話"],
  "idols": ["鷹城 恭二", "ピエール", "渡辺 みのり", "アスラン=BBⅡ世", "卯月 巻緒"]
 },
 {
  "id": "B0028",
  "name": "愉快☆痛快！お助け仮面",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/20x8g3rgv7kmnpr/",
  "site": "",
  "music": "",
  "image": "img/B0028.png",
  "tags": ["現代", "ギャグ・コメディ", "バトル・アクション", "ヒューマンドラマ", "友情", "子ども向け"],
  "idols": ["鷹城 恭二", "ピエール", "渡辺 みのり", "紅井 朱雀", "黒野 玄武"]
 },
 {
  "id": "B0029",
  "name": "美食ロワイヤル ～絶品グルメアドベンチャー～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/81k5038yvoq6rwv/",
  "site": "",
  "music": "",
  "image": "img/B0029.png",
  "tags": ["ファンタジー", "冒険"],
  "idols": ["紅井 朱雀", "黒野 玄武", "神谷 幸広", "アスラン=BBⅡ世", "卯月 巻緒"]
 },
 {
  "id": "B0030",
  "name": "サマー・グッバイ ～海と約束の宝石～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/w521g3jg83zxpj6/",
  "site": "",
  "music": "",
  "image": "img/B0030.png",
  "tags": ["現代", "ファンタジー", "ヒューマンドラマ", "友情", "家族愛・兄弟愛"],
  "idols": ["桜庭 薫", "柏木 翼", "猫柳 キリオ", "清澄 九郎", "紅井 朱雀", "黒野 玄武", "東雲 荘一郎", "卯月 巻緒", "水嶋 咲", "橘 志狼", "姫野 かのん", "九十九 一希"]
 },
 {
  "id": "B0031",
  "name": "タイムプリディクション ～時空の監視者～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/1w2lg3yxxodz49r/",
  "site": "",
  "music": "",
  "image": "img/B0031.png",
  "tags": ["SF", "シリアス", "バトル・アクション", "アイドルが死ぬ"],
  "idols": ["秋山 隼人", "若里 春名", "葛之葉 雨彦", "北村 想楽", "古論 クリス"]
 },
 {
  "id": "B0032",
  "name": "東方茶亭 ～お悩み解決いたします～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/r9lwz7nrp5oqp1d/",
  "site": "",
  "music": "",
  "image": "img/B0032.png",
  "tags": ["ファンタジー", "ヒューマンドラマ"],
  "idols": ["蒼井 悠介", "蒼井 享介", "猫柳 キリオ", "華村 翔真", "清澄 九郎"]
 },
 {
  "id": "B0033",
  "name": "Lost Eden～星の森編～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/81k5038r1m7q6rw/",
  "site": "",
  "music": "",
  "image": "img/B0033.png",
  "tags": ["ファンタジー"],
  "idols": ["都築 圭", "神楽 麗", "鷹城 恭二", "ピエール", "渡辺 みのり"]
 },
 {
  "id": "B0034",
  "name": "Enthralling Dancer ～親愛なる弟へ～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/zmekq36weo6nwlv/",
  "site": "",
  "music": "",
  "image": "img/B0034.png",
  "tags": ["バトル・アクション", "ヒューマンドラマ", "家族愛・兄弟愛"],
  "idols": ["蒼井 悠介", "蒼井 享介", "大河 タケル", "円城寺 道流", "牙崎 漣"]
 },
 {
  "id": "B0035",
  "name": "忘却のクラングファルベ",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/x8kj07lg9odl1mp/",
  "site": "",
  "music": "",
  "image": "img/B0035.png",
  "tags": ["友情", "学園"],
  "idols": ["秋山 隼人", "冬美 旬", "榊 夏来", "若里 春名", "伊瀬谷 四季"]
 },
 {
  "id": "B0036",
  "name": "Perchers ～山に魅せられた者たち～",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/mdz6l7zgn3wg4xp/",
  "site": "",
  "music": "",
  "image": "img/B0036.png",
  "tags": ["現代", "シリアス", "サスペンス", "ヒューマンドラマ"],
  "idols": ["都築 圭", "神楽 麗", "握野 英雄", "木村 龍", "信玄 誠司"]
 },
 {
  "id": "B0037",
  "name": "キミを照らす星",
  "url": "https://asobistory.asobistore.jp/eventalbum/detail/x8kj07lx257dl1m/",
  "site": "",
  "music": "",
  "image": "img/B0037.png",
  "tags": ["現代", "恋愛・ロマンス", "学園"],
  "idols": ["天ヶ瀬 冬馬", "御手洗 翔太", "伊集院 北斗", "東雲 荘一郎", "卯月 巻緒"]
 },
 {
  "id": "C0001",
  "name": "策謀のストリート・ミッション",
  "url": "https://asobistory.asobistore.jp/dramaonstage/detail/l6n72pxw9yw98ve/",
  "site": "",
  "music": "",
  "image": "img/C0001.png",
  "tags": ["現代", "シリアス", "バイオレンス", "極道・マフィア", "アイドルが死ぬ"],
  "idols": ["蒼井 悠介", "蒼井 享介", "大河 タケル", "円城寺 道流", "牙崎 漣"]
 },
 {
  "id": "C0002",
  "name": "夢見る世界の輪舞曲",
  "url": "https://asobistory.asobistore.jp/dramaonstage/detail/ej397p2l2zn14w5/",
  "site": "",
  "music": "",
  "image": "img/C0002.png",
  "tags": ["現代", "ファンタジー", "ヒューマンドラマ", "友情"],
  "idols": ["神谷 幸広", "東雲 荘一郎", "アスラン=BBⅡ世", "卯月 巻緒", "水嶋 咲"]
 },
 {
  "id": "C0003",
  "name": "サイケデリックマンション",
  "url": "https://asobistory.asobistore.jp/dramaonstage/detail/l4me3pgedzkdr8q/",
  "site": "",
  "music": "",
  "image": "img/C0003.png",
  "tags": ["ミステリー", "サスペンス", "ホラー", "ヒューマンドラマ", "家族愛・兄弟愛", "アイドルが死ぬ"],
  "idols": ["握野 英雄", "木村 龍", "信玄 誠司", "岡村 直央", "橘 志狼", "姫野 かのん"]
 },
 {
  "id": "C0004",
  "name": "流転なる五稜星",
  "url": "https://asobistory.asobistore.jp/dramaonstage/detail/581r4zj6dpn23kq/",
  "site": "",
  "music": "",
  "image": "img/C0004.png",
  "tags": ["歴史", "シリアス", "バトル・アクション", "友情", "アイドルが死ぬ"],
  "idols": ["紅井 朱雀", "黒野 玄武", "硲 道夫", "舞田 類", "山下 次郎"]
 },
 {
  "id": "C0005",
  "name": "祝祭の空に約束を",
  "url": "https://asobistory.asobistore.jp/dramaonstage/detail/6rmv7p5dqykqg21/",
  "site": "",
  "music": "",
  "image": "img/C0005.png",
  "tags": ["ファンタジー", "ヒューマンドラマ", "友情"],
  "idols": ["天ヶ瀬 冬馬", "御手洗 翔太", "伊集院 北斗", "秋月 涼", "兜 大吾", "九十九 一希"]
 },
 {
  "id": "C0006",
  "name": "ドタバタ・ガーディアンズ～嵐の七日間～",
  "url": "https://asobistory.asobistore.jp/dramaonstage/detail/27w0rpvxqydj61x/",
  "site": "",
  "music": "",
  "image": "img/C0006.png",
  "tags": ["現代", "ギャグ・コメディ", "バトル・アクション"],
  "idols": ["鷹城 恭二", "ピエール", "渡辺 みのり", "猫柳 キリオ", "華村 翔真", "清澄 九郎"]
 },
 {
  "id": "C0007",
  "name": "革命のポリフォニー",
  "url": "https://asobistory.asobistore.jp/dramaonstage/detail/9lvk2ykq5yqg10n/",
  "site": "",
  "music": "",
  "image": "img/C0007.png",
  "tags": ["ファンタジー", "友情", "学園"],
  "idols": ["都築 圭", "神楽 麗", "秋山 隼人", "冬美 旬", "榊 夏来", "若里 春名", "伊瀬谷 四季"]
 },
 {
  "id": "C0008",
  "name": "暗夜のファンタスマゴリー",
  "url": "https://asobistory.asobistore.jp/dramaonstage/detail/o473kz6ndpw5x29/",
  "site": "",
  "music": "",
  "image": "img/C0008.png",
  "tags": ["ファンタジー", "バトル・アクション", "ミステリー", "友情", "アイドルが死ぬ"],
  "idols": ["天道 輝", "桜庭 薫", "柏木 翼", "葛之葉 雨彦", "北村 想楽", "古論 クリス"]
 },
 {
  "id": "D0001",
  "name": "Change to Chance",
  "url": "https://youtu.be/vuw2kmXp95A?si=wnhZUbYJHyiWe53K",
  "site": "",
  "music": "https://open.spotify.com/intl-ja/track/42kwrotvztfPkNdmr7KqHh?si=0fcc21d50e15437d",
  "image": "https://youtu.be/vuw2kmXp95A?si=NFBGoTT4KRnzTWJS",
  "tags": ["現代", "ヒューマンドラマ", "友情"],
  "idols": ["天道 輝", "桜庭 薫", "柏木 翼"]
 },
 {
  "id": "E0001",
  "name": "Amber Color Oasis",
  "url": "https://asobistory.asobistore.jp/connectwithmusic/detail/6n72pxv6g9zw98v/",
  "site": "",
  "music": "https://open.spotify.com/intl-ja/track/60Q05J053fkCGBPfyMGGAQ?si=940b44c4c41d48e0",
  "image": "img/E0001.png",
  "tags": ["現代", "ヒューマンドラマ"],
  "idols": ["握野 英雄", "木村 龍", "信玄 誠司"]
 },
 {
  "id": "E0002",
  "name": "砂の国の物語",
  "url": "https://asobistory.asobistore.jp/connectwithmusic/detail/81r4zj0drdpn23k/",
  "site": "",
  "music": "https://open.spotify.com/intl-ja/track/5G0nObXQfmrdPvACqjmKBC?si=ef937ce166f74047",
  "image": "img/E0002.png",
  "tags": ["ファンタジー", "家族愛・兄弟愛", "冒険"],
  "idols": ["鷹城 恭二", "ピエール", "渡辺 みのり"]
 },
 {
  "id": "E0003",
  "name": "宵闇のイリュージョン",
  "url": "https://asobistory.asobistore.jp/connectwithmusic/detail/lvk2yk0155pqg10/",
  "site": "",
  "music": "https://open.spotify.com/intl-ja/track/7kJr4oMWxGXz6uaRZmUbN1?si=a861b903d71c4ac5",
  "image": "img/E0003.png",
  "tags": ["現代", "バトル・アクション", "恋愛・ロマンス"],
  "idols": ["大河 タケル", "円城寺 道流", "牙崎 漣"]
 },
 {
  "id": "E0004",
  "name": "PHANTOM FLAME",
  "url": "https://asobistory.asobistore.jp/connectwithmusic/detail/4me3pg1vjdpkdr8/",
  "site": "",
  "music": "https://open.spotify.com/intl-ja/track/0h9Iy3hJbOrBjP3mhznzok?si=526003d56a9c402e",
  "image": "img/E0004.png",
  "tags": ["SF", "シリアス", "バトル・アクション"],
  "idols": ["紅井 朱雀", "黒野 玄武"]
 },
 {
  "id": "E0005",
  "name": "歩み続ける者の肖像",
  "url": "https://asobistory.asobistore.jp/connectwithmusic/detail/02jgpd1oj0pm6vo/",
  "site": "",
  "music": "https://open.spotify.com/intl-ja/track/5C2zaNHokgVzSJVMP5JoOi?si=44ca71781d5d414c",
  "image": "img/E0005.png",
  "tags": ["歴史", "シリアス", "ヒューマンドラマ"],
  "idols": ["硲 道夫", "舞田 類", "山下 次郎"]
 },
 {
  "id": "E0006",
  "name": "ミート・ユメノトピア",
  "url": "https://asobistory.asobistore.jp/connectwithmusic/detail/4r1kp00g1vpv693/",
  "site": "",
  "music": "https://open.spotify.com/intl-ja/track/5pv12fiZt9jDSmBGACM7r7?si=8fabf966bd644fcf",
  "image": "img/E0006.png",
  "tags": ["ファンタジー", "冒険", "子ども向け"],
  "idols": ["秋月 涼", "兜 大吾", "九十九 一希"]
 },
 {
  "id": "E0007",
  "name": "Time goes on",
  "url": "https://asobistory.asobistore.jp/connectwithmusic/detail/0dmezwekrozognq/",
  "site": "",
  "music": "https://open.spotify.com/intl-ja/track/2ME2S04nNXYkSAmnqZS07O?si=cad79fb55cc546d9",
  "image": "img/E0007.png",
  "tags": ["シリアス", "バトル・アクション", "ミステリー"],
  "idols": ["葛之葉 雨彦", "北村 想楽", "古論 クリス"]
 },
 {
  "id": "E0008",
  "name": "ミツフル！　～三星フルスロットル～",
  "url": "https://asobistory.asobistore.jp/connectwithmusic/detail/len9zr7vk5y0wk1/",
  "site": "",
  "music": "https://open.spotify.com/intl-ja/track/1klEGFQwI7CbJbQcsA1qdX?si=d9f19a888d6440f4",
  "image": "img/E0008.png",
  "tags": ["現代", "ギャグ・コメディ", "恋愛・ロマンス", "学園"],
  "idols": ["天峰 秀", "花園 百々人", "眉見 鋭心"]
 },
 {
  "id": "F0001",
  "name": "TT01 不思議の国のアリス",
  "url": "https://asobistory.asobistore.jp/connectwithmusic/detail/lvk2yk01w5pqg10/",
  "site": "",
  "music": "https://open.spotify.com/intl-ja/track/292Tl8Udr7d3EBqH36vwQq?si=c5d4579a4b234321",
  "image": "img/F0001.png",
  "tags": ["ファンタジー", "童話・昔話"],
  "idols": ["天ヶ瀬 冬馬", "握野 英雄", "卯月 巻緒", "牙崎 漣"]
 },
 {
  "id": "F0002",
  "name": "TT02 浦島太郎",
  "url": "https://asobistory.asobistore.jp/connectwithmusic/detail/dj13zqqmv4zmoxg/",
  "site": "",
  "music": "https://open.spotify.com/intl-ja/track/2bCltL4LgxsrgImPcKWcHC?si=a4b0b31ddbe64a88",
  "image": "img/F0002.png",
  "tags": ["バトル・アクション", "ミステリー", "友情", "童話・昔話"],
  "idols": ["鷹城 恭二", "華村 翔真", "古論 クリス", "天峰 秀"]
 },
 {
  "id": "F0003",
  "name": "TT03 アリババと40人の盗賊",
  "url": "https://asobistory.asobistore.jp/connectwithmusic/detail/lvk2yk01wqpqg10/",
  "site": "",
  "music": "https://open.spotify.com/intl-ja/track/2qWiKXmPR9etUfpXDNAYVr?si=212aeeb8dc0d4166",
  "image": "img/F0003.png",
  "tags": ["家族愛・兄弟愛", "童話・昔話"],
  "idols": ["伊集院 北斗", "桜庭 薫", "榊 夏来", "葛之葉 雨彦"]
 },
 {
  "id": "F0004",
  "name": "TT04 桃太郎",
  "url": "https://asobistory.asobistore.jp/connectwithmusic/detail/dj13zqqmvezmoxg/",
  "site": "",
  "music": "https://open.spotify.com/intl-ja/track/344FM48wELzxoDzprdULwE?si=c59e3940d38a4ee8",
  "image": "img/F0004.png",
  "tags": ["友情", "童話・昔話"],
  "idols": ["神楽 麗", "渡辺 みのり", "アスラン=BBⅡ世", "秋月 涼"]
 },
 {
  "id": "F0005",
  "name": "TT05 ライオンとネズミ",
  "url": "https://asobistory.asobistore.jp/connectwithmusic/detail/4r1kp00g7epv693/",
  "site": "",
  "music": "https://open.spotify.com/intl-ja/track/14uXCI4Ft45FDxdRapaxvE?si=b602c76570814e74",
  "image": "img/F0005.png",
  "tags": ["友情", "童話・昔話"],
  "idols": ["木村 龍", "清澄 九郎", "岡村 直央", "舞田 類"]
 },
 {
  "id": "F0006",
  "name": "TT06 みにくいアヒルの子",
  "url": "https://asobistory.asobistore.jp/connectwithmusic/detail/len9zr7vnry0wk1/",
  "site": "",
  "music": "https://open.spotify.com/intl-ja/track/4Nel6AYaa7irr68sqMez8m?si=d4e78a52d61140bf",
  "image": "img/F0006.png",
  "tags": ["シリアス", "バトル・アクション", "友情", "童話・昔話"],
  "idols": ["信玄 誠司", "東雲 荘一郎", "九十九 一希", "北村 想楽", "花園 百々人"]
 },
 {
  "id": "F0007",
  "name": "TT07 カエルの王様",
  "url": "https://asobistory.asobistore.jp/connectwithmusic/detail/4me3pg1vempkdr8/",
  "site": "",
  "music": "https://open.spotify.com/intl-ja/track/5MusysWaH8GliaXv0cBEMZ?si=87dc093e3ef24996",
  "image": "img/F0007.png",
  "tags": ["シリアス", "サスペンス", "童話・昔話"],
  "idols": ["ピエール", "伊瀬谷 四季", "紅井 朱雀"]
 },
 {
  "id": "F0008",
  "name": "TT08 ブレーメンの音楽隊",
  "url": "https://asobistory.asobistore.jp/connectwithmusic/detail/8vwqpok8ony1jgr/",
  "site": "",
  "music": "https://open.spotify.com/intl-ja/track/3vfeqK4kE2UOMZDrIh5zRp?si=f6293bdfc8be480f",
  "image": "img/F0008.png",
  "tags": ["ミステリー", "友情", "冒険", "童話・昔話"],
  "idols": ["柏木 翼", "都築 圭", "神谷 幸広", "兜 大吾"]
 },
 {
  "id": "F0009",
  "name": "TT09 ヘンゼルとグレーテル",
  "url": "https://asobistory.asobistore.jp/connectwithmusic/detail/gw70permdezqodj/",
  "site": "",
  "music": "https://open.spotify.com/intl-ja/track/1HDYXcmgAFYaufET2wogJ8?si=da202894363249e1",
  "image": "img/F0009.png",
  "tags": ["家族愛・兄弟愛", "童話・昔話"],
  "idols": ["蒼井 悠介", "冬美 旬", "姫野 かのん", "山下 次郎"]
 },
 {
  "id": "F0010",
  "name": "TT10 ヘラクレス",
  "url": "https://asobistory.asobistore.jp/connectwithmusic/detail/4me3pg1vgmpkdr8/",
  "site": "",
  "music": "https://open.spotify.com/intl-ja/track/5vF1VqYWEMKoK61n1jSlNh?si=9b8d6fdeae1b4032",
  "image": "img/F0010.png",
  "tags": ["バトル・アクション", "童話・昔話"],
  "idols": ["御手洗 翔太", "黒野 玄武", "橘 志狼", "円城寺 道流"]
 },
 {
  "id": "F0011",
  "name": "TT11 長靴を履いた猫",
  "url": "https://asobistory.asobistore.jp/connectwithmusic/detail/lvk2yk012qpqg10/",
  "site": "",
  "music": "https://open.spotify.com/intl-ja/track/36McB9wyRd89eLIol3fCOO?si=a0fbd6da91d74600",
  "image": "img/F0011.png",
  "tags": ["シリアス", "バトル・アクション", "サスペンス", "友情", "童話・昔話", "アイドルが死ぬ"],
  "idols": ["蒼井 享介", "猫柳 キリオ", "秋山 隼人", "大河 タケル"]
 },
 {
  "id": "F0012",
  "name": "TT12 オズの魔法使い",
  "url": "https://asobistory.asobistore.jp/connectwithmusic/detail/8g73z3kjw9pe6qn/",
  "site": "",
  "music": "https://open.spotify.com/intl-ja/track/6i7LBNVO9lOqLJDlErAQ2Q?si=2fee1ae30a524941",
  "image": "img/F0012.png",
  "tags": ["SF", "友情", "童話・昔話", "アイドルが死ぬ"],
  "idols": ["天道 輝", "若里 春名", "水嶋 咲", "硲 道夫", "眉見 鋭心"]
 },
 {
  "id": "Z0001",
  "name": "天地四心伝",
  "url": "",
  "site": "https://idolmaster-official.jp/live_event/sidem_prs2024/movie/",
  "music": "https://open.spotify.com/intl-ja/track/0bTTrI6ZImrgDIo0UX56hL?si=e51ee7777e0e4d50",
  "image": "https://youtu.be/psadMkMXi7E?si=QeN1lXxh6Jt_nhJe",
  "tags": ["ファンタジー", "シリアス", "バトル・アクション", "バイオレンス", "ヒューマンドラマ", "友情", "家族愛・兄弟愛", "アイドルが死ぬ"],
  "idols": ["天ヶ瀬 冬馬", "御手洗 翔太", "伊集院 北斗", "天道 輝", "桜庭 薫", "柏木 翼", "都築 圭", "神楽 麗", "鷹城 恭二", "ピエール", "渡辺 みのり", "蒼井 悠介", "蒼井 享介", "握野 英雄", "木村 龍", "信玄 誠司", "猫柳 キリオ", "華村 翔真", "清澄 九郎", "秋山 隼人", "冬美 旬", "榊 夏来", "若里 春名", "伊瀬谷 四季", "紅井 朱雀", "黒野 玄武", "神谷 幸広", "東雲 荘一郎", "アスラン=BBⅡ世", "卯月 巻緒", "水嶋 咲", "岡村 直央", "橘 志狼", "姫野 かのん", "硲 道夫", "舞田 類", "山下 次郎", "大河 タケル", "円城寺 道流", "牙崎 漣", "秋月 涼", "兜 大吾", "九十九 一希", "葛之葉 雨彦", "北村 想楽", "古論 クリス", "天峰 秀", "花園 百々人", "眉見 鋭心"]
 },
 {
  "id": "Z0002",
  "name": "魂環の人形（マリオネット）",
  "url": "",
  "site": "https://idolmaster-official.jp/live_event/sidem_prs2026/movie/",
  "music": "https://open.spotify.com/intl-ja/track/77xPFPOxJnwS92Dnu8rAHX?si=18bac638472f422d",
  "image": "",
  "tags": ["ファンタジー", "シリアス", "バトル・アクション", "ヒューマンドラマ", "友情", "家族愛・兄弟愛", "アイドルが死ぬ"],
  "idols": ["天ヶ瀬 冬馬", "御手洗 翔太", "伊集院 北斗", "天道 輝", "桜庭 薫", "柏木 翼", "都築 圭", "神楽 麗", "鷹城 恭二", "ピエール", "渡辺 みのり", "蒼井 悠介", "蒼井 享介", "握野 英雄", "木村 龍", "信玄 誠司", "猫柳 キリオ", "華村 翔真", "清澄 九郎", "秋山 隼人", "冬美 旬", "榊 夏来", "若里 春名", "伊瀬谷 四季", "紅井 朱雀", "黒野 玄武", "神谷 幸広", "東雲 荘一郎", "アスラン=BBⅡ世", "卯月 巻緒", "水嶋 咲", "岡村 直央", "橘 志狼", "姫野 かのん", "硲 道夫", "舞田 類", "山下 次郎", "大河 タケル", "円城寺 道流", "牙崎 漣", "秋月 涼", "兜 大吾", "九十九 一希", "葛之葉 雨彦", "北村 想楽", "古論 クリス", "天峰 秀", "花園 百々人", "眉見 鋭心"]
 }
];
