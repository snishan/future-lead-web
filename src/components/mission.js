import React from 'react';
import '../App.css';
import mission from '../images/mission.svg';
import vision from '../images/vision.svg';
import capacity from '../images/capacity.svg';
import icon1 from './../images/logoIcons/acer.png';
import icon2 from './../images/logoIcons/asus.png';
import icon3 from './../images/logoIcons/dell.png';
import icon4 from './../images/logoIcons/hp.png';
import icon5 from './../images/logoIcons/lenovo.png';
import icon6 from './../images/logoIcons/lg.png';
import icon7 from './../images/logoIcons/sony.png';
import icon8 from './../images/logoIcons/toshiba.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

var Carousel = require('react-responsive-carousel').Carousel;

export default class Mission extends React.Component {

    render() {
        return (
            <div className="">
                <div className="row p-0 m-0">
                    <div className="col-sm-4 mission-all-tab tab-black">
                        <div className="row m-xl-0">
                            <div className="col-sm-12 ml-xl-1">
                                <img className="mission-icon-tab" src={mission} alt="mission-img"></img>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-sm-12">
                                <p data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="about-sub-topic text-light sub-topic-tab">OUR <span className="yellow-colour">MISSION</span> </p>
                            </div>
                        </div>
                        <div className="row mr-xl-4">
                            <div className="col-sm-12 ml-xl-3">
                                <p data-aos="fade-up" data-aos-duration="2500" className="mission-text text-tab">Lucent Future Lead offers a unique experience for for customers, by providing the best laptop, desktop repairing.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mission-all-tab tab-yellow">
                        <div className="row m-xl-0">
                            <div className="col-sm-12 ml-xl-1">
                                <img className="mission-icon-tab" src={vision} alt="vision-img"></img>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-sm-12">
                                <p data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="about-sub-topic sub-topic-tab">OUR <span className="text-light">VISION</span> </p>
                            </div>
                        </div>
                        <div className="row mr-xl-5">
                            <div className="col-sm-12 ml-xl-3">
                                <p data-aos="fade-up" data-aos-duration="2500" className="mission-text text-light text-tab">Our vision at Lucent Future Lead is "To provide an unique  service to every customer".</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mission-all-tab tab-black">
                        <div className="row m-xl-0">
                            <div className="col-sm-12 ml-xl-1">
                                <img className="mission-icon-tab" src={capacity} alt="capacity-img"></img>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-sm-12">
                                <p data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="about-sub-topic sub-topic-tab text-light">OUR <span className="yellow-colour">CAPACITY</span> </p>
                            </div>
                        </div>
                        <div className="row mr-xl-4">
                            <div className="col-sm-12 ml-xl-3">
                                <p data-aos="fade-up" data-aos-duration="2500" className="mission-text text-tab">We offer a wide range of service categories for you. PC & Laptop services, Hardware services, and Software services are the key categories of our service. Connect with us for these tremendous services.  </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ml-0 mr-0 mt-5 mb-5 desktop-show">
                    <Carousel autoPlay showStatus={false} interval={2000} infiniteLoop={true} showArrows={true} showThumbs={false} showIndicators={false}>
                        <>
                            <div className="row">
                                <div className="col-sm-3">
                                    <img className="about-img custom-width" src={icon1} alt="vision-img"></img>
                                </div>
                                <div className="col-sm-3">
                                    <img className="about-img custom-width" src={icon2} alt="vision-img"></img>
                                </div>
                                <div className="col-sm-3">
                                    <img className="about-img custom-width" src={icon3} alt="vision-img"></img>
                                </div>
                                <div className="col-sm-3">
                                    <img className="about-img custom-width" src={icon4} alt="vision-img"></img>
                                </div>
                            </div>
                        </>
                        <>
                            <div className="row">
                                <div className="col-sm-3">
                                    <img className="about-img custom-width" src={icon5} alt="vision-img"></img>
                                </div>
                                <div className="col-sm-3">
                                    <img className="about-img custom-width" src={icon6} alt="vision-img"></img>

                                </div>
                                <div className="col-sm-3">
                                    <img className="about-img custom-width" src={icon7} alt="vision-img"></img>
                                </div>
                                <div className="col-sm-3">
                                    <img className="about-img custom-width" src={icon8} alt="vision-img"></img>
                                </div>
                            </div>
                        </>
                    </Carousel>
                </div>
                <div className="row ml-0 mr-0 mt-5 mb-5 mobile-show">
                    <Carousel autoPlay showStatus={false} infiniteLoop={true} showArrows={true} showThumbs={false} showIndicators={false}>
                        <>
                            <div className="row">
                                <div className="col-sm-3">
                                    <img className="about-img custom-width" src={icon1} alt="vision-img"></img>
                                </div>
                            </div>
                        </>
                        <>
                            <div className="row">
                                <div className="col-sm-3">
                                    <img className="about-img custom-width" src={icon2} alt="vision-img"></img>
                                </div>
                            </div>
                        </>
                        <>
                            <div className="row">
                                <div className="col-sm-3">
                                    <img className="about-img custom-width" src={icon3} alt="vision-img"></img>
                                </div>
                            </div>
                        </>
                        <>
                            <div className="row">
                                <div className="col-sm-3">
                                    <img className="about-img custom-width" src={icon4} alt="vision-img"></img>
                                </div>
                            </div>
                        </>
                        <>
                            <div className="row">
                                <div className="col-sm-3">
                                    <img className="about-img custom-width" src={icon5} alt="vision-img"></img>
                                </div>
                            </div>
                        </>
                        <>
                            <div className="row">
                                <div className="col-sm-3">
                                    <img className="about-img custom-width" src={icon6} alt="vision-img"></img>
                                </div>
                            </div>
                        </>
                        <>
                            <div className="row">
                                <div className="col-sm-3">
                                    <img className="about-img custom-width" src={icon7} alt="vision-img"></img>
                                </div>
                            </div>
                        </>
                        <>
                            <div className="row">
                                <div className="col-sm-3">
                                    <img className="about-img custom-width" src={icon8} alt="vision-img"></img>
                                </div>
                            </div>
                        </>
                    </Carousel>
                </div>
            </div>
        )
    };
};



