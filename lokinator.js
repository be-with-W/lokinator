// コンテンツのデータ(CONTENTS)は contents.js にあります
const TAGS = ["現代", "ファンタジー", "SF", "歴史", "ギャグ・コメディ", "シリアス", "バトル・アクション", "ミステリー", "サスペンス", "ホラー", "バイオレンス", "ヒューマンドラマ", "友情", "家族愛・兄弟愛", "恋愛・ロマンス", "冒険", "学園", "極道・マフィア", "童話・昔話", "子ども向け", "アイドルが死ぬ"];
const selected = new Set();
const $tags = document.getElementById("tags");
const $count = document.getElementById("count");
const $clear = document.getElementById("clear");
const $result = document.getElementById("result");

function el(tag, props = {}, children = []) {
  const e = document.createElement(tag);
  Object.assign(e, props);
  children.forEach(c => e.append(c));
  return e;
}

// タグボタンを作成
// ボタンは3列に並べる
$tags.style.setProperty("--cols", 3);
const countEls = {};
const tagEls = {};
TAGS.forEach(tag => {
  const countEl = el("span", { className: "n" });
  countEls[tag] = countEl;
  const b = el("button", { type: "button", className: "tag" }, [
    el("span", { className: "nm", textContent: tag }),
    countEl
  ]);
  // 件数の桁数が変わっても折り返し位置が変わらないよう、最大桁数ぶんの幅を確保
  const digits = String(CONTENTS.length).length;
  countEl.style.minWidth = (3.1 + digits * 0.6) + "em";
  tagEls[tag] = b;
  b.setAttribute("aria-pressed", "false");
  b.addEventListener("click", () => {
    selected.has(tag) ? selected.delete(tag) : selected.add(tag);
    b.setAttribute("aria-pressed", selected.has(tag));
    render();
  });
  $tags.append(b);
});

// 出演者検索(ボタン3つで3人まで選べる。ジャンルと組み合わせてAND検索)
const IDOL_SLOTS = 3;
const $idolSelect = document.getElementById("idol-select");
// ボタン1つ分 = { name: 選択中の出演者, btn, list, opts: {名前: li}, counts: {名前: 件数の要素} }
const idolSlots = [];
for (let s = 0; s < IDOL_SLOTS; s++) {
  const slot = { name: "", opts: {}, counts: {} };
  slot.list = el("ul", { className: "idol-list", id: "idol-list-" + s, role: "listbox", hidden: true });
  slot.btn = el("button", { type: "button", className: "idol-btn" });
  slot.btn.setAttribute("aria-haspopup", "listbox");
  slot.btn.setAttribute("aria-expanded", "false");
  slot.btn.setAttribute("aria-controls", slot.list.id);
  slot.btn.setAttribute("aria-label", "出演者" + (s + 1));
  // 先頭は選択を外すための「指定しない」
  ["", ...IDOLS].forEach(name => {
    const countEl = el("span", { className: "n" });
    const li = el("li", { className: "idol-opt", role: "option", tabIndex: -1 }, [
      el("span", { className: "nm", textContent: name || "指定しない" }),
      countEl
    ]);
    slot.opts[name] = li;
    slot.counts[name] = countEl;
    li.addEventListener("click", () => selectIdol(slot, name));
    li.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); selectIdol(slot, name); }
    });
    slot.list.append(li);
  });
  slot.btn.addEventListener("click", () => slot.list.hidden ? openIdolList(slot) : closeIdolLists());
  // 上下キーで一覧の中を移動、Escで閉じる
  el("div", { className: "idol-slot" }, [slot.btn, slot.list]).addEventListener("keydown", e => {
    if (e.key === "Escape") { closeIdolLists(); slot.btn.focus(); }
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (slot.list.hidden) openIdolList(slot);
      const opts = [...slot.list.children];
      const i = opts.indexOf(document.activeElement);
      const next = i < 0 ? opts.indexOf(slot.opts[slot.name]) : i + (e.key === "ArrowDown" ? 1 : -1);
      opts[Math.max(0, Math.min(opts.length - 1, next))].focus();
    }
  });
  $idolSelect.append(slot.btn.parentNode);
  idolSlots.push(slot);
}

// 選択中の出演者(空欄は除く)
function selectedIdols() {
  return idolSlots.map(s => s.name).filter(Boolean);
}

function selectIdol(slot, name) {
  if (slot.opts[name].classList.contains("empty")) return;
  slot.name = name;
  closeIdolLists();
  slot.btn.focus();
  render();
}
// 開ける一覧は1つだけ
function openIdolList(slot) {
  closeIdolLists();
  slot.list.hidden = false;
  slot.btn.setAttribute("aria-expanded", "true");
  // 選択中の出演者が見える位置までスクロール(ページ自体は動かさない)
  slot.list.scrollTop = slot.opts[slot.name].offsetTop - slot.list.clientHeight / 2;
}
function closeIdolLists() {
  idolSlots.forEach(s => {
    s.list.hidden = true;
    s.btn.setAttribute("aria-expanded", "false");
  });
}
// 一覧の外をクリックしたら閉じる
document.addEventListener("click", e => {
  if (!$idolSelect.contains(e.target)) closeIdolLists();
});

$clear.addEventListener("click", () => {
  selected.clear();
  idolSlots.forEach(s => s.name = "");
  $tags.querySelectorAll(".tag").forEach(b => b.setAttribute("aria-pressed", "false"));
  render();
});

// 選択中のジャンルをすべて持ち、選択中の出演者が全員出ているか
function matches(c, idols = selectedIdols()) {
  return [...selected].every(t => c.tags.includes(t)) && idols.every(i => c.idols.includes(i));
}

// highlight に入っているタグは色を変えて表示(かんたん検索で選択中のタグ)
function createCard(c, showLink = true, highlight = []) {
  const body = el("div", {}, [
    el("h2", { textContent: c.name }),
    el("ul", { className: "t" }, c.tags.map(t => el("li", { textContent: t, className: highlight.includes(t) ? "hit" : "" })))
  ]);
  // リンク(URLがあるものだけ横に並べる)
  // showLink が false のとき(質問モードの回答)は『物語を読む』ボタンが別にあるので、物語のリンクだけ出さない
  const links = [
    [showLink && c.url, "ストーリー"],
    [c.site, "特設サイト"],
    [c.music, "関連楽曲"]
  ].filter(([href]) => href)
    .map(([href, text]) => el("a", { href, textContent: text, target: "_blank", rel: "noopener" }));
  if (links.length) body.append(el("div", { className: "links" }, links));
  const card = el("li", { className: "card" });
  // image に YouTube の URL が入っていたら、画像の代わりに動画を埋め込む
  const video = youtubeId(c.image);
  if (video) card.append(el("iframe", {
    src: "https://www.youtube-nocookie.com/embed/" + video,
    title: c.name,
    loading: "lazy",
    allow: "encrypted-media; picture-in-picture; fullscreen",
    allowFullscreen: true,
    referrerPolicy: "strict-origin-when-cross-origin"
  }));
  else if (c.image) card.append(el("img", { src: c.image, alt: "", loading: "lazy" }));
  card.append(body);
  return card;
}

// YouTube の URL(youtu.be/〇〇、watch?v=〇〇、shorts/〇〇、embed/〇〇)から動画IDを取り出す。YouTube でなければ空文字
function youtubeId(url) {
  const m = (url || "").match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/))([\w-]{11})/);
  return m ? m[1] : "";
}

// 選択中のタグをすべて持つデータのうち、各タグを持つ件数を表示
function updateCounts() {
  const base = CONTENTS.filter(c => matches(c));
  TAGS.forEach(tag => {
    const n = base.filter(c => c.tags.includes(tag)).length;
    countEls[tag].textContent = "（" + n + "件）";
    // 件数0のタグはグレーアウト(選択中のタグは解除できるよう通常の見た目のまま)
    tagEls[tag].classList.toggle("empty", n === 0 && !selected.has(tag));
  });
  // 出演者の件数は、選択中のジャンルと「他のボタンで選んだ出演者」で絞り込んだ中から数える
  idolSlots.forEach(slot => {
    const others = idolSlots.filter(s => s !== slot).map(s => s.name).filter(Boolean);
    const pool = CONTENTS.filter(c => matches(c, others));
    ["", ...IDOLS].forEach(name => {
      const n = name ? pool.filter(c => c.idols.includes(name)).length : pool.length;
      slot.counts[name].textContent = "（" + n + "件）";
      // 件数0の出演者と、他のボタンで選択済みの出演者は選べない
      // (「指定しない」は選択を外せるよう常に選べる)
      slot.opts[name].classList.toggle("empty", name !== "" && (n === 0 || others.includes(name)) && name !== slot.name);
      slot.opts[name].setAttribute("aria-selected", name === slot.name);
    });
    slot.btn.replaceChildren(el("span", { className: "nm", textContent: slot.name || "指定しない" }));
    slot.btn.classList.toggle("on", !!slot.name);
  });
}

function render() {
  updateCounts();
  const noneSelected = selected.size === 0 && selectedIdols().length === 0;
  $clear.disabled = noneSelected;
  $result.replaceChildren();

  // AND絞り込み(ジャンル + 出演者) + ID順。何も選んでいなければ全作品
  const hits = CONTENTS
    .filter(c => matches(c))
    .sort((a, b) => a.id.localeCompare(b.id));

  // 該当なし
  if (hits.length === 0) {
    $count.textContent = "";
    $result.append(el("p", { className: "msg", textContent: "なし" }));
    return;
  }

  $count.textContent = hits.length + "件見つかりました。";
  $result.append(el("ul", { className: "list" }, hits.map(c => createCard(c, true, [...selected]))));
}

// モード切り替え(質問 / かんたん検索)
const $modes = document.getElementById("modes");
const modeSections = {
  simple: document.getElementById("mode-simple"),
  question: document.getElementById("mode-question")
};
$modes.querySelectorAll(".mode").forEach(b => {
  b.addEventListener("click", () => {
    $modes.querySelectorAll(".mode").forEach(m => m.setAttribute("aria-pressed", m === b));
    Object.entries(modeSections).forEach(([mode, section]) => {
      section.hidden = mode !== b.dataset.mode;
    });
    // 吹き出しは質問モードのときだけ表示
    $bubble.hidden = b.dataset.mode !== "question";
    // ロキネーターモードに戻ったら吹き出しもフロートインし直す
    // (選択肢・カード・ボタンは非表示から戻ると自動で再生される)
    if (b.dataset.mode === "question" && document.body.dataset.mode !== "question") playBubble();
    // ロキの表情: かんたん検索では通常の表情、質問モードでは今の質問の表情
    setFace(b.dataset.mode === "question" ? quizFace : 0);
    // スマホのかんたん検索ではロキの画像を隠す(CSSの body[data-mode] で切り替え)
    document.body.dataset.mode = b.dataset.mode;
  });
});

// 質問モード
// 質問と選択肢。type の意味:
//   score   … tags のジャンルを含む作品に加点(ジャンル1つにつき1pt)
//   exclude … tags のどれかを含む作品を除外
//   (type なし … 何もしない)
// skipNext: true なら次の質問を飛ばす
// face: その質問のときのロキの表情(character/loki_kyosuke○.png の番号。なしなら0)
const QUIZ = [
  { text: "どんな世界の物語が読みたいかな？", choices: [
    { label: "現代", type: "score", tags: ["現代"] },
    { label: "近未来", type: "score", tags: ["SF"] },
    { label: "とおい昔", type: "score", tags: ["歴史"] },
    { label: "ファンタジー", type: "score", tags: ["ファンタジー"], skipNext: true },
    { label: "おとぎ話", type: "score", tags: ["童話・昔話"], skipNext: true },
    { label: "特にない" }
  ] },
  { text: "登場人物はどんな人がいい？", choices: [
    { label: "学生", type: "score", tags: ["学園"] },
    { label: "戦う人・ヒーロー", type: "score", tags: ["バトル・アクション"] },
    { label: "裏社会に生きる人", type: "score", tags: ["極道・マフィア"] },
    { label: "普通の人", type: "score", tags: ["現代"] },
    { label: "特にない" }
  ] },
  { text: "好きな雰囲気は？", face: 1, choices: [
    { label: "胸がドキドキ", type: "score", tags: ["恋愛・ロマンス"] },
    { label: "明るくて楽しい", type: "score", tags: ["ギャグ・コメディ", "子ども向け"] },
    { label: "ダークで重い", type: "score", tags: ["シリアス", "バイオレンス"] },
    { label: "ゾクッとしたい", type: "score", tags: ["ホラー", "サスペンス"] },
    { label: "特にない" }
  ] },
  { text: "物語にほしい要素と言えば？", face: 2, choices: [
    { label: "派手なアクション", type: "score", tags: ["バトル・アクション", "冒険"] },
    { label: "感情の揺れ動き", type: "score", tags: ["ヒューマンドラマ"] },
    { label: "ハラハラする展開", type: "score", tags: ["サスペンス", "ミステリー"] },
    { label: "特にない" }
  ] },
  { text: "物語のテーマは？", face: 2, choices: [
    { label: "仲間との信頼", type: "score", tags: ["友情"] },
    { label: "家族との絆", type: "score", tags: ["家族愛・兄弟愛"] },
    { label: "謎と真相", type: "score", tags: ["ミステリー"] },
    { label: "強さと勝利", type: "score", tags: ["バトル・アクション"] },
    { label: "どれでも" }
  ] },
  { text: "グロテスクな表現は平気かい？", face: 3, choices: [
    { label: "むしろ好き", type: "score", tags: ["ホラー", "バイオレンス"] },
    { label: "ふつう" },
    { label: "苦手", type: "exclude", tags: ["ホラー", "バイオレンス"] }
  ] }
];
// 加点。ここにないジャンルは1pt
const QUIZ_POINTS = { "バトル・アクション": 0.5 };
// ジャンル数の補正で数えないジャンル(どの質問でも加点されないもの)
const QUIZ_UNCOUNTED_TAGS = ["アイドルが死ぬ"];
// 抽選の偏り(quizDraw を参照)
const QUIZ_WEIGHT_POWER = 4;
const $quiz = document.getElementById("quiz");
const $bubble = document.getElementById("bubble"); // キャラクターの吹き出し
let quizPool = [];         // 候補の作品(除外されたもの以外)
let quizScore = new Map(); // 作品ごとのポイント
let quizStep = 0;          // 今の質問の番号(0から)
let quizAsked = 0;         // これまでに聞いた質問の数(飛ばした質問は数えない)
let quizTagPoints = {};    // ジャンルごとのポイント(1pt以上のジャンルを回答のカードでハイライト)
let quizFace = 0;          // 今のロキの表情(かんたん検索では0を表示し、質問モードに戻ったらこれに戻す)

// ロキの表情を切り替える(アニメーションなし)
const $face = document.querySelector(".stage img");
const faceSrc = n => "character/loki_kyosuke" + n + ".png";
// 切り替えたときに読み込み待ちで一瞬消えないよう、表情差分を先に読み込んでおく(4は『物語を読む』を押したとき)
[...QUIZ.map(q => q.face).filter(Boolean), 4].forEach(n => new Image().src = faceSrc(n));
function setFace(n) {
  $face.src = faceSrc(n);
}
function setQuizFace(n) {
  quizFace = n;
  if (document.body.dataset.mode === "question") setFace(n);
}

// 質問1の前のあいさつ(ポイントには影響しない)。
// ページを開いたときだけ表示し、『もう一度会話する』では飛ばして質問1から始める
function quizIntro() {
  // 吹き出しが狭くて折り返すときは「我と話が／したいのかい？」で改行する
  setBubble(phrases(["我と話が", "したいのかい？"]), true);
  setQuizFace(0);
  const start = el("button", { type: "button", className: "q-choice", textContent: "会話を始める" });
  start.addEventListener("click", quizStart);
  $quiz.replaceChildren(el("div", { className: "q-choices float-in" }, [start]));
}

function quizStart() {
  quizPool = [...CONTENTS];
  quizScore = new Map(CONTENTS.map(c => [c.id, 0]));
  quizStep = 0;
  quizAsked = 0;
  quizTagPoints = {};
  quizAsk(true);
}

// animateBubble が true なら吹き出しもフロートイン(質問1のとき)
function quizAsk(animateBubble = false) {
  const q = QUIZ[quizStep];
  setBubble(q.text, animateBubble);
  setQuizFace(q.face ?? 0);
  $quiz.replaceChildren(
    el("p", { className: "q-step float-in-item", textContent: "質問" + (quizAsked + 1) }),
    // 選択肢は下からフロートイン(1つずつ少し遅らせる)
    el("div", { className: "q-choices float-in" }, q.choices.map((choice, i) => {
      const b = el("button", { type: "button", className: "q-choice", textContent: choice.label });
      b.style.animationDelay = (i * 0.08) + "s";
      b.addEventListener("click", () => quizSelect(choice));
      return b;
    }))
  );
}

function quizSelect(choice) {
  if (choice.type === "score") {
    choice.tags.forEach(t => quizTagPoints[t] = (quizTagPoints[t] ?? 0) + (QUIZ_POINTS[t] ?? 1));
    CONTENTS.forEach(c => {
      const pt = choice.tags.filter(t => c.tags.includes(t)).reduce((sum, t) => sum + (QUIZ_POINTS[t] ?? 1), 0);
      quizScore.set(c.id, quizScore.get(c.id) + pt);
    });
  }
  if (choice.type === "exclude") quizPool = quizPool.filter(c => !choice.tags.some(t => c.tags.includes(t)));
  quizAsked++;
  quizStep += choice.skipNext ? 2 : 1;
  if (quizStep >= QUIZ.length) return quizAnswer();
  quizAsk();
}

// 最終的なポイント。ジャンルが多い作品ほど加点されやすいので、
// 合計ポイントをジャンル数の√で割って補正する(同点判定がずれないよう小数を丸める)
function quizFinalScore(c) {
  const n = c.tags.filter(t => !QUIZ_UNCOUNTED_TAGS.includes(t)).length;
  return Math.round(quizScore.get(c.id) / Math.sqrt(Math.max(n, 1)) * 1e6) / 1e6;
}

// ポイントに応じた確率で1つ抽選する(ポイントが高い作品ほど当たりやすい)。
// 当たりやすさ = ポイントの QUIZ_WEIGHT_POWER 乗。数字を大きくするほど上位の作品に偏る。
// 全作品0ptならどれも同じ確率
function quizDraw() {
  const weights = quizPool.map(c => quizFinalScore(c) ** QUIZ_WEIGHT_POWER);
  const total = weights.reduce((a, b) => a + b, 0);
  if (total === 0) return quizPool[Math.floor(Math.random() * quizPool.length)];
  let r = Math.random() * total;
  for (let i = 0; i < quizPool.length; i++) {
    r -= weights[i];
    if (r < 0) return quizPool[i];
  }
  return quizPool[quizPool.length - 1];
}

// Xでシェアするときに載せるこのサイトのURL。
// 空のときは、公開中のページ(http/https)ならそのURLを使う。パソコン上のファイルを開いているときは載せない
const SITE_URL = "";
function siteUrl() {
  if (SITE_URL) return SITE_URL;
  return location.protocol.startsWith("http") ? location.origin + location.pathname : "";
}

// 回答をXにポストする画面のURL
function shareUrl(pick) {
  const lines = ["あなたにおすすめの劇中劇は", "『" + pick.name + "』"];
  // ストーリーのリンクがない作品は、この部分を入れない
  if (pick.url) lines.push("", "▼ストーリーを読む▼", pick.url);
  if (siteUrl()) lines.push("", "▼劇中劇検索ツール ロキネーター▼", siteUrl());
  return "https://x.com/intent/tweet?text=" + encodeURIComponent(lines.join("\n"));
}

function quizAnswer() {
  const restart = el("button", { type: "button", className: "clear q-restart", textContent: "もう一度会話する" });
  restart.addEventListener("click", quizStart);
  const pick = quizDraw();
  setQuizFace(0);
  // 吹き出しが狭くて折り返すときは「／」の位置で改行する
  setBubble(phrases(pick ? ["キミに合う物語が", "見つかったようだね"] : ["物語が|見つからなかった", "ようだね"]), true);
  // 『物語を読む』はURLがなければ押せない状態で表示(カード内のリンクは出さない)
  const actions = el("div", { className: "q-actions float-in-item" });
  actions.style.animationDelay = "0.1s"; // カードより少し遅れて表示
  if (pick && pick.url) {
    const read = el("a", { className: "clear q-read", href: pick.url, textContent: "物語を読む", target: "_blank", rel: "noopener" });
    // 物語を開いたらロキの台詞を変える
    read.addEventListener("click", () => { setBubble("我にはなんでもお見通しさ", true); setQuizFace(4); });
    actions.append(read);
  }
  else if (pick) actions.append(el("button", { type: "button", className: "clear q-read", textContent: "物語を読む", disabled: true }));
  if (pick) actions.append(el("a", { className: "clear q-share", href: shareUrl(pick), textContent: "Xでシェア", target: "_blank", rel: "noopener" }));
  actions.append(restart);
  $quiz.replaceChildren(
    el("p", { className: "q-step float-in-item", textContent: "回答" }),
    pick ? el("ul", { className: "list float-in-item" }, [createCard(pick, false, Object.keys(quizTagPoints).filter(t => quizTagPoints[t] >= 1))]) : el("p", { className: "msg float-in-item", textContent: "なし" }),
    actions
  );
}

// 吹き出しの台詞を、途中で改行しないまとまりに分ける(折り返すときはまとまりの間で改行される)。
// まとまりの中の「|」は、まとまりだけで吹き出しに入りきらないときに改行する位置
function phrases(parts) {
  return parts.map(t => el("span", { className: "phrase" },
    t.split("|").flatMap((s, i) => i ? [el("wbr"), s] : [s])));
}

// 吹き出しの文章を変える。content は文字列か、文字列と要素の配列
// animate が true ならフロートインで表示
function setBubble(content, animate) {
  $bubble.replaceChildren(...[].concat(content));
  $bubble.classList.remove("float-in-item");
  if (animate) playBubble();
}

// 吹き出しのフロートインを最初から再生し直す(文章はそのまま)
function playBubble() {
  $bubble.classList.remove("float-in-item");
  void $bubble.offsetWidth;
  $bubble.classList.add("float-in-item");
}

quizIntro();
render();
