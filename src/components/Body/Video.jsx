import React from 'react'
import ReactPlayer from 'react-player'
import thumbnail from '../../assets/thumbnail.jpg'
function Video() {
  return (
    <div>
         <ReactPlayer
        
        url={shortStory}
        controls
        width="100%"
        height="100%"
        light={thumbnail}
      
      /> 
    </div>
  )
}

export default Video