const i18n = {
  en: {
    startGameBtn: "Start Game",
    newChars: "New Characters to Learn",
    clickToHear: "Click on a card to hear its pronunciation",
    startRoundBtn: "Start Round",
    placeholder: "Type phonetic spelling here...",
    levelProgress: "Level Progress",
    details: "Details",
    timeUp: "Time's up!",
    incorrect: "Incorrect!",
    correctWas: "Correct: ",
    stage: "Stage: ",
    levelInfo: "Level: ",
    itemsInfo: " | Items: ",
    gameCompleted: "Game Completed! Congratulations!",
    resetProgress: "Reset Progress",
    replayLevel: "Replay Level: ",
    playSelected: "Play Selected Level",
    listeningScore: "Score: ",
    gameOver: "Game Over!",
    finalScore: "Your Final Score: ",
    readingMode: "📖 Reading Mode",
    listeningMode: "🎧 Listening Mode",
    speakingMode: "🎤 Speaking Mode",
    listening: "Listening...",
    micError: "Microphone error: ",
    nextQuestion: "Next",
    quit: "Quit",
    meaning: "meaning",
    listenAgain: "Listen Again",
  },
  kr: {
    startGameBtn: "게임 시작",
    newChars: "배울 새 글자/단어",
    clickToHear: "카드를 클릭하면 발음을 들을 수 있어요",
    startRoundBtn: "라운드 시작",
    placeholder: "발음을 입력하세요...",
    levelProgress: "레벨 진행도",
    details: "상세 정보",
    timeUp: "시간 초과!",
    incorrect: "틀렸어요!",
    correctWas: "정답: ",
    stage: "단계: ",
    levelInfo: "레벨: ",
    itemsInfo: " | 항목: ",
    gameCompleted: "게임 완료! 축하합니다!",
    resetProgress: "진행 초기화",
    replayLevel: "레벨 다시 플레이: ",
    playSelected: "선택한 레벨 플레이",
    listeningScore: "점수: ",
    gameOver: "게임 오버!",
    finalScore: "최종 점수: ",
    readingMode: "📖 읽기 모드",
    listeningMode: "🎧 듣기 모드",
    speakingMode: "🎤 말하기 모드",
    listening: "듣는 중...",
    micError: "마이크 오류: ",
    nextQuestion: "다음",
    quit: "종료",
    meaning: "의미",
    listenAgain: "다시 듣기",
  },
};

// Polish alphabet & language stages
// `pl` = Polish character/word
// `en` = English phonetic guide
// `kr` = Korean phonetic guide
// `meaning_en` / `meaning_kr` = word meaning (for words stage)

const stages = {
  letters: [
    // Basic vowels
    { pl: "a", en: "a (as in 'father')", kr: "아 (아버지의 아)" },
    { pl: "e", en: "e (as in 'bed')", kr: "에 (침대의 에)" },
    { pl: "i", en: "i (as in 'see')", kr: "이 (보다의 이)" },
    { pl: "o", en: "o (as in 'for')", kr: "오 (위한의 오)" },
    { pl: "u/ó", en: "u (as in 'food')", kr: "우 (음식의 우)" },
    { pl: "y", en: "y (like 'i' but harder)", kr: "으 (단단한 이)" },
    // Nasal vowels
    { pl: "ą", en: "on/om (nasal 'o')", kr: "옹/옴 (비음 오)" },
    { pl: "ę", en: "en/em (nasal 'e')", kr: "엥/엠 (비음 에)" },
    // Special consonants
    { pl: "ć/ci", en: "ch (soft, like 'cheese')", kr: "치 (부드러운)" },
    { pl: "ń/ni", en: "ny (like 'canyon')", kr: "니 (캐년의 니)" },
    { pl: "ś/si", en: "sh (soft s)", kr: "쉬 (부드러운 시)" },
    { pl: "ź/zi", en: "zh (soft z)", kr: "지 (부드러운 지)" },
    { pl: "ż/rz", en: "zh (hard, like measure)", kr: "쥐 (딱딱한)" },
    { pl: "ł", en: "w (like English 'w')", kr: "우/워 (영어의 w)" },
    { pl: "w", en: "v (like English 'v')", kr: "브 (영어의 v)" },
    { pl: "j", en: "y (like English 'y')", kr: "이 (영어의 y)" },
    { pl: "ch/h", en: "h (like Scottish 'loch')", kr: "흐 (거친 흐)" },
    { pl: "c", en: "ts (like 'cats')", kr: "츠 (고양이의 츠)" },
    { pl: "z", en: "z (like 'zoo')", kr: "즈 (동물원의 즈)" },
    { pl: "r", en: "r (rolled/trilled r)", kr: "르 (굴린 르)" },
  ],

  digraphs: [
    { pl: "cz", en: "ch (as in 'church')", kr: "치 (교회의 치)" },
    { pl: "sz", en: "sh (as in 'shop')", kr: "쉬 (가게의 쉬)" },
    { pl: "dz", en: "dz (as in 'beds')", kr: "즈 (침대의 즈)" },
    { pl: "dź/dzi", en: "dj (soft, like 'jeep')", kr: "지 (부드러운)" },
    { pl: "dż", en: "dj (hard, like 'judge')", kr: "쥐 (딱딱한 지)" },
    { pl: "ch", en: "h (like Scottish 'loch')", kr: "흐 (거친 흐)" },
    { pl: "szcz", en: "shch (like 'fresh cheese')", kr: "쉬치/슈치" },
    { pl: "rz", en: "zh (like 's' in 'measure')", kr: "쥐 (측정의 쥐)" },
  ],

  syllables: [
    { pl: "ma", en: "ma", kr: "마" },
    { pl: "pa", en: "pa", kr: "파" },
    { pl: "ta", en: "ta", kr: "타" },
    { pl: "ka", en: "ka", kr: "카" },
    { pl: "ba", en: "ba", kr: "바" },
    { pl: "wo", en: "vo", kr: "보" },
    { pl: "la", en: "la", kr: "라" },
    { pl: "nie", en: "nye", kr: "녜" },
    { pl: "czy", en: "chi", kr: "치" },
    { pl: "prze", en: "pshe", kr: "프셰" },
  ],

  words: [
    // Greetings & basics
    {
      pl: "cześć",
      en: "cheshch",
      kr: "체시치",
      meaning_en: "hi/hello",
      meaning_kr: "안녕",
    },
    {
      pl: "dziękuję",
      en: "jyen-KOO-yeh",
      kr: "젠쿠예",
      meaning_en: "thank you",
      meaning_kr: "감사합니다",
    },
    {
      pl: "tak",
      en: "tak",
      kr: "타크",
      meaning_en: "yes",
      meaning_kr: "네",
    },
    {
      pl: "nie",
      en: "nye",
      kr: "녜",
      meaning_en: "no",
      meaning_kr: "아니요",
    },
    {
      pl: "proszę",
      en: "PRO-sheh",
      kr: "프로셰",
      meaning_en: "please / here you go",
      meaning_kr: "부탁해요",
    },
    {
      pl: "przepraszam",
      en: "psheh-PRA-sham",
      kr: "프셰프라샴",
      meaning_en: "sorry / excuse me",
      meaning_kr: "죄송합니다",
    },
    {
      pl: "do widzenia",
      en: "do vee-DZEN-ya",
      kr: "도 비제냐",
      meaning_en: "goodbye",
      meaning_kr: "안녕히 가세요",
    },
    {
      pl: "na zdrowie",
      en: "na ZDRO-vye",
      kr: "나 즈드로비에",
      meaning_en: "cheers / bless you",
      meaning_kr: "건배 / 건강을",
    },
    {
      pl: "pomoc",
      en: "PO-mots",
      kr: "포모츠",
      meaning_en: "help",
      meaning_kr: "도움",
    },
    {
      pl: "dobrze",
      en: "DOB-zheh",
      kr: "도브제",
      meaning_en: "good / okay",
      meaning_kr: "좋아요",
    },
    // Numbers
    {
      pl: "jeden",
      en: "YEH-den",
      kr: "예덴",
      meaning_en: "one",
      meaning_kr: "일 (1)",
    },
    {
      pl: "dwa",
      en: "dva",
      kr: "드바",
      meaning_en: "two",
      meaning_kr: "이 (2)",
    },
    {
      pl: "trzy",
      en: "tshi",
      kr: "트시",
      meaning_en: "three",
      meaning_kr: "삼 (3)",
    },
    {
      pl: "cztery",
      en: "CHTE-ri",
      kr: "치테리",
      meaning_en: "four",
      meaning_kr: "사 (4)",
    },
    {
      pl: "pięć",
      en: "pyench",
      kr: "피엔치",
      meaning_en: "five",
      meaning_kr: "오 (5)",
    },
    {
      pl: "sześć",
      en: "sheshch",
      kr: "셰시치",
      meaning_en: "six",
      meaning_kr: "육 (6)",
    },
    {
      pl: "siedem",
      en: "SHE-dem",
      kr: "셰뎀",
      meaning_en: "seven",
      meaning_kr: "칠 (7)",
    },
    {
      pl: "osiem",
      en: "O-shem",
      kr: "오셤",
      meaning_en: "eight",
      meaning_kr: "팔 (8)",
    },
    {
      pl: "dziewięć",
      en: "jye-VYENCH",
      kr: "지에비엔치",
      meaning_en: "nine",
      meaning_kr: "구 (9)",
    },
    {
      pl: "dziesięć",
      en: "jye-SHENCH",
      kr: "지에셴치",
      meaning_en: "ten",
      meaning_kr: "십 (10)",
    },
    // Family
    {
      pl: "mama",
      en: "MA-ma",
      kr: "마마",
      meaning_en: "mom",
      meaning_kr: "엄마",
    },
    {
      pl: "tata",
      en: "TA-ta",
      kr: "타타",
      meaning_en: "dad",
      meaning_kr: "아빠",
    },
    {
      pl: "brat",
      en: "brat",
      kr: "브라트",
      meaning_en: "brother",
      meaning_kr: "남자형제",
    },
    {
      pl: "siostra",
      en: "SYOS-tra",
      kr: "쇼스트라",
      meaning_en: "sister",
      meaning_kr: "여자형제",
    },
    {
      pl: "dziecko",
      en: "JYETS-ko",
      kr: "지에츠코",
      meaning_en: "child",
      meaning_kr: "아이",
    },
    {
      pl: "rodzina",
      en: "ro-JEE-na",
      kr: "로지나",
      meaning_en: "family",
      meaning_kr: "가족",
    },
    {
      pl: "przyjaciel",
      en: "pshi-YA-chel",
      kr: "프시야치엘",
      meaning_en: "friend",
      meaning_kr: "친구",
    },
    // Body
    {
      pl: "głowa",
      en: "GWO-va",
      kr: "그워바",
      meaning_en: "head",
      meaning_kr: "머리",
    },
    {
      pl: "oko",
      en: "O-ko",
      kr: "오코",
      meaning_en: "eye",
      meaning_kr: "눈",
    },
    {
      pl: "nos",
      en: "nos",
      kr: "노스",
      meaning_en: "nose",
      meaning_kr: "코",
    },
    {
      pl: "usta",
      en: "OO-sta",
      kr: "우스타",
      meaning_en: "mouth",
      meaning_kr: "입",
    },
    {
      pl: "ręka",
      en: "REN-ka",
      kr: "렌카",
      meaning_en: "hand/arm",
      meaning_kr: "손/팔",
    },
    {
      pl: "noga",
      en: "NO-ga",
      kr: "노가",
      meaning_en: "leg/foot",
      meaning_kr: "다리/발",
    },
    {
      pl: "serce",
      en: "SER-tse",
      kr: "세르체",
      meaning_en: "heart",
      meaning_kr: "심장",
    },
    // Food & drink
    {
      pl: "dom",
      en: "dom",
      kr: "돔",
      meaning_en: "house/home",
      meaning_kr: "집",
    },
    {
      pl: "woda",
      en: "VO-da",
      kr: "보다",
      meaning_en: "water",
      meaning_kr: "물",
    },
    {
      pl: "chleb",
      en: "hleb",
      kr: "흘레브",
      meaning_en: "bread",
      meaning_kr: "빵",
    },
    {
      pl: "herbata",
      en: "her-BA-ta",
      kr: "헤르바타",
      meaning_en: "tea",
      meaning_kr: "차",
    },
    {
      pl: "kawa",
      en: "KA-va",
      kr: "카바",
      meaning_en: "coffee",
      meaning_kr: "커피",
    },
    {
      pl: "mleko",
      en: "MLE-ko",
      kr: "믈레코",
      meaning_en: "milk",
      meaning_kr: "우유",
    },
    {
      pl: "zupa",
      en: "ZOO-pa",
      kr: "주파",
      meaning_en: "soup",
      meaning_kr: "수프",
    },
    {
      pl: "mięso",
      en: "MYEN-so",
      kr: "미엔소",
      meaning_en: "meat",
      meaning_kr: "고기",
    },
    {
      pl: "ryba",
      en: "RI-ba",
      kr: "리바",
      meaning_en: "fish",
      meaning_kr: "생선",
    },
    {
      pl: "jajko",
      en: "YAY-ko",
      kr: "야이코",
      meaning_en: "egg",
      meaning_kr: "달걀",
    },
    {
      pl: "ser",
      en: "ser",
      kr: "세르",
      meaning_en: "cheese",
      meaning_kr: "치즈",
    },
    {
      pl: "jabłko",
      en: "YAB-wko",
      kr: "야브우코",
      meaning_en: "apple",
      meaning_kr: "사과",
    },
    {
      pl: "cukier",
      en: "TSOO-kyer",
      kr: "추키에르",
      meaning_en: "sugar",
      meaning_kr: "설탕",
    },
    {
      pl: "sól",
      en: "sool",
      kr: "술",
      meaning_en: "salt",
      meaning_kr: "소금",
    },
    {
      pl: "piwo",
      en: "PEE-vo",
      kr: "피보",
      meaning_en: "beer",
      meaning_kr: "맥주",
    },
    {
      pl: "wino",
      en: "VEE-no",
      kr: "비노",
      meaning_en: "wine",
      meaning_kr: "와인",
    },
    // Colors
    {
      pl: "czerwony",
      en: "cher-VO-ni",
      kr: "체르보니",
      meaning_en: "red",
      meaning_kr: "빨간색",
    },
    {
      pl: "niebieski",
      en: "nye-BYES-kee",
      kr: "니에비에스키",
      meaning_en: "blue",
      meaning_kr: "파란색",
    },
    {
      pl: "zielony",
      en: "zhye-LO-ni",
      kr: "지에로니",
      meaning_en: "green",
      meaning_kr: "초록색",
    },
    {
      pl: "żółty",
      en: "ZHOW-ti",
      kr: "죠우티",
      meaning_en: "yellow",
      meaning_kr: "노란색",
    },
    {
      pl: "czarny",
      en: "CHAR-ni",
      kr: "차르니",
      meaning_en: "black",
      meaning_kr: "검은색",
    },
    {
      pl: "biały",
      en: "BYA-wi",
      kr: "비아위",
      meaning_en: "white",
      meaning_kr: "흰색",
    },
    // Nature & places
    {
      pl: "słońce",
      en: "SWON-tse",
      kr: "스원체",
      meaning_en: "sun",
      meaning_kr: "태양",
    },
    {
      pl: "księżyc",
      en: "KSHEN-zhits",
      kr: "크셴지츠",
      meaning_en: "moon",
      meaning_kr: "달",
    },
    {
      pl: "gwiazda",
      en: "GVYAZ-da",
      kr: "그비아즈다",
      meaning_en: "star",
      meaning_kr: "별",
    },
    {
      pl: "rzeka",
      en: "ZHEH-ka",
      kr: "제카",
      meaning_en: "river",
      meaning_kr: "강",
    },
    {
      pl: "morze",
      en: "MO-zheh",
      kr: "모제",
      meaning_en: "sea",
      meaning_kr: "바다",
    },
    {
      pl: "góra",
      en: "GOO-ra",
      kr: "구라",
      meaning_en: "mountain",
      meaning_kr: "산",
    },
    {
      pl: "las",
      en: "las",
      kr: "라스",
      meaning_en: "forest",
      meaning_kr: "숲",
    },
    {
      pl: "park",
      en: "park",
      kr: "파르크",
      meaning_en: "park",
      meaning_kr: "공원",
    },
    {
      pl: "ogród",
      en: "OG-root",
      kr: "오그루트",
      meaning_en: "garden",
      meaning_kr: "정원",
    },
    // Time
    {
      pl: "dzisiaj",
      en: "JEE-shay",
      kr: "지샤이",
      meaning_en: "today",
      meaning_kr: "오늘",
    },
    {
      pl: "jutro",
      en: "YOO-tro",
      kr: "유트로",
      meaning_en: "tomorrow",
      meaning_kr: "내일",
    },
    {
      pl: "wczoraj",
      en: "VCHO-ray",
      kr: "브초라이",
      meaning_en: "yesterday",
      meaning_kr: "어제",
    },
    {
      pl: "teraz",
      en: "TE-raz",
      kr: "테라즈",
      meaning_en: "now",
      meaning_kr: "지금",
    },
    {
      pl: "rano",
      en: "RA-no",
      kr: "라노",
      meaning_en: "morning",
      meaning_kr: "아침",
    },
    {
      pl: "wieczór",
      en: "VYE-choor",
      kr: "비에추르",
      meaning_en: "evening",
      meaning_kr: "저녁",
    },
    {
      pl: "noc",
      en: "nots",
      kr: "노츠",
      meaning_en: "night",
      meaning_kr: "밤",
    },
    {
      pl: "rok",
      en: "rok",
      kr: "로크",
      meaning_en: "year",
      meaning_kr: "년",
    },
    {
      pl: "miesiąc",
      en: "MYE-shonts",
      kr: "미에쇼츠",
      meaning_en: "month",
      meaning_kr: "달/월",
    },
    {
      pl: "tydzień",
      en: "TI-jyen",
      kr: "티지엔",
      meaning_en: "week",
      meaning_kr: "주",
    },
    // Common verbs
    {
      pl: "jeść",
      en: "yeshch",
      kr: "예시치",
      meaning_en: "to eat",
      meaning_kr: "먹다",
    },
    {
      pl: "pić",
      en: "peech",
      kr: "피치",
      meaning_en: "to drink",
      meaning_kr: "마시다",
    },
    {
      pl: "spać",
      en: "spatch",
      kr: "스파치",
      meaning_en: "to sleep",
      meaning_kr: "자다",
    },
    {
      pl: "iść",
      en: "eeshch",
      kr: "이시치",
      meaning_en: "to go (on foot)",
      meaning_kr: "가다",
    },
    {
      pl: "mówić",
      en: "MOO-veech",
      kr: "무비치",
      meaning_en: "to speak",
      meaning_kr: "말하다",
    },
    {
      pl: "widzieć",
      en: "VEE-jyech",
      kr: "비지에치",
      meaning_en: "to see",
      meaning_kr: "보다",
    },
    {
      pl: "słuchać",
      en: "SWOO-hach",
      kr: "스우하치",
      meaning_en: "to listen",
      meaning_kr: "듣다",
    },
    {
      pl: "kupić",
      en: "KOO-peech",
      kr: "쿠피치",
      meaning_en: "to buy",
      meaning_kr: "사다",
    },
    {
      pl: "czytać",
      en: "CHI-tach",
      kr: "치타치",
      meaning_en: "to read",
      meaning_kr: "읽다",
    },
    {
      pl: "pisać",
      en: "PEE-sach",
      kr: "피사치",
      meaning_en: "to write",
      meaning_kr: "쓰다",
    },
    // Adjectives
    {
      pl: "duży",
      en: "DOO-zhi",
      kr: "두지",
      meaning_en: "big",
      meaning_kr: "크다",
    },
    {
      pl: "mały",
      en: "MA-wi",
      kr: "마위",
      meaning_en: "small",
      meaning_kr: "작다",
    },
    {
      pl: "dobry",
      en: "DOB-ri",
      kr: "도브리",
      meaning_en: "good",
      meaning_kr: "좋은",
    },
    {
      pl: "zły",
      en: "zwi",
      kr: "즈위",
      meaning_en: "bad / angry",
      meaning_kr: "나쁜 / 화난",
    },
    {
      pl: "szybki",
      en: "SHIB-kee",
      kr: "쉬브키",
      meaning_en: "fast",
      meaning_kr: "빠른",
    },
    {
      pl: "wolny",
      en: "VOL-ni",
      kr: "볼니",
      meaning_en: "slow / free",
      meaning_kr: "느린 / 자유로운",
    },
    {
      pl: "ciepły",
      en: "CHEP-wi",
      kr: "치에프위",
      meaning_en: "warm",
      meaning_kr: "따뜻한",
    },
    {
      pl: "zimny",
      en: "ZEEM-ni",
      kr: "짐니",
      meaning_en: "cold",
      meaning_kr: "차가운",
    },
    {
      pl: "nowy",
      en: "NO-vi",
      kr: "노비",
      meaning_en: "new",
      meaning_kr: "새로운",
    },
    {
      pl: "stary",
      en: "STA-ri",
      kr: "스타리",
      meaning_en: "old",
      meaning_kr: "오래된",
    },
    // Places & travel
    {
      pl: "miasto",
      en: "MYAS-to",
      kr: "미아스토",
      meaning_en: "city",
      meaning_kr: "도시",
    },
    {
      pl: "Polska",
      en: "POL-ska",
      kr: "폴스카",
      meaning_en: "Poland",
      meaning_kr: "폴란드",
    },
    {
      pl: "Warszawa",
      en: "var-SHA-va",
      kr: "바르샤바",
      meaning_en: "Warsaw",
      meaning_kr: "바르샤바",
    },
    {
      pl: "sklep",
      en: "sklep",
      kr: "스클레프",
      meaning_en: "store/shop",
      meaning_kr: "가게",
    },
    {
      pl: "ulica",
      en: "OO-lee-tsa",
      kr: "울리차",
      meaning_en: "street",
      meaning_kr: "거리",
    },
    {
      pl: "kościół",
      en: "KOSH-chew",
      kr: "코시추",
      meaning_en: "church",
      meaning_kr: "교회",
    },
    {
      pl: "samochód",
      en: "sa-MO-hoot",
      kr: "사모후트",
      meaning_en: "car",
      meaning_kr: "자동차",
    },
    {
      pl: "pociąg",
      en: "PO-chonk",
      kr: "포총크",
      meaning_en: "train",
      meaning_kr: "기차",
    },
    {
      pl: "lotnisko",
      en: "lot-NEE-sko",
      kr: "로트니스코",
      meaning_en: "airport",
      meaning_kr: "공항",
    },
    {
      pl: "kawiarnia",
      en: "kav-YAR-nya",
      kr: "카비아르냐",
      meaning_en: "café",
      meaning_kr: "카페",
    },
    {
      pl: "restauracja",
      en: "res-taw-RAT-sya",
      kr: "레스타우라치아",
      meaning_en: "restaurant",
      meaning_kr: "식당",
    },
    {
      pl: "hotel",
      en: "HO-tel",
      kr: "호텔",
      meaning_en: "hotel",
      meaning_kr: "호텔",
    },
    {
      pl: "szpital",
      en: "SHPEE-tal",
      kr: "슈피탈",
      meaning_en: "hospital",
      meaning_kr: "병원",
    },
    {
      pl: "szkoła",
      en: "SHKO-wa",
      kr: "슈코와",
      meaning_en: "school",
      meaning_kr: "학교",
    },
    {
      pl: "praca",
      en: "PRA-tsa",
      kr: "프라차",
      meaning_en: "work/job",
      meaning_kr: "일/직장",
    },
    // Everyday items
    {
      pl: "telefon",
      en: "te-LE-fon",
      kr: "텔레폰",
      meaning_en: "phone",
      meaning_kr: "전화기",
    },
    {
      pl: "komputer",
      en: "kom-POO-ter",
      kr: "콤푸테르",
      meaning_en: "computer",
      meaning_kr: "컴퓨터",
    },
    {
      pl: "pieniądze",
      en: "pye-NYON-dze",
      kr: "피에뇽제",
      meaning_en: "money",
      meaning_kr: "돈",
    },
    {
      pl: "klucz",
      en: "klooch",
      kr: "크루치",
      meaning_en: "key",
      meaning_kr: "열쇠",
    },
    {
      pl: "okno",
      en: "OK-no",
      kr: "오크노",
      meaning_en: "window",
      meaning_kr: "창문",
    },
    {
      pl: "drzwi",
      en: "jvee",
      kr: "지비",
      meaning_en: "door",
      meaning_kr: "문",
    },
    {
      pl: "stół",
      en: "stoow",
      kr: "스투",
      meaning_en: "table",
      meaning_kr: "탁자",
    },
    {
      pl: "krzesło",
      en: "KSHE-swo",
      kr: "크셰스워",
      meaning_en: "chair",
      meaning_kr: "의자",
    },
    {
      pl: "łóżko",
      en: "WOOZH-ko",
      kr: "우주코",
      meaning_en: "bed",
      meaning_kr: "침대",
    },
    // Animals
    {
      pl: "pies",
      en: "pyes",
      kr: "피에스",
      meaning_en: "dog",
      meaning_kr: "개",
    },
    {
      pl: "kot",
      en: "kot",
      kr: "코트",
      meaning_en: "cat",
      meaning_kr: "고양이",
    },
    {
      pl: "ptak",
      en: "ptak",
      kr: "프타크",
      meaning_en: "bird",
      meaning_kr: "새",
    },
    {
      pl: "koń",
      en: "kon",
      kr: "콘",
      meaning_en: "horse",
      meaning_kr: "말",
    },
    {
      pl: "ryba",
      en: "RI-ba",
      kr: "리바",
      meaning_en: "fish",
      meaning_kr: "물고기",
    },
    // Emotions & states
    {
      pl: "szczęście",
      en: "SHCHEN-shche",
      kr: "슈쳰시체",
      meaning_en: "happiness",
      meaning_kr: "행복",
    },
    {
      pl: "miłość",
      en: "MI-woshch",
      kr: "미워시치",
      meaning_en: "love",
      meaning_kr: "사랑",
    },
    {
      pl: "piękny",
      en: "PYENK-ni",
      kr: "피엔크니",
      meaning_en: "beautiful",
      meaning_kr: "아름다운",
    },
    {
      pl: "smutny",
      en: "SMOO-tni",
      kr: "스무트니",
      meaning_en: "sad",
      meaning_kr: "슬픈",
    },
    {
      pl: "wesoły",
      en: "ve-SO-wi",
      kr: "베소위",
      meaning_en: "cheerful/happy",
      meaning_kr: "쾌활한",
    },
    {
      pl: "zmęczony",
      en: "zmen-CHO-ni",
      kr: "즈멘초니",
      meaning_en: "tired",
      meaning_kr: "피곤한",
    },
    {
      pl: "głodny",
      en: "GWOD-ni",
      kr: "그워드니",
      meaning_en: "hungry",
      meaning_kr: "배고픈",
    },
    // Greetings & phrases
    {
      pl: "dzień dobry",
      en: "JYEN DOB-ri",
      kr: "젠 도브리",
      meaning_en: "good morning/day",
      meaning_kr: "좋은 아침/낮",
    },
    {
      pl: "dobranoc",
      en: "do-BRA-nots",
      kr: "도브라노츠",
      meaning_en: "good night",
      meaning_kr: "잘 자요",
    },
    {
      pl: "jak się masz",
      en: "yak sheh mash",
      kr: "야크 셰 마쉬",
      meaning_en: "how are you",
      meaning_kr: "어떻게 지내요",
    },
    {
      pl: "bardzo dobrze",
      en: "BAR-dzo DOB-zheh",
      kr: "바르조 도브제",
      meaning_en: "very well",
      meaning_kr: "아주 잘",
    },
    {
      pl: "nie wiem",
      en: "nye vyem",
      kr: "녜 비엠",
      meaning_en: "I don't know",
      meaning_kr: "모르겠어요",
    },
    {
      pl: "rozumiem",
      en: "ro-ZOO-myem",
      kr: "로주미엠",
      meaning_en: "I understand",
      meaning_kr: "이해해요",
    },
    // Book / study
    {
      pl: "książka",
      en: "KSHONZH-ka",
      kr: "크숑쉬카",
      meaning_en: "book",
      meaning_kr: "책",
    },
    {
      pl: "słowo",
      en: "SWO-vo",
      kr: "스워보",
      meaning_en: "word",
      meaning_kr: "단어",
    },
    {
      pl: "nauka",
      en: "na-OO-ka",
      kr: "나우카",
      meaning_en: "science / learning",
      meaning_kr: "과학 / 학습",
    },
    {
      pl: "język",
      en: "YEN-zik",
      kr: "옌지크",
      meaning_en: "language / tongue",
      meaning_kr: "언어 / 혀",
    },
  ],
};

let lang = localStorage.getItem("polguess_lang") || "en";
let maxLevelReached = parseInt(localStorage.getItem("polguess_max_level")) || 1;
let stageKeys = ["letters", "digraphs", "syllables", "words"];
let currentStageIndex = parseInt(localStorage.getItem("polguess_stage")) || 0;
let level = parseInt(localStorage.getItem("polguess_level")) || 1;
let pool = [];
let progress = {};
let targets = {};
let currentItem;
let lastChar = "";
let timer;
let timeLimit = 5000;
let startTime;
let isListeningMode = false;
let isSpeakingMode = false;
let listeningScore = 0;
let listeningQueue = [];

// Speech recognition setup
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;
if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.lang = "pl-PL";
  recognition.continuous = true;
  recognition.interimResults = true;
}

function updateI18n() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    let key = el.getAttribute("data-i18n");
    if (i18n[lang][key]) {
      if (
        (el.tagName === "INPUT" && el.type === "text") ||
        el.hasAttribute("placeholder")
      ) {
        el.placeholder = i18n[lang][key];
      } else {
        el.textContent = i18n[lang][key];
      }
    }
  });
}

function setLang(selectedLang) {
  lang = selectedLang;
  localStorage.setItem("polguess_lang", lang);
  document.getElementById("btn-lang-en").className =
    lang === "en" ? "" : "secondary";
  document.getElementById("btn-lang-kr").className =
    lang === "kr" ? "" : "secondary";
  updateI18n();
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  let utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "pl-PL";
  utterance.rate = 0.8;
  window.speechSynthesis.speak(utterance);
}

function speakCurrent() {
  if (currentItem) {
    speak(currentItem.pl);
  }
}

function renderLevelSelector() {
  let selectorHtml = "";
  if (maxLevelReached > 1 || currentStageIndex > 0) {
    selectorHtml += `<div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid var(--border-color);">`;
    selectorHtml += `<select id="levelSelect" style="padding: 10px; border-radius: 8px; background: rgba(0,0,0,0.3); color: white; border: 1px solid var(--border-color); margin-right: 10px;">`;

    let stageCount = 0;

    while (stageCount <= currentStageIndex) {
      let sKey = stageKeys[stageCount];
      let maxLForStage =
        stageCount === currentStageIndex
          ? level
          : Math.ceil(stages[sKey].length / 4);
      for (let l = 1; l <= maxLForStage; l++) {
        selectorHtml += `<option value="${stageCount}-${l}">Stage: ${sKey}, Level: ${l}</option>`;
      }
      stageCount++;
    }

    selectorHtml += `</select>`;
    selectorHtml += `<button class="secondary" onclick="playSelectedLevel()" data-i18n="playSelected" style="font-size: 0.9rem; padding: 10px;">${i18n[lang].playSelected}</button>`;
    selectorHtml += `</div>`;
  }

  let resetBtn = `<button class="secondary" onclick="resetProgress()" data-i18n="resetProgress" style="margin-top: 20px; width: 100%; color: var(--error-color); border-color: rgba(220, 38, 38, 0.3);">${i18n[lang].resetProgress}</button>`;

  let div = document.getElementById("extraControls");
  if (!div) {
    div = document.createElement("div");
    div.id = "extraControls";
    document.getElementById("startScreen").appendChild(div);
  }
  div.innerHTML = selectorHtml + resetBtn;
}

function startGame() {
  isListeningMode = false;
  isSpeakingMode = false;
  document.getElementById("startScreen").classList.add("hidden");
  loadState();
  initStage();
}

function startListeningGame() {
  isListeningMode = true;
  isSpeakingMode = false;
  initInfiniteModeQueue();
}

function startSpeakingGame() {
  if (!recognition) {
    alert(
      lang === "kr"
        ? "이 브라우저는 음성 인식을 지원하지 않아요."
        : "Speech recognition isn't supported in your browser.",
    );
    return;
  }
  isSpeakingMode = true;
  isListeningMode = false;
  initInfiniteModeQueue();
}

function initInfiniteModeQueue() {
  listeningScore = 0;
  document.getElementById("startScreen").classList.add("hidden");

  listeningQueue = [];

  if (isSpeakingMode) {
    // For Speaking mode, use words stage
    let arr = [...stages["words"]];
    arr.sort(() => Math.random() - 0.5);
    listeningQueue = listeningQueue.concat(arr);
  } else {
    // For Listening mode, use all stages
    for (let key of stageKeys) {
      let arr = [...stages[key]];
      arr.sort(() => Math.random() - 0.5);
      listeningQueue = listeningQueue.concat(arr);
    }
  }

  document.getElementById("game").classList.remove("hidden");

  if (isSpeakingMode) {
    document.getElementById("answer").disabled = true;
    document.getElementById("answer").placeholder = i18n[lang].listening;
  } else {
    document.getElementById("answer").disabled = false;
    document.getElementById("answer").placeholder = i18n[lang].placeholder;
  }

  document.querySelector(".polish-container").style.cursor = "pointer";
  document.querySelector(".speaker-icon").style.display = "inline-block";

  nextQuestion();
}

function playSelectedLevel() {
  let select = document.getElementById("levelSelect");
  if (select) {
    let parts = select.value.split("-");
    currentStageIndex = parseInt(parts[0]);
    level = parseInt(parts[1]);
    saveState();
    startGame();
  }
}

function resetProgress() {
  if (
    confirm(
      lang === "kr"
        ? "모든 게임 진행을 초기화할까요?"
        : "Are you sure you want to reset all game progress?",
    )
  ) {
    localStorage.removeItem("polguess");
    localStorage.removeItem("polguess_stage");
    localStorage.removeItem("polguess_level");
    localStorage.removeItem("polguess_max_level");
    location.reload();
  }
}

function showLearningScreen(items) {
  document.getElementById("game").classList.add("hidden");
  document.getElementById("learningScreen").classList.remove("hidden");

  let grid = document.getElementById("learningGrid");
  grid.innerHTML = "";

  items.forEach((item) => {
    let card = document.createElement("div");
    card.className = "flashcard";
    card.onclick = () => speak(item.pl);
    let phonetic = lang === "kr" ? item.kr : item.en;
    let meaning = lang === "kr" ? item.meaning_kr : item.meaning_en;
    card.innerHTML = `
        <div class="polish-char">${item.pl}</div>
        <div class="phonetic">${phonetic}</div>
        ${meaning ? `<div class="meaning">${meaning}</div>` : ""}
        <div class="speaker">🔊 <span data-i18n="details">${i18n[lang].details}</span></div>
      `;
    grid.appendChild(card);
  });
}

function startRoundFromLearning() {
  document.getElementById("learningScreen").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
  nextQuestion();
}

function initStage() {
  let stageName = stageKeys[currentStageIndex];
  let data = stages[stageName];

  let endIndex = Math.min(level * 4, data.length);
  pool = data.slice(0, endIndex);

  let startIndex = (level - 1) * 4;
  let newItems = [];
  if (startIndex < data.length) {
    newItems = data.slice(startIndex, startIndex + 4);
  }

  progress = {};

  pool.forEach((x) => {
    progress[x.pl] = 0;
    targets[x.pl] = newItems.includes(x) ? 2 : 1;
  });

  updateUI();

  if (newItems.length > 0) {
    showLearningScreen(newItems);
  } else {
    document.getElementById("game").classList.remove("hidden");
    nextQuestion();
  }
}

function nextQuestion() {
  if (isListeningMode || isSpeakingMode) {
    if (listeningScore < listeningQueue.length) {
      currentItem = listeningQueue[listeningScore];
    } else {
      currentItem =
        listeningQueue[Math.floor(Math.random() * listeningQueue.length)];
    }
    currentStageIndex = stageKeys.findIndex((k) =>
      stages[k].some((x) => x.pl === currentItem.pl),
    );
    if (currentStageIndex === -1) currentStageIndex = 0;
  } else {
    let incompletePool = pool.filter(
      (x) => (progress[x.pl] || 0) < targets[x.pl],
    );
    let choices = incompletePool.filter((x) => x.pl !== lastChar);
    if (choices.length === 0) {
      choices = incompletePool.length > 0 ? incompletePool : pool;
    }
    currentItem = choices[Math.floor(Math.random() * choices.length)];
  }

  lastChar = currentItem.pl;

  let charEl = document.getElementById("char");
  charEl.className = "polish-char-display";
  charEl.textContent = isListeningMode ? "?" : currentItem.pl;

  document.getElementById("feedback").textContent = "";

  let meaningEl = document.getElementById("speaking-meaning");
  if (isSpeakingMode && (currentItem.meaning_en || currentItem.meaning_kr)) {
    meaningEl.classList.remove("hidden");
    meaningEl.textContent =
      lang === "kr" ? currentItem.meaning_kr : currentItem.meaning_en;
  } else {
    meaningEl.classList.add("hidden");
  }

  let answerEl = document.getElementById("answer");
  if (!isSpeakingMode) {
    answerEl.value = "";
    answerEl.focus();
    answerEl.classList.remove("listening-active");
  } else {
    answerEl.value = "";
    answerEl.placeholder = i18n[lang].listening;
  }

  startTimer();

  if (isListeningMode) {
    speakCurrent();
  }

  if (isSpeakingMode && recognition) {
    try {
      recognition.abort();
    } catch (e) {}

    answerEl.classList.add("listening-active");

    recognition.onend = () => {
      if (isSpeakingMode && currentItem) {
        try {
          recognition.start();
        } catch (e) {}
      } else {
        answerEl.classList.remove("listening-active");
      }
    };

    recognition.onresult = (event) => {
      let interimTranscript = "";
      let finalTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }

      let currentTranscript = finalTranscript || interimTranscript;
      let cleaned = currentTranscript.toLowerCase().trim();
      let target = currentItem.pl.toLowerCase().trim();

      if (currentTranscript) {
        answerEl.value = currentTranscript;
      }

      // Check if the spoken text matches the Polish word
      if (cleaned.includes(target) || target.includes(cleaned)) {
        recognition.onend = null;
        recognition.stop();
        answerEl.classList.remove("listening-active");
        handleCorrect();
      } else if (finalTranscript) {
        playBeep(200);
        answerEl.value = `"${currentTranscript}" - Retry...`;
      }
    };

    recognition.onerror = (event) => {
      if (event.error !== "no-speech" && event.error !== "aborted") {
        playBeep(200);
        document.getElementById("feedback").textContent =
          `${i18n[lang].micError}${event.error}`;
        answerEl.classList.remove("listening-active");
        answerEl.value = "";
      }
    };

    try {
      recognition.start();
    } catch (e) {}
  }
}

function startTimer() {
  clearInterval(timer);
  if (isListeningMode || isSpeakingMode) {
    timeLimit = 5000 - currentStageIndex * 500;
  } else {
    timeLimit = 5000 - level * 200;
  }
  if (timeLimit < 2000) timeLimit = 2000;
  startTime = Date.now();

  timer = setInterval(() => {
    let elapsed = Date.now() - startTime;
    let percent = 100 - (elapsed / timeLimit) * 100;
    if (percent < 0) percent = 0;

    let bar = document.getElementById("timerBar");
    bar.style.width = percent + "%";

    if (percent < 25) {
      bar.className = "progressInner danger";
    } else if (percent < 50) {
      bar.className = "progressInner warning";
    } else {
      bar.className = "progressInner";
    }

    if (elapsed > timeLimit) {
      clearInterval(timer);
      handleWrong(i18n[lang].timeUp);
    }
  }, 50);
}

function handleCorrect() {
  clearInterval(timer);
  playBeep(800);
  if (isSpeakingMode && recognition) {
    recognition.onend = null;
    recognition.stop();
    document.getElementById("answer").classList.remove("listening-active");
  }

  if (isListeningMode || isSpeakingMode) {
    listeningScore++;
    updateUI();
    setTimeout(nextQuestion, 400);
    return;
  }

  progress[currentItem.pl]++;
  updateUI();
  if (progress[currentItem.pl] >= targets[currentItem.pl]) {
    checkAdvance();
  } else {
    saveState();
    nextQuestion();
  }
}

function handleWrong(msg) {
  clearInterval(timer);
  playBeep(200);
  if (isSpeakingMode && recognition) {
    recognition.onend = null;
    recognition.stop();
    document.getElementById("answer").classList.remove("listening-active");
  }

  let charEl = document.getElementById("char");
  charEl.className = "polish-char-display error";

  let phonetic = lang === "kr" ? currentItem.kr : currentItem.en;
  let meaning = lang === "kr" ? currentItem.meaning_kr : currentItem.meaning_en;

  let correctText =
    isListeningMode || isSpeakingMode
      ? `${msg} ${currentItem.pl} = ${phonetic}${meaning ? " (" + meaning + ")" : ""}`
      : `${msg} ${i18n[lang].correctWas}${phonetic}`;

  document.getElementById("feedback").textContent = correctText;

  if (isListeningMode || isSpeakingMode) {
    if (isSpeakingMode) {
      speak(currentItem.pl);
    }
    charEl.textContent = currentItem.pl;
    updateUI();
    showGameOver();
    return;
  }

  progress[currentItem.pl]--;
  targets[currentItem.pl]++;
  updateUI();

  if (progress[currentItem.pl] < 0) {
    let allZero = Object.values(progress).every((v) => v <= 0);
    if (allZero && level > 1) {
      level--;
    }
  }

  saveState();
  setTimeout(nextQuestion, 1500);
}

function checkAdvance() {
  let allDone = pool.every((x) => progress[x.pl] >= targets[x.pl]);
  if (allDone) {
    level++;
    if (level > maxLevelReached) maxLevelReached = level;
    let stageName = stageKeys[currentStageIndex];

    if ((level - 1) * 4 >= stages[stageName].length) {
      currentStageIndex++;
      level = 1;
    }

    if (currentStageIndex >= stageKeys.length) {
      alert(i18n[lang].gameCompleted);
      quit();
      return;
    }
    saveState();
    initStage();
  } else {
    saveState();
    nextQuestion();
  }
}

function checkAnswer(input, validSpellings) {
  if (!input) return false;
  let pOptions = validSpellings.split("/").map((s) => s.trim().toLowerCase());
  return pOptions.includes(input);
}

document.getElementById("answer").addEventListener("input", (e) => {
  let phonetic = lang === "kr" ? currentItem.kr : currentItem.en;
  let inputVal = e.target.value.trim().toLowerCase();
  if (checkAnswer(inputVal, phonetic)) {
    setTimeout(() => {
      document.getElementById("answer").value = "";
    }, 0);
    handleCorrect();
  }
});

document.getElementById("answer").addEventListener("keydown", (e) => {
  let phonetic = lang === "kr" ? currentItem.kr : currentItem.en;
  let inputVal = e.target.value.trim().toLowerCase();
  if (e.key === "Enter") {
    if (!checkAnswer(inputVal, phonetic)) {
      handleWrong(i18n[lang].incorrect);
    }
  }
});

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("open");
}

function updateUI() {
  let stageName = stageKeys[currentStageIndex] || stageKeys[0];
  let stageDisplay = stageName.charAt(0).toUpperCase() + stageName.slice(1);

  if (isListeningMode || isSpeakingMode) {
    document.getElementById("stageInfo").textContent =
      (isSpeakingMode ? i18n[lang].speakingMode : i18n[lang].listeningMode) +
      " - " +
      stageDisplay;
    document.getElementById("levelInfo").textContent =
      i18n[lang].listeningScore + listeningScore;

    document.getElementById("stats").classList.add("hidden");
    document.querySelector(".level-progress-container").classList.add("hidden");
    return;
  }

  document.getElementById("stageInfo").textContent =
    i18n[lang].stage + stageDisplay;
  document.getElementById("levelInfo").textContent =
    i18n[lang].levelInfo + level + i18n[lang].itemsInfo + pool.length;

  document.getElementById("stats").classList.remove("hidden");
  document
    .querySelector(".level-progress-container")
    .classList.remove("hidden");

  let totalTarget = pool.reduce((sum, item) => sum + targets[item.pl], 0);
  let currentTotal = 0;

  let statsHtml = `<div class="progress-badges" style="max-height: none; overflow: visible;">`;
  for (let i = 0; i < pool.length; i++) {
    let char = pool[i].pl;
    let charTarget = targets[char];
    let score = Math.max(0, Math.min(progress[char] || 0, charTarget));
    currentTotal += score;
    let statusClass = score >= charTarget ? "done" : "";
    let dots = "";
    for (let j = 0; j < charTarget; j++) {
      dots += `<span class="dot ${j < score ? "filled" : ""}"></span>`;
    }
    statsHtml += `
              <div class="badge ${statusClass}">
                  <span class="badge-char">${char}</span>
                  <div class="badge-dots">${dots}</div>
              </div>
          `;
  }
  statsHtml += `</div>`;
  document.getElementById("stats").innerHTML = statsHtml;

  let progressPercent =
    totalTarget > 0 ? (currentTotal / totalTarget) * 100 : 0;
  document.getElementById("levelProgressInner").style.width =
    progressPercent + "%";
  document.getElementById("levelProgressText").textContent =
    Math.floor(progressPercent) + "%";
}

function playBeep(freq) {
  if (!window.AudioContext && !window.webkitAudioContext) return;
  try {
    let ctx = new (window.AudioContext || window.webkitAudioContext)();
    let osc = ctx.createOscillator();
    osc.frequency.value = freq;
    osc.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  } catch (e) {}
}

function showGameOver() {
  let feedbackEl = document.getElementById("feedback");
  feedbackEl.innerHTML = `
    <div style="margin-top: 10px;">
      <div style="font-size: 1.2rem; margin-bottom: 12px;">${i18n[lang].gameOver} ${i18n[lang].finalScore}${listeningScore}</div>
      <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
        <button onclick="speakCurrent()" class="secondary" style="margin: 0; padding: 10px 20px; font-size: 1rem;">🔊 ${i18n[lang].listenAgain}</button>
        <button onclick="continueAfterWrong()" style="margin: 0; padding: 10px 20px; font-size: 1rem;">${i18n[lang].nextQuestion}</button>
        <button class="secondary" onclick="quit()" style="margin: 0; padding: 10px 20px; font-size: 1rem; color: var(--error-color); border-color: rgba(220,38,38,0.3);">${i18n[lang].quit}</button>
      </div>
    </div>
  `;
}

function continueAfterWrong() {
  document.getElementById("feedback").innerHTML = "";
  listeningScore = 0;
  nextQuestion();
}

function quit() {
  location.reload();
}

function saveState() {
  localStorage.setItem(
    "polguess",
    JSON.stringify({
      currentStageIndex,
      level,
      targets,
    }),
  );
  localStorage.setItem("polguess_stage", currentStageIndex);
  localStorage.setItem("polguess_level", level);
  localStorage.setItem("polguess_max_level", maxLevelReached);
}

function loadState() {
  let s = localStorage.getItem("polguess");
  if (s) {
    let data = JSON.parse(s);
    currentStageIndex = data.currentStageIndex;
    level = data.level;
    targets = data.targets || {};
  }
}

// Init
(function init() {
  setLang(lang);
  renderLevelSelector();
})();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
