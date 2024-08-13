import React from 'react'
import Searchbox from './Searchbox'

const Header = () => {
  return (
    <nav className='header'>
        <h1>Rick and Morty</h1>
        <Searchbox/>
    </nav>
  )
}

export default Header