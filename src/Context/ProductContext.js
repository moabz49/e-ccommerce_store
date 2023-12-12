import React, { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]); 

    useEffect(() => {
        const fetchProducts = async () => {
          const response= await fetch('https://fakestoreapi.com/products')
          if (!response.ok) {
            throw new Error('Error fetching data')
          }
          const data = await response.json();
        //   console.log(data)
          setProducts(data);
        }
        fetchProducts();
    
      },[])


    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    )

}