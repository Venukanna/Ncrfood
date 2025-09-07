import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Fitness Trainer',
    content: 'These protein bars are my go-to snack after workouts. They taste amazing and keep me full for hours!',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Marathon Runner',
    content: 'The perfect balance of protein and carbs for my long training runs. Better than any other bar I\'ve tried.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Nutritionist',
    content: 'As a nutritionist, I appreciate the clean ingredients and balanced macros. My clients love them!',
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2>What Our Customers Say</h2>
      <p className="section-subtitle">Don't just take our word for it - hear from our satisfied customers</p>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`star ${i < testimonial.rating ? 'filled' : ''}`}>★</span>
              ))}
            </div>
            <p className="testimonial-content">"{testimonial.content}"</p>
            <div className="testimonial-author">
              <h4>{testimonial.name}</h4>
              <p>{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
