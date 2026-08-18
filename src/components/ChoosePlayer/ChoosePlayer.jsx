import React from 'react';
import { MdDelete } from 'react-icons/md';

const ChoosePlayer = ({player,removePlayer}) => {
    const {player_img,player_name,role,price,rating} = player
    const handleDelete =()=>{
        removePlayer(player)
    }
    return (
        <div className='flex items-center justify-between gap-4 w-7/12 mx-auto border border-white rounded-2xl shadow-2xl p-2 mb-3'>
          <div className='flex items-center gap-5'>
                  <img className='w-30 h-30 rounded-2xl shadow-xl' src={player_img} alt="" />
            <div className=''>
                <p className='font-bold text-xl'>Name : {player_name}</p>
                <p className='font-bold text-sm text-gray-400 mt-3'>Role :{role}</p>
                <span className='text-gray-400 text-sm'>{price} $</span>
            </div>
          </div>
           <div className='cursor-pointer' onClick={handleDelete}>
             <MdDelete size={30}></MdDelete>
           </div>
        </div>
    );
};

export default ChoosePlayer;