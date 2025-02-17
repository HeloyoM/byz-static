import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';

const Profile: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSave = () => {
    alert(`Saved: Email: ${email}, Phone: ${phone}`);
  };

  return (
    <Card sx={{ maxWidth: 500, margin: 'auto', mt: 5, p: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Edit Profile
        </Typography>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleSave} sx={{ mt: 2 }}>
          Save Changes
        </Button>
      </CardContent>
    </Card>
  );
};

export default Profile;
