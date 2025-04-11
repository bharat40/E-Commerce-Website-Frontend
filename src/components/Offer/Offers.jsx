import React from 'react';
import hero_image from '../../assets/hero_image.png'

const Offers = () => {
    return (
        <section className='mt-[40px]  h-[400px] flex justify-around items-center bg-gradient-to-b from-blue-100 to-blue-200'>
            <div className='flex flex-col gap-[10px]'>
                <h1 className='flex flex-col text-6xl font-semibold'>Exclusive ✨</h1>
                <h1 className='flex flex-col text-6xl font-semibold'>Offers for you</h1>
                <p className='text-xl font-semibold mt-[5px]'>ONLY ON BEST SELLERS PRODUCTS</p>
                <button className='flex mt-[30px] gap-[20px] text-white bg-blue-400 py-2 rounded-full justify-center items-center px-3 w-[200px]'>Check now</button>
            </div>
            <div>
                <img src={hero_image} alt="" className='w-[300px]' />
            </div>
        </section>
    )
}

export default Offers
