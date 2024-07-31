import React from "react";
import "../App.css"; // CSS dosyasını unutmayın

export const Products = (props) => {
  return (
    <div id="products" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Products</h2>
          <p>Her bir ürünümüz bizim için özeldir.</p>
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
