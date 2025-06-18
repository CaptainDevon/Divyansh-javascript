import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Hero from './Components/Hero'
import Preview from './Components/Preview'

const Layout = () => {
  return (
    <div>
      <div className="bg-black min-h-screen text-white">
      <Navbar/>
      <div className="fixed flex flex-row w-screen gap-2 mt-11">
        <Sidebar/>
        <Outlet/>
      </div>
      <Preview/>
    </div>
    </div>
  )
}

export default Layout
