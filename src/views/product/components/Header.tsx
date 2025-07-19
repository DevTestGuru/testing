import React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";

interface HeaderProps {
  name: string;
  tagline: string;
}

const Header: React.FC<HeaderProps> = ({ name, tagline }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: "white",
        py: 3,
        boxShadow: 2,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h1"
          align="center"
          fontWeight="bold"
        >
          {name}
        </Typography>
        <Typography variant="h6" align="center" sx={{ mt: 1, opacity: 0.9 }}>
          {tagline}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header; 