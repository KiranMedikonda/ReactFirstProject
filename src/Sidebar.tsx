import React from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ReplayIcon from '@mui/icons-material/Replay';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { Link } from 'react-router-dom';

interface SidebarProps {
  open: boolean;
  width: number;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, width, onClose }) => (
  <div style={{ width, minHeight: '100vh', background: '#f5f5f5', boxShadow: '2px 0 8px #eee', borderRight: 0, transition: 'width 0.3s', overflowX: 'hidden', position: 'relative' }}>
    {onClose && (
      <IconButton onClick={onClose} sx={{ position: 'absolute', top: 8, right: 8, zIndex: 1 }}>
        <CloseIcon />
      </IconButton>
    )}
    <Divider />
    <List>
      <ListItem component={Link} to="/orders" >
        <ListItemIcon><AssignmentIcon /></ListItemIcon>
        {open && <ListItemText primary="Orders" />}
      </ListItem>
      <ListItem component={Link} to="/buy-again" >
        <ListItemIcon><ReplayIcon /></ListItemIcon>
        {open && <ListItemText primary="Buy Again" />}
      </ListItem>
      <ListItem component={Link} to="/account" >
        <ListItemIcon><AccountCircleIcon /></ListItemIcon>
        {open && <ListItemText primary="Account" />}
      </ListItem>
      <ListItem component={Link} to="/lists" >
        <ListItemIcon><ListAltIcon /></ListItemIcon>
        {open && <ListItemText primary="Lists" />}
      </ListItem>
    </List>
  </div>
);

export default Sidebar;
