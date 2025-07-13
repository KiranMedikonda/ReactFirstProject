import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import { signOut } from 'firebase/auth';
// import { auth } from './firebase';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    // await signOut(auth);
    navigate('/login');
  };

  return (
    <Button color="inherit" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
