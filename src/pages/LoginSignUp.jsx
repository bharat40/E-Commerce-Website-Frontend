import React from 'react'

const LoginSignUp = () => {
  return (
    <section className='h-screen w-full bg-gradient-to-b from-blue-100 to-blue-200 flex justify-center items-center'>
      <div className='bg-white h-[450px] w-[450px] flex flex-col gap-[30px] p-5'>
        <h1 className='font-semibold text-2xl'>Sign Up</h1>
        <div className='flex flex-col gap-[20px]'>
          <input type="text" placeholder='Your Name' className='border border-gray-400 p-2' />
          <input type="email" name="" id="" placeholder='Email Address' className='border border-gray-400 p-2' />
          <input type="password" name="" id="" placeholder='Password' className='border border-gray-400 p-2' />
        </div>
        <button className='bg-blue-400 p-2 text-white'>Continue</button>
        <p className='text-gray-500'>Already have an account? <span className='text-blue-500 font-semibold'>Login here</span></p>
        <div className='flex gap-1'>
          <input type="checkbox" name="" id="" />
          <p className='text-xs'>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </section>
  )
}

export default LoginSignUp
