import React from 'react';
import './../App.css';
// import Logo from '../images/logo.jfif';
import Logo from '../images/logo.png';
import { Link } from 'react-scroll';


export default class header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            home: 'home-underscore ml-2',
            about: 'underscore',
            project: 'underscore',
            service: 'underscore',
            gallery: 'underscore',
            contact: 'underscore',
            homeLink: 'home-tab underline-home yellow-colour',
            aboutLink: 'home-tab underline-about',
            projectLink: 'home-tab underline-project',
            serviceLink: 'home-tab underline-service',
            galleryLink: 'home-tab underline-gallery',
            contactLink: 'home-tab underline-contact',
        };
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 20) {
            document.getElementById("header").className = "fixed-top header  header-scroll";
        } else {
            document.getElementById("header").className = "fixed-top  header";
        }
    };
    handleSetActive = (e) => {
        switch (e) {
            case "home":
                this.setState({
                    home: 'home-underscore ml-2',
                    about: 'underscore',
                    project: 'underscore',
                    service: 'underscore',
                    gallery: 'underscore',
                    contact: 'underscore',
                    homeLink: 'home-tab underline-home yellow-colour',
                    aboutLink: 'home-tab underline-about',
                    projectLink: 'home-tab underline-project',
                    serviceLink: 'home-tab underline-service',
                    galleryLink: 'home-tab underline-gallery',
                    contactLink: 'home-tab underline-contact',
                })
                break;
            case "about":
                this.setState({
                    home: 'underscore',
                    about: 'about-underscore ml-2',
                    project: 'underscore',
                    service: 'underscore',
                    gallery: 'underscore',
                    contact: 'underscore',
                    homeLink: 'home-tab underline-home',
                    aboutLink: 'home-tab underline-about yellow-colour',
                    projectLink: 'home-tab underline-project',
                    serviceLink: 'home-tab underline-service',
                    galleryLink: 'home-tab underline-gallery',
                    contactLink: 'home-tab underline-contact',
                })
                break;
            case "project":
                this.setState({
                    home: 'underscore',
                    about: 'underscore',
                    project: 'project-underscore ml-2',
                    service: 'underscore',
                    gallery: 'underscore',
                    contact: 'underscore',
                    homeLink: 'home-tab underline-home',
                    aboutLink: 'home-tab underline-about',
                    projectLink: 'home-tab underline-project yellow-colour',
                    serviceLink: 'home-tab underline-service',
                    galleryLink: 'home-tab underline-gallery',
                    contactLink: 'home-tab underline-contact',
                })
                break;
            case "service":
                this.setState({
                    home: 'underscore',
                    about: 'underscore',
                    project: 'underscore',
                    service: 'service-underscore ml-2',
                    gallery: 'underscore',
                    contact: 'underscore',
                    homeLink: 'home-tab underline-home',
                    aboutLink: 'home-tab underline-about',
                    projectLink: 'home-tab underline-project',
                    serviceLink: 'home-tab underline-service yellow-colour',
                    galleryLink: 'home-tab underline-gallery',
                    contactLink: 'home-tab underline-contact',
                })
                break;
            case "gallery":
                this.setState({
                    home: 'underscore',
                    about: 'underscore',
                    project: 'underscore',
                    service: 'underscore',
                    gallery: 'gallery-underscore ml-2',
                    contact: 'underscore',
                    homeLink: 'home-tab underline-home',
                    aboutLink: 'home-tab underline-about',
                    projectLink: 'home-tab underline-project',
                    serviceLink: 'home-tab underline-service',
                    galleryLink: 'home-tab underline-gallery yellow-colour',
                    contactLink: 'home-tab underline-contact',
                })
                break;
            case "contact":
                this.setState({
                    home: 'underscore',
                    about: 'underscore',
                    project: 'underscore',
                    service: 'underscore',
                    gallery: 'underscore',
                    contact: 'contact-underscore ml-2',
                    homeLink: 'home-tab underline-home',
                    aboutLink: 'home-tab underline-about',
                    projectLink: 'home-tab underline-project',
                    serviceLink: 'home-tab underline-service',
                    galleryLink: 'home-tab underline-gallery',
                    contactLink: 'home-tab underline-contact  yellow-colour',
                })
                break;

            default:

                break;
        }
    }
    show = () => {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
    render() {
        return (
            <div id="header" className="fixed-top header">
                <div className="row m-0 p-0">
                    <div className="col-sm col-md-1">
                    </div>
                    <div className="col-md-1">
                        <img className="header-logo" src={Logo} alt="Logo" />
                    </div>
                    <div className="col-md-2">
                    </div>
                    <div className="col-sm-5 col-md-8 p-0  ">
                        <nav className="my-2 my-md-0 mr-md-3 tabs desktop-show">
                            <span className={this.state.home}></span>
                            <Link className={this.state.homeLink} to="home" spy={true} offset={-100} smooth={true} onClick={this.handleSetActive.bind(this, "home")} onSetActive={this.handleSetActive.bind(this)}>HOME</Link>
                            <span className={this.state.about}></span>
                            <Link className={this.state.aboutLink} to="about" offset={-100} spy={true} smooth={true} onClick={this.handleSetActive.bind(this, "about")} onSetActive={this.handleSetActive.bind(this)}>ABOUT US</Link>
                            <span className={this.state.project}></span>
                            {/* <Link className={this.state.projectLink} to="project" offset={-100} spy={true} smooth={true} onClick={this.handleSetActive.bind(this, "project")} onSetActive={this.handleSetActive.bind(this)}>LATEST PROJECTS</Link> */}
                            <span className={this.state.service}></span>
                            <Link className={this.state.serviceLink} to="service" offset={-50} spy={true} smooth={true} onClick={this.handleSetActive.bind(this, "service")} onSetActive={this.handleSetActive.bind(this)}>OUR SERVICES</Link>
                            <span className={this.state.gallery}></span>
                            {/* <Link className={this.state.galleryLink} to="gallery" offset={-50} spy={true} smooth={true} onClick={this.handleSetActive.bind(this, "gallery")} onSetActive={this.handleSetActive.bind(this)}>GALLERY</Link> */}
                            <span className={this.state.contact}></span>
                            <Link className={this.state.contactLink} to="contact" offset={-50} spy={true} smooth={true} onClick={this.handleSetActive.bind(this, "contact")} onSetActive={this.handleSetActive.bind(this)}>CONTACT US</Link>

                        </nav>
                    </div>
                </div >
                <div className="mobile-show">
                    <div className="row m-0 p-0">
                        <div className="col-sm-12 ">
                            <p type="button" className="icon" onClick={this.show.bind(this)}>
                                <i className="fa fa-bars bar-icon"></i>
                            </p>
                        </div>
                    </div>
                    <div className="topnav ">
                        <div id="myLinks" onClick={this.show.bind(this)}>
                            <a href="#home">HOME</a>
                            <a href="#about">ABOUT US</a>
                            <a href="#project">LATEST PROJECTS</a>
                            <a href="#service">OUR SERVICES</a>
                            <a href="#gallery">GALLERY</a>
                            <a href="#contact">CONTACT US</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

// import React, { Component } from 'react'
// import { Link } from 'react-scroll'

// export default class header extends Component {
//     render() {
//         return (
//             <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-around' }}>
//                 <li><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
//                 <li><Link to="about" spy={true} smooth={true}>About</Link></li>
//                 <li><Link to="contact" spy={true} smooth={true}>Contact</Link></li>
//                 <li><Link to="service" spy={true} smooth={true}>Service</Link></li>
//             </ul>
//         )
//     }
// }
