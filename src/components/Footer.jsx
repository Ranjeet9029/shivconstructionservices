import React from 'react';

const Footer = () => {
    const handleFooterLinkClick = (e, targetId) => {
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
        <footer className="main-footer">
            <div className="footer-top">
                <div className="container footer-grid">
                    {/* Column 1: Brand */}
                    <div className="footer-col brand-col">
                        <div className="footer-logo-wrapper">
                            <img src="assets/logo.jpg" alt="Shiv Construction Logo Footer" className="footer-logo" />
                            <div>
                                <span className="footer-brand-name">SHIV CONSTRUCTION</span>
                                <span className="footer-brand-tagline">WE BUILD YOUR DREAMS</span>
                            </div>
                        </div>
                        <p className="footer-brand-desc">
                            Prayagraj's trusted civil contractor providing home shuttering,
                            high-quality building material supply, and premium interior decor layout designs since 5+ years.
                        </p>
                        <div className="footer-socials">
                            <a href="https://www.facebook.com/share/1BLTHSVk6h/?mibextid=wwXIfr" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/thekedar_saheb?igsh=MThyaGdzbDA5emdkeA%3D%3D&utm_source=qr" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                            <a href="https://wa.me/916394332008" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="footer-col links-col">
                        <h3 className="footer-title">Quick Links</h3>
                        <ul>
                            <li><a href="#home" onClick={(e) => handleFooterLinkClick(e, 'home')}>Home</a></li>
                            <li><a href="#about" onClick={(e) => handleFooterLinkClick(e, 'about')}>About Us</a></li>
                            <li><a href="#services" onClick={(e) => handleFooterLinkClick(e, 'services')}>Our Services</a></li>
                            <li><a href="#why-choose-us" onClick={(e) => handleFooterLinkClick(e, 'why-choose-us')}>Why Choose Us</a></li>
                            <li><a href="#projects" onClick={(e) => handleFooterLinkClick(e, 'projects')}>Projects</a></li>
                            <li><a href="#gallery" onClick={(e) => handleFooterLinkClick(e, 'gallery')}> Gallery</a></li>
                            <li><a href="#contact" onClick={(e) => handleFooterLinkClick(e, 'contact')}>Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="footer-col services-col">
                        <h3 className="footer-title">Our Services</h3>
                        <ul>
                            <li><a href="#services" onClick={(e) => handleFooterLinkClick(e, 'services')}>Home Shuttering</a></li>
                            <li><a href="#services" onClick={(e) => handleFooterLinkClick(e, 'services')}>Building Materials Supply</a></li>
                            <li><a href="#services" onClick={(e) => handleFooterLinkClick(e, 'services')}>House Blueprint & Plans</a></li>
                            <li><a href="#services" onClick={(e) => handleFooterLinkClick(e, 'services')}>Interior Design Work</a></li>
                            <li><a href="#services" onClick={(e) => handleFooterLinkClick(e, 'services')}>Tiling & Flooring Work</a></li>
                            <li><a href="#services" onClick={(e) => handleFooterLinkClick(e, 'services')}>POP & Fall Ceiling</a></li>
                            <li><a href="#services" onClick={(e) => handleFooterLinkClick(e, 'services')}>Plumbing & Electrical</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="footer-col contact-col">
                        <h3 className="footer-title">Contact Info</h3>
                        <ul className="footer-contact-list">
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>IIIT Hockey Chauraha Opposite PNB Bank, Pipalgaon, Prayagraj, UP, India</span>
                            </li>
                            <li>
                                <i className="fas fa-phone-alt"></i>
                                <span>
                                    <a href="tel:6394332008">+91 6394332008</a><br />
                                    <a href="tel:7007333768">+91 7007333768</a>
                                </span>
                            </li>
                            <li>
                                <i className="fab fa-whatsapp"></i>
                                <span><a href="https://wa.me/916394332008" target="_blank" rel="noopener noreferrer">Chat: +91 6394332008</a></span>
                            </li>
                            <li>
                                <i className="fas fa-envelope"></i>
                                <span><a href="mailto:Shobhitpal5035@gmail.com">Shobhitpal5035@gmail.com</a></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container footer-bottom-content">
                    <p>&copy; 2026 SHIV CONSTRUCTION. All Rights Reserved.</p>
                    <p>Designed with <i className="fas fa-heart text-red"></i> for Shiv Construction</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
