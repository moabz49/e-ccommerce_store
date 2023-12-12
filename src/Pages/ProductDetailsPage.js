import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ProductContext } from '../Context/ProductContext';
import { CartContext } from '../Context/CartContext';


const ProductDetailsPage = () => {
  //Because item.id is a number and  we need to convert params :id to an Int to check.
  const { id } = useParams();
  const {products} = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products?.find((item) => {
    return item.id === parseInt(id);
  })

  if (!product) {
    // Handle the case where the product is not found
    return <div>Product not found</div>;
  }

  const { id: productId, title, description, image, price } = product;


  return (
    <section className='bg-white flex h-screen items-center justify-center w-full'>
      <div className="w-full flex flex-col justify-center items-center align-center lg:flex-row lg:px-10 max-w-[1340px]">
          <div className="flex justify-center ">
            <img src={product?.image} alt="" className='max-w-[200px] lg:max-w-sm' />
          </div>
          <div className='mt-8 text-center space-y-3 px-8 max-w-xl lg:text-left lg:ml-20 transition-all'>
              <h1 className='text-3xl font-medium leading-10'>{title}</h1>
              <div className='text-red-500 text-base '> $ {price.toFixed(2)}</div>
              <div className='mb-6 text-sm first-letter:capitalize '>
                {description}
              </div>
              <button onClick={() => addToCart(product, parseInt(id))} className='bg-gray-900 text-white text-sm py-3 px-4 hover:opacity-75'>Add to cart </button>
          </div>
      </div>
    </section>
  )
}

export default ProductDetailsPage;