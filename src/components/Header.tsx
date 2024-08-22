import React from 'react'

function Header() {
  return (
    <header className='flex justify-center px-4 py-5 bg-gray-80'>
        <img src="../assets/feed-logo.svg"  className="h-8" alt="Logo, dois triangulos verdes" />
        <h1>Feed</h1>
    </header>
  )
}

export default Header