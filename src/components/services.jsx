import React, { useState } from "react";
import { Modal } from "./modal";
import "../App.css";

export const Services = (props) => {
  const [modalContent, setModalContent] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [modalTitle, setModalTitle] = useState(null);
  const [modalUrl, setModalUrl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (content, image, title, url) => {
    setModalContent(content);
    setModalImage(image);
    setModalTitle(title);
    setModalUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
    setModalImage(null);
    setModalTitle(null);
    setModalUrl(null);
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
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                    <button
                      className="more-info"
                      onClick={() => openModal(d.text, d.img, d.name, d.url)}
                    >
                      Daha Fazla Bilgi
                    </button>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        content={modalContent}
        image={modalImage}
        title={modalTitle}
        url={modalUrl}
      />
    </div>
  );
};
