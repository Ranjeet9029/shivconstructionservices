import React from 'react';

const Services = () => {
    const servicesData = [
        {
            icon: "fas fa-hard-hat",
            title: "Home Shuttering",
            desc: "Premium formwork and support systems using strong wooden slabs and iron pillars for structural stability during concrete slab casting.",
            link: "https://wa.me/916394332008?text=I%20am%20interested%20in%20Home%20Shuttering%20services.",
            delay: "50"
        },
        {
            icon: "fas fa-truck-loading",
            title: "Building Materials",
            desc: "Supply of highest-grade sand, bricks, cement, aggregate, and reinforced steel bars directly to your construction site.",
            link: "https://wa.me/916394332008?text=I%20am%20interested%20in%20Building%20Materials%20supply.",
            delay: "100"
        },
        {
            icon: "fas fa-drafting-compass",
            title: "House & Building Plan",
            desc: "Custom 2D/3D building mapping, structural layouts, and civil blueprints optimized for local building permissions and Vastu.",
            link: "https://wa.me/916394332008?text=I%20am%20interested%20in%20House%20and%20Building%20Planning%20services.",
            delay: "150"
        },
        {
            icon: "fas fa-bolt",
            title: "Electrical Works",
            desc: "Complete concealed wall wiring, distribution board installations, fitting of premium fixtures, and structural electrical planning.",
            link: "https://wa.me/916394332008?text=I%20am%20interested%20in%20Electrical%20Works.",
            delay: "200"
        },
        {
            icon: "fas fa-couch",
            title: "Interior Design",
            desc: "Bespoke spatial design, false ceilings, luxury wall finishings, customized wood furnishing, and ergonomic modular kitchens.",
            link: "https://wa.me/916394332008?text=I%20am%20interested%20in%20Interior%20Design%20services.",
            delay: "250"
        },
        {
            icon: "fas fa-faucet-drip",
            title: "Borehole / Drilling",
            desc: "Professional boring and deep tube-well drilling services for uninterrupted household water supply with motor installations.",
            link: "https://wa.me/916394332008?text=I%20am%20interested%20in%20Borehole%20or%20Drilling%20services.",
            delay: "300"
        },
        {
            icon: "fas fa-paint-roller",
            title: "POP & Fall Ceiling",
            desc: "Designer Plaster of Paris moldings, modern suspended gypsum board false ceilings, and ambient LED cove lighting fittings.",
            link: "https://wa.me/916394332008?text=I%20am%20interested%20in%20POP%20and%20Fall%20Ceiling%20works.",
            delay: "350"
        },
        {
            icon: "fas fa-tools",
            title: "Plumbing Work",
            desc: "Heavy-duty CPVC/PVC pipeline routing, bathroom sanitary ware fittings, overhead tank setups, and drainage line management.",
            link: "https://wa.me/916394332008?text=I%20am%20interested%20in%20Plumbing%20Work.",
            delay: "400"
        },
        {
            icon: "fas fa-brush",
            title: "Painting Work",
            desc: "Professional interior and exterior painting including wall putty coating, primer application, texture paints, and premium finishes.",
            link: "https://wa.me/916394332008?text=I%20am%20interested%20in%20Painting%20Work.",
            delay: "450"
        },
        {
            icon: "fas fa-border-all",
            title: "Tiling Work",
            desc: "Flawless laying of vitrified floor tiles, Italian marble, granite kitchen platforms, bathroom wall tiles, and outdoor parking tiles.",
            link: "https://wa.me/916394332008?text=I%20am%20interested%20in%20Tiling%20Work.",
            delay: "500"
        },
        {
            icon: "fas fa-fire",
            title: "Welding & Fabrication",
            desc: "Fabrication of heavy-duty iron main gates, window grills, safety railings, structural steel framework, and security shuttering.",
            link: "https://wa.me/916394332008?text=I%20am%20interested%20in%20Welding%20and%20Fabrication%20Work.",
            delay: "550"
        },
        {
            icon: "fas fa-home",
            title: "Home Planning",
            desc: "Expert consultations on space utilization, ventilation layouts, soil inspection review, and future expansion planning blueprints.",
            link: "https://wa.me/916394332008?text=I%20am%20interested%20in%20Home%20Planning%20consultations.",
            delay: "600"
        },
        {
            icon: "fas fa-industry",
            title: "House Roofing",
            desc: "Design and implementation of tin roofs, tin-shed structures, waterproof concrete roofs, and structural truss roof support systems.",
            link: "https://wa.me/916394332008?text=I%20am%20interested%20in%20House%20Roofing%20services.",
            delay: "650"
        },
        {
            icon: "fas fa-door-open",
            title: "Interior Finishes",
            desc: "Lamination work, flush door installations, window frame fixtures, modular cupboards, and custom wooden room dividers.",
            link: "https://wa.me/916394332008?text=I%20am%20interested%20in%20Interior%20Finish%20work.",
            delay: "700"
        }
    ];

    return (
        <section id="services" className="services-section section-padding bg-light">
            <div className="container">
                <div className="section-title-wrapper text-center">
                    <span className="section-subtitle">Our Specializations</span>
                    <h2 className="section-title">Professional Construction Services</h2>
                    <span className="title-decor mx-auto"></span>
                    <p className="section-description">
                        We provide a wide array of residential, commercial, and structural
                        services in Prayagraj with the highest engineering standards.
                    </p>
                </div>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div 
                            key={index} 
                            className="service-card" 
                            data-aos="fade-up" 
                            data-aos-delay={service.delay}
                        >
                            <div className="service-icon"><i className={service.icon}></i></div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.desc}</p>
                            <a 
                                href={service.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="service-link"
                            >
                                Inquire Now <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
