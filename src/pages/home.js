import React, { Component } from 'react';
import AboutUsSection from "../components/home/AboutUsSection";
import ServicesSection from "../components/home/ServicesSection"
import TestimonialsSection from "../components/home/TestimonialsSection";

class home extends Component {
    render() {
        return (
            <div>
                <AboutUsSection />
                <ServicesSection />
                <TestimonialsSection />
            </div>
        )
    }
}

export default home;