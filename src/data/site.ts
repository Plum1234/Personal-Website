export const site = {
  name: "Joshua Lum",
  email: "jalum@usc.edu",
  linkedin: "https://www.linkedin.com/in/josh-lum",
  github: "https://github.com/Plum1234",
  resumeUrl: "/Lum_Joshua_Resume_Grad.pdf",

  about: [
    {
      text: "Based in Los Angeles. currently software strategy group associate at ey-p",
    },
    {
      parts: [
        { text: "I'm also an " },
        {
          text: "8VC Engineering Fellow",
          href: "https://www.8vc.com/fellows/joshua-lum",
        },
        { text: " who worked at " },
        {
          text: "Campus",
          href: "https://campus.edu/",
        },
        { text: " and " },
        {
          text: "Uthana",
          href: "https://www.uthana.com/",
        },
        {
          text: ". I studied CS+Business at USC, where I conducted interpretability research published to ",
        },
        {
          text: "Calm @ NeurIPS",
          href: "https://arxiv.org/abs/2410.21353",
        },
      ],
    },
    {
      text: "Always happy to chat.",
    },
  ],

  work: [
    {
      company: "EY-Parthenon",
      role: "Associate",
      dates: "2026",
      href: "https://www.ey.com/en_us/services/strategy/ey-parthenon",
      logo: "/logos/EYP.png",
    },
    {
      company: "8VC",
      role: "Engineering Fellow",
      dates: "2026",
      href: "https://8vc.com/",
      logo: "/logos/8vc.png",
    },
    {
      company: "Campus",
      role: "Software Engineer",
      dates: "2026 – 2026",
      href: "https://campus.edu/",
      logo: "/logos/campus.png",
    },
    {
      company: "Uthana",
      role: "Product & Software Engineer",
      dates: "2025 – 2025",
      href: "https://www.uthana.com/",
      logo: "/logos/uthana.png",
    },
    {
      company: "Tamagotchi Lab, USC Viterbi",
      role: "ML/NLP",
      dates: "2024 – 2026",
      href: "https://arxiv.org/abs/2410.21353",
      logo: "/logos/usc.png",
    },
  ],

  involvements: [
    {
      org: "USC",
      role: "Head Peer Academic Leader",
      dates: "2023 – 2026",
      logo: "/logos/usc.png",
    },
    {
      org: "CASA",
      role: "President",
      dates: "2024 – 2026",
      logo: "/logos/casa.png",
    },
  ],

  projects: [
    {
      title: "Sam",
      badge: "Campus",
      description:
        "Grew Campus's AI tutor from 50 → 350 daily active users with DMs, file upload, and assignment context.",
      href: "https://youtu.be/zrPAAYbZT6Y",
      image: "/images/sam-dm.png",
    },
    {
      title: "Causal Interventions on Causal Paths",
      badge: "CaLM @ NeurIPS",
      description:
        "Mapped GPT-2's causal reasoning from syntax to semantics across 144 attention heads.",
      href: "https://arxiv.org/abs/2410.21353",
      image: "/images/casual-reasoning.png",
    },
    {
      title: "The Intern",
      badge: "Replit x a16z Hackathon",
      description:
        "Slack agent that triages Linear tickets, writes code, opens draft PRs, and demos on Replit.",
      href: "https://youtu.be/szILc1sSEG8",
      image: "https://img.youtube.com/vi/szILc1sSEG8/hqdefault.jpg",
    },
    {
      title: "3D AI Companion",
      badge: "Personal",
      description:
        "Unity companion with speech, lip-sync, and OpenAI conversation driving character animation.",
      href: "https://youtu.be/4dw_R7ulc7Q",
      image: "https://img.youtube.com/vi/4dw_R7ulc7Q/hqdefault.jpg",
    },
    {
      title: "Transcript Analysis",
      badge: "Campus",
      description:
        "Dagster pipeline over 1,000+ student-coach transcripts to surface risk themes with LDA, BERTopic, and LLMs.",
      href: "https://youtu.be/MD009cPA7vI",
      image: "https://img.youtube.com/vi/MD009cPA7vI/hqdefault.jpg",
    },
    {
      title: "Fair Organ Allocation",
      badge: "Research",
      description:
        "Evaluated LLMs for fair kidney allocation on real OPTN data.",
      href: "https://arxiv.org/html/2504.03716v2",
      image: "/images/organ.png",
    },
  ],
} as const;
