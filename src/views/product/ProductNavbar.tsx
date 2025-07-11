import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Menu,
  Badge,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  ShoppingCart as ShoppingCartIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  Search as SearchIcon,
} from "@mui/icons-material";

const ProductNavbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartAnchorEl, setCartAnchorEl] = useState<null | HTMLElement>(null);
  const cartOpen = Boolean(cartAnchorEl);

  const handleCartClick = (event: React.MouseEvent<HTMLElement>) => {
    setCartAnchorEl(event.currentTarget);
  };

  const handleCartClose = () => {
    setCartAnchorEl(null);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        color: "#333",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 700,
                color: "#3a86ff",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              EcoFresh
            </Typography>
          </Box>

          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {["Home", "Products", "About", "Contact"].map((page) => (
                <Box key={page}>
                  <Button
                    sx={{
                      mx: 1,
                      color: "#333",
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 500,
                      "&:hover": {
                        color: "#3a86ff",
                      },
                    }}
                  >
                    {page}
                  </Button>
                </Box>
              ))}
            </Box>
          )}

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton size="large" color="inherit" sx={{ ml: 1 }}>
              <SearchIcon />
            </IconButton>

            <IconButton
              size="large"
              color="inherit"
              sx={{ ml: 1 }}
              onClick={handleCartClick}
            >
              <Badge badgeContent={3} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            {isMobile && (
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
                sx={{ ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>

      <Menu
        anchorEl={cartAnchorEl}
        open={cartOpen}
        onClose={handleCartClose}
        PaperProps={{
          sx: {
            mt: 1.5,
            width: 320,
            boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
            borderRadius: 2,
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Box sx={{ p: 2 }}>
          <Typography
            variant="h6"
            sx={{ mb: 2, fontFamily: '"Poppins", sans-serif' }}
          >
            Your Cart (3)
          </Typography>
          {[
            { name: "EcoFresh Blue", price: "$29.99", quantity: 1 },
            { name: "EcoFresh Green", price: "$29.99", quantity: 1 },
            { name: "EcoFresh Black", price: "$34.99", quantity: 1 },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 1.5,
                pb: 1.5,
                borderBottom: index < 2 ? "1px solid #eee" : "none",
              }}
            >
              <Box>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  Qty: {item.quantity}
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{ fontWeight: 600, fontFamily: '"Poppins", sans-serif' }}
              >
                {item.price}
              </Typography>
            </Box>
          ))}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
              pt: 2,
              borderTop: "1px solid #eee",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, fontFamily: '"Poppins", sans-serif' }}
            >
              Total:
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, fontFamily: '"Poppins", sans-serif' }}
            >
              $94.97
            </Typography>
          </Box>
          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              bgcolor: "#3a86ff",
              fontFamily: '"Poppins", sans-serif',
              "&:hover": {
                bgcolor: "#2563eb",
              },
            }}
          >
            Checkout
          </Button>
        </Box>
      </Menu>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: "70%",
            maxWidth: 300,
            bgcolor: "#fff",
            p: 2,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <IconButton onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {["Home", "Products", "About", "Contact"].map((text) => (
            <ListItem button key={text} sx={{ borderRadius: 1, mb: 1 }}>
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 500,
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default ProductNavbar;
