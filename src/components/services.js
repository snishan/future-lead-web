import React from 'react';
import '../App.css';
import service1 from '../images/service/computer-repair.webp';
import service2 from '../images/service/hardware.jpeg';
import service3 from '../images/service/software.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
export default class Services extends React.Component {

    render() {
        return (
            <div className="mb-5">
                <div className="container">
                    <div className="row container add-mobile-padding">
                        <div className="col-sm-6 mt-sm-5">
                            <div className="row mt-sm-5">
                                <div data-aos-duration="1000" className="col-2 col-sm-1">
                                    <span><hr className="slash"></hr></span>
                                </div>
                                <div className="col-6 col-sm-11">
                                    <p data-aos-duration="1000" className="about-topic"> WHAT WE DO</p>
                                </div>
                            </div>
                            <div className="row">
                                <p data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="about-sub-topic add-margin-about-sub">OUR <span className="yellow-colour">SERVICES</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="row container  mt-sm-5 ">
                        <div className="col-sm-4 ">
                            <div className="card card-custom-height">
                                <img className="service-img" src={service1} alt="service"></img>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p className="service-card-topic ml-2">PC & LAPTOP SERVICES</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <ul className="service-points">
                                            <li>PC tune-up</li>
                                            <li>Remove all internal dust</li>
                                            <li>Hardware Troubleshooting and Installs</li>
                                            <li>Software Troubleshooting and Installs</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 ">
                            <div className="card card-custom-height">
                                <img className="service-img" src={service2} alt="service"></img>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p className="service-card-topic ml-2">HARDWARE SERVICES</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <ul className="service-points">
                                            <li>Laptop LCD Screen & Backlight Replacement.</li>
                                            <li>Keyboard Replacement.</li>
                                            <li>Motherboard Replacement.</li>
                                            <li>Connection wires replacement.</li>
                                            <li>AC Adapter & Battery Replacement.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card card-custom-height">
                                <img className="service-img" src={service3} alt="service"></img>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p className="service-card-topic ml-2">SOFTWARE SERVICES</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <ul className="service-points">
                                            <li>PC operating system installation.</li>
                                            <li>Operating System Updates.</li>
                                            <li>Repair system issues caused by the virus.</li>
                                            <li>Install or update internet security software.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    };
};



