import React from 'react'
import shortStory from '../../assets/shortStory.mp4'
import { AiOutlineLike } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
function Layout({thumbnail,title,likes,time,id}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/video/${id}`)
  }
  return (
    <div className='shadow-md mt-4 w-80 h-fit flex flex-col mx-auto cursor-pointer rounded-xl'
    onClick={handleClick}
    >

        <div className='bg-white border border-black/50 flex flex-col grow '>
        <img src={thumbnail} alt="thumbnail" className='w-full h-52 object-fit' />

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