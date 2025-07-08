import type React from "react"

const ProductDescription: React.FC = () => {
  return (
    <section style={sectionStyles}>
      <h2 style={titleStyles}>About Our Product</h2>
      <p style={descriptionStyles}>
        Experience the future with our innovative Demo product. Designed with cutting-edge technology and user-centric
        approach, this product delivers exceptional performance and reliability. Perfect for modern professionals who
        demand excellence in every aspect of their work.
      </p>
    </section>
  )
}

const sectionStyles: React.CSSProperties = {
  padding: "3rem 2rem",
  maxWidth: "800px",
  margin: "0 auto",
  textAlign: "center",
}

const titleStyles: React.CSSProperties = {
  fontSize: "2.5rem",
  color: "#2c3e50",
  marginBottom: "1.5rem",
  fontWeight: "bold",
}

const descriptionStyles: React.CSSProperties = {
  fontSize: "1.2rem",
  lineHeight: "1.6",
  color: "#555",
  margin: 0,
}

export default ProductDescription
