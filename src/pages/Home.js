import React from 'react';
import '../App.css';
import Header from '../components/header';
import MiddleSection from './../components/middle';
import Footer from '../components/footer'
export default class Home extends React.Component {

    render() {
        return (
            <div className="">
                <Header></Header>
                <MiddleSection ></MiddleSection>
                <Footer></Footer>
            </div>
        )
    };
};



