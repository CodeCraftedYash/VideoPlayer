import React from 'react';
import './index.css';
import Header from './components/Header/Header';
import Layout from './components/Body/Layout';
import { data } from './components/Body/data';

function App() {
  return (
    <div className="bg-slate-800 w-full min-h-screen">
      <Header />
      <div className="w-full min-h-fit bg-white flex flex-wrap justify-center gap-4 p-4">
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
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
