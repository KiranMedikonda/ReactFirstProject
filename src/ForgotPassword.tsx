import { useState } from 'react';
import {
  Container, TextField, Button, Typography, Box, Paper
} from '@mui/material';
// import { sendPasswordResetEmail } from 'firebase/auth';
// import { auth } from './firebase';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');

//   const handleReset = async () => {
//     try {
//       await sendPasswordResetEmail(auth, email);
//       setMsg('Password reset email sent!');
//       setError('');
//     } catch (err: any) {
//       setError(err.message);
//       setMsg('');
//     }
//   };

  return (
    <Container maxWidth="xs">
      <Paper sx={{ p: 4, mt: 8 }}>
        <Box textAlign="center">
          <Typography variant="h5" mb={2}>Forgot Password</Typography>
          <TextField
            fullWidth label="Email" margin="normal"
            value={email} onChange={(e) => setEmail(e.target.value)} required
          />
          <Button fullWidth variant="contained" sx={{ mt: 2 }}>
        {/* //    onClick={handleReset}> */}
            Send Reset Link
          </Button>
          {msg && <Typography color="success.main" mt={2}>{msg}</Typography>}
          {error && <Typography color="error" mt={2}>{error}</Typography>}
        </Box>
      </Paper>
    </Container>
  );
};

export default ForgotPassword;
