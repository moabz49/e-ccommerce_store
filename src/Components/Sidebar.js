import React, { useContext } from 'react'
import CartItem from './CartItem'
import { SidebarContext } from '../Context/SidebarContext'
import { CartContext } from '../Context/CartContext'

const Sidebar = () => {
  const { isOpen, handleToggle } = useContext(SidebarContext)
  const { cart, itemCount, totalPrice, clearCart } = useContext(CartContext);

  return (
    <div className={` ${isOpen ? 'w-full bg-white fixed top-0 right-0 h-screen shadow-2xl sm:w-[48vw] md:w-[42vw] xl:max-w-[35vw] transition-all duration-300 z-10 px-4 lg:px-9' 
      : 'hidden'} `}>
      {/* Top */}
      <div className='flex items-center justify-between py-6 border-b border-gray-300'>
        <div className='uppercase text-sm font-semibold '>
            shopping ({itemCount})
        </div>
        <div className='cursor-pointer w-8 h-8 flex items-center' onClick={handleToggle}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>
      {/* middle */}
      <div className='flex flex-col gap-y-2 h-[400px] lg:h-[460px] overflow-y-auto overflow-x-auto shadow-sm'>
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />
        })}
      </div>
      {/* bottom */}
      <div className='flex flex-col mt-10 border-t border-gray-300'>
          <div className='flex justify-between items-center mt-8'> 
              <div className='flex items-center justify-center font-bold text-medium'>
                <span className='uppercase '>Total:</span>&nbsp;$&nbsp;{totalPrice.toFixed(2)}
              </div>
              <div onClick={() => clearCart()} className='flex items-center justify-center w-12 h-12 cursor-pointer text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </div>
          </div>
          <div className='flex flex-col w-full mt-4 space-y-2' >
              <button className='bg-gray-200 py-2 border border-slate-600'> View Cart </button>
              <button className='bg-slate-900  py-2 border w-full text-slate-100'> Checkout </button> 
          </div>
      </div>
    </div>
  )
}

export default Sidebar