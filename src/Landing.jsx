import "./App.css";
import classNames from "classnames";
import { usePopper } from "react-popper";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import truck from "./Images/truck4.webp";
import {
  CNavbar,
  CContainer,
  CNavbarToggler,
  CNavbarBrand,
  CCollapse,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CForm,
  CFormInput,
  CButton,
} from "@coreui/react";
import logo from "./Images/sweefLogo.svg";
import redBackground from "./Images/redBackground.webp";
import road from "./Images/road.webp";
import truckdark from "./Images/truckdark.webp";

// BACKGROUND ANIMATION NEW

const images = [redBackground, road, truckdark];

const HomeContainer = styled.div`
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
  background-size: cover;
  // background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  transition: background-image 0.5s ease-in-out;
`;

//END OF BACKGROUND ANIMATION NEW

// BACKGROUND IMAGE ANIMATION
// const changeAnimation = keyframes`
//   0% {
//     background-image: url(${redBackground});
//   }

//   50% {
//     background-image: url(${road});
//   }

//   100% {
//     background-image: url(${truckdark});
//   }
// `;

// const HomeContainer = styled.div`
//   min-height: 100vh;
//   font-family: "Poppins", sans-serif;
//   background-image: url(${redBackground});
//   background-size: cover;
//   background-attachment: fixed;
//   background-repeat: no-repeat;
//   background-position: center;
//   position: relative;
//   transition: 5s;
//   animation-name: ${changeAnimation};
//   animation-direction: alternate-reverse;
//   animation-duration: 30s;
//   animation-fill-mode: forwards;
//   animation-iteration-count: infinite;
//   animation-play-state: running;
//   animation-timing-function: ease-in-out;
// `;
// END OF IT

export default function Landing() {
  // BACKGROUND ANIMATION NEW
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  //END OF BACKGROUND ANIMATION NEW

  // Navbar2
  const [visible, setVisible] = useState(false);
  // Navbar Padding top when clicked
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const navbarCollapse = document.getElementById("responsive-navbar-nav");
    if (navbarCollapse) {
      navbarCollapse.style.paddingTop = isMenuOpen ? "0" : "0px";
    }
  };
  //   End of Nvbar

  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState(false);
  const listenScrollEvent = () => {
    if (window.scrollY >= 100) {
      setnavColor(true);
      console.log(window.scrollY);
    } else {
      setnavColor(false);
      console.log("Not loading");
    }
  };
  window.addEventListener("scroll", listenScrollEvent);
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
  //   changingBackgroundImage
  let image = document.getElementsByClassName("image");

  return (
    <div>
      {/* <section  className="image"> */}
      <HomeContainer
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        id="home"
      >
        <CNavbar
          expand="lg"
          colorScheme="dark"
          className={navColor ? "nav fixed" : "nav"}
          style={{ position: "fixed" }}
        >
          <CContainer
            className={navColor ? "navFluid fixedFluid" : "navFluid"}
            fluid
          >
            {/* LOGO */}
            <CNavbarBrand href="#">
              {" "}
              <img src={logo} alt="Logo" id="Logo" />
            </CNavbarBrand>
            <CNavbarToggler
              aria-label="Toggle navigation"
              aria-expanded={visible}
              onClick={() => setVisible(!visible)}
            />
            <CCollapse className="navbar-collapse padd" visible={visible}>
              <CNavbarNav className="ms-auto mb-2 mb-lg-0">
                {/* <CNavItem>
                    <CNavLink
                      href="#home"
                      onClick={() => setVisible(!visible)}
                      active
                    >
                      Home
                    </CNavLink>
                  </CNavItem> */}
                <CNavItem>
                  <CNavLink href="#home" onClick={() => setVisible(!visible)}>
                    Home
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#about" onClick={() => setVisible(!visible)}>
                    About
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#what" onClick={() => setVisible(!visible)}>
                    Why us
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#client" onClick={() => setVisible(!visible)}>
                    Services
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink
                    href="#contact"
                    onClick={() => setVisible(!visible)}
                  >
                    Contact
                  </CNavLink>
                </CNavItem>
              </CNavbarNav>
            </CCollapse>
          </CContainer>
        </CNavbar>

        <div className="home-info d-flex flex-column justify-content-center align-items-center">
          <Row
            className="homeRow"
            style={{ paddingRight: "30px", paddingLeft: "30px" }}
          >
            {/* <Col lg ={1}></Col> */}
            <Col xs={12} lg={5}>
              {/* <h2>
                        <a target="_blank" href="https://www.instagram.com/sagehill_technologies/">
                            <i  class="homeico white fa-brands fa-instagram icon-margin"></i>
                        </a>
                        <a target="_blank" href="https://twitter.com/john_tseriwa?s=20">
                            <i class="white homeico fa-brands fa-x-twitter icon-margin"></i>
                        </a>
                        <a target="_blank" href="https://www.facebook.com/search/top?q=sagehill%20business%20solutions">
                        <i  class=" white homeico fa-brands fa-facebook-f icon-margin"></i>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/company/18669517/admin/feed/posts/" >
                        <i class="white homeico fa-brands fa-linkedin icon-margin"></i>
                        </a>
                        
                </h2> */}
              <h3 className="my-4">
                Trucking Services
                <span class="simone">
                  {" "}
                  To <br /> Any
                </span>{" "}
                Destination.
              </h3>
              <p className="fw-normal fs-4">
                Sweef Logistics and Transport Services.
              </p>
              <button
                type="button"
                onClick={handleShow}
                className="btn btn-outline-danger mt-4 py-3 px-5 border-2 fw-bold rounded-pill"
              >
                Contact Us
              </button>
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
              <div className="row">
                <div className="col-md-6"></div>
              </div>
            </Col>
            <Col lg={1}></Col>
            <Col lg={4} className="ml-2">
              <img
                src={truck}
                alt="Truck"
                height="300px"
                className="d-none d-lg-block"
              />
            </Col>
          </Row>
        </div>
      </HomeContainer>
      {/* </section> */}
    </div>
  );
}
