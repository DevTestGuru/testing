import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material";

const ProductFooter = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const footerLinks = [
    {
      title: "Shop",
      links: ["All Products", "New Arrivals", "Best Sellers", "Sale"],
    },

    {
      title: "Help",
      links: ["FAQs", "Shipping", "Returns", "Contact Us"],
    },
  ];

  const socialIcons = [
    { icon: <FacebookIcon />, label: "Facebook", color: "#1877F2" },
    { icon: <TwitterIcon />, label: "Twitter", color: "#1DA1F2" },
    { icon: <InstagramIcon />, label: "Instagram", color: "#E4405F" },
    { icon: <YouTubeIcon />, label: "YouTube", color: "#FF0000" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#f8f9fa",
        pt: 8,
        pb: 3,
        borderTop: "1px solid #eaeaea",
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "center" },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 700,
                color: "#3a86ff",
                mb: 2,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              EcoFresh
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mb: 3,
                fontFamily: '"Poppins", sans-serif',
                maxWidth: "300px",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Committed to providing eco-friendly hydration solutions that help
              reduce plastic waste while keeping you stylishly hydrated.
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                alignItems: "center",
                gap: 1,
                mb: 3,
              }}
            >
              {socialIcons.map((social, index) => (
                <Box
                  key={index}
                  sx={{
                    transition: "transform 0.2s",
                    "&:hover": { transform: "translateY(-5px)" },
                  }}
                >
                  <IconButton
                    aria-label={social.label}
                    sx={{
                      bgcolor: social.color,
                      color: "white",
                      "&:hover": {
                        bgcolor: social.color,
                        opacity: 0.9,
                      },
                    }}
                    size="small"
                  >
                    {social.icon}
                  </IconButton>
                </Box>
              ))}
            </Box>
          </Grid>

          {footerLinks.map((column, index) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={2}
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 600,
                  mb: 2,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {column.title}
              </Typography>
              <Box
                component="ul"
                sx={{
                  p: 0,
                  m: 0,
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", md: "flex-start" },
                }}
              >
                {column.links.map((link, linkIndex) => (
                  <Box component="li" key={linkIndex} sx={{ mb: 1 }}>
                    <Link
                      href="#"
                      underline="hover"
                      color="text.secondary"
                      sx={{
                        fontFamily: '"Poppins", sans-serif',
                        fontSize: "0.875rem",
                        transition: "color 0.2s",
                        "&:hover": {
                          color: "#3a86ff",
                        },
                      }}
                    >
                      {link}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 600,
                mb: 2,
                textAlign: "center",
              }}
            >
              Contact Us
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                <EmailIcon sx={{ color: "#3a86ff" }} />
                <Typography
                  variant="body2"
                  sx={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  info@ecofresh.com
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                <PhoneIcon sx={{ color: "#3a86ff" }} />
                <Typography
                  variant="body2"
                  sx={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  (555) 123-4567
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                <LocationIcon sx={{ color: "#3a86ff" }} />
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    textAlign: "center",
                  }}
                >
                  123 Green Street
                  <br />
                  Eco City, EC 12345
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "center" : "flex-start",
            gap: isMobile ? 2 : 0,
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontFamily: '"Poppins", sans-serif' }}
          >
            © {new Date().getFullYear()} EcoFresh. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            {["Privacy Policy", "Terms of Service", "Sitemap"].map(
              (item, index) => (
                <Link
                  key={index}
                  href="#"
                  underline="hover"
                  color="text.secondary"
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "0.75rem",
                  }}
                >
                  {item}
                </Link>
              )
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductFooter;
