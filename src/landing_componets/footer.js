// landing_components/footer.js
import React from "react";
export default function Footer() {
  return (
    <footer className="footer section">
      <div className="container footer__inner">
        <div>
          <h4>Support</h4>
          <a href="mailto:support@glimmerlamp.com">support@glimmerlamp.com</a>
          <br />
          <a href="tel:+1234567890">+1 (234) 567-890</a>
        </div>
        <div>
          <h4>Company</h4>
          <a href="#about">About Us</a>
          <br />
          <a href="#blog">Blog</a>
        </div>
        <div>
          <h4>Follow Us</h4>
          {/* swap in your social icons */}
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>
      </div>
      <p className="footer__bottom">© 2025 GlimmerLamp™ Inc.</p>
    </footer>
  );
}
