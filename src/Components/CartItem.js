import { Link } from "react-router-dom"
import { CartContext } from "../Context/CartContext"
import { useContext } from "react"

const CartItem = ({ item }) => {
  const { amount, title, image, price,  id } = item;
  const { removeFromCart, decreaseAmount, increaseAmount } = useContext(CartContext);
  
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border border-gray-300 w-full font-light text-gray-600 ">
      <div className="w-full min-h[150px] flex items-center gap-x-4 px-4">
        <Link to={`/product/${id}`}>
          <img src={image} alt={title} className="max-w-[80px]"/>
        </Link>
        <div className="w-full flex flex-col ">
          <div className="justify-between flex my-2">
            <Link to={`product/${id}`} className="uppercase hover:underline max-w-[240px] text-sm "> 
              {title}
            </Link>
            <div className="cursor-pointer text-sm" onClick={() => removeFromCart(id)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          <div className=" flex justify-between gap-x-2 h-[36px] text-sm">
            {/* + {amount} - */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border border-gray-300 font-medium">
                <div onClick={() => decreaseAmount(id) } className='flex flex-1 h-full justify-center items-center cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                  </svg>
                </div>
                <div className='flex flex-1 h-full justify-center items-center px-2'>
                    {amount}
                </div>
                <div onClick={() => increaseAmount(id) } className='flex flex-1 h-full justify-center items-center cursor-pointer '>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                  </svg>
                </div>
            </div>
            <div className="flex flex-1 items-center justify-around">
                {`$${parseFloat(price).toFixed(2)}`}
            </div>
            <div className="flex flex-1 justify-end items-center font-medium">
                {`$${parseFloat(price * amount).toFixed(2)}`}
            </div>            
          </div>


        </div>
      </div>
    </div>
  )
}

export default CartItem