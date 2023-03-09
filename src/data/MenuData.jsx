import {nanoid} from 'nanoid'

const menuData = [
    {
      img: "../../../gallery/image2.png",
      title: "ספיישל טוסט נקניק",
      orderInfo: "4 סוגי נקניק, ביצת עין, רטבים ומבחר ירקות",
      price: "37",
      id:"1"
    },
    {
      img: "../../../gallery/image2.png",
      title: "ספיישל טוסט קבב",
      orderInfo: "קבב, נקניק לבחירה, ביצת עין, רטבים ומבחר ירקות",
      price: "46",
      id:"2"
    },
    {
      img: "../../../gallery/image2.png",
      title: "ספיישל חזה עוף",
      orderInfo: "חזה עוף, נקניק לבחירה, ביצת עין, רטבים ומבחר ירקות",
      price: "46",
      id:"3"
    },
    {
      img: "../../../gallery/image5.png",
      title: "ספיישל המבורגר 200 גר'",
      orderInfo: "המבורגר הבית 200 גר, 100% נקניק לבחירה, ביצת עין, רטבים ומבחר ירקות",
      price: "47",
      id:"4"
    },
    {
      img: "../../../gallery/image6.png",
      title: "ספיישל המבורגר 400 גר'",
      orderInfo: "100% בשר בקר אמיתי, נקניק לבחירה, ביצת עין, רטבים ומבחר ירקות",
      price: "63",
      id:"5"
    },
    {
      img: "../../../gallery/image9.png",
      title: "המבורגר הבית 200 גר'",
      orderInfo: "100% בשר בקר אמיתי בלחמניה, רטבים ומבחר ירקות",
      price: "40",
      id:"6"
    },
    {
      img: "../../../gallery/image14.png",
      title: "המבורגר הבית 400 גר'",
      orderInfo: "100% בשר בקר אמיתי בלחמניה, רטבים ומבחר ירקות",
      price: "55",
      id:"7"
    },
    {
      img: "",
      title: "הבורגר טבעוני",
      orderInfo: "100% טעם 0% בשר, רטבים ומבחר ירקות מוגש בלחמניה",
      price: "45",
      id:"8"
    },
    {
      img: "../../../gallery/image2.png",
      title: "טוסט נקניק הבית",
      orderInfo: "3 סוגי נקניק בג'בטה, רטבים ומבחר ירקות בחירה",
      price: "31",
      id:"9"
    },
    {
      img: "../../../gallery/image14.png",
      title: "טוסט קבב",
      orderInfo: "קבב בג'בטה, רטבים ומבחר ירקות",
      price: "39",
      id:"10"
    },
    {
      img: "../../../gallery/image14.png",
      title: "טוסט נקניקיות",
      orderInfo: "נקניקיות עוף בג'בטה, רטבים ומבחר ירקות",
      price: "31",
      id:"11"
    },
    {
      img: "../../../gallery/image14.png",
      title: "טוסט בורגר",
      orderInfo: "100% בשר בקר אמיתי בג'בטה, רטבים ומבחר ירקות",
      price: "41",
      id:"12"
    },
    {
      img: "../../../gallery/image14.png",
      title: "טוסט חזה עוף",
      orderInfo: "רצועות חזה עוף בג'בטה, רטבים ומבחר ירקות",
      price: "39",
      id:"13"
    },
    {
      img: "../../../gallery/image2.png",
      title: "כריך שניצל עוף בג'בטה (שניצלונים)",
      orderInfo: "רטבים ומבחר ירקות",
      price: "35",
      id:"14"
    },
    {
      img: "../../../gallery/image15.png",
      title: "כריך חזה עוף בג'בטה",
      orderInfo: "רטבים ומבחר ירקות",
      price: "38",
      id:"15"
    },
    {
      img: "../../../gallery/image15.png",
      title: "כריך קבב בג'בטה",
      orderInfo: "רטבים ומבחר ירקות",
      price: "38",
      id:"16"
    },
    {
      img: "../../../gallery/image15.png",
      title: "כריך אנטריקוט בג'בטה",
      orderInfo: "נתחי אנטריקוט משובחים ומתובלים רטבים ומבחר ירקות",
      price: "47",
      id:"17"
    },
    {
      img: "../../../gallery/image11.png",
      title: "צ'יפס קטן",
      orderInfo: "",
      price: "12",
      id:"18"
    },
    {
      img: "../../../gallery/image11.png",
      title: "צ'יפס בינוני",
      orderInfo: "",
      price: "24",
      id:"19"
    },
    {
      img: "../../../gallery/image11.png",
      title: "צ'יפס גדול",
      orderInfo: "",
      price: "38",
      id:"20"
    },
    {
      img: "../../../gallery/image3.png",
      title: "טבעות בצל 6 יח'",
      orderInfo: "",
      price: "15",
      id:"21"
    },
    {
      img: "../../../gallery/image3.png",
      title: "טבעות בצל 10 יח'",
      orderInfo: "",
      price: "25",
      id:"22"
    },
    {
      img: "../../../gallery/image3.png",
      title: "טבעות בצל 20 יח'",
      orderInfo: "",
      price: "38",
      id:"23"
    },
    {
      img: "../../../gallery/image16.png",
      title: "שניצלונים 6 יח'",
      orderInfo: "",
      price: "17",
      id:"24"
    },
    {
      img: "../../../gallery/image16.png",
      title: "שניצלונים 10 יח'",
      orderInfo: "",
      price: "28",
      id:"25"
    },
    {
      img: "../../../gallery/image16.png",
      title: "שניצלונים 20 יח'",
      orderInfo: "",
      price: "55",
      id:"26"
    },
    {
      img: "../../../gallery/image16.png",
      title: "כדורי פירה 6 יח'",
      orderInfo: "",
      price: "15",
      id:"27"
    },
    {
      img: "../../../gallery/image16.png",
      title: "כדורי פירה 16 יח'",
      orderInfo: "",
      price: "24",
      id:"28"
    },
    {
      img: "../../../gallery/image17.png",
      title: "נשנושי נקניקיות קטן",
      orderInfo: "",
      price: "15",
      id:"29"
    },
    {
      img: "../../../gallery/image17.png",
      title: "נשנושי נקניקיות בינוני",
      orderInfo: "",
      price: "24",
      id:"30"
    },
    {
      img: "../../../gallery/image10.png",
      title: "צ'יפס בטטה קטן",
      orderInfo: "",
      price: "18",
      id:"31"
    },
    {
      img: "../../../gallery/image10.png",
      title: "צ'יפס בטטה בינוני",
      orderInfo: "",
      price: "38",
      id:"32"
    },
    {
      img: "../../../gallery/image4.png",
      title: "מיקס ענק",
      orderInfo: "צ'יפס + 2 תוספות",
      price: "50",
      id:"33"
    }
]

export default data