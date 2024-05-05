import React from 'react'
import './App.css';
import { useState } from 'react';
import { usePopper } from 'react-popper';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Him from './Images/JT.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import FTC from './Images/FTC.JPG';
// import Me from './Images/Me.JPG'

export default function Testimonials() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div>
      <section id="client" className="my-5">
    <div className="container py-5 d-flex flex-column align-items-center justify-content-center">
        <div className="heading d-flex flex-column justify-content-center align-items-center w-100 my-5">
            <h2 className="fw-bold">What We Do</h2>
            <div className="underline"></div>
        </div>
        <p className='justify-me padme'>At Sweef Logistics, we specialize in providing comprehensive road freight transport and courier services. With our expertise and dedication to exceptional customer service, we offer reliable and efficient transportation solutions for a wide range of cargo. Whether it's local deliveries within Harare, Zimbabwe, or shipments throughout the SADC region, our goal is to ensure safe and timely transport of goods.</p>
        <div className="client-feedback row mt-5">
            <div className="col-md-4">
                <div data-aos="fade-up"  data-aos-easing="ease-out-cubic" data-aos-duration="3000" className="feedback feedback1">
                    <div className="client-info">
                        {/* <div className="client-image"> */}
                            {/* <img src={FTC} alt=""/> */}
                        {/* </div> */}
                        <div className="bla">
                        
                            <h5>LONGHAUL FREIGHT</h5>
                            <br />
                            {/* <h6>DEF Company</h6> */}
                        </div>   
                    </div>
                    <div className="desc">
                        <p className='justify-me'>
                        Efficiently transport goods over extended distances with our longhaul freight service, ensuring reliable supply chain management
                        </p>
                    </div>
                    <div className="stars">
                    <h2><i className="fas fa-road blue"></i></h2>
                    </div>
                </div>
            </div>
            
            <div className="col-md-4">
                <div data-aos="fade-up"  data-aos-easing="ease-out-cubic" data-aos-duration="3000" className="feedback feedback2 feedback1">
                    <div className="client-info">
                        {/* <div className="client-image"> */}
                            {/* <img src={Me} alt=""/> */}
                        {/* </div> */}
                        <div className="bla">
                            <h5>INTERCITY FREIGHT</h5>
                            <br />
                            {/* <h6>Founder at JKL Corporation</h6> */}
                        </div>   
                    </div>
                    <div className="desc">
                        <p className='justify-me'>
                        Streamlined intercity logistics for swift and secure cargo transportation between cities. 
                        </p>
                    </div>
                    <div className="stars">
                    <h2><i className="fas fa-city blue"></i></h2>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div data-aos="fade-up"  data-aos-easing="ease-out-cubic" data-aos-duration="3000" className="feedback feedback2">
                    <div className="client-info">
                        {/* <div className="client-image"> */}
                            {/* <img src={Me} alt=""/> */}
                        {/* </div> */}
                        <div className="bla">
                            <h5>OVERNIGHT EXPRESS</h5>
                            <br />
                            {/* <h6>Founder at JKL Corporation</h6> */}
                        </div>   
                    </div>
                    <div className="desc">
                        <p className='justify-me'>
                        Guaranteed overnight delivery service for time-sensitive shipments, ensuring rapid and reliable express logistics.
                        </p>
                    </div>
                    <div className="stars">
                    <h2><i className="fas fa-cloud-moon blue"></i></h2>
                    </div>
                </div>
            </div>
            
            
        </div>
        {/* <div className="buttons d-flex align-items-center my-4">
            <div className="button-container cont1">
                <button className="button1"></button>
            </div>
            <div className=" button-container cont2">
                <button className="button2"></button>
            </div>
        </div> */}
    </div>
</section>

    </div>
  )
}
