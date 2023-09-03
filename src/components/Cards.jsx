import React from 'react';
import './Cards.css';
import { FaAngleLeft, FaAngleRight, FaQuoteRight, FaQuoteLeft } from "react-icons/fa6";


function Cards({ data, prev, next }) {
    const name = data.name;
    const review = data.review;
    const role = data.role;
    const image = data.image;
    return (
        <div className='shadow-lg shadow-black relative px-4 bg-white h-[370px]'>
            <img src={image} alt="" className='image w-36 rounded-full md:absolute -top-12 border-4 border-solid border-violet-500' />
            <div className='pt-[3rem] trasition-all duration-200 text-center'>
                <p className='font-bold text-xl tracking-wide py-2 text-purple-700'>{name}</p>
                <p className='font-semibold text-gray-400 uppercase text-sm tracking-wider pb-4'>{role}</p>
                <div className='flex items-center justify-start text-xl text-purple-600'>
                    <FaQuoteLeft />
                </div>
                <p className="font-semibold text-black px-2 font-['Cinzel']">{review}</p>
            </div>
            <div className='flex items-center justify-end text-xl text-purple-600'>
                <FaQuoteRight />
            </div>
            <div className='absolute bottom-6 flex items-center justify-around w-full'>
                <button onClick={prev} className=' hover:bg-gray-500 h-12 aspect-square bg-gray-300 rounded-full flex items-center justify-center'><FaAngleLeft /></button>
                <button onClick={next} className=' hover:bg-gray-500 h-12 aspect-square bg-gray-300 rounded-full flex items-center justify-center'><FaAngleRight /></button>
            </div>
        </div>
    )
};

export default Cards;