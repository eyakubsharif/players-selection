import React from 'react';
import { FaFlag } from 'react-icons/fa';

const PlayerCart = ({player}) => {
    console.log(player)
    const {player_name,player_img,country_name,bowling_style,batting_style,price,rating,role,}=player
    return (
        <div className='p-3 border-white border rounded-2xl'>
            <img className='w-full h-55 rounded-2xl object-center' src={player_img} alt="" />
            <div className='flex gap-3 items-center mt-2'>
                <img className='w-12 h-12 rounded-full' src={player_img} alt="" />
                <p className='font-bold text-xl'>{player_name}</p>
            </div>
            <div className='flex justify-between items-center border-b border-gray-300 pb-3'>
                <p className='flex text-gray-400 gap-3'><span><FaFlag></FaFlag></span>{country_name}</p>
                <p className='bg-gray-200 rounded-xl shadow-sm px-5 py-2'>{role}</p>
            </div>
            <div className='flex justify-between items-center'>
                <p className='font-bold '>Rating</p>
                <p>{rating}</p>
            </div>
            <div className='flex justify-between items-center'>
                <p className='font-bold '>{batting_style}</p>
                <p className='text-gray-500'>{bowling_style}</p>
            </div>
            <div className='flex justify-between items-center'>
                <p className='font-bold text-sm'>Price :${price}</p>
                <button className='btn bg-gray-300 shadow-2xl text-black border-none '>Choose Player</button>
            </div>
        </div>
    );
};

export default PlayerCart;