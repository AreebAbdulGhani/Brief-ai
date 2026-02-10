import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Architecture', href: '#architecture' },
        { name: 'Scout', href: '#scout' },
        { name: 'Cognitive Core', href: '#cognitive' },
        { name: 'Canvas', href: '#canvas' },
        { name: 'Differentiation', href: '#differentiation' },
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <a href="#" className="logo">
                    BRIEF<span className="dot">.</span>AI
                </a>

                <nav className="desktop-nav">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link">
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="social-links desktop-only">
                    <a href="https://github.com/AreebAbdulGhani/Brief-ai" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github size={20} />
                    </a>
                    <a href="https://x.com/AreebAbdulGhan1" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <Twitter size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/areeb-abdul-ghani-aaa46a1b7/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin size={20} />
                    </a>
                </div>

                <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>

                {isMobileMenuOpen && (
                    <div className="mobile-menu">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="mobile-nav-link"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="social-links mobile-only">
                            <a href="https://github.com/AreebAbdulGhani/Brief-ai" target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
                            <a href="https://x.com/AreebAbdulGhan1" target="_blank" rel="noopener noreferrer"><Twitter size={24} /></a>
                            <a href="https://www.linkedin.com/in/areeb-abdul-ghani-aaa46a1b7/" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
