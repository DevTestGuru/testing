import type React from "react"

const Features: React.FC = () => {
  const features = [
    {
      title: "High Performance",
      description: "Lightning-fast processing with optimized algorithms for maximum efficiency.",
    },
    {
      title: "User Friendly",
      description: "Intuitive interface designed for seamless user experience across all devices.",
    },
    {
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee for peace of mind.",
    },
  ]

  return (
    <section style={sectionStyles}>
      <h2 style={titleStyles}>Key Features</h2>
      <div style={featuresGridStyles}>
        {features.map((feature, index) => (
          <div key={index} style={featureCardStyles}>
            <h3 style={featureTitleStyles}>{feature.title}</h3>
            <p style={featureDescriptionStyles}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const sectionStyles: React.CSSProperties = {
  padding: "4rem 2rem",
  backgroundColor: "#f8f9fa",
}

const titleStyles: React.CSSProperties = {
  fontSize: "2.5rem",
  color: "#2c3e50",
  textAlign: "center",
  marginBottom: "3rem",
  fontWeight: "bold",
}

const featuresGridStyles: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "2rem",
  maxWidth: "1200px",
  margin: "0 auto",
}

const featureCardStyles: React.CSSProperties = {
  backgroundColor: "white",
  padding: "2rem",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  textAlign: "center",
}

const featureTitleStyles: React.CSSProperties = {
  fontSize: "1.5rem",
  color: "#2c3e50",
  marginBottom: "1rem",
  fontWeight: "bold",
}

const featureDescriptionStyles: React.CSSProperties = {
  fontSize: "1rem",
  lineHeight: "1.6",
  color: "#666",
  margin: 0,
}

export default Features
