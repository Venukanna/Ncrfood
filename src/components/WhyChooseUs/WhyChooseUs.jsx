// src/components/WhyChooseUs/WhyChooseUs.jsx
import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      icon: '🌱',
      title: 'Natural Ingredients',
      description: 'We use only the finest natural ingredients in all our products'
    },
    {
      icon: '⚡',
      title: 'Sustained Energy',
      description: 'Our products provide long-lasting energy without crashes'
    },
    {
      icon: '🌍',
      title: 'Sustainable Practices',
      description: 'We\'re committed to environmentally friendly production'
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <h2 className="section-title">Why Choose NCR</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;