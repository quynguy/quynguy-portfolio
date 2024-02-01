import React from 'react';

function Modal({ onClose, project }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>Close</button>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <iframe src={project.demoLink} title={project.name}> </iframe>
      </div>
    </div>
  );
}

export default Modal;
