import React from 'react';
import { useCart } from './CartContext';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/material';

// Sample images for demo
const productImages: Record<number, string> = {
  1: 'https://m.media-amazon.com/images/I/71v2jVn2RiL._SX679_.jpg',
  2: 'https://m.media-amazon.com/images/I/81QpkIctqPL._SX679_.jpg',
};

const Cart: React.FC = () => {
  const { cart, addMoreToCart, removeFromCart } = useCart();
  return (
    <div>
        <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4, p: 2 }}>
            
            <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                No items selected. <span style={{ color: '#007185', cursor: 'pointer' }}>Select all items</span>
                
            </Typography>
            {cart.length === 0 ? (
                //Items you have added to your cart will appear here.
                <Button variant="outlined" size="small" sx={{ mt: 2, textTransform: 'none', color: '#007185' }}>
                Continue shopping
                </Button>

            ) : (
                <Grid container spacing={2}>
                {cart.map((item) => (
                    
                    <Card variant="outlined" sx={{ display: 'flex', alignItems: 'flex-start', p: 2 }}>
                        <CardMedia
                        component="img"
                        image={productImages[item.id] || 'https://via.placeholder.com/120'}
                        alt={item.name}
                        sx={{ width: 120, height: 120, objectFit: 'contain', mr: 2, borderRadius: 2, border: '1px solid #eee' }}
                        />
                        <CardContent sx={{ flex: 1, p: 0 }}>
                        <Typography variant="h6" sx={{ mb: 1 }}>{item.name}</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>In stock</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>Eligible for FREE Shipping</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>Colour: White</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{item.description}</Typography>
                        <Box sx={{ display: 'inline-flex', alignItems: 'center', border: '2px solid #FFD600', borderRadius: '20px', px: 1, py: 0.5, gap: 1, mt: 1 }}>
                            <Button size="small" onClick={() => removeFromCart(item.id)} sx={{ minWidth: 0 }}><DeleteIcon /></Button>
                            <span style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#222' }}>{item.quantity}</span>
                            <Button size="small" onClick={() => addMoreToCart(item.id)} sx={{ minWidth: 0 }}><AddIcon /></Button>
                        </Box>
                        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 2, mt: 1 }}>
                            <Button size="small" color="inherit" sx={{ textTransform: 'none', color: '#007185' }}>Delete</Button>
                            <Button size="small" color="inherit" sx={{ textTransform: 'none', color: '#007185' }}>Save for later</Button>
                            <Button size="small" color="inherit" sx={{ textTransform: 'none', color: '#007185' }}>See more like this</Button>
                            <Button size="small" color="inherit" sx={{ textTransform: 'none', color: '#007185' }}>Share</Button>
                        </Box>
                        </CardContent>
                        <Box sx={{ minWidth: 120, textAlign: 'right', pl: 2 }}>
                        <Typography variant="h6" sx={{ color: '#222' }}>₹{(item.price * item.quantity).toFixed(2)}</Typography>
                        <Typography variant="body2" color="text.secondary">(₹{item.price.toFixed(2)} / count)</Typography>
                        </Box>
                    </Card>
                   
                ))}
                </Grid>
            )}
        </Box>
    </div>
  );
};

export default Cart;
