import React, { useState, useEffect, useMemo } from 'react';

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const galleryItems = [
        {
            src: "assets/office_reception_brand.jpg",
            alt: "Shiv Construction circular illuminated logo sign on marbled reception wall",
            title: "Illuminated Logo & Marbled Accent Wall",
            category: "office",
            className: "tall-item"
        },
        {
            src: "assets/office_logo_glow.jpg",
            alt: "Shiv Construction Glowing Office Logo Reception Wall",
            title: "Office Reception Wall & Fluted Paneling",
            category: "finishing",
            className: "tall-item"
        },
        {
            src: "assets/completed_house.jpg",
            alt: "Completed modern 2-story house construction by Shiv Construction in Prayagraj",
            title: "Completed 2-Story Residential House",
            category: "shuttering",
            className: "tall-item"
        },
        {
            src: "assets/metal_door_fabrication.jpg",
            alt: "Newly fabricated modern steel safety door frame installed in brickwork by Shiv Construction",
            title: "Welding & Steel Door Fabrication",
            category: "shuttering",
            className: "tall-item"
        },
        {
            src: "assets/banner_installation.jpg",
            alt: "Workers hanging Shiv Construction banner on concrete site structure",
            title: "Structural Site Banner Installation",
            category: "shuttering",
            className: "tall-item"
        },
        {
            src: "assets/building_banner_hindi.jpg",
            alt: "Hindi flex banner of Shiv Construction on active construction building site",
            title: "Site Flex Banner & Brickwork",
            category: "shuttering",
            className: "tall-item"
        },
        {
            src: "assets/foundation_site_work.jpg",
            alt: "Active foundation site with standing steel rebar column pillars ready for concrete casting by Shiv Construction",
            title: "Column Foundation & Rebar Pillars",
            category: "shuttering",
            className: "tall-item"
        },
        {
            src: "assets/office_cabin.jpg",
            alt: "Shiv Construction premium office cabin and desk interior styling",
            title: "Premium Office Cabin Interior",
            category: "finishing",
            className: "tall-item"
        },
        {
            src: "assets/outdoor_signboard.jpg",
            alt: "Shiv Construction circular double-sided glow board on the street side",
            title: "Outdoor Roadside Glow Sign",
            category: "office",
            className: "tall-item"
        },
        {
            src: "assets/office_shopfront_wide.jpg",
            alt: "Shiv Construction office front exterior facade with active signage and main entrance",
            title: "Main Office Entrance View",
            category: "office",
            className: ""
        },
        {
            src: "assets/office_shopfront_close.jpg",
            alt: "Close-up of Shiv Construction main entrance sign board listing construction services",
            title: "Office Services Sign Board",
            category: "office",
            className: ""
        },
        {
            src: "assets/circular_logo_glow.jpg",
            alt: "Shiv Construction circular illuminated logo sign close-up",
            title: "Circular Brand Glow Board",
            category: "office",
            className: "tall-item"
        },
        {
            src: "assets/office_front_day.jpg",
            alt: "Shiv Construction Office Exterior Daytime",
            title: "Office Front - Day",
            category: "office",
            className: ""
        },
        {
            src: "assets/office_front_night.jpg",
            alt: "Shiv Construction Office Entrance Night View",
            title: "Office Front - Night",
            category: "office",
            className: "tall-item"
        },
        {
            src: "assets/office_door.jpg",
            alt: "Shiv Construction Office Front Glass Door",
            title: "Office Front Glass Door",
            category: "office",
            className: "tall-item"
        },
        {
            src: "assets/signboard_glow.jpg",
            alt: "Shiv Construction Glowing Signboard at Night",
            title: "Night Signboard Logo",
            category: "office",
            className: ""
        },
        {
            src: "assets/services_poster.jpg",
            alt: "Shiv Construction Official Flyer Poster",
            title: "Official Services Brochure",
            category: "office",
            className: ""
        },
        {
            src: "assets/logo.jpg",
            alt: "Shiv Construction High Quality Circular Logo",
            title: "Company Logo Badge",
            category: "office",
            className: ""
        }
    ];

    // Filter items based on active selection
    const filteredItems = useMemo(() => {
        if (activeFilter === 'all') {
            return galleryItems;
        }
        return galleryItems.filter(item => item.category === activeFilter);
    }, [activeFilter]);

    // Handle open lightbox
    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden'; // prevent page scroll
    };

    // Handle close lightbox
    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = 'auto'; // restore page scroll
    };

    // Show image at specific index in filtered array
    const showImage = (index) => {
        let newIndex = index;
        if (index < 0) {
            newIndex = filteredItems.length - 1;
        } else if (index >= filteredItems.length) {
            newIndex = 0;
        }
        setCurrentImageIndex(newIndex);
    };

    // Keyboard handlers
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!lightboxOpen) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showImage(currentImageIndex - 1);
            if (e.key === 'ArrowRight') showImage(currentImageIndex + 1);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, currentImageIndex, filteredItems]);

    return (
        <section id="gallery" className="gallery-section section-padding">
            <div className="container">
                <div className="section-title-wrapper text-center">
                    <span className="section-subtitle">Real Site Images</span>
                    <h2 className="section-title">Work Gallery</h2>
                    <span className="title-decor mx-auto"></span>
                    <p className="section-description">
                        Browse high-resolution photographs of our actual work sites, office
                        branding, and structural works.
                    </p>
                </div>

                {/* Gallery Filter Buttons */}
                <div className="gallery-filters" data-aos="fade-up">
                    <button 
                        className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('all')}
                    >
                        All Photos
                    </button>
                    <button 
                        className={`filter-btn ${activeFilter === 'office' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('office')}
                    >
                        Office & Branding
                    </button>
                    <button 
                        className={`filter-btn ${activeFilter === 'shuttering' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('shuttering')}
                    >
                        Construction & Shuttering
                    </button>
                    <button 
                        className={`filter-btn ${activeFilter === 'finishing' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('finishing')}
                    >
                        Interior & Finishing
                    </button>
                </div>

                {/* Gallery Grid */}
                <div className="gallery-grid" data-aos="fade-up" data-aos-delay="100">
                    {filteredItems.map((item, index) => (
                        <div 
                            key={item.src} 
                            className={`gallery-item ${item.className}`} 
                            onClick={() => openLightbox(index)}
                        >
                            <div className="gallery-img-container">
                                <img src={item.src} alt={item.alt} className="gallery-img" />
                                <div className="gallery-hover-overlay">
                                    <span className="zoom-icon"><i className="fas fa-search-plus"></i></span>
                                    <span className="img-title">{item.title}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Custom Lightbox Modal */}
            {lightboxOpen && filteredItems[currentImageIndex] && (
                <div 
                    id="galleryLightbox" 
                    className="lightbox-modal active"
                    onClick={(e) => {
                        // Close if clicking outside the image container
                        if (e.target.id === 'galleryLightbox' || e.target.classList.contains('lightbox-content-wrapper')) {
                            closeLightbox();
                        }
                    }}
                >
                    <span className="lightbox-close" onClick={closeLightbox}>&times;</span>
                    <div className="lightbox-content-wrapper">
                        <img 
                            className="lightbox-content" 
                            id="lightboxImage" 
                            src={filteredItems[currentImageIndex].src} 
                            alt={filteredItems[currentImageIndex].alt} 
                        />
                        <div id="lightboxCaption" className="lightbox-caption">
                            {filteredItems[currentImageIndex].title}
                        </div>
                    </div>
                    <a className="lightbox-prev" id="prevBtn" onClick={() => showImage(currentImageIndex - 1)}>&#10094;</a>
                    <a className="lightbox-next" id="nextBtn" onClick={() => showImage(currentImageIndex + 1)}>&#10095;</a>
                </div>
            )}
        </section>
    );
};

export default Gallery;
