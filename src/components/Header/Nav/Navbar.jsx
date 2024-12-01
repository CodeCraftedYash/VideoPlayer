import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../Contexts/ThemeContext'

function Navbar() {
  const {theme} = useTheme();
  return (
    <div className={`w-full h-fit  p-1 text-xl px-4 ${theme === 'light' ? 'bg-white text-black border-black' : 'bg-slate-800 text-white border-white' } border-b-2`}>
        <ul className='flex flex-row w-full justify-between items-center font-semibold'>

            <li className='hover:bg-slate-300 hover:text-black transition-colors ease-in hover:cursor-pointer'>
              <Link to='/'>
                Home
              </Link>
              </li>

            <li className='hover:bg-slate-300 hover:text-black transition-colors ease-in hover:cursor-pointer'>
              <Link to='/Downloads'>
                  Downloads
              </Link>
              </li>

            <li className='hover:bg-slate-300 hover:text-black transition-colors ease-in hover:cursor-pointer'>
              <Link to='Account'>
                  Account
              </Link>
              </li>

          

        </ul>
    </div>
  )
}

export default Navbar