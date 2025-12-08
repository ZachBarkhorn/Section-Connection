import React from 'react';
import AITutor from './AITutor';
import './AITutorModal.css';

export default function AITutorModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <AITutor />
      </div>
    </div>
  );
}
