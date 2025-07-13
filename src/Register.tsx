import { useState } from 'react';
import {
  Container, TextField, Button, Typography, Box, Paper, Avatar
} from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

//   const handleRegister = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       navigate('/');
//     } catch (err: any) {
//       setError(err.message);
//     }
//   };

  return (
    <Container maxWidth="xs">
      <Paper sx={{ p: 4, mt: 8 }}>
        <Box textAlign="center">
          <Avatar sx={{ m: 'auto', bgcolor: 'secondary.main' }}>
            <LockOpenIcon />
          </Avatar>
          <Typography variant="h5" mb={2}>Register</Typography>
          {/* <form onSubmit={handleRegister}> */}
            <TextField
              fullWidth label="Email" margin="normal"
              value={email} onChange={(e) => setEmail(e.target.value)} required
            />
            <TextField
              fullWidth label="Password" type="password" margin="normal"
              value={password} onChange={(e) => setPassword(e.target.value)} required
            />
            {error && <Typography color="error">{error}</Typography>}
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>Sign Up</Button>
          {/* </form> */}
        </Box>
      </Paper>
    </Container>
  );
};

export default Register;
