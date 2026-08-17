import React from 'react';
import logo from '../../assets/logo.png'
import coin from '../../assets/coin.png'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-2 shadow-sm border px-2 border-white rounded-xl'>
            <img src={logo} alt="" />
            <div className='flex items-center'>
                <span className='font-bold text-xl '>0</span>
                <span className='font-bold text-xl mx-3'>Coin</span>
                <img className='w-10 h-10' src={coin} alt="" />
            </div>
        </div>
    );
};

export default Navbar;