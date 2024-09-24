import React from 'react';
import '../App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import images2 from '../images/image2.jfif';
import images3 from '../images/image3.jfif';
import project1 from '../images/project1.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
var Carousel = require('react-responsive-carousel').Carousel;

export default class Projects extends React.Component {

    render() {
        return (
            <div className="project-section">
                <div className="container">
                    <div className="row  add-mobile-padding">
                        <div className="col-sm-6 mt-sm-5">
                            <div className="row mt-sm-5">
                                <div data-aos="fade-right" data-aos-duration="1000" className="col-2 mt-4 col-sm-1">
                                    <span><hr className="slash"></hr></span>
                                </div>
                                <div className="col-6 mt-4 col-sm-11">
                                    <p data-aos="fade-left" data-aos-duration="1000" className="about-topic text-light">OUR WORKS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <p data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="about-sub-topic text-light project-topic add-mobile-padding">LATEST PROJECTS</p>
                        </div>
                    </div>
                </div>

                <div className="container desktop-show">
                    <div className="row">
                        <div className="">
                            <Carousel autoPlay showStatus={false} interval={1500} infiniteLoop={true} showArrows={false} showThumbs={false} showIndicators={false}>
                                <div>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <img className="project-img" src={project1} alt="project" />
                                            <p className="project-name">Corporate Design</p>
                                        </div>
                                        <div className="col-sm-4">
                                            <img src={images2} alt="project" />
                                            <p className="project-name">Commercial Design</p>
                                        </div>
                                        <div className="col-sm-4">
                                            <img src={images3} alt="project" />
                                            <p className="project-name">Residential Design</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <img src={project1} alt="project" />
                                            <p className="project-name">Corporate Design</p>
                                        </div>
                                        <div className="col-sm-4">
                                            <img src={images2} alt="project" />
                                            <p className="project-name">Commercial Design</p>
                                        </div>
                                        <div className="col-sm-4">
                                            <img src={images3} alt="project" />
                                            <p className="project-name">Residential Design</p>
                                        </div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>

                <div className="container mobile-show">
                    <div className="row offset-xl-1">
                        <div className="ml-3">
                            <Carousel showStatus={false} infiniteLoop={true} showArrows={true} showThumbs={false} showIndicators={false}>
                                <>
                                    <div className="row mb-5">
                                        <div className="col-sm-3 text-left">
                                            <img className="project-img-mobile add-mobile-padding" src={project1} alt="vision-img"></img>
                                            <p className="project-name" >Corporate Design</p>
                                        </div>
                                    </div>

                                </>
                                <>
                                    <div className="row mb-5">
                                        <div className="col-sm-3 text-left">
                                            <img className="project-img-mobile add-mobile-padding" src={images2} alt="vision-img"></img>
                                            <p className="project-name">Commercial Design</p>
                                        </div>
                                    </div>

                                </>
                                <>
                                    <div className="row mb-5">
                                        <div className="col-sm-3 text-left">
                                            <img className="project-img-mobile add-mobile-padding" src={images3} alt="vision-img"></img>
                                            <p className="project-name">Residential Design</p>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </>
                            </Carousel>
                            {/* <Carousel showStatus={false} infiniteLoop={true} showArrows={false} showThumbs={false} showIndicators={false}>
                                <>
                                    <img className="project-img-mobile" src={project1} alt="project" />
                                    <p className="project-name add-mobile-padding">Corporate Design</p>
                                </>
                                <>
                                    <img className="project-img-mobile" src={images2} alt="project" />
                                    <p className="project-name add-mobile-padding">Commercial Design</p>
                                </>
                                {/* <div>
                                    <img className="project-img-mobile" src={images3} alt="project" />
                                    <p className="project-name add-mobile-padding">Residential Design</p>
                                </div> */}

                            {/* </Carousel> */}
                        </div>
                    </div>
                </div>
            </div >
        )
    };
};



{/* <>
<div className="row">
    <div className="col-3 col-sm-12">
        <img className="project-img" src={images2} alt="project" />
        <p className="project-name add-mobile-padding">Corporate Design</p>
    </div>
</div>
</>
<>
<div className="row">
    <div className="col-3 col-sm-12">
        <img className="project-img" src={images3} alt="project" />
        <p className="project-name add-mobile-padding">Corporate Design</p>
    </div>
</div>
</> */}