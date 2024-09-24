import '../css/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import hero3 from '../images/icons/recovery.png';
import hero1 from '../images/icons/desktop_laptop_service.png';
import hero2 from '../images/icons/hardware_installation.png';
import hero4 from '../images/icons/installation.png';
var React = require('react');


export default class HeaderImageSection extends React.Component {

    render() {
        return (

            <div className="container-fluid row ">
                <div className="col-sm-8 col-md-8 mt-sm-5">
                    <img className='image-header' alt='imag' src='https://www.laptoprepair.lk/image/cache/catalog/laptop-repair-banner-1140x380.jpg'></img>
                </div>
                <div className="col-sm-4 col-md- mt-sm-5">
                    <div className='row'>
                        <div className='col-sm-6 col-md-6 mt-sm-5'>
                            <div class="col mx-1 rectangle">
                                <div class="icons">
                                    <img class="iconImages " src={hero1} alt="Logo" />
                                </div>
                                <div class="service">
                                    <center>DESKTOP AND LAPTOP SERVICE</center>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-6 mt-sm-5'>
                            <div class="col mx-1 rectangle">
                                <div class="icons">
                                    <img class="iconImages " src={hero3} alt="Logo" />
                                </div>
                                <div class="service">
                                    <center>DATA RECOVERY SERVICE</center>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-6 col-md-6 mt-sm-5'>
                            <div class="col mx-1 rectangle">
                                <div class="icons">
                                    <img class="iconImages " src={hero4} alt="Logo" />
                                </div>
                                <div class="service">
                                    <center>SOFTWARE TROUBLESHOOTING AND INSTALL</center>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-6 mt-sm-5'>
                            <div class="col mx-1 rectangle">
                                <div class="icons">
                                    <img class="iconImages " src={hero2} alt="Logo" />
                                </div>
                                <div class="service">
                                    <center>HARDWARE TROUBLESHOOTING AND INSTALL</center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
};