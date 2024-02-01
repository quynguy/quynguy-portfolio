import React from 'react';

function Modal({ onClose, project }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>Close</button>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        {/* Use an iframe to embed the demo website */}
        <iframe src={project.demoLink} title={project.name}> </iframe>
        {/* Add any other project details here */}
      </div>
    </div>
  );
}

export default Modal;
