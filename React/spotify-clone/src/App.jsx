import React from 'react'
import { BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Preview from './Components/Preview'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Hero from './Components/Hero'
import Layout from './Layout';
import BrowsePage from './Components/Pages/BrowsePage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} /> 
          <Route path="search" element={<Hero><BrowsePage /></Hero>} />
        </Route>
        <Route path="/premium" element={<p>this it the premium page</p>} />
        <Route path="/support" element={<p>this it the support page</p>} />
        <Route path="/download" element={<p>this it the download page</p>} />
      </Routes>
    </Router>
  )
}

export default App
