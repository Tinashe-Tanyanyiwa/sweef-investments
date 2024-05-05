import React from "react";
import "./App.css";
import { useState } from "react";
import { usePopper } from "react-popper";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
// import Him from './Images/JT.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import QRNX from "./Images/QRNX.webp";

export default function Contact() {
  const form = useRef();
  const [smShow, setSmShow] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lo7oek7",
        "template_5o0ywpn",
        form.current,
        "mN1P0fC0d3RWPwZRr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setSmShow(true);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <section id="contact" className="mt-5 contactService">
        <div className="container py-5 d-flex flex-column align-items-center justify-content-center">
          <div className="heading d-flex flex-column justify-content-center align-items-center w-100 mb-5">
            <h2 className="fw-bold">Get in Touch</h2>
            <div className="underline"></div>
          </div>

          <div className="details row w-100 mt-5">
            <div
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              className="contact-details col-md-5"
            >
              <div className="title">
                <h3>FOLLOW US</h3>
              </div>
              <div> 
                <h6>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/sweefinvestments_/"
                  >
                    <img className="QR" src={QRNX} alt="" />
                  </a>
                </h6>
              </div>
              <div className="mt-4">
                <ul>
                  <li>
                    <i className="fas fa-phone"></i>
                    <span>(+263) 782 008 960</span>
                  </li>
                  {/* <li><i className="fas fa-blender-phone"></i><span>(060) 555 545 555</span></li> */}
                  <li>
                    <i className="fas fa-envelope"></i>
                    <span>info@sweefinvestments.com</span>
                  </li>
                  <li>
                    <i className="fas fa-location-dot"></i>
                    <span>5465 Budiriro 3</span>
                  </li>
                </ul>
              </div>
              {/* <div>
                <h3>FOLLOW US</h3>
              </div> */}
              {/* <div>
                <h5>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/sweefinvestments_/"
                  >
                    <i class="homeico blue fa-brands fa-instagram icon-margin"></i>
                  </a>
                  {/* <a target="_blank" href="https://twitter.com/john_tseriwa?s=20">
                            <i class="blue homeico fa-brands fa-x-twitter icon-margin"></i>
                        </a>
                        <a target="_blank" href="https://www.facebook.com/search/top?q=sagehill%20business%20solutions">
                        <i  class=" blue homeico fa-brands fa-facebook-f icon-margin"></i>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/company/18669517/admin/feed/posts/" >
                        <i class="blue homeico fa-brands fa-linkedin icon-margin"></i>
                        </a> 
                </h5>
              </div> */}
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              className="form col-md-7 pe-0 ps-5 pe-5"
            >
              <form ref={form} onSubmit={sendEmail}>
                <div data-aos="fade-up" className="contact-form-group">
                  <label for="inputName" className="black">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="contact-form-control"
                    id="inputName"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div data-aos="fade-up" className="contact-form-group">
                  <label for="inputPhone" className="black">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="contact-form-control"
                    id="inputPhone"
                    name="number"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div data-aos="fade-up" className="contact-form-group">
                  <label for="inputEmail" className="black">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="contact-form-control"
                    id="inputEmail"
                    name="email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div data-aos="fade-up" className="contact-form-group">
                  <label for="inputMessage" className="black">
                    Message
                  </label>
                  <textarea
                    className="contact-form-control"
                    id="inputMessage"
                    rows="5"
                    name="message"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>
                <Button
                  /*onClick={() => setSmShow(true)}*/ type="submit"
                  className=" contact-btn me-2 redbutton"
                >
                  Submit
                </Button>

                <Modal
                  style={{ zIndex: "10000" }}
                  size="sm"
                  show={smShow}
                  onHide={() => setSmShow(false)}
                  aria-labelledby="example-modal-sizes-title-sm"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                      Successful
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Your email has been sent, Thank you for reaching out to us.
                  </Modal.Body>
                </Modal>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
