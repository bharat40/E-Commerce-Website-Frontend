import React from 'react';
import arrow_icon from '../../assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
    const { product } = props
    return (
        <div className='flex pl-[48px] text-gray-500 font-semibold my-[30px]'>
            HOME ➡️ SHOP ➡️ {product.category} ➡️ {product.name}
        </div>
    )
}

export default Breadcrum
