import React, { useState, useEffect } from 'react';

const Header = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            // Sticky Header class toggling
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Scrollspy active section highlighting
            const sections = ['home', 'about', 'services', 'why-choose-us', 'projects', 'gallery', 'contact'];
            const scrollPosition = window.scrollY + 150; // offset for sticky header

            for (const sectionId of sections) {
                const section = document.getElementById(sectionId);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Run once on load to highlight correct section
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };

    const handleNavLinkClick = (e, targetId) => {
        setMobileNavOpen(false);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            e.preventDefault();
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            {/* Top Bar */}
            <div className="top-bar">
                <div className="container top-bar-content">
                    <div className="contact-info">
                        <a href="tel:6394332008"><i className="fas fa-phone-alt"></i> +91 6394332008</a>
                        <a href="tel:7007333768"><i className="fas fa-phone-alt"></i> +91 7007333768</a>
                        <a href="mailto:Shobhitpal5035@gmail.com"><i class="fas fa-envelope"></i> Shobhitpal5035@gmail.com</a>
                        <a href="https://maps.google.com/?q=Opposite+PNB+Bank+Pipalgaon+Prayagraj"
                           target="_blank"
                            rel="noopener noreferrer"> <i className="fas fa-map-marker-alt"></i> Opposite PNB Bank, Pipalgaon, Prayagraj</a>
                    </div>
                    <div className="social-links">
                        <a href="https://www.facebook.com/share/1BLTHSVk6h/?mibextid=wwXIfr" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/thekedar_saheb?igsh=MThyaGdzbDA5emdkeA%3D%3D&utm_source=qr" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                        <a href="https://wa.me/916394332008" target="_blank" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>

            {/* Header / Navbar */}
            <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container navbar-container">
                    <a href="#home" onClick={(e) => handleNavLinkClick(e, 'home')} className="logo-area">
                        <img src="assets/logo.jpg" alt="Shiv Construction Logo" className="nav-logo" />
                        <div className="logo-text">
                            <span className="brand-name">SHIV CONSTRUCTION</span>
                            <span className="brand-tagline">WE BUILD YOUR DREAMS</span>
                        </div>
                    </a>

                    {/* Mobile Nav Toggle */}
                    <button 
                        className={`mobile-nav-toggle ${mobileNavOpen ? 'open' : ''}`} 
                        aria-label="Toggle navigation menu"
                        onClick={toggleMobileNav}
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>

                    {/* Navigation Menu */}
                    <nav className={`nav-menu ${mobileNavOpen ? 'open' : ''}`}>
                        <ul>
                            <li>
                                <a 
                                    href="#home" 
                                    className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                                    onClick={(e) => handleNavLinkClick(e, 'home')}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#about" 
                                    className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                                    onClick={(e) => handleNavLinkClick(e, 'about')}
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#services" 
                                    className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
                                    onClick={(e) => handleNavLinkClick(e, 'services')}
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#why-choose-us" 
                                    className={`nav-link ${activeSection === 'why-choose-us' ? 'active' : ''}`}
                                    onClick={(e) => handleNavLinkClick(e, 'why-choose-us')}
                                >
                                    Why Choose Us
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#projects" 
                                    className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                                    onClick={(e) => handleNavLinkClick(e, 'projects')}
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#gallery" 
                                    className={`nav-link ${activeSection === 'gallery' ? 'active' : ''}`}
                                    onClick={(e) => handleNavLinkClick(e, 'gallery')}
                                >
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#contact" 
                                    className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                                    onClick={(e) => handleNavLinkClick(e, 'contact')}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
