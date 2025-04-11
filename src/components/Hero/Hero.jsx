import React from 'react';
import hero from '../../assets/exclusive_image.png'

const Hero = () => {
    return (
        <section className='h-[400px] flex justify-around items-center bg-gradient-to-b from-blue-100 to-blue-200'>
            <div className='flex flex-col gap-[10px] justify-center items-left'>
                <h2 className='text-xl font-semibold '>FRESH STYLES IN</h2>
                <div className='flex flex-col text-6xl font-semibold'>
                    <div className='flex gap-[10px]'>
                        <span>new</span>
                        <span>😎</span>
                    </div>

                    <p>trending picks</p>
                    <p>for every vibe</p>
                </div>
                <div className='flex mt-[30px] gap-[20px] text-white bg-blue-400 py-2 rounded-full justify-center items-center px-3 w-[200px]'>
                    <span>Shop Now</span>
                    <span>🌟</span>
                </div>
            </div>
            <div>
                <img src={hero} alt="hero_image" className='w-[250px]' />
            </div>
        </section>
    )
}

export default Hero
