import React from "react";
import "../App.css"; // CSS dosyanızın doğru yüklendiğinden emin olun

export const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <p>{content}</p>
      </div>
    </div>
  );
};
