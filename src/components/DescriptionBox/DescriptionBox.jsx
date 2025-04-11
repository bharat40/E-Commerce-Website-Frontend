import React from 'react'

const DescriptionBox = () => {
    return (
        <section className='flex flex-col items-start px-[200px] my-[30px]'>
            <div className='flex'>
                <div className='p-4 border border-gray-400 bg-gray-100 flex justify-center w-[150px]'>Description</div>
                <div className='p-4 border border-gray-400 flex justify-center w-[150px]'>Reviews (27)</div>
            </div>
            <div className='p-4 border border-gray-400 '>
                <p className='align-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias culpa quibusdam, eligendi fugiat est et sed fugit dicta quo facere esse! Suscipit ducimus odit, <br />laboriosam neque voluptate natus nemo reprehenderit commodi unde totam soluta ad deleniti nihil repudiandae optio blanditiis repellat eveniet impedit, officia cum <br /> illo similique aliquid iure ab. In unde, quia commodi laborum impedit nam est soluta!</p>
            </div>
        </section>
    )
}

export default DescriptionBox
