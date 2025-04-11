import React from 'react';
import new_collection from '../../assets/new_collections.js';
import Item from '../Item/Item';

const NewCollection = () => {
    return (
        <section className='mt-[50px]'>
            <div className='flex flex-col justify-between items-center mb-[30px]'>
                <h1 className='text-3xl font-semibold text-center'>NEW COLLECTIONS</h1>
                <hr className='w-[200px] border-3 rounded-full text-blue-400' />
            </div>
            <div className='flex flex-wrap justify-center items-center gap-[20px]'>
                {
                    new_collection.map((prod, i) => {
                        return (
                            <Item key={i} id={prod.id} name={prod.name} image={prod.image} new_price={prod.new_price} old_price={prod.old_price} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default NewCollection
