import React from 'react'
import './product.css';

export default function Product() {
  return (
    <>
      <div className="product-landing">
        <header className="product-header">
          <h1>SmartFit Watch X</h1>
        </header>

        <div className="product-image">
          <img
            src="https://image.doba.com/dg-SKDjqokqHQvR/d0102hpizua.jpg"
            alt="SmartFit Watch X"
          />
        </div>

        <section className="product-description">
          <p>
            The SmartFit Watch X keeps you connected and tracks your fitness goals
            24/7. With advanced sensors and a sleek design, it’s your perfect
            companion for a healthy lifestyle.
          </p>
        </section>

        <section className="product-features">
          <h2>Key Features</h2>
          <ul>
            <li> Real-time heart rate monitoring</li>
            <li> GPS and step tracking</li>
            <li> 7-day battery life</li>
          </ul>
        </section>

      </div>
      <footer className="product-footer">
        <p>Contact us: support@smartfit.com | +1 (xxx) xxx-xxxx</p>
      </footer>
    </>
  )
}
