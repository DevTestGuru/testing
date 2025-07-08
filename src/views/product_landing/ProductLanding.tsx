import React, { useState, useEffect } from 'react';
import './ProductLanding.css';

interface TestimonialData {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  avatar: string;
}

interface FeatureData {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
}

const ProductLanding: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/images/company_logo.png';
  };

  const features: FeatureData[] = [
    {
      id: 1,
      title: "Property Management Dashboard",
      description: "Comprehensive overview of all your commercial properties with real-time analytics and performance metrics.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIKQCBNKJkAeuXLN4nzVTS70cFHYJUNkGj7Q&s",
      icon: "fas fa-chart-line"
    },
    {
      id: 2,
      title: "Lead Management System",
      description: "Track and nurture leads from initial contact to closing with automated workflows and follow-ups.",
      image: "https://www.1031crowdfunding.com/wp-content/uploads/2023/09/shutterstock_551119705-scaled.jpg",
      icon: "fas fa-user-plus"
    },
    {
      id: 3,
      title: "Deal Pipeline Tracking",
      description: "Visualize your entire sales pipeline with drag-and-drop deal management and forecasting tools.",
      image: "https://www.mashvisor.com/blog/wp-content/uploads/2019/07/7-Things-You-Need-to-Know-About-Commercial-Real-Estate.jpg",
      icon: "fas fa-tasks"
    },
    {
      id: 4,
      title: "Client Relationship Management",
      description: "Maintain detailed client profiles with interaction history, preferences, and communication logs.",
      image: "https://www.propertydrive.com/content/uploads/2019/02/pdrive-building3.png",
      icon: "fas fa-users"
    }
  ];

  const testimonials: TestimonialData[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Crest",
      role: "Senior Broker",
      content: "This CRM has revolutionized how we manage our commercial real estate portfolio. The lead tracking and automated follow-ups have increased our closing rate by 35%.",
      avatar: "https://img.logo.dev/crest.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=100&retina=true"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "The Home Depot",
      role: "Portfolio Manager",
      content: "The property management dashboard gives us real-time insights that help us make better investment decisions. It's become indispensable for our team.",
      avatar: "https://img.logo.dev/homedepot.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=100&retina=true"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Paypal",
      role: "Sales Director",
      content: "The deal pipeline visualization is incredible. We can now track every opportunity and never miss a follow-up. Our team productivity has improved dramatically.",
      avatar: "https://img.logo.dev/paypal.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=100&retina=true"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [features.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="product-landing-wrapper">
      <div className="product-landing">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Transform Your Commercial Real Estate Business
            </h1>
            <p className="hero-subtitle">
              The all-in-one CRM solution designed specifically for commercial real estate professionals. 
              Manage properties, track leads, and close deals faster than ever before.
            </p>
            <div className="hero-buttons">
              <button className="cta-button primary">Start Free Trial</button>
              <button className="cta-button secondary">Watch Demo</button>
            </div>
          </div>
        </div>
      </section>
      <section className="carousel-section">
        <div className="container">
          <h2 className="section-title">Powerful Features for Real Estate Professionals</h2>
          <div className="carousel-container">
            <div className="carousel-wrapper">
              <div 
                className="carousel-slides"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {features.map((feature) => (
                  <div key={feature.id} className="carousel-slide">
                    <div className="slide-content">
                      <div className="slide-image">
                        <img src={feature.image} alt={feature.title} onError={handleImageError} />
                      </div>
                      <div className="slide-text">
                        <h3>
                          <i className={feature.icon}></i>
                          {feature.title}
                        </h3>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="carousel-btn prev" onClick={prevSlide}>
              &#8249;
            </button>
            <button className="carousel-btn next" onClick={nextSlide}>
              &#8250;
            </button>
            <div className="carousel-dots">
              {features.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="product-info-section">
        <div className="container">
          <div className="info-grid">
            <div className="info-item">
              <div className="info-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9,22 9,12 15,12 15,22"/>
                </svg>
              </div>
              <h3>Property Management</h3>
              <p>Centralize all your commercial properties with detailed information, photos, documents, and performance analytics in one secure platform.</p>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="8.5" cy="7" r="4"/>
                  <path d="M20 8v6M23 11l-3 3-3-3"/>
                </svg>
              </div>
              <h3>Lead Generation</h3>
              <p>Capture leads from multiple sources, score them automatically, and nurture them through your sales funnel with personalized campaigns.</p>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Deal Tracking</h3>
              <p>Monitor every deal from initial contact to closing with customizable pipeline stages, automated reminders, and detailed reporting.</p>
            </div>
           
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Real Estate Companies</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">$2.5B+</div>
              <div className="stat-label">Deals Closed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">35%</div>
              <div className="stat-label">Average Increase in Closing Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonials-container">
            <div className="testimonial-wrapper">
              <div 
                className="testimonial-slides"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="testimonial-slide">
                    <div className="testimonial-content">
                      <div className="testimonial-quote">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z"/>
                        </svg>
                      </div>
                      <p className="testimonial-text">{testimonial.content}</p>
                      <div className="testimonial-author">
                        <img src={testimonial.avatar} alt={testimonial.name} onError={handleImageError} />
                        <div className="author-info">
                          <h4>{testimonial.name}</h4>
                          <p>{testimonial.role}</p>
                          <p className="company">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Real Estate Business?</h2>
            <p>Join hundreds of commercial real estate professionals who trust our CRM to grow their business.</p>
            <div className="cta-buttons">
              <button className="cta-button primary large">Start Your Free Trial</button>
              <button className="cta-button secondary large">Schedule a Demo</button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default ProductLanding; 