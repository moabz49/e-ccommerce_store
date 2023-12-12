import React, { createContext, useEffect, useState } from 'react';

// Create a new context
export const CartContext = createContext();

// Products context provider component
export const CartProvider = ({ children }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [cart, setCart] = useState([]);
    const [itemCount, setItemCount] = useState(0);

   // Initialize cart state with data from local storage
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("shoppingCart"));
        if (savedCart) {
            setCart(savedCart);
        }
    }, []);

    useEffect(() => {
        if (cart) {
            const itemCount = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.amount;
            }, 0);
    
            const totalPrice = cart.reduce((accumulator, currentItem) => {
                return accumulator + (currentItem.price * currentItem.amount);
            }, 0);

            localStorage.setItem("shoppingCart", JSON.stringify(cart));

            setItemCount(itemCount);
            setTotalPrice(totalPrice);
        }
    }, [cart]);
    


    // Add Cart Item
    const addToCart = (product, id) => {
        // console.log(product)
        // New item to Cart
        const newItem = {...product, amount: 1}
        // console.log(newItem);
        // Increase Amount of Cart Item
        // -- Find the cartItem based on ID
        const cartItem = cart?.find((item) => {
            return item.id === id;
        });

        if (cartItem) {
            const newCart = [...cart].map((item) => {
                if (item.id === id) 
                    return {
                        ...item, amount: cartItem.amount + 1
                    };
                    else {
                        return item;
                    }
            });
            setCart(newCart);   
        
        } else {
            setCart([...cart, newItem]);
        }
    };

    const increaseAmount = (id) => {
        const cartItem = cart.find((item) => item.id === id);
      
        addToCart(cartItem, id)
    }

    const decreaseAmount = (id) => {
        const cartItem = cart.find((item) => item.id === id);
        
        if (cartItem) {
          const newAmmount = cartItem.amount - 1;
          
          if(newAmmount < 1) {
            removeFromCart(id)
          } else {
            const newCart = cart.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        amount: cartItem.amount -1,
                    };
                } else {
                    return item;
                }
            });
                setCart(newCart);
          }
        }
    }

    // Remove Cart Item

    const removeFromCart = (id) => {
        const newCart = cart?.filter((item) => {
            return item.id !== id;
        });
        setCart(newCart);
    }

    const clearCart = () => {
        setCart([]);
    }
    
    console.log(cart);
        
    
  
  return (
    <CartContext.Provider value={{addToCart, removeFromCart, decreaseAmount, totalPrice, itemCount, increaseAmount, clearCart, cart}}>
      {children}
    </CartContext.Provider>
  )
};
