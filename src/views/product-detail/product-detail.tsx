import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Paper,
  Button,
} from "@mui/material";

function ProductDetail() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
            Jeep Wrangler
          </Typography>
        </Toolbar>
      </AppBar>

      <Container component={"main"} sx={{ mt: 6 }}>
        <Box display="flex" justifyContent="center" mb={4}>
          <img
            src="https://prd.place/400/300?id=10"
            alt="Jeep Wrangler"
            style={{ maxWidth: "100%", borderRadius: 8 }}
          />
        </Box>

        <Typography variant="h5" component="main" align="center" gutterBottom>
          Built for adventure. This Jeep Wrangler is your perfect companion on
          and off the road.
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Off-Road Suspension
              </Typography>
              <Typography>
                High-clearance suspension and rugged tires built for any
                terrain.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Spotlight Visibility
              </Typography>
              <Typography>
                Front-mounted lights for enhanced night and trail driving.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Removable Soft Top
              </Typography>
              <Typography>
                Convertible top for open-air freedom wherever you go.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Box textAlign="center" mt={6}>
          <Button variant="contained" color="primary" size="large">
            Schedule a Test Drive
          </Button>
        </Box>
      </Container>

      <Box component="footer" sx={{ mt: 8, py: 3, backgroundColor: "#f5f5f5" }}>
        <Container>
          <Typography align="center" color="textSecondary">
            Contact us at: sales@trailblazermotors.com | (123) 456-7890
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default ProductDetail;
