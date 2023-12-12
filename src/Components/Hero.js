import React from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <section className='bg-hero bg-pink-100 h-[560px] bg-no-repeat bg-cover bg-center py-24 mt-1 '>
        <div className='container mx-auto flex-col uppercase items-center mt-10 px-8 max-w-[1340px]'>
          <div className='flex font-semibold text-sm items-center'>
            <div className='w-10 h-[2px] bg-red-500 mr-3'> 
            </div> New Trend
          </div>
          <div className='text-7xl uppercase'>
            <h1 >Autumn Sale Stylish <br/> <span className='font-extrabold'> Womens</span> </h1>
          </div>
          <div className='mt-4'>
            <Link to="/" className='border-b-2 border-gray-900 font-semibold hover:opacity-60 '> Discover more </Link>
          </div>
        </div>
    </section>
  )
}

export default Hero