import React from 'react';
import { useCart, Product as ProductType } from './CartContext';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const sampleProducts: ProductType[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 59.99,
    description: 'High-quality wireless headphones with noise cancellation.'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 129.99,
    description: 'Feature-rich smart watch with health tracking.'    
  }
];

const Products: React.FC = () => {
  const { cart, addToCart, addMoreToCart, removeFromCart } = useCart();
  return (
    <div>
        <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4, p: 2 }}>
            <h1>Products</h1>
            <ul>
                {sampleProducts.map(product => {
                const cartItem = cart.find(item => item.id === product.id);
                return (
                    <li key={product.id} style={{ marginBottom: '1rem' }}>
                    <strong>{product.name}</strong> - ${product.price.toFixed(2)}
                    <br />
                    <span>{product.description}</span>
                    <br />
                    {cartItem ? (
                        <Box sx={{ display: 'inline-flex', alignItems: 'center', border: '2px solid #FFD600', borderRadius: '20px', px: 1, py: 0.5, gap: 1, mt: 1 }}>
                        <Button size="small" onClick={() => removeFromCart(product.id)} sx={{ minWidth: 0 }}><DeleteIcon /></Button>
                        <span style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#222' }}>{cartItem.quantity}</span>
                        <Button size="small" onClick={() => addMoreToCart(product.id)} sx={{ minWidth: 0 }}><AddIcon /></Button>
                        </Box>
                    ) : (
                        <Button
                        variant="contained"
                        color="primary"
                        startIcon={<ShoppingCartIcon />}
                        onClick={() => addToCart(product)}
                        sx={{ mt: 1 }}
                        >
                        Add to Cart
                        </Button>
                    )}
                    </li>
                );
                })}
            </ul>
      </Box>
    </div>
  );
};

export default Products;
