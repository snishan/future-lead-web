import React from 'react';
import '../App.css';
import hero from '../images/hero1.png'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import images1 from '../images/image1.jfif';
import images2 from '../images/image2.jfif';
import images3 from '../images/image3.jfif';
import myproject1 from '../images/gallery/myproject1.png';
import myproject2 from '../images/gallery/myproject2.png';
import myproject3 from '../images/gallery/myproject3.png';
import myproject4 from '../images/gallery/myproject4.png';
import myproject5 from '../images/gallery/myproject5.png';
import myproject6 from '../images/gallery/myproject6.png';
import myproject7 from '../images/gallery/myproject7.png';
import myproject8 from '../images/gallery/myproject8.png';
import myproject9 from '../images/gallery/myproject9.png';
import myproject10 from '../images/gallery/myproject10.png';
import myproject11 from '../images/gallery/myproject11.png';
import myproject12 from '../images/gallery/myproject12.png';
import myproject13 from '../images/gallery/myproject13.png';
import myproject14 from '../images/gallery/myproject14.png';
import myproject15 from '../images/gallery/myproject15.png';
import myproject16 from '../images/gallery/myproject16.png';
import myproject17 from '../images/gallery/myproject17.png';
import myproject18 from '../images/gallery/myproject18.png';
import myproject19 from '../images/gallery/myproject19.png';
import myproject20 from '../images/gallery/myproject20.png';
import myproject21 from '../images/gallery/myproject21.png';
import myproject22 from '../images/gallery/myproject22.png';
import myproject23 from '../images/gallery/myproject23.png';
import myproject24 from '../images/gallery/myproject24.png';
import myproject25 from '../images/gallery/myproject25.png';
import myproject26 from '../images/gallery/myproject26.png';
import myproject27 from '../images/gallery/myproject27.png';
import myproject28 from '../images/gallery/myproject28.png';
import myproject29 from '../images/gallery/myproject29.png';
import myproject30 from '../images/gallery/myproject30.png';
import myproject31 from '../images/gallery/myproject31.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

var Carousel = require('react-responsive-carousel').Carousel;

export default class Gallery extends React.Component {

    render() {
        return (
            <div className="project-section gallery-height">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 mt-sm-5 ">
                            <div className="row mt-sm-5 mt-5 add-mobile-padding">
                                <div data-aos="fade-right" data-aos-duration="1000" className="col-2 col-sm-1">
                                    <span><hr className="slash"></hr></span>
                                </div>
                                <div className="col-6 col-sm-11">
                                    <p data-aos="fade-left" data-aos-duration="1000" className="about-topic text-light">PORTFOLIO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 ">
                            <p data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="about-sub-topic text-light project-topic add-mobile-padding">OUR GALLERY</p>
                        </div>
                    </div>
                </div>

                <div className="container  desktop-show">
                    <div className="row">
                        <div className="">
                            <Carousel autoPlay showStatus={false} interval={1500} infiniteLoop={true} showArrows={false} centerMode={true} centerSlidePercentage={55} stopOnHover={false} dynamicHeight={false} showIndicators={false}>
                                <div>
                                    <img className="gallery-img" src={myproject1} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject2} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject3} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject4} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject5} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject6} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject7} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject8} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject9} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject10} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject11} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject12} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject13} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject14} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject15} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject16} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject17} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject18} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject19} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject20} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject21} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject22} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject23} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject24} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject25} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject26} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject27} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject28} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject29} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject30} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject30} alt="project" />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>

                <div className="container mobile-show">
                    <div className="row offset-xl-1">
                        <div className="mobile-gallery-padding">
                            <Carousel autoPlay showStatus={false} showThumbs={false} infiniteLoop={true} showArrows={true} centerMode={true} centerSlidePercentage={60} stopOnHover={false} dynamicHeight={true} showIndicators={false}>
                                <div>
                                    <img className="gallery-img" src={myproject1} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject2} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject3} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject4} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject5} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject6} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject7} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject8} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject9} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject10} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject11} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject12} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject13} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject14} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject15} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject16} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject17} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject18} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject19} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject20} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject21} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject22} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject23} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject24} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject25} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject26} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject27} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject28} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject29} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject30} alt="project" />
                                </div>
                                <div>
                                    <img className="gallery-img" src={myproject30} alt="project" />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};



