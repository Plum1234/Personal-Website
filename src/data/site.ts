export const site = {
  name: "Joshua Lum",
  tagline: "CS + Business @ USC · Interested in Product, BizOps & Engineering",
  email: "jalum@usc.edu",
  phone: "(702) 793-5286",
  linkedin: "https://www.linkedin.com/in/josh-lum",
  github: "https://github.com/Plum1234",
  resumeUrl: "/resume.pdf",
  headshot: "/images/headshot.jpg",

  bio: `I'm a Computer Science and Business Administration graduate from USC, currently based in NYC. I'm love learning, and it's brought me deeper into the field than I ever expected. Whether it's co-authoring research on ML interpretability or building AI-powered features as an 8VC Fellow, I'm always taking the hands-on approach to growth. Right now, I'm interested in working at roles around the intersection of Product, Business, and Engineering.`,

  badges: [
    "8VC Engineering Fellow",
    "NeurIPS 2024 (CaLM)",
    "Magna Cum Laude",
    "Dean's List",
  ],

  education: {
    school: "University of Southern California",
    detail: "Viterbi School of Engineering & Marshall School of Business",
    degree: "B.S. Computer Science and Business Administration",
    graduation: "May 2026",
    gpa: "3.72",
    leadership: [
      "Head Peer Academic Leader",
      "Chinese American Student Association (President)",
    ],
  },

  experience: [
    {
      company: "Campus",
      tag: "Series B · 8VC / Founder's Fund",
      role: "Software Engineering Intern (8VC Engineering Fellow)",
      location: "New York, NY",
      dates: "May 2026 – August 2026",
      highlights: [
        "1 of 30 selected 8VC Engineering Fellows, building AI-powered features to enhance student learning.",
        "Shipped a DM-native AI assistant (\"Sam\") across 4 services — Go backend, React frontend, Go WebSocket server, and Python/LangChain — enabling replies and proactive outreach in student DMs.",
        "Improved AI response quality by updating model metadata on assignment info, adding file upload support, and implementing tracing through Datadog.",
      ],
      media: {
        type: "image" as const,
        src: "/images/sam-dm.png",
        alt: "Sam AI assistant DM interface on Campus",
        caption: "Sam — Campus AI Buddy in student DMs",
      },
    },
    {
      company: "Uthana",
      tag: "Seed · A16Z portfolio",
      role: "Product & Engineering Intern",
      location: "Los Angeles, CA",
      dates: "May 2025 – August 2025",
      highlights: [
        "Launched a live generative AI animation demo at SIGGRAPH 2025, viewed by 2,000+ game developers and ML researchers.",
        "Built an automated Python workflow that processed and ranked 10K+ motion prompts using frequency and embedding-based cosine distance to generate monthly top-150 MoCap batches.",
        "Reported on 10+ companies and technologies in AI animation to shape product features and partnerships.",
      ],
      media: {
        type: "video" as const,
        youtubeId: "ouao2Pc6XTI",
        caption: "SIGGRAPH 2025 — live real-time generative animation demo",
      },
    },
    {
      company: "Tamagotchi Lab, USC",
      tag: "Viterbi School of Engineering",
      role: "Undergraduate Student Researcher",
      location: "Los Angeles, CA",
      dates: "May 2024 – May 2026",
      highlights: [
        "Conducted ML/NLP interpretability research on how LLMs encode syntactic and semantic information, with applications to fairness-critical decision systems.",
        "Co-authored a NeurIPS 2024 (CaLM) paper on GPT-2 causal reasoning across 144 attention heads using activation patching on 30K+ sentence pairs.",
        "Co-authored research analyzing fairness and bias in LLM-based kidney allocation using real OPTN data.",
      ],
    },
  ],

  projects: [
    {
      title: "The Intern",
      subtitle: "Proactive AI Coding Agent",
      description:
        "An always-on AI agent in Slack that triages Linear tickets, writes code on feature branches, opens draft GitHub PRs, and demos on Replit — powered by a multi-agent architecture on the Claude Agent SDK.",
      tech: ["Replit", "Python", "Claude Agent SDK", "Slack API", "Linear", "GitHub API"],
      highlights: [
        "Continuous preview deployments via GitHub Actions — every agent-opened PR auto-deploys to a live *.replit.app URL.",
        "Integrated Slack Socket Mode, Linear/GitHub MCP servers, and Perseus semantic code search for scoped subagent tool access.",
      ],
      demo: {
        type: "video" as const,
        youtubeId: "szILc1sSEG8",
        label: "Watch Demo",
      },
    },
    {
      title: "3D Interactive AI Companion",
      subtitle: "Unity + OpenAI",
      description:
        "A 3D interactive AI companion in Unity with Blender-modeled animations, Microsoft Cognitive Services for speech, and OpenAI-powered dynamic conversation synced to character animations.",
      tech: ["C#", "Unity", "Blender", "OpenAI API", "Microsoft Cognitive Services"],
      highlights: [
        "Full speech recognition, synthesis, and lip-synced character animations.",
        "Dynamic conversational AI driving real-time 3D character behavior.",
      ],
      demo: {
        type: "video" as const,
        youtubeId: "4dw_R7ulc7Q",
        label: "Watch Demo",
      },
    },
  ],

  research: [
    {
      title:
        "Causal Interventions on Causal Paths: Mapping GPT-2's Reasoning From Syntax to Semantics",
      venue: "CaLM @ NeurIPS 2024",
      authors: "Isabelle Lee, Joshua Lum, Ziyi Liu, Dani Yogatama",
      url: "https://arxiv.org/abs/2410.21353",
      description:
        "Characterized causal reasoning in GPT-2 small by analyzing cause-and-effect sentences, finding syntax localized in early layers and semantic sensitivity in later attention heads.",
    },
    {
      title:
        "Evaluating Large Language Models for Fair and Reliable Organ Allocation",
      venue: "arXiv preprint",
      authors:
        "Brian Hyeongseok Kim, Hannah Murray, Isabelle Lee, Jason Byun, Joshua Lum, Dani Yogatama, Evi Micha",
      url: "https://arxiv.org/html/2504.03716v2",
      description:
        "Systematic evaluation of LLMs on kidney allocation using real OPTN data, revealing task-dependent demographic biases and the need for rigorous fairness metrics before clinical deployment.",
    },
  ],

  skills: {
    languages: ["Python", "PyTorch", "C++", "C#", "Go", "Java", "JavaScript", "TypeScript"],
    frameworks: ["React", "Node.js", "Unity", "SQL", "Git"],
    domains: ["AI / ML", "NLP", "Full-Stack", "Agent Systems", "Product"],
  },

  interests: ["Music", "Hiking", "Pickleball", "Spikeball", "Snowboarding", "Cycling", "Gaming"],

  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Research", href: "#research" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
