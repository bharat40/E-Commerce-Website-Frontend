import React from 'react'

const NewsLetter = () => {
    return (
        <section className='mt-[50px] h-[400px] flex flex-col justify-center items-center gap-[40px] bg-gradient-to-b from-blue-100 to-blue-200'>
            <h1 className='text-5xl font-semibold text-center'>Get Exclusive Offers On Your Email</h1>
            <p className='text-center font-semibold text-lg'>Subscribe to our news letter and stay updated</p>
            <div className='flex gap-[20px]'>
                <input type="email" placeholder='Your Email id' className='rounded-full w-[400px] px-3 py-2 bg-white' />
                <button className='bg-blue-400 w-[200px] rounded-full py-2 text-white'>Subscribe</button>
            </div>
        </section>
    )
}

export default NewsLetter;
