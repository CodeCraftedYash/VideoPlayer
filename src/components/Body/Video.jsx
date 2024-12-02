import React, {useState} from 'react'
import ReactPlayer from 'react-player'
/* import thumbnail from '../../assets/thumbnail.jpg' */
import shortStory from '../../assets/shortStory.mp4'
import { useParams } from 'react-router-dom'
import {data} from './data'
function Video() {
  const { id } = useParams();
  const {thumbnail} = useParams();
  return (
    <div className='w-full h-96 '>
         <ReactPlayer
        
        url={data[Number(id)-1].src}
        controls
        width="100%"
        height="100%"
        light={thumbnail}
      
      /> 
    </div>
  )
}

export default Video