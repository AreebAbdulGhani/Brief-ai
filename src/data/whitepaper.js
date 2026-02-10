
export const whitepaperData = {
  header: {
    title: "Brief",
    subtitle: "The Autonomous Account-Based Marketing (ABM) Architect",
    version: "1.0",
    date: "February 10, 2026",
    author: {
      name: "Areeb Abdul Ghani",
      role: "Senior Platform Engineer / DevOps Architect",
      links: [
        { label: "Twitter", url: "https://x.com/AreebAbdulGhan1" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/areeb-abdul-ghani-aaa46a1b7/" }
      ]
    }
  },
  sections: [
    {
      id: "executive-summary",
      title: "1. Executive Summary",
      content: [
        "Brief is a proposed enterprise-grade add-on for Adobe Express that automates the generation of hyper-personalized B2B sales collateral. Unlike traditional template tools that rely on manual user input, Brief operates as an autonomous agent. It ingests unstructured data from prospect domains and CRM records, synthesizes a 'Brand & Strategic Profile,' and programmatically reconstructs Adobe Express documents to align with the target's visual identity and strategic goals.",
        "This document outlines the system architecture, the proprietary 'Brand Injection' algorithm, and the RAG (Retrieval-Augmented Generation) pipeline required to deliver this capability at scale."
      ]
    },
    {
      id: "architecture",
      title: "2. Technical Architecture",
      content: [
        "The system is designed as an Event-Driven Microservices Architecture to handle the high concurrency required for real-time scraping and LLM inference without blocking the Adobe Express main thread."
      ],
      subsections: [
        {
          title: "2.1 The 'Scout' Microservice (Ingestion Layer)",
          description: "The entry point of the application is the Scout Agent, a serverless function designed for high-fidelity DOM reconstruction.",
          type: "tech-stack",
          tech: "Node.js, Puppeteer (Headless Chrome), AWS Lambda",
          workflow: [
            {
              term: "Hydration",
              def: "The agent visits the target URL (e.g., prospect-site.com) and waits for the full DOM hydration to ensure Single Page Applications (SPAs) like React/Vue are fully rendered."
            },
            {
              term: "Computed Style Extraction",
              def: "Instead of regex-scraping HTML, the agent utilizes window.getComputedStyle() to extract the 'Truth' of the brand."
            },
             {
              term: "Primary/Secondary Colors",
              def: "Analyzed via pixel-histogram frequency of the landing page viewport."
            },
             {
              term: "Typography",
              def: "Extraction of @font-face families and weight distributions."
            },
             {
              term: "Logo Extraction",
              def: "Heuristic analysis of meta[property='og:image'] and header > img nodes to identify high-resolution SVG or PNG assets."
            }
          ]
        },
        {
          title: "2.2 The 'Cognitive' Core (Reasoning Layer)",
          description: "Once visual assets are secured, the system builds a 'Strategic Profile' of the prospect using a RAG (Retrieval-Augmented Generation) pipeline.",
          type: "tech-stack",
          tech: "Python (FastAPI), LangChain, Pinecone (Vector DB), OpenAI (GPT-4o)",
          workflow: [
            {
              term: "Corpus Ingestion",
              def: "The agent scrapes the prospect's 'About Us,' 'News,' and 'Investor Relations' pages."
            },
            {
              term: "Vector Embedding",
              def: "Text chunks are passed through text-embedding-3-small and stored in an ephemeral index in Pinecone."
            },
            {
              term: "Contextual Rewrite",
              def: "The system takes the generic copy from the Adobe Express master deck. It queries the Vector DB for the prospect's specific goals."
            },
            {
              term: "Generative Output",
              def: "The LLM rewrites the copy to match the prospect's tone and strategic focus."
            }
          ]
        },
        {
          title: "2.3 The 'Canvas' Manipulator (Execution Layer)",
          description: "The final phase is the injection of this intelligence into the Adobe Express Document Sandbox.",
          type: "tech-stack",
          tech: "Adobe Express Add-on SDK, TypeScript, React",
          workflow: [
            {
              term: "Node Traversal",
              def: "The add-on traverses the document graph to identify 'mutatable' nodes (shapes, text frames, image placeholders)."
            },
            {
              term: "Smart Contrast",
              def: "Runs a WCAG 2.1 AA Compliance check. If the prospect's primary color is too light, the algorithm automatically calculates a darkened variant."
            },
            {
              term: "Style Injection",
              def: "Applies the extracted font families and hex codes to the respective nodes."
            }
          ]
        }
      ]
    },
    {
      id: "diagram",
      title: "3. Data Flow Diagram",
      content: [],
      isDiagram: true
    },
    {
      id: "differentiation",
      title: "4. Competitive Differentiation",
      description: "Brief establishes a technical moat through Context-Aware Design:",
      points: [
         { title: "No 'Template Fatigue'", desc: "Brief utilizes Zero-Shot Classification to map the prospect's industry data to the correct design elements automatically." },
         { title: "Brand Safety Guardrails", desc: "The inclusion of the WCAG Contrast Engine ensures that the automated designs are not just visually similar, but legally and aesthetically compliant." },
         { title: "Enterprise Security", desc: "The architecture is designed for SOC2 compliance. Prospect data is processed in ephemeral containers and never retained." }
      ]
    },
    {
      id: "monetization",
      title: "5. Monetization",
      description: "This architecture supports a high-margin SaaS model:",
      points: [
         { title: "Cost Structure", desc: "High efficiency. Visual scraping is low-cost; LLM costs are minimized via RAG." },
         { title: "Willingness to Pay", desc: "Enterprise Sales teams have high CAC budgets. Reduces 'Deck Prep Time' from 2 hours to 2 minutes." }
      ]
    }
  ]
};
