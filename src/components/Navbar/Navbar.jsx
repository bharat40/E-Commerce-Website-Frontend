import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { ShopContext } from '../../context/ShopContext';
// import cartIcon from '../../assets/cart_icon.png';

const Navbar = () => {
    const { getTotalCartItems } = useContext(ShopContext);
    return (
        <nav className='w-full h-24 flex justify-around shadow-md items-center'>
            <div className='flex gap-[10px] items-center'>
                <img src={logo} alt="logo" />
                <span className='text-2xl font-semibold text-blue-500'>LOOK BAZAAR</span>
            </div>
            <ul className='flex gap-[50px]'>
                <li className='border-2 cursor-pointer border-transparent hover:border-b-2 hover:border-b-blue-400'><Link to='/'>Shop</Link></li>
                <li className='border-2 cursor-pointer border-transparent hover:border-b-2 hover:border-b-blue-400'><Link to='/mens'>Men</Link></li>
                <li className='border-2 cursor-pointer border-transparent hover:border-b-2 hover:border-b-blue-400'><Link to='/womens'>Women</Link></li>
                <li className='border-2 cursor-pointer border-transparent hover:border-b-2 hover:border-b-blue-400'><Link to='/kids'>Kids</Link></li>
            </ul>
            <div className='flex gap-[30px]'>
                <Link to='/login'><button className='cursor-pointer py-1 px-5 rounded-full border text-blue-400 hover:text-white duration-150 border-blue-400 hover:bg-blue-400 active:bg-blue-500'>Login</button></Link>

                <Link to='/cart'><div className='flex items-center cursor-pointer'>
                    <span className='text-2xl'>🛒</span>
                    <div className='w-[20px] h-[20px] flex justify-center items-center rounded-full bg-blue-400 text-white'>{getTotalCartItems()}</div>
                </div></Link>
            </div>
        </nav>
    )
}

export default Navbar
