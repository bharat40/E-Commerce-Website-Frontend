import React from 'react';
import data_product from '../../assets/data.js';
import Item from '../Item/Item';

const Relatedproducts = ({ }) => {
    return (
        <div className='my-[100px]'>
            <div className='flex flex-col justify-between items-center mb-[30px]'>
                <h1 className='text-3xl font-semibold text-center'>Related Products</h1>
                <hr className='w-[200px] border-3 rounded-full text-blue-400' />
            </div>


            <div className='flex justify-center items-center gap-[20px]'>
                {
                    data_product.map((prod, i) => {

                        return (
                            <Item key={i} id={prod.id} name={prod.name} image={prod.image} new_price={prod.new_price} old_price={prod.old_price} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Relatedproducts
