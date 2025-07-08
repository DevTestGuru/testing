import type React from "react"

const Header: React.FC = () => {
  return (
    <header style={headerStyles}>
      <h1 style={titleStyles}>SaaSwift</h1>
    </header>
  )
}

const headerStyles: React.CSSProperties = {
  backgroundColor: "#2c3e50",
  color: "white",
  padding: "1rem 2rem",
  textAlign: "center",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
}

const titleStyles: React.CSSProperties = {
  margin: 0,
  fontSize: "2rem",
  fontWeight: "bold",
}

export default Header
