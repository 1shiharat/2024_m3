import React, { useState, useEffect } from 'react';

function Modal({ spot, theme, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(prev => 
        (prev + 1) % spot.map_image.length
      );
    }, 2000);

    return () => clearInterval(timer);
  }, [spot.map_image]);

  const getImageTransition = () => {
    switch(theme.name) {
      case 'ダーク':
        return 'opacity 2s';
      case 'オレンジ':
        return 'transform 2s';
      default:
        return 'none';
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content"
        onClick={e => e.stopPropagation()}
        style={{
          background: theme.modalGradient,
          color: '#FFFFFF'
        }}
      >
        <img
          src={spot.map_image[currentImageIndex]}
          alt={spot.name}
          style={{
            transition: getImageTransition(),
            transform: theme.name === 'オレンジ' ? 'translateY(0)' : 'none'
          }}
        />
        <h2>{spot.name}</h2>
        <p>{spot.description}</p>
        <button onClick={onClose}>閉じる</button>
      </div>
    </div>
  );
}

export default Modal; 