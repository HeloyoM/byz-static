import React from 'react';
import AppCarousel from 'components/carousel/Carousel';
import { Box, Container, Divider, Paper, Typography } from '@mui/material';
import '../App.css';
import ScreenWrapper from 'components/ScreenWrapper';
import Footer from 'components/Footer';

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  return (
    <React.Fragment>
      <Box>
        <ScreenWrapper ><AppCarousel /></ScreenWrapper>

        <Paper elevation={3} sx={{ width: "55%", height: 'fit-content', margin: '5% auto', backgroundColor: 'inherit', fontFamily: 'Sora, sens-serif' }}>
          <Typography sx={{ color: "#244545", fontSize: '22px', textAlign: 'center', fontWeight: 'bold' }}>ברק יצחק לוי</Typography>
          <Typography sx={{ fontSize: '22px' }} className="banner">
            אנו מספקים שירותי חשמל מקצועיים ומקיפים לכל צורך, תוך שימת דגש על איכות, בטיחות ואמינות. צוות החשמלאים המוסמכים שלנו מתמחה במגוון רחב של עבודות, החל מהתקנת עמדות טעינה לרכבים חשמליים וגופי תאורה מעוצבים, דרך תיקון ותחזוקה של תשתיות חשמל קיימות, ועד להרכבה והתקנה של תשתיות חשמל חדשות.
          </Typography>

          <Divider orientation="horizontal" sx={{ margin: '2% 2%' }} />

          <Typography sx={{ fontSize: '22px' }} className="banner">
            אנו מציעים גם שירותי ייעוץ וביצוע סקרים, על מנת להבטיח את הפתרון האופטימלי והבטוח ביותר לכל לקוח. אנו מחויבים לספק שירות אדיב, מהיר ויעיל, תוך עמידה בסטנדרטים הגבוהים ביותר של מקצועיו
          </Typography>

        </Paper>

        <Container sx={{ fontSize: `45px`, transition: "font-size 0.1s ease", backgroundColor: "#244545", width: '100%', height: '74px', maxWidth: '100% !important', color: 'white', textAlign: 'center', fontFamily: 'Sora, sens-serif' }}>חשמל בטוח, שירות מקצועי</Container>

      </Box>

      <Footer />
    </React.Fragment>
  )
}

export default Home;

