import type React from "react"

const Footer: React.FC = () => {
  return (
    <footer style={footerStyles}>
      <div style={containerStyles}>
        <div style={topSectionStyles}>
          <div style={brandSectionStyles}>
            <h3 style={brandTitleStyles}>SaaSwift</h3>
            <p style={brandDescriptionStyles}>Innovative solutions for modern professionals</p>
          </div>

          <div style={contactSectionStyles}>
            <h4 style={sectionTitleStyles}>Get In Touch</h4>
            <div style={contactGridStyles}>
              <div style={contactItemStyles}>
                <span style={contactIconStyles}>✉</span>
                <span>contact@demo.com</span>
              </div>
              <div style={contactItemStyles}>
                <span style={contactIconStyles}>📞</span>
                <span>+191 123-4567</span>
              </div>
              <div style={contactItemStyles}>
                <span style={contactIconStyles}>📍</span>
                <span>123 Demo Street, Tech City, India</span>
              </div>
            </div>
          </div>
        </div>

        <div style={bottomSectionStyles}>
          <div style={socialLinksStyles}>
            <span style={socialIconStyles}>🐦</span>
            <span style={socialIconStyles}>📘</span>
            <span style={socialIconStyles}>💼</span>
            <span style={socialIconStyles}>📷</span>
          </div>
          <p style={copyrightStyles}>© 2024 Demo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

const footerStyles: React.CSSProperties = {
  backgroundColor: "#2c3e50",
  color: "white",
  marginTop: "auto",
}

const containerStyles: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "3rem 2rem 1.5rem",
}

const topSectionStyles: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "3rem",
  marginBottom: "2rem",
}

const brandSectionStyles: React.CSSProperties = {
  textAlign: "left",
}

const brandTitleStyles: React.CSSProperties = {
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "1rem",
  color: "#ecf0f1",
}

const brandDescriptionStyles: React.CSSProperties = {
  fontSize: "1.1rem",
  color: "#bdc3c7",
  lineHeight: "1.6",
  margin: 0,
}

const contactSectionStyles: React.CSSProperties = {
  textAlign: "left",
}

const sectionTitleStyles: React.CSSProperties = {
  fontSize: "1.3rem",
  fontWeight: "bold",
  marginBottom: "1.5rem",
  color: "#ecf0f1",
}

const contactGridStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
}

const contactItemStyles: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  fontSize: "1rem",
  color: "#bdc3c7",
}

const contactIconStyles: React.CSSProperties = {
  fontSize: "1.2rem",
  width: "24px",
  textAlign: "center",
}

const bottomSectionStyles: React.CSSProperties = {
  borderTop: "1px solid #34495e",
  paddingTop: "1.5rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "1rem",
}

const socialLinksStyles: React.CSSProperties = {
  display: "flex",
  gap: "1rem",
}

const socialIconStyles: React.CSSProperties = {
  fontSize: "1.5rem",
  cursor: "pointer",
  transition: "transform 0.2s ease",
  padding: "0.5rem",
  borderRadius: "50%",
  backgroundColor: "#34495e",
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const copyrightStyles: React.CSSProperties = {
  fontSize: "0.9rem",
  color: "#95a5a6",
  margin: 0,
}

export default Footer
