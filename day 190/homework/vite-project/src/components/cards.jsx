import React from 'react'

const Cards = () => {
  return (
    <div className='flex justify-center mt-40 flex-wrap'>

        <div className='w-[300px] h-[450px]' style={{background:'hsl(31, 77%, 52%)'}}>
            <div className='m-10 ml-12'>
            <img src="/public/icon-sedans.svg"/>
            <h1 className='uppercase text-white mt-5 text-3xl font-medium'>Sedans</h1>
            <p className='mt-7' style={{color:'hsla(0, 0%, 100%, 0.75)'}}>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
            <button className='w-33 cursor-pointer h-10 font-bold bg-white rounded-3xl text-[0.9rem] mt-20' style={{color:'hsl(31, 77%, 52%)'}}>Learn More</button>
            </div>
        </div>

        <div className='w-[300px] h-[450px]' style={{background:'hsl(184, 100%, 22%)'}}>
            <div className='m-10 ml-12 '>
            <img src="/public/icon-suvs.svg"/>
            <h1 className='uppercase text-white mt-5 text-3xl font-medium'>Suvs</h1>
            <p className='mt-7' style={{color:'hsla(0, 0%, 100%, 0.75)'}}>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
            <button className='w-33 cursor-pointer h-10 font-bold bg-white rounded-3xl text-[0.9rem] mt-20' style={{color:'hsl(184, 100%, 22%)'}}>Learn More</button>
            </div>        
        </div>

        <div className='w-[300px] h-[450px]' style={{background:'hsl(179, 100%, 13%)'}}>
            <div className='m-10 ml-12'>
            <img src="/public/icon-luxury.svg"/>
            <h1 className='uppercase text-white mt-5 text-3xl font-medium'>Luxury</h1>
            <p className='mt-7' style={{color:'hsla(0, 0%, 100%, 0.75)'}}>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>
            <button className='w-33 cursor-pointer h-10 font-bold bg-white rounded-3xl text-[0.9rem] mt-20' style={{color:'hsl(179, 100%, 13%)'}}>Learn More</button>
            </div>        
        </div>
    </div>

)
}

export default Cards