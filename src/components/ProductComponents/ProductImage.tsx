import type React from "react"
import image from '../../assets/productimage/image.jpg'

const ProductImage: React.FC = () => {
  return (
    <section style={sectionStyles}>
      <img src={image} alt="Demo Product" style={imageStyles} />
    </section>
  )
}

const sectionStyles: React.CSSProperties = {
  padding: "2rem",
  textAlign: "center",
  backgroundColor: "#f8f9fa",
}

const imageStyles: React.CSSProperties = {
  maxWidth: "100%",
  // height: "auto",
  // borderRadius: "8px",
  // boxShadow: "0 4px 8px rgba(0,0,0,0.1)",

    // maxWidth: "100%",
  width: "950px",
  height: "400px",
  objectFit: "cover",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
}

export default ProductImage
