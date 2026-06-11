import React from 'react';

const WhyChooseUs = () => {
    const features = [
        {
            icon: "fas fa-user-tie",
            title: "Experienced Team",
            desc: "Our engineers, masonry workers, and interior designers are certified professionals with years of experience."
        },
        {
            icon: "fas fa-gem",
            title: "Quality Materials",
            desc: "We strictly utilize certified cement, high-tensile steel, and top-tier materials to ensure structure durability."
        },
        {
            icon: "fas fa-rupee-sign",
            title: "Affordable Pricing",
            desc: "Get premium structures and high-end finishings with custom quotations fitting your budget limitations."
        },
        {
            icon: "fas fa-clock",
            title: "Timely Delivery",
            desc: "We value deadlines. Project stages are scheduled strictly to deliver the final key on time."
        },
        {
            icon: "fas fa-heart",
            title: "Customer Satisfaction",
            desc: "Our clients are our family. We involve you in every key decision and provide transparency."
        },
        {
            icon: "fas fa-shield-alt",
            title: "Professional Workmanship",
            desc: "Precise plaster levels, aligned tiling layout, robust wiring, and neat finishes distinguish our work."
        }
    ];

    return (
        <section id="why-choose-us" className="why-section section-padding">
            <div className="container">
                <div className="why-wrapper">
                    {/* Content Column */}
                    <div className="why-content" data-aos="fade-right" data-aos-duration="800">
                        <div className="section-title-wrapper">
                            <span className="section-subtitle">Our Advantages</span>
                            <h2 className="section-title">Why Choose Shiv Construction</h2>
                            <span className="title-decor"></span>
                            <p className="why-lead-desc">
                                With over 5 years of experience in Prayagraj, we ensure that every
                                brick laid is a testament to our strength and dedication.
                            </p>
                        </div>

                        <div className="why-features-grid">
                            {features.map((feature, index) => (
                                <div key={index} className="why-feature-item">
                                    <div className="feature-icon"><i className={feature.icon}></i></div>
                                    <div className="feature-text">
                                        <h3>{feature.title}</h3>
                                        <p>{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="why-images" data-aos="fade-left" data-aos-duration="800">
                        <img 
                            src="assets/services_poster.jpg" 
                            alt="Shiv Construction Work Poster and Services"
                            className="img-responsive poster-img-choose" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
