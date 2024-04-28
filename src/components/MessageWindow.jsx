import React from 'react'
import background from '../assets/images/bg.jpg'
import { FaSearch } from 'react-icons/fa';
import { FaPlus, FaRegFaceSmile } from "react-icons/fa6";
import { IoIosVideocam, IoMdSend } from "react-icons/io";


const MessageWindow = () => {
    return (
        <div className='flex flex-col h-full justify-between'>
            <header className='flex flex-row px-4 py-2.5 w-full'>
                <div className="h-10 flex flex-row w-full">
                    <div className='w-10 h-10  mx-3'>
                        <img src='src\assets\images\avatar2.jpg' className='w-10 h-10 rounded-full' alt="Avatar"></img>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className='w-full text-white'>Name</p>
                        {/* <p className='text-xs text-gray-400'>Yesterday</p> */}
                    </div>
                </div>

                <div className="h-10 flex flex-row w-fit gap-x-2">
                    <button className="h-10 w-10 flex justify-center items-center text-gray-400 rounded-full hover:bg-gray-400 hover:bg-opacity-15 cursor-pointer">
                        <IoIosVideocam className="h-6 w-6 " title='Video call'/>
                    </button>
                    <button className="h-10 w-10 flex justify-center items-center text-gray-400 rounded-full hover:bg-gray-400 hover:bg-opacity-15 cursor-pointer">
                        <FaSearch className='h-4 w-4' title='Search'></FaSearch>
                    </button>
                    <button className="h-10 w-10 flex justify-center items-center text-gray-400 rounded-full hover:bg-gray-400 hover:bg-opacity-15 cursor-pointer">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>menu</title><path fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg>
                    </button>
                </div>
            </header>
            <main className='flex flex-grow bg-cover' style={{ backgroundImage: `url(${background})` }}>

            </main>
            <footer className='flex flex-row px-4 py-1 w-full items-center'>
                <button className="h-10 w-10 flex justify-center items-center text-gray-300 cursor-pointer">
                    <FaPlus className='w-6 h-6 text-gray-400' title='Attach'/>
                </button>
                <div className='flex flex-row w-full px-3 py-2.5 bg-gray-700 items-center rounded-md ml-3 my-[5px]'>
                    <FaRegFaceSmile className='w-6 h-6 ml-2 text-gray-400 cursor-pointer' />
                    <input
                        type='text'
                        placeholder='Type a message...'
                        className='ml-6 w-full bg-gray-700 outline-none leading-6  text-white caret-white'
                        style={{ fontSize: 16, lineHeight: '100%' }}
                    />
                </div>
                <button className="h-10 w-10 flex justify-center items-center text-gray-300 cursor-pointer ml-4">
                    <IoMdSend className='w-6 h-6 text-gray-400' title='Send'/>
                </button>
            </footer>
        </div>
    )
}

export default MessageWindow