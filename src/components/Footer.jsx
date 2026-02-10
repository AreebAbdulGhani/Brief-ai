import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <h3>BRIEF<span className="dot">.</span>AI</h3>
                    <p>Autonomous Account-Based Marketing Architect</p>
                </div>

                <div className="footer-links">
                    <div className="column">
                        <h4>Connect</h4>
                        <a href="https://github.com/AreebAbdulGhani/Brief-ai" target="_blank" rel="noopener noreferrer" className="social-link"><Github size={16} /> GitHub</a>
                        <a href="https://x.com/AreebAbdulGhan1" target="_blank" rel="noopener noreferrer" className="social-link"><Twitter size={16} /> Twitter</a>
                        <a href="https://www.linkedin.com/in/areeb-abdul-ghani-aaa46a1b7/" target="_blank" rel="noopener noreferrer" className="social-link"><Linkedin size={16} /> LinkedIn</a>
                    </div>
                    <div className="column">
                        <h4>Project</h4>
                        <a href="#executive-summary">Executive Summary</a>
                        <a href="#architecture">Technical Architecture</a>
                        <a href="#roadmap">Roadmap</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Areeb Abdul Ghani. All rights reserved.</p>
                <p>Version 1.0 • February 10, 2026</p>
            </div>
        </footer>
    );
};

export default Footer;
