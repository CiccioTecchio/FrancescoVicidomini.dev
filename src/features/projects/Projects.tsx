export type ProjectState = {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  committedBy: string; //chi lo ha commissionato l'azienda ACME s.p.a o l'Università
  url?: string;
  repoUrl?: string;
};

export const workProjects: ProjectState[] = [
  {
    name: "AVANT",
    description:
      "Cybersecurity project focused on Digital Twin systems. Contributed to develop the platform using modern web technologies like Angular 22 and Spring Boot. Guiding the innovation of the platform by integrating AI-based features, like RAG and Agent-based automation.",
    startDate: "2025",
    endDate: "Present",
    committedBy: "Engineering",
    url: "https://www.eng.it/it/insights/stories/research-projects/ipcei-cis-avant",
  },
  {
    name: "ENCRYPT",
    description:
      "Horizon Europe cybersecurity project focused on privacy risk assessment, with Angular 18, RxJS, NgRx, international collaboration, and technical dissemination.",
    startDate: "2023",
    endDate: "2025",
    committedBy: "Engineering",
    url: "https://encrypt-project.eu/",
  },
  {
    name: "PAB Goes Digital",
    description:
      "Platform for the digitalization of public administration services developed with Angular.",
    startDate: "2020",
    endDate: "2023",
    committedBy: "NTT Data",
    url: "",
  },
];

export const personalProjects: ProjectState[] = [
  {
    name: "My Gym Stats MCP",
    description:
      "One of my passions is weight training; I’ve been training for years and have always kept a logbook of the exercises performed and the weights lifted, using a Google Sheets file on Google Drive. Over time, the number of workouts grew significantly, making it increasingly difficult to summarize the data.\nWhile studying how MCP (Model Context Protocol) servers work, I realized that they allow an LLM to access my knowledge base and provide analyses.",
    startDate: "2026",
    endDate: "Present",
    committedBy: "AI-Experiments",
    repoUrl: "https://github.com/CiccioTecchio/my-gym-stats-mcp",
  },
  {
    name: "My Superhero RAG",
    description:
      "Built a Python RAG prototype over Markdown profiles of DC and Marvel superheroes. Used Universal Sentence Encoder embeddings and FAISS similarity search to retrieve relevant content, then engineered a prompt combining the user question with the reconstructed context to guide Gemini toward structured JSON answers.",
    startDate: "2026",
    endDate: "Present",
    committedBy: "AI-Experiments",
    repoUrl: "https://github.com/CiccioTecchio/my-super-hero-rag",
  },
  {
    name: "MyFiscalCode",
    description:
      "Built a cookie-, tracker-, and ad-free Italian fiscal code calculator in Next.js to replace intrusive online alternatives.\nUsed AI-assisted generation to create Jest unit tests covering positive, negative, and boundary cases, raising branch coverage above 80% for core functionality; complemented them with Playwright E2E tests. Now used by friends, colleagues, and family.",
    startDate: "2026",
    endDate: "2026",
    committedBy: "My self",
    url: "https://my-fiscal-code.vercel.app/",
    repoUrl: "https://github.com/CiccioTecchio/MyFiscalCode",
  },
  {
    name: "FrancescoVicidomini.dev",
    description:
      "Personal project behind this website, used to experiment and improve my skills on technologies I do not know yet, in this case Next.js.I’ve been running this site ever since I started developing web apps; in fact, it has gone through various phases. Initially, it was hosted on GitHub.io and developed using jQuery, then I moved on to Angular, React and now Next.js, hosted on Vercel.",
    startDate: "2018",
    endDate: "2026",
    committedBy: "My self",
    url: "https://francescovicidomini.dev",
    repoUrl: "https://github.com/CiccioTecchio/FrancescoVicidomini.dev",
  },
  {
    name: "my-resume",
    description:
      "A repository I use to keep my CV up to date; at the moment, it’s an HTML page that I save as a PDF and then add tags to. The content on the page is read from JSON files, so when I need to update it, I simply edit those files whilst leaving the structure of the CV unchanged. The next step will be to enable the CV to be updated using AI agents.",
    startDate: "2020",
    endDate: "Present",
    committedBy: "My self",
    repoUrl: "https://github.com/CiccioTecchio/my-resume",
  },
  {
    name: "My Awesome Coin Collection",
    description:
      'Educational app created for a seminar I held in the "Web Technologies" course at the Università degli Studi di Salerno.',
    startDate: "2026",
    endDate: "2026",
    committedBy: "My self",
    url: "https://cicciotecchio.github.io/My-Aws-Coins-Collections/",
    repoUrl: "https://github.com/CiccioTecchio/My-Aws-Coins-Collections",
  },
];

export const universityProjects: ProjectState[] = [
  {
    name: "Knoxly",
    description:
      "Master's thesis project focused on a machine learning model able to detect when a person is talking about sensitive topics such as health information, travel details, and financial conditions.",
    startDate: "2020",
    endDate: "2020",
    committedBy: "University",
    repoUrl: "https://github.com/CiccioTecchio/IA-Knoxly",
  },
  {
    name: "ShareErasmus",
    description:
      "University Erasmus platform developed as project manager of a team of 8 people.",
    startDate: "2018",
    endDate: "2019",
    committedBy: "University",
    repoUrl: "https://github.com/CiccioTecchio/SharErasmus",
  },
  {
    name: "YASPL",
    description:
      "YASPL stands for Yet Another Simple Programming Language. This project is an implementation of a programming language featuring a lexical analyzer generated with JFlex, a parser generated with JavaCup, semantic analysis handled through the Visitor pattern, and C code generation built on the same visitor-based approach.",
    startDate: "2019",
    endDate: "2020",
    committedBy: "University",
    repoUrl: "https://github.com/CiccioTecchio/YASPL3",
  },
  {
    name: "N-body Simulation",
    description:
      "University parallel simulation project with AWS cluster configuration and performance testing.",
    startDate: "2018",
    endDate: "2018",
    committedBy: "University",
    repoUrl: "https://github.com/CiccioTecchio/n-Body_MPI",
  },

  {
    name: "SimRank",
    description:
      "Bachelor's thesis project based on the implementation of the SimRank algorithm to estimate how similar two people are starting from their graph of friendships and connections.",
    startDate: "2017",
    endDate: "2017",
    committedBy: "University",
    repoUrl: "https://github.com/CiccioTecchio/simrankJava",
  },
];
