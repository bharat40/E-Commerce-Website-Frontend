import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext.jsx';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart, removeFromCart } = useContext(ShopContext);
    return (
        <div className='my-[80px]'>
            <div className='flex justify-around'>
                <div className='flex gap-[10px]'>
                    <div className='flex flex-col gap-[10px]'>
                        <img src={product.image} alt="" className='w-[81px]' />
                        <img src={product.image} alt="" className='w-[81px]' />
                        <img src={product.image} alt="" className='w-[81px]' />
                        <img src={product.image} alt="" className='w-[81px]' />
                    </div>
                    <div>
                        <img className='' src={product.image} alt="" />
                    </div>
                </div>
                <div className='flex flex-col gap-[15px]'>
                    <h1 className='text-2xl font-bold'>{product.name}</h1>
                    <div className='flex gap-[10px]'>
                        <div className='flex'>
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                        </div>
                        <p>(122)</p>
                    </div>
                    <div className='flex gap-[10px]'>
                        <div className='text-gray-500 text-lg line-through'>
                            ${product.old_price}
                        </div>
                        <div className='text-blue-500 text-lg font-semibold'>
                            ${product.new_price}
                        </div>
                    </div>
                    <p className='text-wrap w-[900px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus harum quasi a aperiam sit est deleniti obcaecati, voluptas tenetur nobis eius eum unde quod ex officia ab esse quam. Nobis!
                    </p>
                    <div className='flex flex-col gap-[10px]'>
                        <h1 className='text-lg font-bold'>Select Size</h1>
                        <div className='flex gap-[5px]'>
                            <div className=' bg-gray-200 p-2 text-center w-[45px]'>S</div>
                            <div className=' bg-gray-200 p-2 text-center w-[45px]'>M</div>
                            <div className=' bg-gray-200 p-2 text-center w-[45px]'>L</div>
                            <div className=' bg-gray-200 p-2 text-center w-[45px]'>XL</div>
                            <div className=' bg-gray-200 p-2 text-center w-[45px]'>XXL</div>
                        </div>
                    </div>
                    <button onClick={() => { addToCart(product.id) }} className='w-[150px] bg-blue-400 text-white py-3 px-4 text-xs font-semibold'>ADD TO CART</button>
                    <p><span className='font-semibold'>Category : </span>{product.category}</p>
                    <p><span className='font-semibold'>Tags 🏷️: </span>Modern, Latest</p>
                </div>
            </div>
        </div>

    )
}

export default ProductDisplay
