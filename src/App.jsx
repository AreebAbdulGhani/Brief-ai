import React from 'react';
import Layout from './components/Layout';
import Section from './components/Section';
import { whitepaperData } from './data/whitepaper';
import { motion } from 'framer-motion';

function App() {
  const { header, sections } = whitepaperData;

  const renderSectionContent = (section) => {
    if (section.isDiagram) {
      return (
        <div className="diagram-container" style={{ background: '#111', padding: '2rem', borderRadius: '4px', fontFamily: 'monospace', overflowX: 'auto' }}>
          <pre style={{ color: '#00f0ff' }}>
            {`
[Prospect URL / CRM ID]
│
▼
[API Gateway] ───► [Auth / Rate Limiting]
│
├──► [Scout Service (Lambda)]
│      └── Scrapes CSS, Assets, DOM
│
├──► [Intelligence Service (Python)]
│      ├── Fetches Text Data
│      ├── [Vector DB] (Retrieval)
│      └── [LLM] (Reasoning & Copywriting)
│
▼
[JSON Payload]
│
▼
[Adobe Express Add-on Client]
└── Applies changes to DOM
`}
          </pre>
        </div>
      )
    }

    return (
      <div className="content-block">
        {section.content && section.content.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}

        {section.subsections && section.subsections.map((sub, idx) => (
          <div key={idx} className="subsection" style={{ marginTop: '3rem' }}>
            <h3 style={{ color: 'var(--accent-cyan)' }}>{sub.title}</h3>
            <p>{sub.description}</p>
            {sub.tech && (
              <div className="tech-stack" style={{ borderLeft: '3px solid var(--accent-purple)', paddingLeft: '1rem', margin: '1rem 0' }}>
                <span style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>Stack:</span> {sub.tech}
              </div>
            )}
            {sub.workflow && (
              <ul className="workflow-list" style={{ marginTop: '1rem' }}>
                {sub.workflow.map((step, stepIdx) => (
                  <li key={stepIdx} style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                    <span style={{ color: 'var(--accent-cyan)', fontFamily: 'monospace' }}>0{stepIdx + 1}</span>
                    <div>
                      <strong style={{ color: 'var(--text-primary)' }}>{step.term}:</strong> {step.def}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {section.points && (
          <div className="points-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            {section.points.map((point, idx) => (
              <div key={idx} className="point-card" style={{ padding: '1.5rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '2px', background: 'linear-gradient(90deg, var(--accent-cyan), transparent)' }}></div>
                <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>{point.title}</h4>
                <p style={{ fontSize: '0.9rem' }}>{point.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero" style={{ paddingTop: '180px', paddingBottom: '100px', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', marginBottom: '1rem' }}>TECHNICAL WHITEPAPER v{header.version}</div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', marginBottom: '1.5rem', fontWeight: '800' }}>
              {header.title}<span style={{ color: 'var(--accent-cyan)' }}>.</span>AI
            </h1>
            <p style={{ fontSize: '1.5rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 3rem' }}>
              {header.subtitle}
            </p>

            <div className="meta" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem', flexWrap: 'wrap' }}>
              <span>{header.date}</span>
              <span>•</span>
              <span>Authored by {header.author.name}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dynamic Content Sections */}
      {sections.map((section) => (
        <Section key={section.id} id={section.id} title={section.title}>
          {renderSectionContent(section)}
        </Section>
      ))}

      {/* Roadmap Section (Hardcoded for visual control) */}
      <Section id="roadmap" title="6. Development Roadmap">
        <div className="roadmap" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', borderLeft: '2px solid var(--border-color)', paddingLeft: '2rem', marginLeft: '1rem' }}>
          <div className="milestone">
            <h3 style={{ color: 'var(--accent-cyan)' }}>Phase 1 (Weeks 1-4)</h3>
            <p>Build the "Scout" scraping engine and basic Adobe Express Color/Font injection.</p>
          </div>
          <div className="milestone">
            <h3 style={{ color: 'var(--accent-purple)' }}>Phase 2 (Weeks 5-8)</h3>
            <p>Integrate the RAG pipeline for text rewriting and deploy the "Smart Contrast" algorithm.</p>
          </div>
          <div className="milestone">
            <h3 style={{ color: 'var(--accent-green)' }}>Phase 3 (Post-Launch)</h3>
            <p>Salesforce/HubSpot API integration for deep CRM context.</p>
          </div>
        </div>
      </Section>

    </Layout>
  );
}

export default App;
