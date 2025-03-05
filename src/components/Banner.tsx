import { Container } from "@mui/material";
import React from "react";

const Banner = () => {
    const [fontSize, setFontSize] = React.useState(20); // Initial font size

    React.useEffect(() => {
        const handleScroll = () => {
            const newSize = 20 + window.scrollY * 0.05; // Adjust multiplier as needed
            setFontSize(newSize);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Container sx={{
            fontSize: `${fontSize}px`,
            transition: "font-size 0.1s ease",
            backgroundColor: "#244545",
            maxHeight: '90%',
            height: 'fit-content',
            maxWidth: '100% !important',
            color: 'white',
            textAlign: 'center',
            fontFamily: 'Sora, sens-serif'
        }}>חשמל בטוח, שירות מקצועי</Container>
    )
}
export default Banner;