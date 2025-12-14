import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Indranil Bain",
  initials: "IB",
  url: "https://not-indro.github.io/Portfolio/",
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",
  description:
    "AI/ML Engineer & Data Analyst. I bridge the gap between complex data pipelines and production-grade ML systems.",
  summary:
    "I am a Staff-level AI/ML & Full-Stack Engineer with a strong foundation in building production ML systems, scalable data analytics platforms, and AI-powered products. My expertise lies in transforming raw data into actionable insights and deploying robust models that solve real-world problems. I combine deep technical knowledge in Python, SQL, and ML frameworks with a product-focused mindset to deliver high-impact solutions.",
  avatarUrl: "https://not-indro.github.io/Portfolio/assets/image/pic1.jpeg",
  skills: [
    "Python",
    "SQL",
    "C++",
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "AWS (SageMaker, S3, Glue)",
    "Docker",
    "Apache Airflow",
    "PostgreSQL",
    "MongoDB",
    "React.js",
    "Next.js",
    "TailwindCSS",
    "Git",
    "CI/CD",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" }, // Commented out as no blog is provided yet
  ],
  contact: {
    email: "indranilbain14@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/not-indro",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/indranil-bain",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:indranilbain14@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "EvenFlow AI",
      href: "", // No URL provided
      badges: [],
      location: "Remote (Northfield, IL, USA)",
      title: "Data Analyst",
      logoUrl: "", // Placeholder or need to find one
      start: "Jan 2025",
      end: "Present",
      description:
        "**Problem**: Manual tagging of service center operation codes was time-consuming and prone to errors, leading to inefficient repair tracking.\n\n**Approach**: Developed a repair category classification model using **TF-IDF text embeddings** and **Logistic Regression**. Performed extensive data cleaning, lemmatization, hyperparameter tuning, and cross-validation.\n\n**Outcome**: Achieved **91% accuracy**, reducing manual tagging effort by **80%** and improving repair workflow visibility by **22%**. Also built an automated customer outreach tool using Pandas and TextGrid API, reducing manual follow-ups by **75%**.",
    },
    {
      company: "i3 Digital Health",
      badges: [],
      href: "", // No URL provided
      location: "Bangalore, India",
      title: "Data Engineer Trainee",
      logoUrl: "",
      start: "Sept 2024",
      end: "Dec 2024",
      description:
        "**Problem**: Research data extraction from ClinicalTrials API and FDA drug labels was a manual, labor-intensive process.\n\n**Approach**: Automated pipelines using **Hugging Face transformers** and **SciSpacy NER** to extract and normalize drug/biomarker data. Developed a scalable ETL scraper for FDA oncology drug label PDFs using **Python**, **BeautifulSoup**, and async queues.\n\n**Outcome**: Reduced manual lookup work by **85%** and saved **3 hours/day** of manual data entry. Improved downstream research data quality through automated cleaning and entity resolution.",
    },
    {
      company: "IIEST Shibpur",
      href: "https://www.iiests.ac.in/",
      badges: [],
      location: "Howrah, India",
      title: "Summer Project Intern",
      logoUrl: "",
      start: "May 2023",
      end: "July 2023",
      description:
        "**Problem**: Students faced friction in onboarding and finding relevant study materials on a GRE prep platform.\n\n**Approach**: Developed an interactive platform using **React** and **Node.js**. Integrated a personalized study-recommendation module using **collaborative filtering** and user behavior analytics.\n\n**Outcome**: Increased engagement by **40%**, cut onboarding time by **50%**, and improved student performance by **25%** via targeted content recommendations.",
    },
    {
      company: "IIT Kharagpur",
      href: "http://www.iitkgp.ac.in/",
      badges: [],
      location: "Kharagpur, India",
      title: "Research Intern",
      logoUrl: "",
      start: "July 2022",
      end: "Oct 2022",
      description:
        "**Problem**: Privacy concerns and data silos hindered the training of robust dermatology image classification models.\n\n**Approach**: Implemented **Federated Learning** for privacy-preserving AI training on dermatology images. Focused on data cleaning and preprocessing to reduce false positives.\n\n**Outcome**: Achieved **83.2% accuracy** across distributed training nodes and reduced false positives by **30%**, ensuring privacy compliance while maintaining model performance.",
    },
  ],
  education: [
    {
      school: "Indian Institute of Engineering Science & Technology, Shibpur",
      href: "https://www.iiests.ac.in/",
      degree: "B.Tech in Computer Science & Technology",
      logoUrl: "",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Biased Media Classifier",
      href: "https://github.com/not-indro/Biased_MediaClassifier",
      dates: "2024",
      active: true,
      description:
        "**Problem**: Media bias is subtle and hard to quantify at scale. \n\n**Approach**: Fine-tuned **DistilBERT** on the MBIC dataset. Implemented class-balancing and AdamW optimization. Built an interpretability dashboard using **Streamlit** and **NewsAPI**.\n\n**Outcome**: Achieved **73% accuracy** in detecting linguistic bias, providing real-time transparency for news consumption.",
      technologies: [
        "Python",
        "PyTorch",
        "DistilBERT",
        "Transformers",
        "Streamlit",
        "NewsAPI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/not-indro/Biased_MediaClassifier",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://not-indro.github.io/Portfolio/assets/image/MBIC%20prj.png",
      video: "",
    },
    {
      title: "pdfSAGE - Intelligent Document Companion",
      href: "https://github.com/not-indro/pdfSAGE_WebAPP",
      dates: "Ongoing",
      active: true,
      description:
        "**Problem**: Extracting insights from long PDF documents is tedious.\n\n**Approach**: Built a RAG (Retrieval-Augmented Generation) system using **LangChain**, **Pinecone**, and **OpenAI API**. Frontend built with **Next.js** and **Tailwind CSS**.\n\n**Outcome**: Enables semantic search, summarization, and Q&A over documents, significantly reducing information retrieval time.",
      technologies: [
        "Next.js",
        "LangChain",
        "Pinecone",
        "OpenAI API",
        "PostgreSQL",
        "AWS S3",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/not-indro/pdfSAGE_WebAPP",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://not-indro.github.io/Portfolio/assets/image/pdfSAGE%20Banner%20Website.png",
      video: "",
    },
    {
      title: "Hand Written Math Expression Recognition",
      href: "https://github.com/not-indro/HMER_MajorProject",
      dates: "2024",
      active: true,
      description:
        "**Problem**: Digitizing handwritten mathematical expressions is challenging due to complex spatial structures.\n\n**Approach**: Designed an Encoder-Decoder architecture using **Vision Transformer (ViT)** for feature extraction and **GPT-2** for sequence generation.\n\n**Outcome**: Achieved **88% accuracy** on the CROHME dataset, effectively converting offline handwritten math into LaTeX.",
      technologies: [
        "Python",
        "PyTorch",
        "Vision Transformer",
        "GPT-2",
        "Computer Vision",
        "NLP",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/not-indro/HMER_MajorProject",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://not-indro.github.io/Portfolio/assets/image/HMER%20Website%20Banner'.png",
      video: "",
    },
    {
      title: "GRE Helper",
      href: "https://gre-helper-frontend-dot-abstract-bonbon-381114.el.r.appspot.com/",
      dates: "2023",
      active: true,
      description:
        "**Problem**: Generic test prep lacks personalization, leading to inefficient study sessions.\n\n**Approach**: Built a recommendation engine using **collaborative filtering** to analyze mock test results and suggest targeted practice questions.\n\n**Outcome**: Improved student performance by **25%** by focusing on identified weak areas.",
      technologies: [
        "React",
        "Node.js",
        "Collaborative Filtering",
        "Data Analytics",
      ],
      links: [
        {
          type: "Website",
          href: "https://gre-helper-frontend-dot-abstract-bonbon-381114.el.r.appspot.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/not-indro/gre_helper/tree/development",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://not-indro.github.io/Portfolio/assets/image/prj3.png",
      video: "",
    },
    {
      title: "SkinCurate & Federated Learning",
      href: "https://not-indro.github.io/Portfolio/assets/image/SkinCurate%20App%20UI.pdf",
      dates: "2022",
      active: true,
      description:
        "**Problem**: Medical data privacy regulations restrict centralized model training.\n\n**Approach**: Developed a **Federated Learning** framework for dermatology image classification. Also built 'SkinCurate', an app for data collection and preliminary analysis.\n\n**Outcome**: Enabled privacy-preserving model training with **83.2% accuracy**, validating the feasibility of decentralized medical AI.",
      technologies: [
        "Federated Learning",
        "Computer Vision",
        "Mobile Dev",
        "Privacy-Preserving AI",
      ],
      links: [
        {
          type: "UI Design",
          href: "https://not-indro.github.io/Portfolio/assets/image/SkinCurate%20App%20UI.pdf",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://not-indro.github.io/Portfolio/assets/image/prj4.jpg",
      video: "",
    },
    {
      title: "Data Analysis Projects",
      href: "https://github.com/not-indro/Music_DB-Project",
      dates: "Various",
      active: true,
      description:
        "**Problem**: Raw data is often unstructured and difficult to query for insights.\n\n**Approach**: Executed multiple SQL-based projects involving complex queries, data transformation, and optimization for large datasets.\n\n**Outcome**: Uncovered trends and correlations in domains like music databases, enabling informed decision-making.",
      technologies: [
        "SQL",
        "Data Analysis",
        "Database Management",
        "ETL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/not-indro/Music_DB-Project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://not-indro.github.io/Portfolio/assets/image/prj5.png",
      video: "",
    },
  ],
  hackathons: [] as readonly {
    title: string;
    dates: string;
    location: string;
    description: string;
    image: string;
    links: readonly {
      title: string;
      icon: React.ReactNode;
      href: string;
    }[];
  }[],
} as const;
