// src/pages/About/About.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

import './About.css';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About NCR | Healthy Energy Concepts</title>
        <meta 
          name="description" 
          content="Learn about NCR Healthy Energy and our mission to provide natural protein bars and supplements for your active lifestyle." 
        />
      </Helmet>

      <main className="about-page">
        <section className="about-hero">
          <div className="about-hero-content">
            <h1>About NCR Healthy Energy</h1>
            <p>Fueling your active lifestyle with natural ingredients</p>
          </div>
        </section>

        <section className="about-content">
          <div className="about-mission">
            <h2>Our Mission</h2>
            <p>
              NCR is dedicated to providing you with the best in nutrition through our 7 nut protein bar 
              and natural supplements. Our products are designed to fuel your energy during workouts, 
              helping you achieve your fitness goals.
            </p>
            <p>
              We believe in the power of wholesome ingredients to support your active lifestyle. 
              Join us on a journey to optimize your health and performance with every bite!
            </p>
          </div>

          <div className="about-difference">
            <h2>Our Difference</h2>
            <p>
              At NCR, we are dedicated to providing you with convenient and nutritious choices that 
              enhance your active lifestyle. Our commitment to natural ingredients and sustainable 
              practices distinguishes us, ensuring you receive best for your body.
            </p>
            <p>
              Experience the difference with our thoughtfully crafted products designed to support your 
              health and well-being. Join us on this journey toward a brighter, healthier future!
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;