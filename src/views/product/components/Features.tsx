import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface FeaturesProps {
  features: Feature[];
}

const Features: React.FC<FeaturesProps> = ({ features }) => (
  <Box sx={{ backgroundColor: "white", py: 6 }}>
    <Container maxWidth="lg">
      <Typography
        variant="h3"
        align="center"
        fontWeight="bold"
        gutterBottom
      >
        Key Features
      </Typography>
      <Typography
        variant="h6"
        align="center"
        color="text.secondary"
        sx={{ mb: 6 }}
      >
        Discover what makes EcoSense the smart choice for your home
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  p: 3,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 4,
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ mb: 2 }}>
                    <Icon sx={{ fontSize: 40, color: "primary.main" }} />
                  </Box>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  </Box>
);

export default Features; 