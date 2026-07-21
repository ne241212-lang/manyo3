// data5.js
// 5 questions total (5 plants × 1 question)

window.QUIZ = {
  title: "万葉植物園 植物クイズ",
  mapImage: "assets/map.png",
  intro: {
    title: "万葉植物園の植物さがし",
    lead:
      "写真を手がかりに、園内で同じ植物を探してみましょう。\n\n地図はあくまで“だいたいこのへん”というヒントです。\n\n全5問。",
    note: "ボタンを押すとクイズへ進みます",
  },

  plants: [
    {
      id: "fuji",
      name: "藤",
      photo: "photos/fuji.jpg",
      pin: { x: 23, y: 52 },
      pinColor: "#7C3AED",
      stages: [
        {
          type: "plant_name",
          question: "【Q1】写真の植物はどれ？",
          choices: ["藤", "アジサイ", "クズ"],
          answer: "藤",
          nameHint: "ヒント：漢字2文字。花が房みたいに垂れる。",
          correctTitle: "正解！",
          correctText: "雰囲気の歌が出ます。",
          poem: {
            title: "藤（雰囲気）",
            text: "藤波の　ほどける光　夕の庭",
            modern: "夕方の光の中で、藤の花がほどけるように揺れて見える。",
          },
        },
      ],
    },

    {
      id: "sugi",
      name: "杉",
      photo: "photos/sugi.jpg",
      pin: { x: 60, y: 18 },
      pinColor: "#059669",
      stages: [
        {
          type: "plant_name",
          question: "【Q2】写真の植物はどれ？",
          choices: ["杉", "ヒノキ", "マツ"],
          answer: "杉",
          nameHint: "ヒント：漢字1文字。まっすぐ高く伸びる木。",
          correctTitle: "正解！",
          correctText: "雰囲気の歌が出ます。",
          poem: {
            title: "杉（雰囲気）",
            text: "冬の森　音を抱えた　杉の影",
            modern: "冷たい森で、杉の影が静かに伸びている感じ。",
          },
        },
      ],
    },

    {
      id: "himejoon",
      name: "ヒメジョオン",
      photo: "photos/shaku.jpg",
      pin: { x: 50, y: 60 },
      pinColor: "#F59E0B",
      stages: [
        {
          type: "plant_name",
          question: "【Q3】写真の植物はどれ？",
          choices: ["ヒメジョオン", "タンポポ", "ハルジオン"],
          answer: "ヒメジョオン",
          nameHint: "ヒント：カタカナ6文字。白い花びらがたくさん。道ばたに多い。",
          correctTitle: "正解！",
          correctText: "雰囲気の歌が出ます。",
          poem: {
            title: "ヒメジョオン（雰囲気）",
            text: "白き点　道の端に咲き　風を待つ",
            modern: "小さな白い花が集まって、道の端で静かに揺れている感じ。",
          },
        },
      ],
    },

    {
      id: "hagi",
      name: "萩",
      photo: "photos/hagi.jpg",
      pin: { x: 40, y: 30 },
      pinColor: "#EC4899",
      stages: [
        {
          type: "plant_name",
          question: "【Q4】写真の植物はどれ？",
          choices: ["萩", "ススキ", "ツツジ"],
          answer: "萩",
          nameHint: "ヒント：漢字1文字。秋の七草で有名。",
          correctTitle: "正解！",
          correctText: "雰囲気の歌が出ます。",
          poem: {
            title: "萩（雰囲気）",
            text: "秋の風　萩の影だけ　先に揺れ",
            modern: "風が来ると、まず萩の影がゆれて見える感じ。",
          },
        },
      ],
    },

    {
      id: "susuki",
      name: "ススキ",
      photo: "photos/susuki.jpg",
      pin: { x: 70, y: 50 },
      pinColor: "#64748B",
      stages: [
        {
          type: "plant_name",
          question: "【Q5】写真の植物はどれ？",
          choices: ["ススキ", "ハス", "フジ"],
          answer: "ススキ",
          nameHint: "ヒント：カタカナ3文字。秋にふわっとした穂が出る草。",
          correctTitle: "正解！",
          correctText: "雰囲気の歌が出ます。",
          poem: {
            title: "ススキ（雰囲気）",
            text: "月の下　穂がほどけゆく　野のしずけさ",
            modern: "月明かりで、ススキの穂がふわっとほどけて見える感じ。",
          },
        },
      ],
    },
  ],
};
