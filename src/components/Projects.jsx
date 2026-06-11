import React from 'react';

const Projects = () => {
    const projectsData = [
        {
            image: "assets/completed_house.jpg",
            status: "Completed",
            statusClass: "completed",
            category: "Residential Construction",
            title: "Premium 2-Story Residential Duplex",
            desc: "Complete construction of a modern residential duplex featuring premium exterior finishes, custom gate fabrication, and contemporary architectural design.",
            location: "Jhalwa, Prayagraj",
            delay: "100"
        },
        {
            image: "assets/office_cabin.jpg",
            status: "Completed",
            statusClass: "completed",
            category: "Interior Design & POP",
            title: "Executive Office Cabin Interior",
            desc: "Premium office interior featuring custom wall paneling, elegant reception design, decorative lighting, and a professional workspace layout.",
            location: "pipalgaon,Prayagraj",
            delay: "200"
        },
        {
            image: "assets/foundation_site_work.jpg",
            status: "Ongoing",
            statusClass: "ongoing",
            category: "COMMERCIAL CONSTRUCTION",
            title: "Structural Site Preparation",
            desc: "Excavation, foundation marking, column reinforcement, and shuttering setup for a modern commercial building project currently under development in Prayagraj.",
            location: "pipalgaon, Prayagraj",
            delay: "300"
        },
        {
            image: "assets/building_banner_hindi.jpg",
            status: "Completed",
            statusClass: "completed",
            category: "RESIDENTIAL CONSTRUCTION",
            title: "Complete House Construction Project",
            desc: "Complete residential house construction from foundation to finishing, including structural work, masonry, roofing, electrical, plumbing, painting, and final exterior finishing.",
            location: "Pipalgaon, Prayagraj",
            delay: "400"
        }
    ];

    return (
        <section id="projects" className="projects-section section-padding bg-light">
            <div className="container">
                <div className="section-title-wrapper text-center">
                    <span className="section-subtitle">Our Work Folio</span>
                    <h2 className="section-title">Completed & Ongoing Projects</h2>
                    <span className="title-decor mx-auto"></span>
                    <p className="section-description">
                        Take a look at some of our landmark structural layouts, shuttering
                        setups, and interior projects around Prayagraj.
                    </p>
                </div>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div 
                            key={index} 
                            className="project-card" 
                            data-aos="fade-up" 
                            data-aos-delay={project.delay}
                        >
                            <div className="project-img-wrapper">
                                <img src={project.image} alt={project.title} className="project-img" />
                                <span className={`project-badge ${project.statusClass}`}>{project.status}</span>
                            </div>
                            <div className="project-info">
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.desc}</p>
                                <div className="project-footer">
                                    <span><i className="fas fa-map-marker-alt"></i> {project.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
