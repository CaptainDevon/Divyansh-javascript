import React from 'react'
import { footerLinks } from '../../Constants/Values'

const Footer = () => {
  return (
    <section className='flex flex-row justify-center items-center mb-3'>
      <div className="flex flex-row gap-10 border-y-1 border-zinc-700 w-12/13 mt-3 text-[10px]">
        {footerLinks.map((section, index) => (
        <div key={index} className='mt-10 ml-1 mb-5'>
          <h3 className="font-bold text-white tracking-tight">{section.title}</h3>
          <ul className="mt-2 space-y-1">
          {section.links.map((link, i) => (
              <li key={i} className="text-gray-400 hover:underline cursor-pointer hover:text-white">
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}

        <div className='flex mt-10 ml-13 justify-center gap-3'>
          <a className="flex h-8 w-8 bg-zinc-800 rounded-full justify-center items-center hover:bg-zinc-600"><i class='bx bxl-instagram m-2 text-lg'></i></a>
          <a className="flex h-8 w-8 bg-zinc-800 rounded-full justify-center items-center hover:bg-zinc-600"><i class='bx bxl-twitter m-2 text-lg'></i></a>
          <a className="flex h-8 w-8 bg-zinc-800 rounded-full justify-center items-center hover:bg-zinc-600"><i class='bx bxl-facebook-circle m-2 text-lg' ></i></a>
        </div>
      </div>
    </section>
  )
}

export default Footer
