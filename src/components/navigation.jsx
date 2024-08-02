import React from "react";
<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import "../App.css";

export const Navigation = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault(); // Default link davranışını engelle
    navigate("/"); // Ana sayfaya yönlendir
    window.scrollTo(0, 0); // Sayfanın en üstüne kaydır
  };

=======

export const Navigation = (props) => {
>>>>>>> parent of eb51822 (Last-Design)
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
<<<<<<< HEAD
          <Link
            className="navbar-brand page-scroll"
            to="/"
            onClick={handleClick}
          >
            <div className="logo-container">
              <span className="logo-text">GLOBIA</span>
            </div>
          </Link>
=======
          <a className="navbar-brand page-scroll" href="#page-top">
            React Landing Page
          </a>{" "}
>>>>>>> parent of eb51822 (Last-Design)
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
<<<<<<< HEAD
            <li className="dropdown">
              <a
                href="#get-to-know-us"
                className="page-scroll dropdown-toggle"
                data-toggle="dropdown"
              >
                Get to Know Us <span className="caret"></span>
=======
            <li>
              <a href="#features" className="page-scroll">
                Features
>>>>>>> parent of eb51822 (Last-Design)
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/values" className="page-scroll">
                    Values
                  </Link>
                </li>
                <li>
                  <Link to="/globia-group" className="page-scroll">
                    Globia Group
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
<<<<<<< HEAD
              <a href="#sustainability" className="page-scroll">
                Sustainability
=======
              <a href="#testimonials" className="page-scroll">
                Testimonials
>>>>>>> parent of eb51822 (Last-Design)
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
            <li>
              <LanguageSelector />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
