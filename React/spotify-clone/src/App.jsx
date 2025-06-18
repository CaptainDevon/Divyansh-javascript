import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Preview from './Components/Preview'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Hero from './Components/Hero'
const App = () => {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white">
      <Navbar/>
      <div className="fixed flex flex-row w-screen gap-2 mt-11">
        <Sidebar/>
        <Hero/>
      </div>
      <Preview/>
    </div>
    </Router>
  )
}

export default App
