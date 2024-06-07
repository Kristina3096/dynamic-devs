import React from 'react';
import './ConfirmDeleteModal.css';

const ConfirmDeleteModal = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <p>A je i sigurt që do të fshish këtë artikull?</p>
        <button onClick={onConfirm}>Po</button>
        <button onClick={onCancel}>Jo</button>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;