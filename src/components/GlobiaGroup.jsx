import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export const GlobiaGroup = () => {
  return (
    <div id="globia-group" className="text-center">
      <div className="container">
        <div className="section-title">
          <br />
          <br />
          <h2>GET TO KNOW US GLOBIA GROUP</h2>
        </div>
        <div className="content-boxes">
          <div className="box">
            <p>We do business to support life and man.</p>
          </div>
          <div className="box">
            <p>
              As a food company, we are trying to make healthy, delicious and
              sustainable food accessible for all people and communities. We are
              working enthusiastically in order to ensure that all of our
              consumers whose salt we eat worldwide can eat more healthily, more
              quality and tastefully. As Globia creating unique job models in
              food and agriculture sector, we meet the expectations of our
              customers at our best with our leading brands. We believe that
              you, your children and everybody should be able to reach clean,
              healthy and nutritious food. For that purpose, we are making
              production for a healthy and sustainable future and cooperating
              with conscious and sensitive farmers and growers making production
              in harmony with the nature and caring about future generations.
            </p>
          </div>
          <div className="box">
            <p>
              We provide the inspiration for all people we give service in terms
              of using nutritious foods in their meals, adding taste to their
              meals and give support so that they can eat the best. Our food
              service in international standards and combined under a single
              roof with our head office in Germany, branch offices in Türkiye
              and Greece are integrated with our expert staff and business
              partners and thus, we continue adding value to every geography of
              our operations and activities and growing.
            </p>
          </div>
        </div>
        <div className="arrow-wrapper">
          <i className="fa fa-arrow-down"></i>
        </div>
        <div className="gloia-menu">
          <ul className="footer-globia">
            <li>
              <Link to="/#get-to-know-us" className="footer-globia">
                Get to Know Us
              </Link>
            </li>
            <li>
              <Link to="/#about" className="footer-globia">
                About
              </Link>
            </li>
            <li>
              <Link to="/#services" className="footer-globia">
                Services
              </Link>
            </li>
            <li>
              <Link to="/#products" className="footer-globia">
                Products
              </Link>
            </li>
            <li>
              <Link to="/#sustainability" className="footer-globia">
                Sustainability
              </Link>
            </li>
            <li>
              <Link to="/#media" className="footer-globia">
                Media
              </Link>
            </li>
            <li>
              <Link to="/#contact" className="footer-globia">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
