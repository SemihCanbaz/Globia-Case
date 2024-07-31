import React from "react";
import "../App.css";

export const GetToKnowUs = (props) => {
  return (
    <div id="get-to-know-us" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Get to Know Us</h2>
        </div>
        <div className="content-boxes">
          <div className="box">
            <p>Taste And Health From The Sea To Your Tables.</p>
          </div>
          <div className="box">
            <p>
              About Us We are a food company working to allow all the people
              have Access to fish, having the most valuable protein on earth. We
              are working with passion to ensure that our millions of customers
              in more than 50 countries on 4 continents are fed with healthier,
              higher quality and more tasteful fish.
            </p>
          </div>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : ""}
        </div>
        <div className="arrow-wrapper">
          <i className="fa fa-arrow-down"></i>
        </div>
      </div>
    </div>
  );
};
