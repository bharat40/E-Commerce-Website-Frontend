import React from 'react'

const Banner = (prop) => {
    return (
        <section className='h-[300px] flex justify-around items-center bg-gradient-to-b from-blue-100 to-blue-200'>
            <div className='flex flex-col gap-[10px]'>
                <h1 className='text-5xl font-bold'>FLAT 40% OFF</h1>
                <p className='text-3xl font-bold'><span className='text-blue-500'>6 </span>HOURS <span className='text-blue-500'>20 </span>MINUTES LEFT ⌛</p>
                <button className='px-3 w-[200px] text-white bg-blue-400 py-2 rounded-full'>Explore now</button>
            </div>
            <div>
                <img src={prop.banner} alt="" className='w-[200px]' />
            </div>
        </section>
    )
}

export default Banner
