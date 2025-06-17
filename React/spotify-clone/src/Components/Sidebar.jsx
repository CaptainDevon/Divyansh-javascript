import React from 'react'
import Headline from './Sidebar/Headline'
import LibraryCard from './Sidebar/LibraryCard'
import { libraryValues } from '../Constants/Values'
import { sidebarFooterVals } from '../Constants/Values'
const Sidebar = () => {
  return (
    <div className="flex flex-col ml-1 h-full resize-x overflow-auto min-w-[12.5rem] z-50 max-w-72 bg-[#121212] rounded-md">
      <Headline/>
      <div className="flex flex-col mt-5 items-center overflow-auto custom-scrollbar w-full h-50 gap-2">
        {libraryValues.map((playlist, index) => {
          return (
            <LibraryCard
              key={index}
              labelOne={playlist.labelOne}
              labelTwo={playlist.labelTwo}
              linkText={playlist.linkText}
            />
          );
        })}
      </div>
      <div className="flex flex-wrap mt-4 ml-3 gap-3 w-10/12 ">
        {sidebarFooterVals.map((link,index)=>{
          return <a className="text-zinc-300 text-[8px]" href="#" key={index}>{link.link}</a>
        })}
      </div>

      <a href="#" className="text-[8px] ml-3 mt-3 hover:underline decoration-1">Cookies</a>

      <a href="#" className='flex mt-2 ml-3 w-1/4 h-1/12 text-[8px] justify-center items-center border-1 border-gray-400 rounded-full gap-2 font-bold hover:scale-110 transition ease delay-20 hover:border-white hover:border-2'>
        <i class='bx bx-globe'></i>
        English
      </a>
    </div>
  )
}

export default Sidebar
