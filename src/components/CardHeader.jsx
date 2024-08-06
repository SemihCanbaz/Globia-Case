import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import data from "../data/data.json";

const CardHeader = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (data && data.Cards) {
      setCards(data.Cards);
    }
  }, []);

  const handleClick = (path) => {
    navigate(path);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="card-header-container">
      <div className="row justify-content-center align-items-center">
        {cards.map((card, index) => (
          <div
            className="col-6 col-md-2 col-lg-2 col-xl-2 mb-2 d-flex align-items-center"
            key={index}
          >
            <div className="card" onClick={() => handleClick(card.path)}>
              <img src={card.image} alt={card.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="col-12 col-md-4 col-lg-2 col-xl-2 mb-2 d-flex align-items-center">
          <div
            className="feedback-card"
            onClick={() => scrollToSection("contact")}
          >
            <div className="feedback-content">
              <i className="bi bi-arrow-right-circle feedback-icon"></i>
              <span className="feedback-text">
                Bize geri dönüşlerinizi bildirin
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
