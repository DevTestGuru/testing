import React from "react";
import { Box, Container, Typography, Grid, Button, useTheme } from "@mui/material";
import { Thermostat } from "@mui/icons-material";

interface HeroProps {
  model: string;
  price: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ model, price, description }) => {
  const theme = useTheme();
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: 3,
              p: 4,
              boxShadow: 3,
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: 300,
                backgroundColor: "#e3f2fd",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 3,
              }}
            >
              <Thermostat sx={{ fontSize: 120, color: theme.palette.primary.main }} />
            </Box>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              {model}
            </Typography>
            <Typography
              variant="h4"
              color="primary"
              fontWeight="bold"
              gutterBottom
            >
              {price}
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{ mt: 2, px: 4, py: 1.5 }}
            >
              Order Now
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Transform Your Home's Climate Control
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 3 }}
          >
            {description}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Button
              variant="outlined"
              color="success"
              size="small"
              sx={{ mr: 1, minWidth: 0, px: 1 }}
              disableElevation
              disabled
            >
              30% Savings
            </Button>
            <Typography variant="body1">
              Save up to 30% on energy bills
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              sx={{ mr: 1, minWidth: 0, px: 1 }}
              disableElevation
              disabled
            >
              App
            </Button>
            <Typography variant="body1">
              Control from anywhere with mobile app
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              variant="outlined"
              color="warning"
              size="small"
              sx={{ mr: 1, minWidth: 0, px: 1 }}
              disableElevation
              disabled
            >
              AI
            </Button>
            <Typography variant="body1">
              AI-powered temperature optimization
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero; 