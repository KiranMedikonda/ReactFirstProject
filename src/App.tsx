import { CartProvider } from './CartContext';

function App({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
}

export default App;
