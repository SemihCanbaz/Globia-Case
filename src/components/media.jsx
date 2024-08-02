import React from "react";
import "../App.css"; // CSS dosyanızı unutmayın
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Media = (props) => {
  return (
    <div id="media" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>BLOG</h2>
          <p>Discover our latest blog posts and updates.</p>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              {props.data
                ? props.data.map((d, i) => (
                    <div
                      key={`${d.title}-${i}`}
                      className="col-md-6 col-sm-12 blog-post"
                    >
                      <div className="blog-post-inner">
                        <img src={d.img} alt={d.title} className="blog-img" />
                        <div className="blog-content">
                          <h3>{d.title}</h3>
                          <p>{d.description}</p>
                          <span className="blog-date">{d.date}</span>
                        </div>
                      </div>
                    </div>
                  ))
                : "Loading..."}
            </div>
          </div>
          <div className="col-md-4">
            <div className="new-blogs">
              <h3>Yeni Blog Yazıları Ekleniyor</h3>
              <p>En son güncellemeler ve haberler için bizi takip edin!</p>
              <div className="social-icons">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="mailto:info@globiagroup.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
