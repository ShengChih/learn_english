var app = new Vue({
    el: '#app',
    data: {
        message: '',
        next_question: '下一道題目',
        sound_source: '',
        questions: {
            "Borne(bear/born/borne)": "承擔",
            "promptly": "立即地、即時地",
            "stunt": "特技、噱頭",
            "premium": "保險費、獎金、優質的",
            "tangible": "真實的、可觸及的",
            "fraud": "舞弊、欺騙",
            "Artificial intelligence": "人工智慧",
            "pandemic": "大流行",
            "quarantine": "隔離、檢疫所",
            "precinct": "步行區",
            "Ice sheet": "冰冠",
            "glacier": "冰川",
            "Tipping point": "臨界點",
            "mutation": "變質",
            "cull": "挑選、篩選",
            "The bends": "潛水夫病",
            "vertical": "垂直的",
            "physiologically": "生理上的",
            "collocation": "排列",
            "lunatic": "瘋子",
            "relish": "喜愛、佐料",
            "saint": "聖人",
            "dynamite": "爆炸的",
            "lumber": "木材",
            "depress": "壓抑",
            "addicted": "成癮的",
            "coronavirus": "冠狀病毒",
            "obsessed": "癡迷、眷戀、著迷",
            "gloom": "陰暗的",
            "doom": "厄運、死亡",
            "climate": "氣候",
            "point of no return": "沒有退路",
            "heating": "熱度",
            "polar": "極性",
            "gigaton": "十億噸",
            "thick": "厚",
            "frustration": "沮喪",
            "in sight": "在望",
            "hottest": "最熱",
            "satellite": "衛星",
            "criteria": "準則、規範",
            "drain": "排水、外洩",
            "grasp": "把握",
            "declarative": "宣示的",
            "hood": "兜帽、引擎蓋",
            "interpolation": "插值",
            "directive": "指揮、指示",
            "demonstrate": "示範",
            "manipulation": "操控",
            "underlying": "底層的",
            "contrive": "努力、策畫",
            "further": "進一步",
            "notable": "顯著的",
            "cathedral": "大教堂",
            "dominate": "主導",
            "spire": "螺旋、尖塔",
            "stretch": "延展",
            "metre": "公尺",
            "parapet": "欄杆",
            "tour": "遊覽、巡迴",
            "stonemason": "雕刻家",
            "clamber": "攀登",
            "beneath": "在…下面",
            "loft": "倉庫",
            "carve": "洞穴",
            "forebear": "前額、祖宗",
            "century": "世紀",
            "exterior": "外向、外觀",
            "abash": "使窘迫",
            "abort": "墮胎(v)",
            "abortion": "流產(n)",
            "abrasion": "磨損",
            "abrasive": "粗暴的",
            "abridge": "刪節、節略",
            "abstain": "戒除、棄權",
            "Abstraction": "除去、心不在焉",
            "abstruse": "難解的",
            "abyss": "深淵",
            "Accessibility": "易接近",
            "accessibility of target": "易達成目標",
            "accessorize(v)": "補充",
            "accessory": "配件",
            "acciddent prone": "易遭遇意外、易闖禍的",
            "acclimatize": "使適應、習慣新氣候",
            "Accountability": "有責任",
            "Accountable": "有責任的",
            "ace": "能手、紙牌",
            "acknowledgement": "承認",
            "acoustic": "原聲的、聲音的",
            "acquisition": "獲得",
            "acquisitive": "渴望得到、貪得無厭的",
            "ecology": "生態學",
            "joey": "幼獸",
            "marsupial": "有袋動物的",
            "thrive": "繁榮、興盛、茁壯",
            "habitat": "棲息地",
            "bushfire": "森林大火",
            "Flame": "火焰",
            "dehydration": "脫水",
            "Mentally": "心理上",
            "cuddle": "擁抱、摟抱",
            "episode": "插曲",
            "Epic": "史詩(般的)",
            "twin": "雙胞胎其中一個",
            "magnificent": "華麗的",
            "unicorn": "獨角獸",
            "massive": "大規模的、宏偉的",
            "mindest": "心態",
            "malware": "惡意程式",
            "Data breach": "資料外洩",
            "infiltrate": "入侵、滲透"
        }
    },
    methods: {
        nextQuestion: function () {
            let type = this.randomExamType();
            let question = this.randomQuestion();
            this.message = this.setQuestion(question, type);
            console.warn([
                'Answer => ',
                question,
                ' , ',
                this.questions[question]
            ]);
            this.deleteQuestion(question);
        },
        setQuestion: function (question, type) {
            switch (type) {
                case 0:
                    return question;
                case 1:
                    return this.questions[question];
                case 2:
                    this.playAudience(question);
                    return '';
                default:
                    alert('系統錯誤');
                    return '';
            }
        },
        deleteQuestion: function (question) {
            delete this.questions[question];
        },
        randomExamType: function () {
            let type = Math.floor(Math.random() * Math.floor(3)); // 0 - 2

            switch (type) {
                case 0:
                    console.log("英翻中");
                    break;
                case 1:
                    console.log("中翻英");
                    break;
                case 2:
                    console.log("聽力");
                    break;
                default:
                    alert('系統錯誤');
                    return '';
                    break;
            }

            return type;
        },
        randomQuestion: function () {
            let indexlist = Object.keys(this.questions);
            let len = indexlist.length;
            let pick = Math.floor(Math.random() * Math.floor(len)); // 0 ~ len

            return indexlist[pick];
        },
        playAudience: function (question) {
            let href = [
                "https://dict.youdao.com/dictvoice?audio=",
                question,
                "&type=2"
            ].join('');

            this.sound_source = href;
        }
    }
});