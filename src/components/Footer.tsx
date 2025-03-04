import { Box, Typography } from "@mui/material";
import Grid2 from '@mui/material/Grid2';
import { MOBILE_WIDTH, useMobile } from "./utils/useMobile";
const Logo_Data = require('../assets/logo_data_opacity.png');
const Logo_Data_Mobile = require('../assets/logo_data_opacity_mobile.png');

const Footer = () => {
    const windowWidth = useMobile();

    const isMobile = MOBILE_WIDTH >= windowWidth;

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
                        {!isMobile ?<img src={Logo_Data} /> : <img src={Logo_Data_Mobile}/>}
                    </Typography>
                </Grid2>
                <Grid2 size={12}>
                    <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                        © {new Date().getFullYear()} B.Y.L | All Rights Reserved Meir Juli
                    </Typography>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default Footer;