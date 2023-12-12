import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const numbersArray = [10,8,16,20,25,12,18, 14]

const Card = ({product}) => {

  const { title, image, price, category, id } = product
  // Generate a random index within the range of the array
  const randomIndex = Math.floor(Math.random() * numbersArray.length);
  // Get the random number from the array
  const randomValue = numbersArray[randomIndex];

  const newPrice = parseFloat(price).toFixed(2);
  const oldPrice = (parseFloat(price) + randomValue).toFixed(2);

  const { addToCart } = useContext(CartContext)

  return (
    <div>
      <div className=' group transition relative border border-slate-300 h-[260px] mb-4 overflow-hidden '>
        <div className='w-full h-full flex justify-center items-center'>
          {/* Use the destructured properties here */}
          <img src={image} alt={title} className='max-h-[140px] group-hover:scale-110 transition duration-300' />
        </div>
        <div className='absolute group-hover:right-5 top-6 right-11 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'> 
          <button onClick={() => addToCart(product, id)} className='hover:opacity-80 flex justify-center items-center text-white w-10 h-10 bg-red-500'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>  
          </button> 
          <Link to={`/product/${id}`} className='hover:opacity-75 w-10 h-10 bg-white flex justify-center items-center text-gray-800 drop-shadow-xl'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-5">
              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" /><path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
      <div className='text-sm'>
        <div className=' cursor-pointer capitalize text-xs text-slate-500 hover:underline'>
          <Link to={`/product/${id}`}>{category} </Link>
        </div>
        <Link to={`/product/${id}`} >
          <h2 className='cursor-pointer uppercase mb-1 font-semibold hover:underline'>{title}</h2>
        </Link>
        <div className='flex justify-between'>
          <div className='text-red-500'>${newPrice}</div>
          <div className='text-slate-500 line-through'>${oldPrice} </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
