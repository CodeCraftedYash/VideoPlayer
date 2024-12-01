import React from 'react'
import Layout from '../Body/Layout';
import { data } from '../Body/data';

function Home() {
  return (
    <div className="w-full min-h-fit flex flex-wrap justify-center gap-4 p-4">
    {data.map(({ thumbnail, title, likes, time, id }) => (
      <div
        key={id}
        className="flex-grow-0 flex-shrink-0 
          basis-full 
          sm:basis-1/2 
          md:basis-1/3 
          lg:basis-1/4 
          xl:basis-1/5"
      >
        <Layout
          thumbnail={thumbnail}
          title={title}
          likes={likes}
          time={time}
          id = {id}
        />
      </div>
    ))}
  </div>
  )
}

export default Home