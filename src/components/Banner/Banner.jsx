import React from 'react';
import bannerImg from '../../assets/banner-main.png'
import shadowBg from '../../assets/bg-shadow.png'
import { toast } from 'react-toastify';
const Banner = () => {
    const handleClick =()=>{
        toast.warning('Not allow !!')
    }
    return (
        <div className='bg-center bg-cover bg-no-repeat min-h-100 bg-black rounded-2xl mt-5
        ' style={{backgroundImage :`url(${shadowBg})`}}>
            <img className='mx-auto p-5' src={bannerImg} alt="" />
            <div className='flex flex-col justify-center items-center space-y-2 text-white'>
                <h1 className='font-bold text-2xl'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='font-bold'>Beyond Boundaries Beyond Limits</p>
            <div onClick={handleClick} className='border border-white rounded-2xl shadow-xl w-43 flex p-1 justify-center items-center'><button className='bg-yellow-500 rounded-2xl p-3 px-5'>Claim Free Credit</button></div>
            </div>
        </div>
    );
};

export default Banner;