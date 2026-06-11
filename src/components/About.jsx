import React from 'react';

const About = () => {
    return (
        <section id="about" className="about-section section-padding">
            <div className="container">
                <div className="about-wrapper">
                    {/* Images Column */}
                    <div className="about-images" data-aos="fade-right" data-aos-duration="800">
                        <div className="image-box primary-box">
                            <img 
                                src="assets/office_front_day.jpg" 
                                alt="Shiv Construction Office Exterior"
                                className="img-responsive main-about-img" 
                            />
                        </div>
                        <div className="image-box secondary-box" data-aos="fade-up" data-aos-delay="200">
                            <img 
                                src="assets/office_front_night.jpg" 
                                alt="Shiv Construction Office Night View"
                                className="img-responsive sub-about-img" 
                            />
                        </div>
                        <div className="experience-badge">
                            <span className="exp-years">5+</span>
                            <span className="exp-text">Years of Quality Service</span>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="about-content" data-aos="fade-left" data-aos-duration="800">
                        <div className="section-title-wrapper">
                            <span className="section-subtitle">Who We Are</span>
                            <h2 className="section-title">SHIV CONSTRUCTION</h2>
                            <span className="title-decor"></span>
                        </div>
                        <p className="about-lead">
                            Shiv Construction is a trusted construction company in Prayagraj providing
                            complete building, structural, and interior solutions.
                        </p>
                        <p className="about-text">
                            We specialize in home shuttering, building materials, house planning,
                            electrical works, plumbing, POP ceiling, painting, tiling, roofing, welding, and interior design
                            services. Our mission is to deliver quality workmanship, timely completion, and customer
                            satisfaction.
                        </p>

                        <div className="about-highlights">
                            <div className="highlight-item">
                                <i className="fas fa-check-circle"></i>
                                <div>
                                    <h4>Premium Structural Planning</h4>
                                    <p>Building layouts and designs tailored for strength and luxury.</p>
                                </div>
                            </div>
                            <div className="highlight-item">
                                <i className="fas fa-check-circle"></i>
                                <div>
                                    <h4>Complete Turnkey Solutions</h4>
                                    <p>From foundation laying to final interior paint coats, all under one roof.</p>
                                </div>
                            </div>
                        </div>

                        <div className="about-btn-group">
                            <a href="#contact" className="btn btn-primary">Contact Us Now</a>
                            <a href="#services" className="btn-text">Explore Our Services <i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
