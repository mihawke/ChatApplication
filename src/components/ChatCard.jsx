import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";

const ChatCard = ({ avatar, onSelect, data, isSelected, onClick }) => {

    return (
        <div className={`flex w-full items-center border-b-[1px] border-gray-800    ${isSelected ? 'bg-gray-700  hover:bg-gray-700' : 'hover:bg-gray-800'}`} style={{ minHeight: 72 }} onClick={onClick}>
            <div className='w-12 h-12 mx-3'>
                <img src={avatar} className='w-12 h-12 rounded-full' alt="Avatar"></img>
            </div>
            <div className='flex flex-col flex-1 pr-4'>
                <div className="flex flex-row items-center">
                    <p className='w-full text-white'>Name</p>
                    <p className='text-xs text-gray-400'>Yesterday</p>
                </div>
                <div className="flex flex-row items-center mt-0.5">
                    <p className='w-full text-gray-400'>Last message...</p>
                    <div>
                        <FaChevronDown className='hidden text-gray-400' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatCard;
