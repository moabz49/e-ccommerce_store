import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SidebarContext } from '../Context/SidebarContext'
import { CartContext } from '../Context/CartContext'

const Header = () => {
  const { itemCount } = useContext(CartContext)
  const {handleToggle} = useContext(SidebarContext) 
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Check if window object is defined (browser environment)
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        // Check window.scrollY only if window is defined
        setIsActive(window.scrollY > 60);
      });
    }
  }, []);

  return (
    <header className={`${isActive? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed items-center justify-center flex w-full z-10 transition-all `}>
      <div className='flex items-center h-full justify-between w-[90%] max-w-[1340px] '>
        <Link to="/"> 
          <div className='w-[48px] h-[48px] cursor-pointer '>
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M254.508 28c-5.222.018-14.484.378-23.54 4.976-10.348 5.255-19.542 17.498-19.542 36.025h18c0-13.472 4.287-17.23 9.693-19.974C244.525 46.282 251.937 46 256.486 46c10 0 15.38 3.006 18.743 6.891 3.362 3.885 4.899 9.373 4.414 15.385-.97 12.023-9.745 20.744-23.157 23.724h-9v33.827a30.751 30.751 0 0 1 9-1.354c3.22 0 6.203.504 9 1.354v-16.881c18.771-4.339 30.699-21.88 32.098-39.221.806-9.988-1.72-20.5-8.744-28.615C281.816 32.996 270.486 28 256.486 28c-.568 0-1.232-.004-1.978-.002zm1.978 114.474c-6.265 0-11.583 4.417-18.386 12.397-6.803 7.979-13.779 18.644-24.745 25.699-28.987 18.65-62.68 28.155-93.978 39.095-31.299 10.941-59.94 23.174-80.246 45.407-2.822 3.09-7.223 13.039-9.813 21.666-.096.322-.127.52-.22.838 5.8-2.233 12.63-5.031 20.767-8.487 17.698-7.515 40.062-17.32 64.102-27.023 48.079-19.405 102.272-38.735 142.67-38.063 44.692.744 104.792 20.664 154.664 40.139 32.956 12.87 56.173 23.383 71.601 30.582-2.63-8.098-6.458-16.803-9.06-19.652-20.306-22.233-48.947-34.466-80.246-45.407-31.3-10.94-64.992-20.445-93.979-39.095-10.965-7.055-17.94-17.72-24.744-25.7-6.803-7.979-12.121-12.396-18.387-12.396zm-87 121.527v220h158v-220zm-66.408 12c-15.547 6.491-29.735 12.64-42.303 18h90.711v-18zm242.408 0v18h114.418a1313.695 1313.695 0 0 0-42.357-18z"></path></g></svg>
          </div>
        </Link>
        <div onClick={() => handleToggle()} className='cursor-pointer flex relative max-w-[40px] items-center max-h-[50px]'>
          <svg width="201px" height="201px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 11V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V10.9673M10.4 21H13.6C15.8402 21 16.9603 21 17.816 20.564C18.5686 20.1805 19.1805 19.5686 19.564 18.816C20 17.9603 20 16.8402 20 14.6V12.2C20 11.0799 20 10.5198 19.782 10.092C19.5903 9.71569 19.2843 9.40973 18.908 9.21799C18.4802 9 17.9201 9 16.8 9H7.2C6.0799 9 5.51984 9 5.09202 9.21799C4.71569 9.40973 4.40973 9.71569 4.21799 10.092C4 10.5198 4 11.0799 4 12.2V14.6C4 16.8402 4 17.9603 4.43597 18.816C4.81947 19.5686 5.43139 20.1805 6.18404 20.564C7.03968 21 8.15979 21 10.4 21Z" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          <div className='bg-red-500 absolute -right-0 -bottom-0 w-4 h-4 rounded-full flex items-center justify-center text-white text-xs'>
            {itemCount}
          </div>
        </div>
      </div>      
    </header>

  )
}

export default Header