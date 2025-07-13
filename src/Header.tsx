import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { useCart } from './CartContext';
import { Stack } from '@mui/material';

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen, tab, setTab }) => {
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ background: '#1976d2' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton color="inherit" onClick={() => setSidebarOpen((open) => !open)}>
            <MenuIcon />
          </IconButton>
          <Box
            sx={{ fontWeight: 'bold', fontSize: '1.5rem', letterSpacing: '1px', cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            ShopZone
          </Box>
        </Box>
        <Stack direction="row" spacing={2} sx={{ flexGrow: 1, justifyContent: 'right' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', background: '#fff', borderRadius: 1, px: 1}}>
          <SearchIcon sx={{ color: '#888' }} />
          <InputBase placeholder="Search…" sx={{ ml: 1, flex: 1 }} inputProps={{ 'aria-label': 'search' }} />
        </Box>
        <IconButton color="inherit" component={Link} to="/cart">
          <Badge badgeContent={cart.length} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit" component={Link} to="/account">
          <AccountCircleIcon />
        </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
