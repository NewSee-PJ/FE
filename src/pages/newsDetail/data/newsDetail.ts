import type { NewsDetailType } from "@/types/newsDetail";
import { LevelType } from "@/types/level";

export const mockNewsData: NewsDetailType[] = [
  {
    newsId: 1,
    title: "정치 뉴스 예시",
    category: "정치",
    source: "뉴스채널1",
    time: new Date(),
    imageUrl:
      "https://dacon-images.s3.ap-northeast-2.amazonaws.com/dacon20220919.png",
    url: "https://news1.com/article1",
    isBookmarked: true,
    userLevel: LevelType.HIGH,
    originalContent: "정치 뉴스의 원문 전체 내용입니다.",
    transformedContent:
      "정부가 미국과 관세-안보를 연계한 ‘패키지 딜’ 협상을 진행 중인 가운데 전시작전통제권 전환 문제가 불거졌다. \n\n한·미 간 협상 국면과 맞물려 전작권 전환 문제도 본격적으로 협의될 것이라는 일각의 해석에 대통령실은 11일 “장기적 현안으로, 새로운 사안이 아니다”라고 선을 그었다. 실제 한·미는 2006년 전작권 전환 합의 뒤 20년째 이를 협의 중이며, 현재 한·미 간 협상에서 본격적 의제는 아니라는 게 복수의 정부 관계자들의 설명이다. 다만 트럼프 행정부가 전략적 유연성을 명분으로 주한미군의 규모와 역할을 변경할 가능성이 제기되는 가운데 언제든 관련 협의가 속도를 낼 수 있다는 분석도 나온다. \n\n‘미국은 빠지고 한국 방어는 한국에 맡긴다’는 논리와 연결될 여지도 있어서다. 전작권 전환과 관련한 쟁점과 향후 전망 등을 짚어봤다. 전작권 지금 누구에게 있나. \n 우리 군의 작전통제권은 1950년 6·25 전쟁 당시 유엔군사령관에게 이양됐다. 이후 78년 한미연합군사령부(연합사)가 창설되면서 연합사령관에게 넘어갔다. 그러다 정전시 작전통제권, 즉 평시 작전통제권만 1994년 12월 1일 한국 합참의장이 넘겨 받았다. 현재 전작권은 여전히 연합사령관에게 있다. /n전작권 전환의 시점은 언제인가.",
    summary: "이 뉴스는 정치에 대한 내용을 담고 있습니다.",
    keywords: [
      {
        wordId: 1,
        term: "로봇",
        description: "단어에 대한 설명이 나옵니다",
        source: "중앙일보",
      },
      {
        wordId: 2,
        term: "로봇",
        description:
          "단어에 대한 설명이 나옵니다. 단어에 대한 설명이 나옵니다. 단어에 대한 설명이 나옵니다. 단어에 대한 설명이 나옵니다.",
        source: "중앙일보",
      },
      {
        wordId: 3,
        term: "로봇",
        description: "단어에 대한 설명이 나옵니다",
        source: "중앙일보",
      },
      {
        wordId: 4,
        term: "로봇",
        description: "단어에 대한 설명이 나옵니다",
        source: "중앙일보",
      },
      {
        wordId: 5,
        term: "로봇",
        description: "단어에 대한 설명이 나옵니다",
        source: "중앙일보",
      },
    ],
  },
  {
    newsId: 2,
    title: "경제 뉴스 예시",
    category: "경제",
    source: "뉴스채널2",
    time: new Date(),
    imageUrl:
      "https://dacon-images.s3.ap-northeast-2.amazonaws.com/dacon20220919.png",
    url: "https://news2.com/article2",
    isBookmarked: true,
    userLevel: LevelType.MEDIUM,
    originalContent: "경제 뉴스 원문 전체 내용입니다.",
    transformedContent: "경제 뉴스의 쉬운 설명입니다.",
    summary: "경제 이슈를 다룬 기사입니다.",
    keywords: [
      {
        wordId: 6,
        term: "로봇",
        description: "단어에 대한 설명",
        source: "중앙일보",
      },
    ],
  },
  {
    newsId: 3,
    title: "IT 뉴스 예시",
    category: "IT/과학",
    source: "테크미디어",
    time: new Date(),
    imageUrl:
      "https://dacon-images.s3.ap-northeast-2.amazonaws.com/dacon20220919.png",
    url: "https://technews.com/article3",
    isBookmarked: false,
    userLevel: LevelType.HIGH,
    originalContent: "기술 뉴스 원문 전체 내용입니다.",
    transformedContent: "기술 뉴스 요약 설명입니다.",
    summary: "기술 동향을 소개합니다.",
    keywords: [
      {
        wordId: 7,
        term: "로봇",
        description: "단어에 대한 설명",
        source: "중앙일보",
      },
    ],
  },
  {
    newsId: 30,
    title: "AI 기술의 미래",
    category: "IT/과학",
    source: "AI미디어",
    time: new Date(),
    imageUrl:
      "https://dacon-images.s3.ap-northeast-2.amazonaws.com/dacon20220919.png",
    url: "https://technews.com/ai-future",
    isBookmarked: false,
    userLevel: LevelType.HIGH,
    originalContent: "AI 기술이 사회에 미치는 영향에 대해 다룹니다.",
    transformedContent: "AI 기술에 대한 쉽게 설명한 내용입니다.",
    summary: "AI 기술과 미래 사회 변화.",
    keywords: [
      {
        wordId: 8,
        term: "로봇",
        description: "단어에 대한 설명",
        source: "중앙일보",
      },
    ],
  },
  {
    newsId: 32,
    title: "환경 변화와 기후 위기",
    category: "사회",
    source: "환경일보",
    time: new Date(),
    imageUrl:
      "https://dacon-images.s3.ap-northeast-2.amazonaws.com/dacon20220919.png",
    url: "https://eco.com/climate-crisis",
    isBookmarked: false,
    userLevel: LevelType.HIGH,
    originalContent: "기후 변화로 인한 문제들을 설명합니다.",
    transformedContent: "기후 변화 뉴스 쉬운 설명.",
    summary: "환경 변화에 대한 이해를 돕는 뉴스입니다.",
    keywords: [
      {
        wordId: 9,
        term: "로봇",
        description: "단어에 대한 설명",
        source: "중앙일보",
      },
    ],
  },
  {
    newsId: 33,
    title: "우주 산업의 급성장",
    category: "IT/과학",
    source: "우주타임즈",
    time: new Date(),
    imageUrl:
      "https://dacon-images.s3.ap-northeast-2.amazonaws.com/dacon20220919.png",
    url: "https://space.com/industry-growth",
    isBookmarked: false,
    userLevel: LevelType.LOW,
    originalContent: "우주 산업 관련 기술 발전 상황.",
    transformedContent: "우주 산업 관련 쉬운 설명.",
    summary: "우주 산업의 변화와 전망.",
    keywords: [
      {
        wordId: 10,
        term: "로봇",
        description: "단어에 대한 설명",
        source: "중앙일보",
      },
    ],
  },
  {
    newsId: 34,
    title: "로봇 기술의 진보",
    category: "IT/과학",
    source: "로봇뉴스",
    time: new Date(),
    imageUrl:
      "https://dacon-images.s3.ap-northeast-2.amazonaws.com/dacon20220919.png",
    url: "https://robotnews.com/tech-progress",
    isBookmarked: true,
    userLevel: LevelType.MEDIUM,
    originalContent: "로봇 기술 발전과 산업 적용 사례.",
    transformedContent: "로봇 기술의 쉬운 요약.",
    summary: "로봇 기술의 확장과 응용.",
    keywords: [
      {
        wordId: 11,
        term: "로봇",
        description: "단어에 대한 설명",
        source: "중앙일보",
      },
    ],
  },
];
