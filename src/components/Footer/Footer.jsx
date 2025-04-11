import React from 'react';
import footer_logo from '../../assets/logo_big.png';
import instagram_icon from '../../assets/instagram_icon.png';
import pinterest_icon from '../../assets/pintester_icon.png';
import whatsapp_icon from '../../assets/whatsapp_icon.png';

const Footer = () => {
    return (
        <footer className='flex justify-around items-center'>
            <div className='flex gap-[10px] items-center'>
                <img src={footer_logo} alt="" />
                <span className='font-semibold text-2xl text-blue-500'>LOOK BAZAAR</span>
            </div>
            <ul className='flex gap-[20px]'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='flex gap-[20px]'>
                <div>
                    <img src={instagram_icon} alt="" />
                </div>
                <div>
                    <img src={pinterest_icon} alt="" />
                </div>
                <div>
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div>

                <p>
                    Copyright @ 2025 - All Right Reserved.
                </p>
                <hr />
            </div>
        </footer>
    )
}

export default Footer
