import React from 'react'
import Sidebar from '../components/home components/Sidebar'
import Chat from '../components/home components/Chat'

const Home = () => {
  return (
    <div className='home'>
        <div className='container'>
            {/* <Sidebar/> */}
            <Chat/>
        </div>
    </div>
  )
}

export default Home