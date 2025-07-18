import React from "react";
import "../../assets/css/product-landing.css";

const ProductLanding = () => {
  return (
    <div className="product-page">
      <header className="product-header">
        <h1>StormWidget 3000</h1>
      </header>

      <section className="product-image">
        <img src="https://placehold.co/600x400" alt="StormWidget 3000" />
      </section>

      <section className="product-description">
        <p>The ultimate productivity gadget to supercharge your workflow.</p>
      </section>

      <section className="product-features">
        <div className="feature">⚡ Ultra-fast performance</div>
        <div className="feature">🔋 48-hour battery life</div>
        <div className="feature">🌐 Seamless cloud sync</div>
      </section>

      <footer className="product-footer">
        <p>Contact us: support@stormwidget.com</p>
      </footer>
    </div>
  );
};

export default ProductLanding;