import React, { useContext } from 'react';
import Card from './Card';
import { ProductContext } from '../Context/ProductContext';

const Cards = ( ) => {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter((item) => item.category === "men's clothing" || item.category === "women's clothing");

  // console.log(filteredProducts);

  return (
    <section className='py-16 mt-1.5 border-t-4 border-pink-100 flex w-full items-center justify-center'>
      <div className='flex w-full max-w-[1340px] justify-center items-start'>
        <div className='grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]  md:max-w-none md:mx-[10px] mx-[20px]'>
          {filteredProducts.map((product ) => (
            <Card key={product.id} product={product} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;






