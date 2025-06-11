import React from 'react';
import './About.css'; // Assuming we'll use About.css for styling

function About() {
  const builders = [
    { name: 'K Venkapa Naidu' },
    { name: 'G Maheswara Rao' },
    { name: 'G. Masthan Chowdary' },
    { name: 'K. Kalyani' },
  ];

  return (
    <div className="about-page">
      <h1 className="about-title">Our Builders</h1>
      <div className="builders-card-container">
        {builders.map((builder, index) => (
          <div key={index} className="builder-card">
            <div className="builder-circle"></div>
            <p className="builder-name">{builder.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;