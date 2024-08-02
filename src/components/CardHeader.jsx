import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const CardHeader = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  const cards = [
    {
      title: "Tüketiciler",
      description:
        "Dünyanın her yerindeki tüketicilerimizin daha sağlıklı, kaliteli ve lezzetli yiyecekler yiyebilmesi için tutkuyla çalışıyoruz.",
      path: "/globia-group",
      image: "img/card/tüketiciler.jpg",
    },
    {
      title: "Müşteriler",
      description:
        "Sağlıklı, lezzetli ve sürdürülebilir ürünlerimizi tüketiciyle buluşturan toptancılar ve mağazalarla çalışıyoruz.",
      path: "/globia-group",
      image: "img/card/müşteriler.jpg",
    },
    {
      title: "Şubeler ve Tedarikçiler",
      description:
        "Şubelerimiz ve tedarikçilerimizle samimi ve şeffaf ilişkiler sürdürür, karşılıklı saygı ve fayda temelinde uzun vadeli ilişkiler kurarız.",
      path: "/globia-group",
      image: "img/card/bayiler-tedarikçiler.jpg",
    },
    {
      title: "Tedarikçiler",
      description:
        "Tüketicilerimizin memnuniyetinde önemli rol oynayan tedarikçilerimizle yoğun işbirliğine önem veriyoruz.",
      path: "/globia-group",
      image: "img/card/tedarikçiler.jpg",
    },
    {
      title: "Çiftçi ve Üreticiler",
      description:
        "Ürünlerimizi sağlıklı ve sürdürülebilir bir gelecek için üretiyor, doğayla uyum içinde çalışan, gelecek nesilleri ön planda tutan bilinçli, duyarlı çiftçi ve üreticilerle çalışıyoruz.",
      path: "/globia-group",
      image: "img/card/çiftçi-üreticiler.jpg",
    },
  ];

  return (
    <div className="card-header-container">
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-md-2" key={index}>
            <div className="card" onClick={() => handleClick(card.path)}>
              <img src={card.image} alt={card.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardHeader;
