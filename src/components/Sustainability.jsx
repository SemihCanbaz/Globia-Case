import React from "react";
import "../App.css"; // CSS dosyanızı unutmayın

export const Sustainability = (props) => {
  return (
    <div id="sustainability">
      <div className="container">
        <div className="section-title text-center">
          <h2>Sustainability</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="testimonial">
                  <div className="sustainability-img-container">
                    <img
                      src={d.img}
                      alt={d.name}
                      className="sustainability-img"
                    />
                  </div>
                  <div className="sustainability-text">
                    <p className="testimonial-text">"{d.text}"</p>
                    <p className="testimonial-meta">- {d.name}</p>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
