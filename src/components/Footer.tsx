import { Box, Link, Typography } from "@mui/material";
import Grid2 from '@mui/material/Grid2';
import settings from '../settings/settings.json';
const Logo = require('../assets/logo.png');
const Logo_Data = require('../assets/logo_data_opacity.png');

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
                <Grid2 size={12}>
                    <Typography variant="body2" align="center" >
                        <img src={Logo_Data}/>
                    </Typography>
                </Grid2>
                <Grid2 size={12}>
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