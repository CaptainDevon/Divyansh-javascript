import React from 'react'
import Preview from './Components/Preview'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Hero from './Components/Hero'
const App = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar/>
      <div className="fixed flex flex-row w-screen gap-2 mt-11">
        <Sidebar/>
        <Hero/>
      </div>
      <Preview/>
    </div>
  )
}

export default App
