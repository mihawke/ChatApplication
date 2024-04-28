import { useState } from 'react'
import Header from './components/Header'
import Filter from './components/Filter'
import ChatList from './components/ChatList'
import MessageWindow from './components/MessageWindow'

function App() {

  return (
    <div className='flex w-full max-h-screen h-screen' style={{ backgroundColor: '#212e36' }}>
      <div className='border-r-2 border-gray-600 flex flex-col flex-grow' style={{ maxWidth: 450 }}>
        <Header />
        <ChatList />
      </div>
      <div className='flex flex-col flex-grow'>
        <MessageWindow> </MessageWindow>
      </div>
    </div>
  )
}

export default App
