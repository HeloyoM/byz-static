import { Box, Link, Typography } from "@mui/material";
import Grid2 from '@mui/material/Grid2';

const Footer = () => {

    return (
        <Box
            component="footer"
            sx={{
                height: 600,
                color: 'black',
                p: 3,
                mt: 'auto'
            }}
        >
            <Grid2 container spacing={2}>
                <Typography variant="h6" align="center">
                    {/* Replace with your company logo */}
                    Your Company Logo
                </Typography>
                <Grid2 size={4}>
                    <Typography variant="body2" align="center">
                        123 Main Street, Cityville |
                        <Link href="tel:+15551234567" color="inherit" underline="hover">
                            +1 (555) 123-4567
                        </Link>{' '}
                        |
                        <Link href="mailto:info@example.com" color="inherit" underline="hover">
                            info@example.com
                        </Link>
                    </Typography>
                </Grid2>
                <Grid2 size={4}>
                    <Box display="flex" justifyContent="center">
                        {/* Replace with your social media links */}
                        <Link href="#" color="inherit" target="_blank" rel="noopener" underline="hover">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        {/* Add other social media icons as needed */}
                    </Box>
                </Grid2>
                <Grid2 size={8}>
                    <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                        © {new Date().getFullYear()} Your Company Name | All Rights Reserved Meir Juli|{' '}
                        <Link href="/privacy" color="inherit" underline="hover">
                            Privacy Policy
                        </Link>{' '}
                        |{' '}
                        <Link href="/terms" color="inherit" underline="hover">
                            Terms of Service
                        </Link>
                    </Typography>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default Footer;