import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Media = (props) => {
  return (
    <div id="media">
      <div className="container">
        <div className="section-title">
          <h1>MEDIA</h1>
          <h2>BLOG</h2>
          <p>Discover our latest blog posts and updates.</p>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              {props.data ? (
                props.data.map((d, i) => (
                  <div key={`${d.title}-${i}`} className="col-md-6 col-sm-12">
                    <div className="blog-post">
                      <img src={d.img} alt={d.title} className="blog-img" />
                      <div className="blog-content">
                        <h3>{d.title}</h3>
                        <p>{d.description}</p>
                        <span className="blog-date">{d.date}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>Loading...</p>
              )}
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
        <div className="add-blog">
          <h3>Blog Yazısı Ekle</h3>
          <p>Yeni bir blog yazısı ekleyin ve paylaşın.</p>
          <form>
            <input type="text" placeholder="Başlık" required />
            <textarea rows="6" placeholder="Yazı İçeriği" required></textarea>
            <button type="submit">Gönder</button>
          </form>
        </div>
      </div>
    </div>
  );
};
