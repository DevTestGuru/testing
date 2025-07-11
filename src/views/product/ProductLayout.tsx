import React from "react";
import { Box } from "@mui/material";
import ProductNavbar from "./ProductNavbar";
import ProductFooter from "./ProductFooter";

interface ProductLayoutProps {
  children: React.ReactNode;
}

const ProductLayout: React.FC<ProductLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        fontFamily: '"Poppins", sans-serif',
        backgroundColor: "#f8f9fa",
      }}
    >
      <ProductNavbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <ProductFooter />
    </Box>
  );
};

export default ProductLayout;
