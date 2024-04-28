import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { IoFilter } from 'react-icons/io5'
import avatar1 from '../assets/images/avatar1.png'
import avatar2 from '../assets/images/avatar2.jpg'
import avatar3 from '../assets/images/avatar3.jpg'
import avatar4 from '../assets/images/avatar4.jpg'
import avatar5 from '../assets/images/avatar5.jpg'
import avatar6 from '../assets/images/avatar6.jpg'
import avatar7 from '../assets/images/avatar7.jpg'
import avatar8 from '../assets/images/avatar8.jpg'
import avatar9 from '../assets/images/avatar9.jpg'
import avatar10 from '../assets/images/avatar10.png'



import ChatCard from './ChatCard'

const ChatList = () => {

    // State to hold the data of the selected card
    const [selectedCard, setSelectedCard] = useState(null);

    // Function to handle selection of a card and retrieve its data
    const handleCardSelect = (data) => {
        setSelectedCard(data);
    };

    return (
        <div className='flex flex-col h-full bg-gray-900'>
            <div className='flex flex-row w-full pl-3 py-1.5 bg-gray-900 items-center'>
                <div className='flex flex-row w-full px-2.5 py-1.5 bg-gray-800 items-center rounded-md'>
                    <FaSearch className='text-gray-400 h-6 w-6 p-1'></FaSearch>
                    <input
                        type='text'
                        placeholder='Search'
                        className='ml-6 w-full bg-gray-800 outline-none text-white caret-white'
                        style={{ fontSize: 14, lineHeight: '100%' }}
                    />
                </div>
                <IoFilter className='text-gray-400 h-8 w-8 p-1.5 mx-2' />
            </div>
            <div className='flex  flex-col flex-grow overflow-auto' style={{ maxHeight: 'calc(100vh - 6.8rem)' }}>
                <ChatCard
                    avatar={avatar1}
                    isSelected={selectedCard === avatar1}
                    onClick={() => handleCardSelect(avatar1)}
                    data={''}
                />
                <ChatCard
                    avatar={avatar2}
                    isSelected={selectedCard === avatar2}
                    onClick={() => handleCardSelect(avatar2)}
                    data={''}
                />
                <ChatCard
                    avatar={avatar3}
                    isSelected={selectedCard === avatar3}
                    onClick={() => handleCardSelect(avatar3)}
                    data={''}
                />
                <ChatCard
                    avatar={avatar4}
                    isSelected={selectedCard === avatar4}
                    onClick={() => handleCardSelect(avatar4)}
                    data={''}
                />
                <ChatCard
                    avatar={avatar5}
                    isSelected={selectedCard === avatar5}
                    onClick={() => handleCardSelect(avatar5)}
                    data={''}
                />
                <ChatCard
                    avatar={avatar6}
                    isSelected={selectedCard === avatar6}
                    onClick={() => handleCardSelect(avatar6)}
                    data={''}
                />
                <ChatCard
                    avatar={avatar7}
                    isSelected={selectedCard === avatar7}
                    onClick={() => handleCardSelect(avatar7)}
                    data={''}
                />
                <ChatCard
                    avatar={avatar8}
                    isSelected={selectedCard === avatar8}
                    onClick={() => handleCardSelect(avatar8)}
                    data={''}
                />
                <ChatCard
                    avatar={avatar9}
                    isSelected={selectedCard === avatar9}
                    onClick={() => handleCardSelect(avatar9)}
                    data={''}
                />
                <ChatCard
                    avatar={avatar10}
                    isSelected={selectedCard === avatar10}
                    onClick={() => handleCardSelect(avatar10)}
                    data={''}
                />
            </div>
        </div>
    )
}

export default ChatList