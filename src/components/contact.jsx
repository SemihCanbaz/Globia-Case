import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import "../App.css";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [showSuccess, setShowSuccess] = useState(false); // Başarı mesajı state'i
  const [showError, setShowError] = useState(false); // Hata mesajı state'i

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
<<<<<<< HEAD

    emailjs
      .sendForm(
        "service_xkvxl8u",
        "template_8mbv9rt",
        e.target,
        "dwo9-Kfjrt0xotQ2Z"
      )
=======
    
    {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }
    
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
>>>>>>> parent of eb51822 (Last-Design)
      .then(
        (result) => {
          console.log(result.text);
          setShowSuccess(true);
          setShowError(false);
          clearState();
        },
        (error) => {
          console.log(error.text);
          setShowSuccess(false);
          setShowError(true);
        }
      );
  };
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="section-title">
              <h2>CONTACT</h2>
              <p>
                Please fill out the form below to send us an email and we will
                get back to you as soon as possible.
              </p>
            </div>
            <form name="sentMessage" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    required
                    onChange={handleChange}
                    value={name}
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    required
                    onChange={handleChange}
                    value={email}
                  />
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows="4"
                  placeholder="Message"
                  required
                  onChange={handleChange}
                  value={message}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-custom btn-lg">
                Send Message
              </button>
              {showSuccess && (
                <div className="success-message">
                  Your message has been sent successfully!
                </div>
              )}
              {showError && (
                <div className="error-message">
                  There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
          <div className="col-md-4">
            <div className="contact-info">
              <h3>Contact Info</h3>
              <ul>
                <li>
                  <i className="fa fa-map-marker"></i> Address:
                  {"Gazipaşa Mah. 9. Eylül Caddesi No:1 Menderes / İzmir "}
                  {props.data ? props.data.address : ""}
                </li>
                <li>
                  <i className="fa fa-map-marker"></i> Address:
                  {"Friedrichstraße 10117 Berlin, Almanya"}
                </li>
                <li>
                  <i className="fa fa-phone"></i> Phone (TR):{" "}
                  {props.data ? props.data.phoneTR : "TR+90 533 327 23 39"}
                </li>
                <li>
                  <i className="fa fa-phone"></i> Phone (DE):{" "}
                  {props.data ? props.data.phoneDE : "+49 (1609) 100 26 94"}
                </li>
                <li>
                  <i className="fa fa-envelope-o"></i> Email:{" "}
                  {props.data ? props.data.email : "info@globiagroup.com"}
                </li>
              </ul>
            </div>
            <div className="social">
              <ul>
                <li>
                  <a href={props.data ? props.data.facebook : "#"}>
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href={props.data ? props.data.twitter : "#"}>
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href={props.data ? props.data.youtube : "#"}>
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer id="footer">
        <div className="container text-center">
          <p>
<<<<<<< HEAD
            &copy; 2024 Web Developer Design by{" "}
            <a href="http://canbaz-software.com/" rel="nofollow">
              Semih Canbaz
=======
            &copy; 2023 Issaaf Kattan React Land Page Template. Design by{" "}
            <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
>>>>>>> parent of eb51822 (Last-Design)
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};
