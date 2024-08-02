import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Values = () => {
  return (
    <section id="values">
      <div className="container">
        <div className="section-title">
          <br />
          <br />
          <h2>
            Our Values constitute the centre and focus of all businesses that we
            do.
          </h2>
          <p>
            As Globia, we act with the belief and purpose of securing the
            progress of future generations when enriching the lives of our
            producers and consumers. Strong values define our culture and help
            us to implement Globia’s strategy in line with our mission and
            vision. Our values help us to work together in the most efficiently
            and satisfactorily and such values make us close to each other as a
            global organization. We realize our values in our daily activities
            and act with a culture and understanding based on these values.
          </p>
        </div>
        <div className="values-content">
          <div className="values-image">
            <img src="/img/values.jpg" alt="Values" />
            <div className="values-overlay">
              <h3>GET TO KNOW US</h3>
              <p>VALUES</p>
            </div>
          </div>
          <div className="values-details">
            <details>
              <summary>Integrity</summary>
              <p>
                We always act in honesty; defend, implement high ethical
                standards all the time and work honestly in order to provide our
                country, planet and people with better and happier environments
                over the next years. When doing our business, we establish
                relationships with all of our stakeholders based on honesty and
                respect and do our business in accordance with the laws. We know
                that all promises we have given are our commitment and carry out
                all activities transparently and honestly.
              </p>
            </details>
            <details>
              <summary>Happiness</summary>
              <p>
                We are doing our best to make all of our stakeholders, primarily
                our customers, employees and farmers happy every day. We are
                trying to make all parties with whom we are in cooperation feel
                better and happier. We are making all efforts to create a
                business culture in which we will also feel better and happy.
              </p>
            </details>
            <details>
              <summary>Loyalty</summary>
              <p>
                We treat each other with love and respect, consider differences
                to be richness and attach importance to the strength of
                cooperation. Ideas are important for us and we appreciate our
                special talents and the contributions made by each of us. We
                support each other under every condition and act as a team.
              </p>
            </details>
            <details>
              <summary>Cooperation</summary>
              <p>
                Globia’s business philosophy is based on cooperation and the
                culture of taking joint decision. We make production by working
                together. We encourage our farmers and employees with
                versatility and involvement processes, provide and receive
                feedback, which make us stronger. Working in cooperation makes a
                lot of contributions to our common sense.
              </p>
            </details>
            <details>
              <summary>Innovativeness</summary>
              <p>
                We never stop learning new things and develop ourselves. We
                invest in innovation, technology, design and R&D and are trying
                to be the pioneer of change and new developments. We always and
                courageously support innovation with an innovative and
                entrepreneurial approach and embrace change.
              </p>
            </details>
            <div className="values-summary">
              <p>
                Globia’s business philosophy is based on cooperation and the
                culture of taking joint decision. We make production by working
                together. We encourage our farmers and employees with
                versatility and involvement processes, provide and receive
                feedback, which make us stronger. Working in cooperation makes a
                lot of contributions to our common sense.
              </p>
            </div>
          </div>
          <div className="values-menu">
            <ul className="footer-menu">
              <li>
                <Link to="/#get-to-know-us" className="footer-item">
                  Get to Know Us
                </Link>
              </li>
              <li>
                <Link to="/#about" className="footer-item">
                  About
                </Link>
              </li>
              <li>
                <Link to="/#services" className="footer-item">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/#products" className="footer-item">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/#sustainability" className="footer-item">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/#media" className="footer-item">
                  Media
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="footer-item">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
