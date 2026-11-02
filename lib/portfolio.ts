export const profile = {
  name: "Emerson Ian Bezerra de Sousa",
  shortName: "Emerson Sousa",
  headline: "Building intelligent systems that solve real problems.",
  role: "Computer Engineering · AI Engineering · Research",
  location: "Brazil",
  github: "https://github.com/emersonianb",
  email: "emersonianbezerra@gmail.com",
  linkedin: "https://www.linkedin.com/in/emerson-sousa-054a951b0/",
  summary:
    "Computer Engineering student with international academic experience and hands-on work across Machine Learning, NLP, LLM-based applications and agentic systems. Interested in reliable, useful and human-centered AI.",
  about:
    "I am a Computer Engineering student interested in the intersection of Artificial Intelligence, software engineering and human-computer interaction. My work has evolved from classical Machine Learning and NLP experiments to AI-powered products and agentic systems. I enjoy turning research questions and practical problems into working software, while paying attention to evaluation, usability and the people who use these systems.",
  education: [
    {
      institution: "Instituto Federal da Paraíba (IFPB)",
      program: "Computer Engineering",
      detail: "Undergraduate degree",
      note: "Add your expected graduation date and campus."
    },
    {
      institution: "University of Coimbra",
      program: "Informatics Engineering",
      detail: "Academic mobility",
      note: "Add the exact dates and official programme description."
    }
  ],
  interests: [
    "Agentic AI",
    "LLM Engineering",
    "Machine Learning",
    "Natural Language Processing",
    "Human-Centered AI",
    "AI Evaluation"
  ]
};

export const projects = [
  {
    slug: "comum",
    title: "COMUM",
    subtitle: "Adaptive Scaffolding and Agentic AI for English Learning",
    category: "Agentic AI",
    year: "2026",
    featured: true,
    status: "Research & development",
    summary:
      "An investigation into adaptive scaffolding and agentic AI for supporting English learning in Brazilian public schools.",
    description:
      "COMUM explores how an AI learning companion can support English learners through structured learning materials, adaptive guidance and human-centered interaction. The system builds on the earlier Agentic Language Learning Companion prototype.",
    problem:
      "Students in public-school contexts can face limited opportunities for individualized practice, timely feedback and learning support adapted to their needs.",
    approach: [
      "Organize learning activities through structured, level-based and category-based materials.",
      "Use an agentic architecture to interpret learner requests and coordinate specialized capabilities.",
      "Combine retrieval of learning materials with conversational LLM capabilities.",
      "Use learner context and memory to support continuity across sessions.",
      "Investigate adaptive scaffolding and emotion-aware interaction as design dimensions."
    ],
    technologies: ["Python", "LLMs", "Groq API", "ChromaDB", "Hugging Face", "Streamlit", "RAG"],
    contributions: [
      "Agent-oriented learning workflow",
      "Structured learning-material retrieval",
      "Long-term learner context and memory",
      "Human-centered design for a public-school learning context"
    ],
    limitations:
      "Do not present the system as proven to improve learning outcomes until the planned evaluation with learners has been completed. Add your final methodology, participant details and measured results here when validated.",
    github: "https://github.com/emersonianb/COMUM",
    demo: "https://comum-e4g2.onrender.com/",
    image: "/images/comum-cover.png",
    gallery: [
  {
    src: "/images/comum-cover.png",
    caption: "Main application interface"
  }]
},
  {
    slug: "scriptia",
    title: "SCRIPTIA",
    subtitle: "AI-assisted screenwriting for independent filmmakers",
    category: "AI Products",
    year: "2024",
    featured: true,
    status: "Academic project · University of Coimbra",
    summary:
      "An AI-powered platform concept designed to support screenplay development and storyboard workflows for independent filmmakers.",
    description:
      "Scriptia emerged from the observation that independent filmmakers often work with limited time and resources during story development. The project proposed an integrated platform for AI-assisted screenplay drafting, narrative analysis and storyboard creation.",
    problem:
      "Independent creators may lack access to the time, collaborators and production resources needed to iterate on scripts and visualize scenes.",
    approach: [
      "Explore LLM-assisted screenplay ideation and drafting.",
      "Propose NLP-based analysis of narrative material.",
      "Design a workflow connecting screenplay development with storyboard generation.",
      "Frame AI as a creative assistant rather than a replacement for the filmmaker."
    ],
    technologies: ["LLMs", "OpenAI API", "LLaMA", "NLP", "Quill"],
    contributions: [
      "Product concept and problem framing",
      "AI-assisted writing workflow",
      "Integration of creative-support features",
      "Academic project report developed during exchange"
    ],
    limitations:
      "Distinguish implemented features from proposed features in the final project report. Add repository, screenshots and a working demo if available.",
    github: "https://github.com/emersonianb/Scriptia",
    demo: "https://emersonianb.github.io/Scriptia/",
    image: "/images/scriptia-cover.png",
    gallery: [
  {
    src: "/images/scriptia-cover.png",
    caption: "Scriptia project interface"
  }]
  },
  {
    slug: "hate-speech-detection",
    title: "Hate Speech Detection in Tweets",
    subtitle: "Machine Learning approaches for text classification",
    category: "Machine Learning",
    year: "2024",
    featured: true,
    status: "Academic research project",
    summary:
      "A comparative study of Machine Learning approaches for automated hate-speech detection in tweets.",
    description:
      "The project investigated the use of Neural Networks, Naive Bayes and Decision Trees, alongside text vectorization and class-balancing techniques, using the Hate Speech Identification dataset.",
    problem:
      "The spread of hateful content on social platforms motivates research into methods that can support the identification and analysis of harmful language.",
    approach: [
      "Prepare and vectorize tweet text for supervised classification.",
      "Apply class-balancing techniques to address dataset imbalance.",
      "Compare multiple classical Machine Learning approaches.",
      "Evaluate model performance and document limitations."
    ],
    technologies: ["Python", "Scikit-learn", "NLP", "Random Forest", "Naive Bayes", "Decision Trees"],
    contributions: [
      "Comparative model evaluation",
      "Text preprocessing and vectorization",
      "Class imbalance handling",
      "Socially relevant NLP application"
    ],
    limitations:
      "The original report mentions 90% precision for Random Forest. Confirm the exact metric definition, test split and evaluation protocol before publishing this as a headline result.",
    github: "https://github.com/emersonianb/Hate_Speech_Analysis",
    demo: "https://emerson-hatespeechanalysis.streamlit.app/",
    image: "/images/hs-cover.png",
    gallery: [
  {
    src: "/images/hs-cover.png",
    caption: "Hate Speech Detection project interface"
  },
  {
    src: "/images/hs-1.png",
    caption: "ROC curve for Random Forest model"
  },
  {
    src: "/images/llm-1.png",
    caption: ""}],
  },
  {
    slug: "llm-evaluation-framework",
    title: "LLM Evaluation Framework",
    subtitle: "A practical benchmark and observability toolkit",
    category: "LLM Engineering",
    year: "2026",
    featured: false,
    status: "Academic support project",
    summary:
      "A tool to compare LLM configurations using repeatable tests, quality metrics and latency measurements.",
    description:
      "This project is an extension to the TCC project, because it was use to evaluate the best LLM suite for the application. It focus on evaluating model outputs systematically instead of relying only on subjective impressions.",
    problem: "LLM applications can regress when prompts, models or retrieval configurations change. Teams need repeatable evaluation and clear visibility into quality and performance.",
    approach: [
      "Create a small, versioned evaluation dataset.",
      "Compare model and prompt configurations on identical test cases.",
      "Measure latency, token usage and available quality indicators.",
      "Add automated regression tests and a results dashboard."
    ],
    technologies: ["Python", "FastAPI", "pytest", "Streamlit", "LLM APIs"],
    contributions: [
      "Repeatable evaluation pipeline",
      "Model comparison",
      "Regression testing",
      "Observability dashboard"
    ],
    limitations:
      "This is only a support project for the TCC research. It is just a simple way to evaluate the best LLM configuration for the application. It is not a complete evaluation framework yet.",
    github: "https://github.com/emersonianb/llm-benchmark",
    demo: "https://comum-llm-benchmark.streamlit.app/",
    image: "/images/eval-cover.png",
    gallery: [
  {
    src: "/images/eval-cover.png",
    caption: ""
  },
  {
    src: "/images/llm-2.png",
    caption: ""
  },
  { src: "/images/llm-3.png",
    caption: ""
  },
  {
    src: "/images/llm-4.png",
    caption: ""
  }]
  },
  {
    slug: "agentic-ai-tutor",
    title: "Agentic AI Tutor",
    subtitle: "Agentic Language Learning Companion",
    summary:
      "An agentic language learning companion designed to support English learners in Brazilian public schools. This sytem is only the initial prototype of COMUM, the main research project.",
    status: "Changed to COMUM project",
    category: "Artificial Intelligence",
    description:
      "The Agentic Language Learning Companion is a prototype of an AI-powered learning companion that combines structured learning guides, Portuguese explanations, English conversation practice, emotion-aware interaction and long-term memory.",
    problem: "Students in public-school contexts can face limited opportunities for individualized practice, timely feedback and learning support adapted to their needs.",
    technologies: [
      "Python",
      "Groq API",
      "LLaMA 3",
      "Streamlit",
      "ChromaDB",
      "Hugging Face"
    ],
    image: "/images/ai-tutor.png",
    gallery: [
  {
    src: "/images/ai-tutor.png",
    caption: "Agentic AI Tutor interface"
  }],
    github: "https://github.com/emersonianb/ALL",
    demo: "https://github.com/emersonianb/ALL",
    featured: true,
    year: "2025"
  },
];

export const research = [
  {
    title: "COMUM: An Investigation into Adaptive Scaffolding and Agentic AI in Public-School English Education",
    type: "Undergraduate thesis / TCC",
    status: "In progress",
    description: "Research into the design and investigation of agentic AI and adaptive scaffolding for English learning in the Brazilian public-school context.",
    pdf: ""
  },
  {
    title: "Agentic Language Learning Companion",
    type: "Research article / paper",
    status: "Completed coursework",
    description:
      "A learner-centered AI tutor concept combining structured learning guides, Portuguese explanations, English conversation practice, emotion-aware interaction and long-term memory.",
    pdf: "https://drive.google.com/file/d/1kWcKYep6LyjGownfYgQ6I0aPmVp6y_AI/view?usp=sharing"
  },
  {
    title: "Machine Learning Approaches for Detecting Hate Speech in Tweets",
    type: "Academic project",
    status: "Completed coursework",
    description: "A comparative investigation of Machine Learning methods for hate-speech classification using text vectorization and class balancing.",
    pdf: "https://drive.google.com/file/d/1KqC6HtScXT5ZRDUm_X2Bf9ggcoEFZZVj/view?usp=sharing"
  }
];
