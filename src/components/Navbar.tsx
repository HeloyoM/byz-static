import { Link } from 'react-router-dom';
import { Typography, Button, AppBar, Toolbar } from '@mui/material';
import GoogleAuthButton from 'components/GoogleAuthButton';

const Navbar: React.FC = () => (
  <AppBar position="sticky">
    <Toolbar>
       <GoogleAuthButton />
      <Typography variant="h6" sx={{ flexGrow: 1 }}>Electrician Services</Typography>
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/gallery">Gallery</Button>
      <Button color="inherit" component={Link} to="/profile">Profile</Button>
    </Toolbar>
  </AppBar>
);
export default Navbar;