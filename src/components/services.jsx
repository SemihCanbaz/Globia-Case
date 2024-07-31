import React, { useState } from "react";
import { Modal } from "./modal";
import "../App.css";

export const Services = (props) => {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Markalarımız</h2>
          <p>
            Müşterilerimize en iyi hizmeti sunmak için sürekli olarak yenilikçi
            ve sürdürülebilir çözümler üretiyor, onlara en sağlıklı ve en iyi
            ürünleri sunmak ve ulaştırmak için çalışıyoruz. Globia olarak, her
            bir markamızla kalite standartlarını yükseltmeyi ve tüm dünyada öncü
            olmayı hedefliyoruz.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="service-desc">
                    {d.img && (
                      <img src={d.img} alt={d.name} className="service-img" />
                    )}
                    {d.icon && <i className={d.icon}></i>}
                    <h3>{d.name}</h3>
                    <p onClick={() => openModal(d.text)}>{d.text}</p>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
    </div>
  );
};
