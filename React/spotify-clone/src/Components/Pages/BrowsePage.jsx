import React from 'react'
import { browseLinks } from '../../Constants/Values'
import Card from '../Hero/Card'
const BrowsePage = () => {
  return (
    <div className="flex flex-col mt-5 mx-5 custom-scrollbar">
        <h1 className='ml-2'>Browse all</h1>
        
        <div className='flex grid grid-cols-4 ml-[-1rem] gap-2'>
            {browseLinks.map((link,index)=>(
            <div className='mt-2 ml-3'key={index}><Card title={link.title} photo={link.photo}/></div>
            ))}
        </div>
        
    </div>
  )
}

export default BrowsePage
