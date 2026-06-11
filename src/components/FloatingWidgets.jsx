import React, { useState, useEffect } from 'react';

const FloatingWidgets = () => {
    const [scrollTopActive, setScrollTopActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setScrollTopActive(true);
            } else {
                setScrollTopActive(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {/* WhatsApp Floating Button */}
            <a 
                href="https://wa.me/916394332008?text=Hello%20Shiv%20Construction,%20I%20visited%20your%20website%20and%20want%20to%20inquire%20about%20your%20services."
                target="_blank" 
                rel="noopener noreferrer"
                className="whatsapp-float" 
                aria-label="Chat on WhatsApp"
            >
                <span className="tooltip-text">Chat with Us</span>
                <i className="fab fa-whatsapp"></i>
                <span className="pulsing-badge"></span>
            </a>

            {/* Sticky Mobile Call CTA Bar */}
            <div className="mobile-cta-bar">
                <a href="tel:6394332008" className="m-cta-btn m-cta-call">
                    <i className="fas fa-phone-alt"></i> Call Now
                </a>
                <a 
                    href="https://wa.me/916394332008?text=Hello%20Shiv%20Construction,%20I%20am%20interested%20in%20a%20free%20consultation."
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="m-cta-btn m-cta-wa"
                >
                    <i className="fab fa-whatsapp"></i> WhatsApp
                </a>
            </div>

            {/* Scroll To Top Button */}
            <button 
                className={`scroll-to-top ${scrollTopActive ? 'active' : ''}`} 
                id="scrollTopBtn" 
                aria-label="Scroll to top"
                onClick={scrollToTop}
            >
                <i className="fas fa-arrow-up"></i>
            </button>
        </>
    );
};

export default FloatingWidgets;
