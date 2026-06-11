import React, { useEffect } from 'react';
import AOS from 'aos';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';

// We empty App.css, styling comes from index.css (original style.css)
import './App.css';

function App() {
    useEffect(() => {
        // Initialize AOS (Animate on Scroll)
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
            delay: 50
        });
    }, []);

    return (
        <>
            <Header />
            <Hero />
            <About />
            <Services />
            <WhyChooseUs />
            <Projects />
            <Gallery />
            <Testimonials />
            <Contact />
            <Footer />
            <FloatingWidgets />
        </>
    );
}

export default App;
