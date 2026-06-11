import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        if (!formData.name || !formData.phone || !formData.service || !formData.message) {
            alert('Please fill out all fields.');
            return;
        }

        setIsSubmitting(true);

        // Simulate form submission (1.2s delay)
        setTimeout(() => {
            setIsSubmitting(false);
            setShowSuccessPopup(true);
            // Clear Form
            setFormData({
                name: '',
                phone: '',
                service: '',
                message: ''
            });
            console.log('Enquiry Submitted:', formData);
        }, 1200);
    };

    const closeSuccessPopup = () => {
        setShowSuccessPopup(false);
    };

    return (
        <section id="contact" className="contact-section section-padding">
            <div className="container">
                <div className="section-title-wrapper text-center">
                    <span className="section-subtitle">Get In Touch</span>
                    <h2 className="section-title">Contact Us Today</h2>
                    <span className="title-decor mx-auto"></span>
                    <p className="section-description">
                        Do you have an upcoming project or need a budget estimate? Fill out the
                        form or reach out directly to visit our office.
                    </p>
                </div>

                <div className="contact-wrapper">
                    {/* Contact Info Column */}
                    <div className="contact-info-col" data-aos="fade-right">
                        <div className="contact-info-card">
                            <h3 className="contact-card-title">Shiv Construction</h3>
                            <p className="contact-card-lead">
                                Visit our office opposite Punjab National Bank near IIIT Chauraha
                                for a face-to-face consultation.
                            </p>

                            <div className="info-list">
                                <div className="info-item">
                                    <div className="info-icon"><i className="fas fa-map-marker-alt"></i></div>
                                    <div className="info-text">
                                        <h4>Office Address</h4>
                                        <p>IIIT Hockey Chauraha Opposite PNB Bank,<br />Pipalgaon, Prayagraj, Uttar Pradesh, India</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon"><i className="fas fa-phone-alt"></i></div>
                                    <div className="info-text">
                                        <h4>Phone Numbers</h4>
                                        <p><a href="tel:6394332008">+91 6394332008</a></p>
                                        <p><a href="tel:7007333768">+91 7007333768</a></p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon"><i className="fab fa-whatsapp"></i></div>
                                    <div className="info-text">
                                        <h4>WhatsApp Support</h4>
                                        <p><a href="https://wa.me/916394332008" target="_blank" rel="noopener noreferrer">Chat with us on +91 6394332008</a></p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon"><i className="fas fa-envelope"></i></div>
                                    <div className="info-text">
                                        <h4>Email Address</h4>
                                        <p><a href="mailto:Shobhitpal5035@gmail.com">Shobhitpal5035@gmail.com</a></p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon"><i className="fas fa-clock"></i></div>
                                    <div className="info-text">
                                        <h4>Business Hours</h4>
                                        <p>Monday to Sunday: 8:00 AM – 8:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Column */}
                    <div className="contact-form-col" data-aos="fade-left">
                        <form id="contactForm" className="contact-form" onSubmit={handleFormSubmit}>
                            <h3 className="form-title">Send a Message</h3>

                            <div className="form-row">
                                <div className="form-group floating-group">
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        className="form-control" 
                                        required 
                                        placeholder=" "
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor="name">Your Name</label>
                                </div>
                                <div className="form-group floating-group">
                                    <input 
                                        type="tel" 
                                        id="phone" 
                                        name="phone" 
                                        className="form-control" 
                                        required 
                                        placeholder=" "
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor="phone">Phone Number</label>
                                </div>
                            </div>

                            <div className="form-group floating-group">
                                <select 
                                    id="service" 
                                    name="service" 
                                    className="form-control select-control" 
                                    required
                                    value={formData.service}
                                    onChange={handleInputChange}
                                >
                                    <option value="" disabled hidden>Select Service Needed</option>
                                    <option value="Home Shuttering">Home Shuttering</option>
                                    <option value="Building Materials">Building Materials</option>
                                    <option value="House & Building Plan">House & Building Plan</option>
                                    <option value="Electrical Works">Electrical Works</option>
                                    <option value="Interior Design">Interior Design</option>
                                    <option value="Plumbing Work">Plumbing Work</option>
                                    <option value="Painting Work">Painting & Finishing</option>
                                    <option value="Tiling Work">Tiling Work</option>
                                    <option value="Welding & Fabrication">Welding & Fabrication</option>
                                    <option value="Other">Other Services</option>
                                </select>
                            </div>

                            <div className="form-group floating-group">
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    className="form-control text-control" 
                                    rows="5" 
                                    required
                                    placeholder=" "
                                    value={formData.message}
                                    onChange={handleInputChange}
                                ></textarea>
                                <label htmlFor="message">Describe your construction/service requirements...</label>
                            </div>

                            <button 
                                type="submit" 
                                className="btn btn-primary btn-block"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <i className="fas fa-spinner fa-spin"></i> Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Enquiry <i className="fas fa-paper-plane"></i>
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Success Modal PopUp */}
                        <div id="formSuccessPopup" className={`success-popup ${showSuccessPopup ? 'active' : ''}`}>
                            <div className="success-popup-content">
                                <div className="success-icon"><i className="fas fa-check-circle"></i></div>
                                <h3>Enquiry Sent Successfully!</h3>
                                <p>Thank you for contacting Shiv Construction. We will get back to you within 24 hours.</p>
                                <button id="closeSuccessBtn" className="btn btn-primary" onClick={closeSuccessPopup}>Okay</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Google Map Embed */}
                <div className="map-container" data-aos="fade-up">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.208754129524!2d81.7681498!3d25.4312693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398ffd160db1e089%3A0xc3b827de5a452cf5!2sIIIT%20Hockey%20Chauraha!5e0!3m2!1sen!2sin!4v1717088192345!5m2!1sen!2sin"
                        width="100%" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Shiv Construction Location Map opposite PNB Bank Pipalgaon Prayagraj"
                    >
                    </iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;
