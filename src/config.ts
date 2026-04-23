export type SocialLinks = {
  email?: string;
  linkedin?: string;
  github?: string;
};

export type HeroStat = {
  label: string;
  value: string;
};

export type HighlightProject = {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  status: string;
  role: string[];
  proof: string[];
  stack: string[];
  video?: string;
  diagrams?: string[];
  diagramCaptions?: string[];
  image?: string;
};

export type ArchiveItem = {
  title: string;
  subtitle?: string;
  description?: string;
  bullets?: string[];
  link?: string;
  linkLabel?: string;
  image?: string;
  tags?: string[];
};

export type ArchiveTab = {
  id: string;
  label: string;
  items: ArchiveItem[];
};

export const siteConfig = {
  name: "AI 기획 관리 담당자 | 서정윤",
  englishName: "Seo Jungyoun",
  title: "AI Workflow Designer · Creative Technologist",
  description:
    "AI 로직과 콘텐츠 제작 사이를 연결하는 기획자 서정윤의 인터랙티브 포트폴리오.",
  accentColor: "#f5a8c8",
  secondaryColor: "#1f2f63",
  softColor: "#fff7fb",
  social: {
    email: "bellita@naver.com",
    linkedin: "https://www.linkedin.com/in/%EC%A0%95%EC%9C%A4-%EC%84%9C-71b989274/",
    github: "https://github.com/seojungyoun",
  } satisfies SocialLinks,
  hero: {
    eyebrow: "AI-Human Collaborative Pipeline",
    headline: "Bridging the Gap between AI Logic and Content Creation.",
    summary:
      "AI·개발·디자인을 직접 다루며 기획 감각을 쌓아왔습니다. 생성형 AI 영상 워크플로우 FILMFLOW는 변리사 검토와 특허 출원을 진행 중이며, 실시간 인터랙션 프로젝트 Dorememe와 개인화 글쓰기 플랫폼 writie까지 직접 설계하고 구현해왔습니다.",
    primaryCta: {
      label: "핵심 프로젝트 보기",
      href: "#featured-projects",
    },
    secondaryCta: {
      label: "전체 이력 보기",
      href: "#full-archive",
    },
    stats: [
      { label: "특허 검토", value: "FLIMFLOW 진행 중" },
      { label: "인턴십", value: "3회" },
      { label: "협업", value: "대기업·지자체·학교" },
    ] satisfies HeroStat[],
  },
  about: {
    heading: "데이터 흐름을 설계하고, 소통하는 AI 기획자",
    body:
      "덕성여자대학교 IT미디어공학과에서 4.2/4.5 학점을 유지하며, 생성형 AI 워크플로우 설계, Unity 기반 실감형 콘텐츠, 웹/앱 개발과 서비스 기획을 함께 다뤄왔습니다. 다양한 기술을 활용하여 문제를 구조화하고, 더 나은 사용자 경험을 만들어 나갑니다.",
  },
  highlightProjects: [
    {
      id: "flimflow",
      title: "FILMFLOW",
      subtitle: "생성형 AI 영상 자동화 워크플로우 · 변리사 검토 및 특허 출원 진행 중",
      summary:
        "장면 간 비일관성, 무한 재생성, 불완전한 프롬프트 입력 문제를 워크플로우 설계의 문제로 재정의한 프로젝트입니다.",
      status:
        "스토리보드 PDF 파싱, 6축 충분성 평가, 제한적 사용자 개입, 프레임 체이닝을 하나의 파이프라인으로 설계했습니다.",
      role: [
        "워크플로우 전체 기획 및 설계",
        "발명신고서 및 특허 출원용 문서 작성",
        "스토리보드-이미지-영상 연결 구조 정의",
      ],
      proof: [
        "생성형 AI 영상 제작 파이프라인 설계 문서 기반 정리",
        "FLIMFLOW 특허 출원용 문서와 발명 포인트 반영",
        "도1·도2 다이어그램으로 로직 레이어 시각화",
      ],
      stack: ["LangChain", "LangGraph", "Stable Diffusion", "Veo3", "Python"],
      video: "https://youtu.be/d4_xoC0egl4?si=HVRcyg-W-ricGCCU",
      diagrams: ["/media/flimflow-diagram-1.png", "/media/flimflow-diagram-2.png"],
      diagramCaptions: [
        "도1 — 장면 일관성 평가 흐름도: 스토리보드 파싱 → 6축 충분성 평가 → 재생성/승인 분기",
        "도2 — 전체 파이프라인 아키텍처: PDF 입력 → 프롬프트 생성 → 이미지·영상 출력까지의 시스템 흐름",
      ],
    },
    {
      id: "dorememe",
      title: "Dorememe",
      subtitle: "VR 기반 실시간 공감각 미디어아트 · 졸업작품 · 전시 출품",
      summary:
        "음악과 시각 요소를 실시간으로 연동하는 VR 공감각 미디어아트 프로젝트로, Unity VR 환경과 AI 사운드 파이프라인을 연결한 사례입니다.",
      status:
        "개발 팀원 이탈 이후 Unity 개발을 단독으로 전환해 전시까지 완수했고, 비동기 서버 아키텍처와 인터랙션 흐름을 직접 구조화했습니다.",
      role: [
        "Unity 개발 전담",
        "VR 내 3D 스케치 활용 로직 구현",
        "PyTorch 출력과 Unity 인터랙션 연결 설계",
      ],
      proof: [
        "실제 시연 영상 반복 재생",
        "Flask/Celery 기반 비동기 구조 반영",
        "전시형 인터랙션 프로젝트 경험",
      ],
      stack: ["Unity", "PyTorch", "Flask", "Celery", "VR"],
      video: "/media/dorememe.mp4",
    },
    {
      id: "writie",
      title: "writie",
      subtitle: "AI 페르소나 학습 기반 초개인화 글쓰기 플랫폼 · 기획 및 개발 진행 중",
      summary:
        "결과물을 대신 써주는 AI가 아니라 사용자의 사고 과정을 가이드하는 AI를 목표로 설계한 프로젝트입니다.",
      status:
        "Claude API 기반 Persona-LLM 엔진과 글쓰기 구조 추천 방식을 통해 사용자의 문체와 판단력을 보존하는 방향으로 기획했습니다.",
      role: [
        "서비스 전체 기획 및 BM 설계",
        "Claude API 기반 Persona-LLM 엔진 구조 설계",
        "Figma UI/UX 프로토타입 제작",
      ],
      proof: [
        "기존 PTKOREA 포트폴리오의 소개 방향 반영",
        "질문 중심 UX 구조로 메시지 재정리",
      ],
      stack: ["Claude API", "Figma", "Prompt Design", "Service Planning"],
    },
  ] satisfies HighlightProject[],
  management: {
    title: "기획부터 실행까지 설계하는 인재",
    summary:
      "프로젝트를 기획하는 데서 멈추지 않고, 운영 흐름과 협업 구조를 함께 설계해왔습니다. KT디지털인재장학생 활동과 여러 인턴십에서 콘텐츠 발행, 협업 조율, 실행 관리 경험을 쌓았습니다.",
    metrics: [
      { label: "KT디지털인재장학생", value: "운영진 대표", detail: "KT와 협업하며 장학생 활동 기획·운영" },
      { label: "KT디지털인재장학생 공식 SNS 콘텐츠", value: "20건 이상", detail: "콘텐츠 기획·제작과 운영 기획 및 관리" },
      { label: "인턴십", value: "3회", detail: "콘텐츠 제작, 자동화, 운영 경험 축적" },
      { label: "협업 툴", value: "Slack · Notion · Figma", detail: "기획 문서 작성과 진행 리드 경험" },
    ],
    tools: ["Slack", "Notion", "Figma", "Premiere Pro", "After Effects", "Google Sheets"],
  },
  skills: [
    "Python",
    "Unity (C#)",
    "LangChain / LangGraph",
    "Flask / Celery",
    "PyTorch",
    "Figma",
    "Premiere Pro",
    "After Effects",
    "Swift",
    "PHP / MySQL",
    "React",
    "Linux",
    "Unreal (C++)",
  ],
  archiveTabs: [
    {
      id: "projects",
      label: "Projects",
      items: [
        {
          title: "FILMFLOW",
          subtitle: "생성형 AI 영상 자동화 워크플로우",
          description:
            "LangChain 및 LangGraph를 활용해 프롬프트-이미지-영상 자동화 파이프라인을 설계했고, 장면 간 일관성 문제를 워크플로우 관점에서 해결했습니다.",
          bullets: [
            "특허 출원 검토 진행 중",
            "스토리보드 기반 파이프라인 기획·설계",
            "발명신고서 및 설계 문서 작성",
          ],
          link: "https://youtu.be/d4_xoC0egl4?si=HVRcyg-W-ricGCCU",
          linkLabel: "영상 보기",
          tags: ["Python", "LangChain", "LangGraph", "Generative AI"],
        },
        {
          title: "Dorememe",
          subtitle: "VR 기반 실시간 공감각 미디어아트",
          description:
            "PyTorch 기반 AI 사운드 파이프라인과 Unity VR 환경을 결합한 졸업작품으로, 전시에 출품했습니다.",
          bullets: [
            "Unity 개발 전담",
            "3D 스케치 로직 구현",
            "Flask/Celery 비동기 서버 아키텍처 연결",
          ],
          tags: ["Unity", "PyTorch", "Flask", "Celery", "VR"],
          link: "https://github.com/seojungyoun/25_Dorememe.git",
          linkLabel: "깃허브 보기",
        },
        {
          title: "writie",
          subtitle: "AI 페르소나 학습 기반 초개인화 글쓰기 플랫폼",
          image: "/media/writie.png",
          description:
            "사용자의 문체와 사고를 돕는 방향의 AI 글쓰기 플랫폼으로 서비스 기획과 개발을 진행 중입니다.",
          bullets: [
            "B2C/B2B/B2G BM 설계",
            "Persona-LLM 엔진 구조 설계",
            "Figma UI/UX 프로토타입 제작",
          ],
          tags: ["Claude API", "Figma", "Service Planning"],
        },
        {
          title: "독일 University of Marburg XAI 개인 연구",
          subtitle: "설명 가능한 AI 연구",
          description:
            "Explainable AI를 학습하고 인공지능 모델의 기술적 신뢰성을 분석했습니다.",
          tags: ["Python", "Jupyter", "XAI"],
        },
        {
          title: "덕성여자대학교 RISE 사업 AR 영상 제작",
          subtitle: "AI 기반 데이터 분류 및 시각 에셋 최적화",
          image: "/media/ar.png",
          description:
            "AI 기반 데이터 분류와 시각 에셋 최적화를 바탕으로 영상 제작 품질 관리를 주도했습니다.",
          tags: ["AI", "AR", "Content Production"],
        },
        {
          title: "도봉옛길 메타버스 구현 및 전시",
          subtitle: "지역 문화유산 가상 구현",
          image: "/media/zep.png",
          description:
            "Zep과 제페토 플랫폼을 활용해 지역 문화유산을 가상 공간으로 구현하고 미디어아트 전시에 참여했습니다.",
          tags: ["Zep", "Zepeto", "Metaverse"],
        },
        {
          title: "장미원시장 미디어 파사드 영상 제작",
          subtitle: "상권 활성화 콘텐츠",
          description:
            "Grok AI, Veo3, Gemini 등 최신 AI 모델을 활용해 실감형 상권 활성화 미디어 파사드 영상 콘텐츠를 기획하고 제작했습니다.",
          link: "https://www.youtube.com/shorts/YDDte8_xuzQ?si=AsH2JDI-gqdrFdLi",
          linkLabel: "영상 보기",
          tags: ["Grok AI", "Veo3", "Gemini", "미디어파사드"],
        },
        {
          title: "KT 2025 ESG 보고서 홍보 영상 제작",
          subtitle: "KT디지털인재장학생 콘텐츠",
          description:
            "KT 2025 ESG 보고서 홍보 영상을 기획하고 제작했습니다. 스크립트 작성부터 편집·후반 작업까지 전 과정을 담당했습니다.",
          link: "https://youtu.be/QAWND9Cv4kY?si=FpT3pksDKnzhM8YC",
          linkLabel: "영상 보기",
          tags: ["영상 기획", "편집", "KT", "ESG"],
        },
        {
          title: "성동 1+1 프로젝트",
          subtitle: "지역 상생 콘텐츠 기획",
          image: "/media/1+1.png",
          description:
            "성동구 지역 상생을 위한 콘텐츠 기획 및 제작 프로젝트에 참여했습니다.",
          tags: ["기획", "콘텐츠 제작", "지역협력"],
        },
        {
          title: "스마트해상물류 X ICT 멘토링 프로젝트",
          subtitle: "항만 업무용 자동 스크린 락 앱 개발",
          description:
            "블루투스 기반 항만 업무용 노트북 자동 스크린 락 애플리케이션을 개발했습니다.",
          tags: ["Python", "Bluetooth"],
        },
        {
          title: "Future Letter 모바일 앱 개발",
          subtitle: "미래 전달 편지 서비스",
          description:
            "Swift, PHP, MySQL 기반으로 미래 편지 전달 서비스를 설계하고 개발했습니다.",
          tags: ["Swift", "PHP", "MySQL"],
        },
        {
          title: "Linux TCP 통신 채팅 프로그램 개발",
          subtitle: "Ubuntu 기반 네트워크 시스템 구현",
          description:
            "Ubuntu 환경에서 C 언어 기반의 TCP/IP 소켓 멀티스레드 채팅 시스템을 구현했습니다.",
          tags: ["C", "Linux", "TCP/IP"],
        },
      ],
    },
    {
      id: "internships",
      label: "Internships",
      items: [
        {
          title: "네이션에이 (NationA)",
          subtitle: "AI 콘텐츠 크리에이터 인턴",
          description:
            "Python 기반 캐릭터 채팅 콘텐츠 제작과 서비스 자동화 툴 개발에 참여했습니다.",
        },
        {
          title: "(주)후시파트너스",
          subtitle: "IT / 마케팅 인턴",
          description:
            "생성형 AI 활용 브랜드 홍보 영상 제작 및 SNS 콘텐츠 자동화 파이프라인 구축을 통해 팔로워 60% 증대를 달성했습니다.",
        },
        {
          title: "가톨릭평화방송 (CPBC)",
          subtitle: "뉴미디어팀 인턴",
          description:
            "유튜브 라이브 스트리밍 관리, 롱폼·쇼츠 영상, 인스타그램 콘텐츠 전반 제작을 총괄했습니다.",
        },
      ],
    },
    {
      id: "awards",
      label: "Awards",
      items: [
        {
          title: "한국지능정보사회진흥원 원장상",
          subtitle: "2025",
          description: "생성형 AI 활용 미래 사회 테마 콘텐츠 제작 성과를 인정받았습니다.",
        },
        {
          title: "경기콘텐츠진흥원장상",
          subtitle: "2024",
          description: "실버 세대 여행 지원 VR/MR 메타버스 콘텐츠 개발 성과로 수상했습니다.",
        },
        {
          title: "덕성여자대학교 연합해커톤 수상",
          subtitle: "2023",
          description: "졸업 정보 아카이빙 웹 서비스 '졸업을 도와조' 프론트엔드 개발로 수상했습니다.",
        },
        {
          title: "Microsoft Office Specialist : Excel 2016 Expert",
          subtitle: "자격증",
          description: "데이터 정리와 운영 문서 제작 역량을 보여주는 자격 취득입니다.",
        },
      ],
    },
    {
      id: "activities",
      label: "Activities",
      items: [
        {
          title: "KT디지털인재장학생",
          description:
            "디지털·AI 역량 강화 교육을 이수하고 운영팀 소속으로 SNS 콘텐츠를 기획·관리했습니다.",
        },
        {
          title: "GDSC Duksung",
          description:
            "홍보팀 운영진과 UI/UX 스터디 팀장으로 활동하며 커뮤니티 운영을 주도했습니다.",
        },
        {
          title: "청년 ESG 기획봉사",
          description:
            "서울시자원봉사센터와 함께 지역 상생 전시를 기획하고 개최했습니다.",
        },
        {
          title: "인천 도서산간 지역 랜선야학 멘토링",
          description:
            "대학생 멘토로서 수학 학습 지도와 취약 계층 학생 대상 진로 멘토링을 수행했습니다.",
        },
        {
          title: "대학생 건축연합동아리 아키텐",
          description:
            "AI와 메타버스 융합 주제로 스터디를 진행하고 기획 전시에 참여했습니다.",
        },
        {
          title: "코딩 학습 유튜브 채널 운영",
          description:
            "Java, Python, Django 기반 교육 콘텐츠를 기획하고 영상을 제작했습니다.",
        },
        {
          title: "경기콘텐츠진흥원 경기 XR 캠퍼스 유니티 과정 수료",
          description:
            "경기콘텐츠진흥원이 주관하는 경기 XR 캠퍼스에서 Unity 심화 과정을 수료했습니다.",
          tags: ["Unity", "XR", "수료"],
        },
      ],
    },
    {
      id: "education",
      label: "Education",
      items: [
        {
          title: "덕성여자대학교",
          subtitle: "IT미디어공학과 · GPA 4.2 / 4.5 · 2022 - 2026.08 졸업예정",
          description:
            "AI, 미디어, 프론트엔드, 실감형 콘텐츠를 아우르는 전공 기반 위에서 기획과 구현 경험을 함께 쌓았습니다.",
        },
        {
          title: "University of Marburg",
          subtitle: "방문학생 · Computer Science",
          description:
            "독일에서 XAI 연구와 컴퓨터과학 학습을 수행하며 기술적 관점을 확장했습니다.",
        },
      ],
    },
  ] satisfies ArchiveTab[],
  archive: {
    reviewerSummaryHref: "/reviewer-summary",
    hiddenPageHref: "/sm-proposal",
  },
  hiddenProposal: {
    title: "SM AI Virtual Artist Operations Proposal",
    scenario:
      "나이비스(naevis)의 실시간 소통 운영에 제한적 사용자 개입 모델을 적용하면, 팬 참여를 유지하면서도 브랜드 일관성과 운영 안정성을 동시에 확보할 수 있습니다.",
    bullets: [
      "입력 즉시 출력이 아니라 moderation, intent classification, response framing 단계를 둡니다.",
      "실시간 대화의 감정 톤은 유지하되 세계관과 브랜드 가이드는 시스템 레벨에서 제어합니다.",
      "운영팀이 개입해야 하는 순간과 자동 응답이 가능한 순간을 분리해 안정성을 높입니다.",
    ],
  },
};
