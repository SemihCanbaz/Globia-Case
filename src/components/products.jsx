import React from "react";
import "../App.css"; // CSS dosyasını unutmayın

export const Products = (props) => {
  return (
    <div id="products" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Products</h2>
          <h1>Each of our products are special for us.</h1>
          <p>
            As Globia Group, we bring you organic, natural and fresh products
            that are carefully produced in our organic farming farm or in
            organic production facilities in various parts of Turkey and all of
            our products are selected under the control of food engineers.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data && props.data.length > 0
              ? props.data.map((d, i) => (
                  <div key={`${d.title}-${i}`} className="product-item">
                    <img src={d.img} alt={d.title} className="product-img" />
                    <div className="product-overlay">
                      <h3 className="product-title">{d.title}</h3>
                    </div>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
