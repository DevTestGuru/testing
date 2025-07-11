import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Rating,
  Chip,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import {
  ShoppingCart as ShoppingCartIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  LocalShipping as LocalShippingIcon,
  Autorenew as AutorenewIcon,
  EmojiNature as EmojiNatureIcon,
} from "@mui/icons-material";
import ProductLayout from "./ProductLayout";

const products = [
  {
    id: 1,
    name: "EcoFresh Ocean Blue",
    price: 29.99,
    rating: 4.8,
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    color: "Ocean Blue",
    description:
      "Our classic water bottle in a calming ocean blue color. Perfect for everyday use.",
    features: [
      "24-hour cold retention",
      "12-hour hot retention",
      "BPA-free",
      "Leak-proof cap",
    ],
    inStock: true,
  },
  {
    id: 2,
    name: "EcoFresh Forest Green",
    price: 29.99,
    rating: 4.7,
    reviews: 98,
    image:
      "https://images.unsplash.com/photo-1575377222312-dd1a63a51638?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    color: "Forest Green",
    description:
      "A nature-inspired green bottle that brings the outdoors with you wherever you go.",
    features: [
      "24-hour cold retention",
      "12-hour hot retention",
      "BPA-free",
      "Leak-proof cap",
    ],
    inStock: true,
  },
  {
    id: 3,
    name: "EcoFresh Matte Black",
    price: 34.99,
    rating: 4.9,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    color: "Matte Black",
    description:
      "Our premium matte black edition with a sleek finish and enhanced insulation.",
    features: [
      "36-hour cold retention",
      "18-hour hot retention",
      "BPA-free",
      "Leak-proof cap",
      "Extra grip texture",
    ],
    inStock: false,
  },
];

const ProductPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (productId: number) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter((id) => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  return (
    <ProductLayout>
      <Box
        sx={{
          position: "relative",
          height: { xs: "60vh", md: "80vh" },
          overflow: "hidden",
          bgcolor: "#e6f2ff",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6} sx={{ zIndex: 2 }}>
              <Box
                sx={{
                  opacity: 1,
                  transform: "translateX(0)",
                  transition: "opacity 0.8s, transform 0.8s",
                  animation: "fadeInLeft 0.8s ease-out",
                }}
              >
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 800,
                    fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
                    mb: 2,
                    color: "#1a365d",
                  }}
                >
                  EcoFresh <br />
                  <Box component="span" sx={{ color: "#3a86ff" }}>
                    Water Bottle
                  </Box>
                </Typography>
              </Box>

              <Box
                sx={{
                  opacity: 1,
                  transform: "translateX(0)",
                  transition: "opacity 0.8s, transform 0.8s",
                  animation: "fadeInLeft 0.8s ease-out 0.2s forwards",
                  animationFillMode: "both",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 400,
                    mb: 4,
                    color: "#4a5568",
                    maxWidth: "500px",
                  }}
                >
                  Stay hydrated with style. Our eco-friendly bottles keep your
                  drinks at the perfect temperature all day long.
                </Typography>
              </Box>

              <Box
                sx={{
                  opacity: 1,
                  transform: "translateY(0)",
                  transition: "opacity 0.6s, transform 0.6s",
                  animation: "fadeInUp 0.6s ease-out 0.4s forwards",
                  animationFillMode: "both",
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "#3a86ff",
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: "none",
                    fontSize: "1.1rem",
                    "&:hover": {
                      bgcolor: "#2563eb",
                    },
                  }}
                >
                  Shop Now
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    ml: 2,
                    borderColor: "#3a86ff",
                    color: "#3a86ff",
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: "none",
                    fontSize: "1.1rem",
                    "&:hover": {
                      borderColor: "#2563eb",
                      bgcolor: "rgba(58, 134, 255, 0.04)",
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                  zIndex: 1,
                  opacity: 1,
                  transform: "scale(1)",
                  transition: "opacity 0.8s, transform 0.8s",
                  animation: "fadeInScale 0.8s ease-out 0.3s forwards",
                  animationFillMode: "both",
                  "&:hover": {
                    transform: "scale(1.05)",
                    transition: "transform 0.3s ease",
                  },
                }}
              >
                <Box
                  component="img"
                  src={products[0].image}
                  alt="EcoFresh Water Bottle"
                  sx={{
                    width: "100%",
                    maxWidth: "500px",
                    height: "auto",
                    objectFit: "contain",
                    filter: "drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.2))",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Box
          sx={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(58,134,255,0.2) 0%, rgba(58,134,255,0) 70%)",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "5%",
            left: "10%",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(58,134,255,0.1) 0%, rgba(58,134,255,0) 70%)",
            zIndex: 0,
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} justifyContent="center" sx={{ mb: 8 }}>
          {[
            {
              icon: <LocalShippingIcon fontSize="large" />,
              title: "Free Shipping",
              desc: "On all orders over $50",
            },
            {
              icon: <AutorenewIcon fontSize="large" />,
              title: "Easy Returns",
              desc: "30-day money back guarantee",
            },
            {
              icon: <EmojiNatureIcon fontSize="large" />,
              title: "Eco-Friendly",
              desc: "Made from recycled materials",
            },
          ].map((feature, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Box
                sx={{
                  opacity: 0,
                  transform: "translateY(20px)",
                  animation: `fadeInUp 0.6s ease-out ${0.2 * index}s forwards`,
                  animationFillMode: "forwards",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    p: 3,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      bgcolor: "rgba(58, 134, 255, 0.1)",
                      color: "#3a86ff",
                      mb: 2,
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 600,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    {feature.desc}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 700,
              mb: 1,
            }}
          >
            Our Collection
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{
              fontFamily: '"Poppins", sans-serif',
              mb: 6,
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            Discover our range of sustainable water bottles designed for
            everyday use. Each bottle is crafted with premium materials for
            durability and performance.
          </Typography>

          <Grid container spacing={4}>
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Box
                  sx={{
                    opacity: 0,
                    transform: "translateY(30px)",
                    animation: `fadeInUp 0.6s ease-out ${
                      0.2 * index
                    }s forwards`,
                    animationFillMode: "forwards",
                  }}
                >
                  <Card
                    elevation={0}
                    sx={{
                      borderRadius: 3,
                      overflow: "hidden",
                      border: "1px solid #eaeaea",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                      },
                    }}
                  >
                    <Box sx={{ position: "relative" }}>
                      <Box
                        sx={{
                          transition: "transform 0.3s ease",
                          "&:hover": {
                            transform: "scale(1.05)",
                          },
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="260"
                          image={product.image}
                          alt={product.name}
                          sx={{
                            bgcolor: "#f8f9fa",
                            objectFit: "contain",
                            p: 2,
                          }}
                        />
                      </Box>

                      <IconButton
                        size="small"
                        sx={{
                          position: "absolute",
                          top: 12,
                          right: 12,
                          bgcolor: "white",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                          "&:hover": {
                            bgcolor: "white",
                          },
                        }}
                        onClick={() => toggleFavorite(product.id)}
                      >
                        {favorites.includes(product.id) ? (
                          <FavoriteIcon fontSize="small" color="error" />
                        ) : (
                          <FavoriteBorderIcon fontSize="small" />
                        )}
                      </IconButton>

                      {!product.inStock && (
                        <Chip
                          label="Out of Stock"
                          size="small"
                          sx={{
                            position: "absolute",
                            top: 12,
                            left: 12,
                            bgcolor: "rgba(0,0,0,0.7)",
                            color: "white",
                            fontFamily: '"Poppins", sans-serif',
                            fontWeight: 500,
                          }}
                        />
                      )}
                    </Box>

                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          mb: 1,
                        }}
                      >
                        <Typography
                          variant="h6"
                          component="h3"
                          sx={{
                            fontFamily: '"Poppins", sans-serif',
                            fontWeight: 600,
                            mb: 0.5,
                          }}
                        >
                          {product.name}
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            fontFamily: '"Poppins", sans-serif',
                            fontWeight: 700,
                            color: "#3a86ff",
                          }}
                        >
                          ${product.price}
                        </Typography>
                      </Box>

                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 2 }}
                      >
                        <Rating
                          value={product.rating}
                          precision={0.1}
                          size="small"
                          readOnly
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            ml: 1,
                            fontFamily: '"Poppins", sans-serif',
                            color: "text.secondary",
                          }}
                        >
                          ({product.reviews})
                        </Typography>
                      </Box>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          fontFamily: '"Poppins", sans-serif',
                          mb: 2,
                        }}
                      >
                        {product.description}
                      </Typography>

                      <Button
                        variant="contained"
                        fullWidth
                        startIcon={<ShoppingCartIcon />}
                        disabled={!product.inStock}
                        sx={{
                          mt: 2,
                          bgcolor: "#3a86ff",
                          fontFamily: '"Poppins", sans-serif',
                          fontWeight: 600,
                          textTransform: "none",
                          borderRadius: 2,
                          py: 1,
                          "&:hover": {
                            bgcolor: "#2563eb",
                          },
                          "&.Mui-disabled": {
                            bgcolor: "#e2e8f0",
                            color: "#94a3b8",
                          },
                        }}
                      >
                        {product.inStock ? "Add to Cart" : "Out of Stock"}
                      </Button>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </ProductLayout>
  );
};

export default ProductPage;
