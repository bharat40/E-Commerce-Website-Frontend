import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext.jsx';

const CartItems = () => {
    const { all_product, addToCart, removeFromCart, cartItem, getTotalCartAmount } = useContext(ShopContext);
    return (
        <div>
            {/* Header */}
            <div className="grid grid-cols-6 items-center text-lg font-bold text-gray-700 text-center py-2">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr className="border-t border-gray-300 my-2" />

            {/* Product Rows */}
            {all_product.map((prod, i) => {
                if (cartItem[prod.id] > 0) {
                    return (
                        <div key={i}>
                            <div className="grid grid-cols-6 items-center text-gray-700 text-center py-4">
                                <img src={prod.image} alt="" className="w-[50px] mx-auto" />
                                <p>{prod.name}</p>
                                <p>${prod.new_price}</p>
                                <button>{cartItem[prod.id]}</button>
                                <p>${prod.new_price * cartItem[prod.id]}</p>
                                <p onClick={() => removeFromCart(prod.id)} className="cursor-pointer">🗑️</p>
                            </div>
                            <hr className="border-t border-gray-200 my-1" />
                        </div>
                    );
                }
                else {
                    return null;
                }
            })}
            <div className='flex justify-around my-[100px]'>
                <div className='w-[500px] flex flex-col gap-[30px]'>
                    <div>
                        <h1 className='font-bold text-2xl'>Cart Total</h1>
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                        <div className='flex justify-between border-b-4 border-b-gray-200 pb-2'>
                            <span >Sub Total</span>
                            <span>${getTotalCartAmount()}</span>
                        </div>
                        <div className='flex justify-between border-b-4 border-b-gray-200 pb-2'>
                            <span >Shipping Fee</span>
                            <span>Free</span>
                        </div>
                        <div className='flex justify-between '>
                            <span className='font-semibold text-lg'>Total</span>
                            <span className='font-semibold '>${getTotalCartAmount()}</span>
                        </div>
                    </div>
                    <button className='bg-blue-400 px-4 py-3 text-white w-[250px]'>PROCEED TO CHECKOUT</button>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <p>If you have a promo code, Enter it here</p>
                    <div>
                        <input type="text" name="" id="" placeholder='Promo code' className='w-[300px] py-3 px-4 bg-gray-200' />
                        <button className='py-3 px-4 bg-blue-400 text-white'>Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartItems
