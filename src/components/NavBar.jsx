import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='flex gap-4'>
            <NavLink
                to='/'
                exact='true'
                activeclassname='active'
                className='text-dark-grayish-blue-light font-bold'
            >all</NavLink>
            <NavLink
                to='/active'
                exact='true'
                activeclassname='active'
                className='text-dark-grayish-blue-light font-bold'
            >active</NavLink>
            <NavLink
                to='/completed'
                exact='true'
                activeclassname='active'
                className='text-dark-grayish-blue-light font-bold'
            >completed</NavLink>
        </nav>
    )
}

export default NavBar