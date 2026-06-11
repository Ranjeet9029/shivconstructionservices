import React from 'react';

const Testimonials = () => {
    const testimonialsData = [
        {
            name: "Rajesh Mishra",
            role: "Home Owner, Jhalwa",
            rating: 5,
            quote: "I hired Shiv Construction for the shuttering work and slab casting of my duplex. They did a phenomenal job. The wood support structure was incredibly stable, and the slab is perfectly leveled. Highly recommended!",
            delay: "100"
        },
        {
            name: "Anand Sen",
            role: "Flat Owner, Civil Lines",
            rating: 5,
            quote: "Their interior design team turned my empty flat into a luxury apartment. The fall ceiling designs with LED channels and the TV cabinet laminations look very premium. The painting finish is spotless.",
            delay: "200"
        },
        {
            name: "Kamlesh Yadav",
            role: "Contractor, Pipalgaon",
            rating: 5,
            quote: "Excellent service! They supplied the sand and cement directly to my site at very competitive rates compared to local dealers. They also handled the complete plumbing and tiling work for my office complex.",
            delay: "300"
        }
    ];

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(<i key={i} className="fas fa-star"></i>);
            } else if (i === fullStars && hasHalfStar) {
                stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
            } else {
                stars.push(<i key={i} className="far fa-star"></i>); // just in case
            }
        }
        return stars;
    };

    return (
        <section className="testimonials-section section-padding bg-light">
            <div className="container">
                <div className="section-title-wrapper text-center">
                    <span className="section-subtitle">Client Reviews</span>
                    <h2 className="section-title">What Our Clients Say</h2>
                    <span className="title-decor mx-auto"></span>
                    <p className="section-description">
                        Client satisfaction is our ultimate metric of success. Read
                        recommendations from real property owners in Prayagraj.
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonialsData.map((testimonial, index) => (
                        <div 
                            key={index} 
                            className="testimonial-card" 
                            data-aos="fade-up" 
                            data-aos-delay={testimonial.delay}
                        >
                            <div className="quote-icon"><i className="fas fa-quote-right"></i></div>
                            <div className="rating">
                                {renderStars(testimonial.rating)}
                            </div>
                            <p className="client-quote">"{testimonial.quote}"</p>
                            <div className="client-info">
                                <div className="client-details">
                                    <h4 className="client-name">{testimonial.name}</h4>
                                    <span className="client-subtitle">{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
