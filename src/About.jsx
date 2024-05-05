import React from "react";
import "./App.css";
import { useState } from "react";
import { usePopper } from "react-popper";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Logo from "./Images/sweefLogoWhite.svg";

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  //   Modal Code
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //MailJS
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
  return (
    <div>
      <section id="about" className="my-5">
        <div className="container py-5 d-flex flex-column align-items-center justify-content-center">
          <div className="heading d-flex flex-column justify-content-center align-items-center w-100 my-5">
            <h2 className="fw-bold text-align-center">
              Welcome! Mauya! Siyalemukela!
            </h2>
            <div className="underline"></div>
          </div>
          <div className="about-info row my-5">
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="info-1 padme col-md-8"
            >
              <h2 className="fw-bold fs-3 pb-2">
                {" "}
                <span class="simone">Sweef Investments,</span> a Logistics Buddy
              </h2>
              <p className="justify-me">
                Sweef logistics is a well-established road freight transport and
                courier company. It was established in 2021. It is located in
                Harare, Zimbabwe. The business transports a wide variety of
                cargo both locally and throughout the SADC region. We offer a
                dedicated overnight road freight courier. Since its
                establishment in 2021, Sweef Logistics began as a home-based
                transport business with the acquisition of a medium-sized truck.
                Initially focusing on transporting primarily tobacco and other
                goods, the company has grown steadily. Our goal is to provide
                the highest level of transportation services as well as safe and
                timely deliveries, with fair and competitive pricing while
                providing a safe workplace for employees and maintaining
                integrity, fairness and honesty with customers and business
                partners. Sweef logistics's mission is to become the recognized
                leader in Zimbabwe's transport industry for long and
                short-distance trucking and transportation of goods.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="info-2 col-md-4 d-flex flex-column "
            >
              <div className="list d-flex justify-content-center">
                <img src={Logo} alt="Logo" height="250px" />
              </div>
              <div className="btnContainer">
                <button
                  type="button"
                  onClick={handleShow}
                  className="btn btn-success mt-4 py-3 px-5 border-0 fw-bold rounded-pill aboutContactButton"
                >
                  Contact Us
                </button>
              </div>
              {/* Modal */}
              <Modal
                show={show}
                onHide={handleClose}
                style={{ zIndex: "2500" }}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Hire us</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                    <Button variant="secondary" onClick={handleClose}>
                      Close
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
                        Your email has been sent, Thank you for reaching out to
                        us.
                      </Modal.Body>
                    </Modal>
                  </form>
                </Modal.Body>
              </Modal>
            </div>
          </div>
          <div className="statistics row w-100">
            <div
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="item item1 col-md-3 border-end text-center py-4"
            >
              <h2>
                <i className="fas fa-user"></i>
              </h2>
              <h6>Able Employees</h6>
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="item item2 col-md-3 border-end text-center py-4"
            >
              <h2>
                <i className="fas fa-handshake-simple"></i>
              </h2>
              <h6>Strong Partnerships</h6>
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="item item3 col-md-3 border-end text-center py-4"
            >
              <h2>
                <i className="fas fa-truck-ramp-box"></i>
              </h2>
              <h6>Successful Deliveries</h6>
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="item item4 col-md-3 text-center py-4"
            >
              <h2>
                <i className="fas fa-truck"></i>
              </h2>
              <h6>Vehicles</h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
