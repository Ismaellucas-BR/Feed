import React from 'react'
import Logo from '../components/Logo'
function Header() {
  return (
    <header className='flex justify-center px-4 py-5 bg-gray-80'>
        <Logo />
        <h1>Feed</h1>
    </header>
  )
}

export default Header