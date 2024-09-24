import React, { Component } from 'react'
import DemoCarousel from './headerCarosal'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AboutUs from '../components/aboutUs';
import Mission from './mission';
import Project from './projects';
import Services from './services';
import Gallery from './gallery';
import Contact from './contact';
import HeaderImageSection from './HeaderImageSection';

export default class middleSection extends Component {
    render() {
        return (
            <>
                <div id="home" className="section-padding">
                    <HeaderImageSection></HeaderImageSection>
                </div>
                <div id="about" className="section-padding-about">
                    <AboutUs></AboutUs>
                </div>
                <div>
                    <Mission></Mission>
                </div>
                {/* <div id="project" className="section-padding">
                    <Project></Project>
                </div> */}
                <div id="service" className="section-padding">
                    <Services></Services>
                </div>
                {/* <div id="gallery" className="section-padding">
                    <Gallery></Gallery>
                </div> */}
                <div id="contact">
                    <Contact></Contact>
                </div>

            </>
        )
    }
}