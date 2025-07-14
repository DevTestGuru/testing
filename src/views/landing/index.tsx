import {
	AppBar,
	Toolbar,
	Typography,
	Container,
	Box,
	Card,
	CardContent,
	Grid,
	Button,
	Chip,
	Paper,
} from '@mui/material'
import { FitnessCenter, MonitorHeart, WaterDrop, Phone, Email, LocationOn } from '@mui/icons-material'

export default function ProductLanding() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
						FitPro X1
					</Typography>
					<Button color="inherit" sx={{ ml: 2 }}>
						Buy Now
					</Button>
				</Toolbar>
			</AppBar>

			<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
				<Grid container spacing={4} alignItems="center">
					<Grid item xs={12} md={6}>
						<Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
							<Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
								FitPro X1
							</Typography>
							<Typography variant="h5" component="h2" gutterBottom sx={{ color: '#666', mb: 3 }}>
								The Ultimate Smart Fitness Tracker
							</Typography>
							<Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.6, mb: 4 }}>
								Transform your fitness journey with the FitPro X1 - a cutting-edge wearable device that monitors your
								health 24/7, tracks your workouts with precision, and motivates you to achieve your fitness goals. With
								advanced sensors and AI-powered insights, it's more than just a fitness tracker - it's your personal
								health companion.
							</Typography>
							<Box
								sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' }, flexWrap: 'wrap' }}
							>
								<Button variant="contained" size="large" sx={{ px: 4, py: 1.5 }}>
									Order Now - $199
								</Button>
								<Button variant="outlined" size="large" sx={{ px: 4, py: 1.5 }}>
									Learn More
								</Button>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={12} md={6}>
						<Box sx={{ display: 'flex', justifyContent: 'center' }}>
							<img
								src="https://m.media-amazon.com/images/I/61kKbv4WA3L._AC_SX569_.jpg"
								alt="FitPro X1 Smart Fitness Tracker"
								width={400}
								height={400}
								style={{
									maxWidth: '100%',
									height: 'auto',
									borderRadius: '16px',
									boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
								}}
							/>
						</Box>
					</Grid>
				</Grid>
			</Container>

			<Box sx={{ backgroundColor: '#f5f5f5', py: 6 }}>
				<Container maxWidth="lg">
					<Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 5, fontWeight: 'bold' }}>
						Key Features
					</Typography>
					<Grid container spacing={4}>
						<Grid item xs={12} md={4}>
							<Card sx={{ height: '100%', textAlign: 'center', p: 3, boxShadow: 3 }}>
								<Box sx={{ mb: 2 }}>
									<MonitorHeart sx={{ fontSize: 60, color: '#1976d2' }} />
								</Box>
								<CardContent>
									<Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
										24/7 Heart Rate Monitoring
									</Typography>
									<Typography variant="body1" sx={{ color: '#666', lineHeight: 1.6 }}>
										Advanced optical sensors provide continuous heart rate tracking throughout the day and night, giving
										you insights into your cardiovascular health and workout intensity.
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12} md={4}>
							<Card sx={{ height: '100%', textAlign: 'center', p: 3, boxShadow: 3 }}>
								<Box sx={{ mb: 2 }}>
									<FitnessCenter sx={{ fontSize: 60, color: '#1976d2' }} />
								</Box>
								<CardContent>
									<Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
										Multi-Sport Tracking
									</Typography>
									<Typography variant="body1" sx={{ color: '#666', lineHeight: 1.6 }}>
										Track over 50 different sports and activities with precision. From running and cycling to swimming
										and yoga, get detailed metrics for every workout.
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12} md={4}>
							<Card sx={{ height: '100%', textAlign: 'center', p: 3, boxShadow: 3 }}>
								<Box sx={{ mb: 2 }}>
									<WaterDrop sx={{ fontSize: 60, color: '#1976d2' }} />
								</Box>
								<CardContent>
									<Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
										Waterproof Design
									</Typography>
									<Typography variant="body1" sx={{ color: '#666', lineHeight: 1.6 }}>
										With 5ATM water resistance, wear your FitPro X1 while swimming, showering, or in the rain. Built to
										withstand your active lifestyle in any environment.
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Container maxWidth="lg" sx={{ py: 6 }}>
				<Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 5, fontWeight: 'bold' }}>
					Specifications
				</Typography>
				<Grid container spacing={3} justifyContent="center">
					<Grid item xs={12} sm={6} md={3}>
						<Paper sx={{ p: 3, textAlign: 'center' }}>
							<Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
								Battery Life
							</Typography>
							<Chip label="7 Days" color="primary" size="medium" />
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Paper sx={{ p: 3, textAlign: 'center' }}>
							<Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
								Display
							</Typography>
							<Chip label="1.4″ AMOLED" color="primary" size="medium" />
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Paper sx={{ p: 3, textAlign: 'center' }}>
							<Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
								Connectivity
							</Typography>
							<Chip label="Bluetooth 5.0" color="primary" size="medium" />
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Paper sx={{ p: 3, textAlign: 'center' }}>
							<Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
								Weight
							</Typography>
							<Chip label="32g" color="primary" size="medium" />
						</Paper>
					</Grid>
				</Grid>
			</Container>

			<Box sx={{ backgroundColor: '#333', color: 'white', py: 4, mt: 6 }}>
				<Container maxWidth="lg">
					<Grid container spacing={4}>
						<Grid item xs={12} md={4}>
							<Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
								Contact Information
							</Typography>
							<Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
								<Phone sx={{ mr: 1, fontSize: 20 }} />
								<Typography variant="body2">+1 (555) 123-4567</Typography>
							</Box>
							<Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
								<Email sx={{ mr: 1, fontSize: 20 }} />
								<Typography variant="body2">support@fitprox1.com</Typography>
							</Box>
							<Box sx={{ display: 'flex', alignItems: 'center' }}>
								<LocationOn sx={{ mr: 1, fontSize: 20 }} />
								<Typography variant="body2">123 Tech Street, San Francisco, CA 94105</Typography>
							</Box>
						</Grid>
						<Grid item xs={12} md={4}>
							<Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
								Customer Support
							</Typography>
							<Typography variant="body2" paragraph>
								Monday - Friday: 9:00 AM - 6:00 PM PST
							</Typography>
							<Typography variant="body2" paragraph>
								Saturday: 10:00 AM - 4:00 PM PST
							</Typography>
							<Typography variant="body2">Sunday: Closed</Typography>
						</Grid>
						<Grid item xs={12} md={4}>
							<Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
								Follow Us
							</Typography>
							<Typography variant="body2" paragraph>
								Stay connected for the latest updates and fitness tips.
							</Typography>
							<Box sx={{ display: 'flex', gap: 2 }}>
								<Button variant="outlined" size="small" sx={{ color: 'white', borderColor: 'white' }}>
									Facebook
								</Button>
								<Button variant="outlined" size="small" sx={{ color: 'white', borderColor: 'white' }}>
									Twitter
								</Button>
								<Button variant="outlined" size="small" sx={{ color: 'white', borderColor: 'white' }}>
									Instagram
								</Button>
							</Box>
						</Grid>
					</Grid>
					<Box sx={{ textAlign: 'center', mt: 4, pt: 3, borderTop: '1px solid #555' }}>
						<Typography variant="body2" sx={{ color: '#ccc' }}>
							© 2024 FitPro X1. All rights reserved. | Privacy Policy | Terms of Service
						</Typography>
					</Box>
				</Container>
			</Box>
		</Box>
	)
}
