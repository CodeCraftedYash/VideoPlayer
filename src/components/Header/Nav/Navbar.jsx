import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='text-white w-full h-fit bg-white p-1 text-xl px-4'>
        <ul className='flex flex-row w-full justify-between items-center bg-white text-black font-semibold'>

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