import React, { useEffect, useRef } from 'react';

const Hero = () => {
    const statsSectionRef = useRef(null);

    useEffect(() => {
        const statsSection = statsSectionRef.current;
        if (!statsSection) return;

        let counted = false;

        const countUp = () => {
            const statNumbers = statsSection.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'), 10);
                const countTo = target;
                let current = 0;
                // adjust increment speed based on target value
                const increment = Math.ceil(countTo / 50);
                const intervalTime = 30; // ms

                const counter = setInterval(() => {
                    current += increment;
                    if (current >= countTo) {
                        stat.textContent = countTo;
                        clearInterval(counter);
                    } else {
                        stat.textContent = current;
                    }
                }, intervalTime);
            });
        };

        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !counted) {
                    countUp();
                    counted = true;
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        statsObserver.observe(statsSection);

        return () => {
            if (statsSection) {
                statsObserver.unobserve(statsSection);
            }
        };
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section id="home" className="hero-section">
                <div className="hero-overlay"></div>
                <div className="container hero-content-wrapper">
                    <div className="hero-content" data-aos="fade-up" data-aos-duration="1000">
                        <span className="hero-badge"><i className="fas fa-hammer"></i> Prayagraj Construction Company</span>
                        <div className="hero-brand-block">
                            <img src="assets/logo.jpg" alt="Shiv Construction Logo" className="hero-logo" />
                            <span className="hero-brand-name">SHIV CONSTRUCTION</span>
                        </div>
                        <h1 className="hero-headline">Building Dreams <br /><span className="highlight-text">Into Reality</span></h1>
                        <p className="hero-subheadline">Trusted Construction, Interior Design & House Planning Services in Prayagraj.</p>
                        <div className="hero-cta-buttons">
                            <a href="tel:6394332008" className="btn btn-primary"><i className="fas fa-phone-alt"></i> Call Now</a>
                            <a 
                                href="https://wa.me/916394332008?text=Hello%20Shiv%20Construction,%20I%20would%20like%20to%20get%20a%20free%20consultation."
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn btn-whatsapp"
                            >
                                <i className="fab fa-whatsapp"></i> WhatsApp Us
                            </a>
                        </div>
                    </div>
                </div>
                {/* Decorative Scroll Indicator */}
                <div className="scroll-indicator">
                    <span className="mouse-icon">
                        <span className="wheel"></span>
                    </span>
                    <span className="scroll-text">Scroll Down</span>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="stats-section" ref={statsSectionRef}>
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-card" data-aos="zoom-in" data-aos-delay="100">
                            <div className="stat-icon-wrapper">
                                <i className="fas fa-building"></i>
                            </div>
                            <div className="stat-info">
                                <span className="stat-number" data-target="150">0</span><span className="stat-suffix">+</span>
                                <span className="stat-label">Projects Completed</span>
                            </div>
                        </div>
                        <div className="stat-card" data-aos="zoom-in" data-aos-delay="200">
                            <div className="stat-icon-wrapper">
                                <i className="fas fa-users"></i>
                            </div>
                            <div className="stat-info">
                                <span className="stat-number" data-target="100">0</span><span className="stat-suffix">+</span>
                                <span className="stat-label">Happy Clients</span>
                            </div>
                        </div>
                        <div className="stat-card" data-aos="zoom-in" data-aos-delay="300">
                            <div className="stat-icon-wrapper">
                                <i className="fas fa-calendar-alt"></i>
                            </div>
                            <div className="stat-info">
                                <span className="stat-number" data-target="5">0</span><span class="stat-suffix">+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                        </div>
                        <div className="stat-card" data-aos="zoom-in" data-aos-delay="400">
                            <div className="stat-icon-wrapper">
                                <i className="fas fa-smile"></i>
                            </div>
                            <div className="stat-info">
                                <span className="stat-number" data-target="100">0</span><span className="stat-suffix">%</span>
                                <span className="stat-label">Customer Satisfaction</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
