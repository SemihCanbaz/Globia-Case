import React from "react";
import "../App.css"; // CSS dosyanızı unutmayın

export const Media = (props) => {
  return (
    <div id="media" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>BLOG</h2>
          <p>Discover our latest blog posts and updates.</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-md-4 col-sm-6 blog-post"
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
    </div>
  );
};
