import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../assets/dropdown_icon.png';
import Item from '../components/Item/Item.jsx';
import Banner from '../components/Banner/Banner.jsx';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <section className='mb-[30px]'>
      <Banner banner={props.banner} />
      <div className='my-[30px] flex justify-between px-[130px]'>
        <p>
          <span className='font-semibold'>Showing 1-12</span> out of 36 products
        </p>
        <div className='py-2 px-4 border rounded-full border-gray-400'>
          Sort by
          <span>🔽</span>
        </div>
      </div>
      <div className='flex flex-wrap justify-center items-center gap-[20px]' >
        {
          all_product.map((prod, i) => {
            if (props.category === prod.category) {
              return <Item key={i} id={prod.id} name={prod.name} image={prod.image} new_price={prod.new_price} old_price={prod.old_price} />
            }
            else {
              return null;
            }
          })
        }
      </div>
      <div className=' flex justify-center items-center mt-[30px]'>
        <button className='border border-blue-400 text-blue-400  px-3 py-2 hover:bg-blue-400 hover:text-white duration-150'> Explore more</button>
      </div>
    </section>
  )
}

export default ShopCategory
