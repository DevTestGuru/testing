// landing_components/hero.js
import React from "react";
import lampImage from "../assets/imgs/lamp_hero.jpeg";

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1>Meet GlimmerLamp™</h1>
          <p>
            The next-gen smart lamp that adapts to your mood and space. With
            voice control, color-changing LEDs, and an energy-saving mode, it’s
            the perfect blend of form and function.
          </p>
          <a href="#features" className="btn btn--primary">
            Learn More
          </a>
        </div>
        <div className="hero__image">
          <img src={lampImage} alt="GlimmerLamp on a bedside table" />
        </div>
      </div>
    </section>
  );
}
