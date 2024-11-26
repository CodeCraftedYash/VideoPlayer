import React from 'react'
import shortStory from '../../assets/shortStory.mp4'
import { AiOutlineLike } from "react-icons/ai";
function Layout({thumbnail,title,likes,time}) {

  return (
    <div className='mt-4 w-80 h-fit flex flex-col mx-auto '>

        <div className='bg-white w-full h-full  border border-black flex flex-col grow'>
        <img src={thumbnail} alt="thumbnail" width="full" height="full" />

        <div className='flex items-center justify-between'>

       <div className='w-full'>
        <h2 className='p-1 text-xl font-semibold text-start ml-2 whitespace-nowrap overflow-x-hidden w-full'>{title}
        </h2>
        <div className='flex items-center justify-between w-full '>
        <h3 className='p-1 text-lg font-normal ml-2 whitespace-nowrap overflow-x-hidden flex gap-1 item-center'><AiOutlineLike className='mt-1'/>{likes} likes</h3>

        <h3 className='mr-2'>{time} days ago</h3>
        </div>

        </div>
       

        </div>

       
        
        </div>
    </div>
  )
}

export default Layout