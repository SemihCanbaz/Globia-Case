import React, { useEffect, useState } from "react";
import "../App.css";

export const Modal = ({ isOpen, onClose, content, image, title, url }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 1000); // 2 saniye bekle
      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className={`modal-content ${isOpen ? "show" : ""}`}>
        <div className="modal-header">
          {image && (
            <img src={image} alt="Detailed view" className="modal-img" />
          )}
          <h3>{title}</h3>
        </div>
        <div className={`modal-details ${showContent ? "show-content" : ""}`}>
          <p>{content}</p>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-url"
            >
              Daha Fazla Bilgi
            </a>
          )}
        </div>
        <button className="modal-more-info" onClick={onClose}>
          Kapat
        </button>
      </div>
    </div>
  );
};
