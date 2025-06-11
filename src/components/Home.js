import React from 'react';

const amenitiesRow1 = [
  'East facing flats',
  '1500Sq.ft Flats',
  'Large utility area',
  '24/7 security',
];
const amenitiesRow2 = [
  'Dedicated parking',
  'Spacious Corridors',
  '3BHK flats',
  '2 Flats per floor',
];

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <img src="/uploads/exterior.jpg" alt="Apartment Exterior" className="animated-img" />
        <div className="hero-overlay">
          <div className="overlay-content">
            <h2>Municipality approved 3BHK flats</h2>
            <p>in Vengalrao Nagar, Kavali</p>
            <p>Call us @ 8096510753</p>
          </div>
        </div>
      </div>

      {/* Animated amenities highlights */}
      <div className="amenities-highlights">
        <div className="amenities-row marquee">
          <div className="marquee-inner">
            {amenitiesRow1.map((word, idx) => (
              <span className="amenity-badge" key={idx}>{word}</span>
            ))}
            {amenitiesRow1.map((word, idx) => (
              <span className="amenity-badge" key={`dup1-${idx}`}>{word}</span>
            ))}
            {amenitiesRow1.map((word, idx) => (
              <span className="amenity-badge" key={`dup2-${idx}`}>{word}</span>
            ))}
          </div>
        </div>
        <div className="amenities-row marquee marquee2">
          <div className="marquee-inner">
            {amenitiesRow2.map((word, idx) => (
              <span className="amenity-badge" key={idx}>{word}</span>
            ))}
            {amenitiesRow2.map((word, idx) => (
              <span className="amenity-badge" key={`dup1-${idx}`}>{word}</span>
            ))}
            {amenitiesRow2.map((word, idx) => (
              <span className="amenity-badge" key={`dup2-${idx}`}>{word}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="pricing colored-section">
          <p className="price-text">3BHK at only ₹65 Lakhs<br/>in our Kavali!!!</p>
          <a 
            href="https://wa.me/8247754697?text=I%20am%20interested%20to%20buy%20flat%20in%20My%20Homes%20Developers.%20Let's%20discuss!" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="whatsapp-button"
          >
            <span className="whatsapp-icon">💬</span>
            Chat on WhatsApp
          </a>
        </div>

        <div className="map">
          <h2>Our Location</h2>
          <div className="map-preview">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d711.7082300162483!2d79.98400889999999!3d14.90930909591211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b7b8b0f5a8c85%3A0x8b52994097c34c4c!2s11-33-949%2F9%2C%20Janathapet%2C%20Vengal%20Rao%20Nagar%2C%20Kavali%2C%20Andhra%20Pradesh%20524201!5e1!3m2!1sen!2sin!4v1749660212089!5m2!1sen!2sin" 
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map - APT Builders Kavali"
            ></iframe>
            <a 
              href="https://maps.app.goo.gl/kguySXiubhLiogBV8" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="map-overlay"
            >
              <span className="map-text">View on Google Maps</span>
              <span className="map-icon">→</span>
            </a>
          </div>
          <p className="map-address">Vengalrao Nagar, Kavali, Andhra Pradesh</p>
        </div>

        <div className="documents-section">
          <div className="documents-card">
            <div className="document-item">
              <div className="document-name">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                </svg>
                Govt. of AP Registration form
              </div>
              <a href="/uploads/registration.pdf" className="view-button" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
                View
              </a>
            </div>

            <div className="document-item">
              <div className="document-name">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                </svg>
                GST Certificate
              </div>
              <a href="/uploads/gst.pdf" className="view-button" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
                View
              </a>
            </div>

            <div className="document-item">
              <div className="document-name">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                </svg>
                Partnership deed
              </div>
              <a href="/uploads/partnership.pdf" className="view-button" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
                View
              </a>
            </div>
          </div>
        </div>

        <div className="about-tilebar colored-section">
          <h2>About Us</h2>
          <p>
            We are dedicated to building premium apartments with modern
            designs and top-notch amenities. Learn more about our vision and
            team.
          </p>
          <a href="/about" className="cta-button">
            Meet Our Team
          </a>
        </div>
      </div>

      <a href="tel:+918247754697" className="call-button" aria-label="Call us">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
        </svg>
        <div className="call-text">
          <span>Call us</span>
          <span>now!</span>
        </div>
      </a>
    </div>
  );
}

export default Home;