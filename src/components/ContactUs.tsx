import React from 'react';
import { Box, Typography } from '@mui/material';
import settings from '../settings/settings.json';

const ContactUs = () => {

    return (
        <Box style={{ margin: '5% auto', textAlign: 'center' }}>
            <Typography >
                <a href={`mailto:${settings.email}`}>שלחו מייל כאן</a>
            </Typography>

            <Typography>
                055-666-0601
            </Typography>

            <Typography>
                לא בשבת
            </Typography>
        </Box >
    )
}

export default ContactUs;