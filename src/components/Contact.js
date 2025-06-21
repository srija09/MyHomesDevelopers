import React, { useState } from 'react';
import './Contact.css'; 

function Contact() {
  const contacts = [
    { name: 'K Venkapa Naidu', phone: '+91 9866311545' },
    { name: 'G Maheswara Rao', phone: '+91 9110736689' },
  ];

  const [copyMessage, setCopyMessage] = useState({ visible: false, text: '' });

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyMessage({ visible: true, text: 'Copied!' });
      setTimeout(() => {
        setCopyMessage({ visible: false, text: '' });
      }, 2000); // Message disappears after 2 seconds
    }).catch(err => {
      console.error('Failed to copy text: ', err);
      setCopyMessage({ visible: true, text: 'Failed to copy!' });
      setTimeout(() => {
        setCopyMessage({ visible: false, text: '' });
      }, 2000); // Message disappears after 2 seconds
    });
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title">Our Team</h1>
      <div className="contact-card-container">
        {contacts.map((contact, index) => (
          <div key={index} className="contact-person-card">
            <p className="person-name">{contact.name}</p>
            <div className="person-phone-group">
              <span className="person-phone">{contact.phone}</span>
              <span 
                className="copy-icon"
                onClick={() => copyToClipboard(contact.phone)}
                title="Copy phone number"
              >
                &#x2398;
              </span>
            </div>
          </div>
        ))}
      </div>
      {copyMessage.visible && (
        <div className="copy-feedback-message">
          {copyMessage.text}
        </div>
      )}
    </div>
  );
}

export default Contact;