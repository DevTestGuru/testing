import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";

interface FooterProps {
  company: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  copyright: string;
}

const Footer: React.FC<FooterProps> = ({
  company,
  description,
  email,
  phone,
  address,
  copyright,
}) => (
  <Box
    sx={{
      backgroundColor: "#212121",
      color: "white",
      py: 4,
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            {company}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {description}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Contact Information
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Email sx={{ mr: 1, fontSize: 20 }} />
            <Typography variant="body2">{email}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Phone sx={{ mr: 1, fontSize: 20 }} />
            <Typography variant="body2">{phone}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LocationOn sx={{ mr: 1, fontSize: 20 }} />
            <Typography variant="body2">{address}</Typography>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          borderTop: 1,
          borderColor: "grey.700",
          mt: 3,
          pt: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="body2" color="grey.400">
          {copyright}
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer; 