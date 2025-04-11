import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
    return (
        <div className='w-[300px] flex flex-col hover:scale-105 duration-500'>
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0, 0)} src={props.image} alt="" /></Link>
            <p>{props.name}</p>
            <div className='flex gap-2'>
                <div className='font-semibold'>💲{props.new_price}</div>
                <div className='text-gray-500 line-through'>💲{props.old_price}</div>
            </div>
        </div>
    )
}

export default Item
