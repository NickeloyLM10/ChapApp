import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat App</span>
      <div className='user'>
        <img src='https://www.format.com/wp-content/uploads/kawai-matthews-kanye-west-1.jpg.webp' alt='' />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar