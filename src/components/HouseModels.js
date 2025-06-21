import React from 'react';
import './HouseModels.css';

const HouseModels = () => {
  const shareImage = (imageName) => {
    const imageUrl = `${window.location.origin}/uploads/${imageName}`;
    if (navigator.share) {
      navigator.share({
        title: 'Check out this plan',
        text: 'View the detailed plan',
        url: imageUrl
      })
      .catch(error => console.log('Error sharing:', error));
    } else {
      // Fallback for browsers that don't support Web Share API
      window.open(imageUrl, '_blank');
    }
  };

  return (
    <div className="house-models-page">
      {/* PDF Viewer Section */}
      <div className="model-card pdf-viewer">
        <div className="model-details">
          <div className="document-item">
            <div className="document-name">
              <span className="feature-icon">📄</span>
              Complete House Plan PDF
            </div>
            <a 
              href="/uploads/FinalHousePlanPdf.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="view-button"
            >
              View PDF
            </a>
          </div>
        </div>
      </div>

      {/* East Facing House Plan */}
      <div className="model-card" id="model1">
        <div className="model-image">
          <img src="/uploads/flatsplan.jpg" alt="Model 1 Floor Plan" />
        </div>
        <div className="model-details">
          <h2>East Facing House Plan</h2>
          <div className="features-grid">
            <div className="feature-item">
              <span className="feature-icon">🏠</span>
              <span className="feature-text">Spacious 2BHK Layout</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🌅</span>
              <span className="feature-text">East Facing for Morning Sun</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🛋️</span>
              <span className="feature-text">Modern Living Room</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🍳</span>
              <span className="feature-text">Well-Designed Kitchen</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🚪</span>
              <span className="feature-text">Balcony Access</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🚗</span>
              <span className="feature-text">Car Parking Included</span>
            </div>
          </div>
          <button className="share-button" onClick={() => shareImage('flatsplan.jpg')}>
            Share House Plan
          </button>
        </div>
      </div>

      {/* Parking Plan */}
      <div className="model-card" id="model2">
        <div className="model-image">
          <img src="/uploads/parkingplan.jpg" alt="Parking Plan" />
        </div>
        <div className="model-details">
          <h2>Parking Plan</h2>
          <div className="features-grid">
            <div className="feature-item">
              <span className="feature-icon">🚗</span>
              <span className="feature-text">Dedicated parking spaces</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🅿️</span>
              <span className="feature-text">Visitor parking area</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔒</span>
              <span className="feature-text">Secure entry points</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🚶</span>
              <span className="feature-text">Easy pedestrian access</span>
            </div>
          </div>
          <button className="share-button" onClick={() => shareImage('parkingplan.jpg')}>
            Share Parking Plan
          </button>
        </div>
      </div>

      {/* Terrace Plan */}
      <div className="model-card" id="model3">
        <div className="model-image">
          <img src="/uploads/terraceplan.jpg" alt="Terrace Plan" />
        </div>
        <div className="model-details">
          <h2>Terrace Plan</h2>
          <div className="features-grid">
            <div className="feature-item">
              <span className="feature-icon">🌿</span>
              <span className="feature-text">Spacious Open Terrace</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🌺</span>
              <span className="feature-text">Garden Area</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💧</span>
              <span className="feature-text">Water Tank Access</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔧</span>
              <span className="feature-text">Utility Space</span>
            </div>
          </div>
          <button className="share-button" onClick={() => shareImage('terraceplan.jpg')}>
            Share Terrace Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default HouseModels;