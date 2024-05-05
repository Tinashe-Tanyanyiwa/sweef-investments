import React from 'react';
import './App.css';
import { useState } from 'react';
import { usePopper } from 'react-popper';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'typeface-poppins';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import vision from './Images/vision.webp';
import reliability from './Images/Reliability.webp';
import service from './Images/sevice.webp';
import cash from './Images/cash.webp'

export default function Services() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div>
       <section id="what" className="my-5">
    <div className="container py-5 d-flex flex-column align-items-center justify-content-center">
        <div className="heading d-flex flex-column justify-content-center align-items-center w-100 my-5">
            <h2 className="fw-bold">Why Sweef Logistics?</h2>
            <div className="underline"></div>
        </div>
        <div className="services row w-100">
            <div className="service col-md-6">
                <div className="icon">
                <i class="fa-solid fa-circle"></i>
                </div>
                <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="bla">
                <Card >
            <Card.Img variant="top" src={vision} />
            <Card.Body>
              <Card.Title>Vision</Card.Title>
              <Card.Text>
              Our vision is to become the recognized leader
              in the transport industry for long and short distance
              trucking and transportation of goods.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
            </div>
            <div className="service col-md-6">
                <div className="icon">
                    <i class="fa-solid fa-circle"></i>
                </div>
                <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="bla">
                <Card >
            <Card.Img variant="top" src={reliability} />
            <Card.Body>
              <Card.Title>Reliability</Card.Title>
              <Card.Text>
              Sweef logistics tends to go out of its way to
              deliver goods on time and have highly trained
              and dedicated staff which ensures smooth running
              of operations. The key is not to over promise
              and under deliver but to be honest and transparent at all times.
              </Card.Text>
            </Card.Body>
          </Card>
                </div>
            </div>
            <div className="service col-md-6">
                <div className="icon">
                     <i class="fa-solid fa-circle"></i>
                </div>
                <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="bla">
                <Card >
            <Card.Img variant="top" src={service} />
            <Card.Body>
              <Card.Title>Quality Service</Card.Title>
              <Card.Text>
              Sweef logistics provides customers with courteous, 
              prompt, and dependable service. The company has 
              built up a reputation for timely deliveries and 
              the best drivers in the industry.
              </Card.Text>
            </Card.Body>
          </Card>
                </div>  
            </div>
            <div className="service col-md-6">
                <div className="icon">
                <i class="fa-solid fa-circle"></i>
                </div>
                <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="bla">
                <Card >
            <Card.Img variant="top" src={cash} />
            <Card.Body>
              <Card.Title>Competitive Rates</Card.Title>
              <Card.Text>
              The business will always endeavor to provide 
              competitive rates to its customers, because 
              it strives to keep costs as low as possible, 
              without sacrificing on service quality.
              </Card.Text>
            </Card.Body>
          </Card>
                </div>
            </div>
        </div>
        <div className="skills-list padme row">
                <div className="basics row col-md-6 pe-0 ps-0">
                    <div className="skill col-12 py-3">
                        <div className="perc d-flex justify-content-between flex-wrap w-100">
                            <h6>Customer Support</h6>
                            <h6>65%</h6>
                        </div>
                        <div className="progress">
                            <div data-aos="fade-right" data-aos-offset="2" data-aos-easing="ease-in-sine" className="progress-bar" role="progressbar" aria-valuenow = "25" aria-valuemin = "0" aria-valuemax ="100" style= {{width:" 65%" }}></div>
                        </div>
                    </div>
                    <div className="skill col-12 py-3">
                        <div className="perc d-flex justify-content-between flex-wrap w-100">
                            <h6>Reliable Shipping</h6>
                            <h6>95%</h6>
                        </div>
                        <div className="progress">
                            <div data-aos="fade-right" data-aos-offset="2" data-aos-easing="ease-in-sine" className="progress-bar" role="progressbar" style= {{width: "95%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>                            
                    </div>
                    <div className="skill col-12 py-3">
                        <div className="perc d-flex justify-content-between flex-wrap w-100">
                            <h6>Advanced Technology</h6>
                            <h6>80%</h6>
                        </div>
                        <div className="progress">
                            <div data-aos="fade-right" data-aos-offset="2" data-aos-easing="ease-in-sine" className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>                            
                    </div>
                </div>

                <div className="frameworks row col-md-6  pe-0 add-padding">
                    <div className="skill col-12 py-3 px-0">
                        <div className="perc d-flex justify-content-between flex-wrap w-100">
                          <h6>Efficient Routing</h6>
                            <h6>70%</h6>
                        </div>
                        <div className="progress">
                            <div data-aos="fade-right" data-aos-offset="2" data-aos-easing="ease-in-sine" className="progress-bar" role="progressbar" style= {{width: "70%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>                            
                    </div>
                    <div className="skill col-12 py-3 px-0">
                        <div className="perc d-flex justify-content-between flex-wrap w-100">
                           <h6>Warehousing Solutions</h6>
                            <h6>60%</h6>
                        </div>
                        <div className="progress">
                            <div data-aos="fade-right" data-aos-offset="2" data-aos-easing="ease-in-sine" className="progress-bar" role="progressbar" style= {{width: "60%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="skill col-12 py-3 px-0">
                        <div className="perc d-flex justify-content-between flex-wrap w-100">
                          <h6>Fast Delivery</h6>
                            <h6>99%</h6>
                        </div>
                        <div className="progress">
                            <div data-aos="fade-right" data-aos-offset="2" data-aos-easing="ease-in-sine" className="progress-bar" role="progressbar" style= {{width: "99%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
        
            </div>
    </div>
    
</section>

        </div>

   
  )
}
