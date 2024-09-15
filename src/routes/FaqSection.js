import React from 'react';
import './FaqSection.css'; // Importing the CSS file

const faqData = [
  {
    title: 'How is Tangerine healthy?',
    description: 'Tangerines are a great health booster due to their high vitamin C content, which supports the immune system and skin health.',
    image: 'https://via.placeholder.com/60', // Replace with the actual image URL
  },
  {
    title: 'How is Tangerine healthy?',
    description: 'Tangerines are a great health booster due to their high vitamin C content, which supports the immune system and skin health.',
    image: 'https://via.placeholder.com/60',
  },
  {
    title: 'How is Tangerine healthy?',
    description: 'Tangerines are a great health booster due to their high vitamin C content, which supports the immune system and skin health.',
    image: 'https://via.placeholder.com/60',
  },
  {
    title: 'How is Tangerine healthy?',
    description: 'Tangerines are a great health booster due to their high vitamin C content, which supports the immune system and skin health.',
    image: 'https://via.placeholder.com/60',
  },
];

const FaqSection = () => {
  return (
    <div className="faq-container">
      <h2>FAQ Section</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <img src={faq.image} alt="Tangerine" className="faq-image" />
            <div className="faq-content">
              <h3>{faq.title}</h3>
              <p>{faq.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
