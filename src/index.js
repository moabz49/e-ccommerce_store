import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './Context/ProductContext';
import { SidebarProvider } from './Context/SidebarContext';
import { CartProvider } from './Context/CartContext';
import './index.css';
import App from './App';
  
const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <SidebarProvider>
            <App />
          </SidebarProvider>
        </CartProvider>
      </ProductProvider>
  </BrowserRouter>  

);

