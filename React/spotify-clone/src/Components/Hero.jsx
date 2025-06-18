import { Routes, Route, useLocation } from "react-router-dom";
import SongSection from './Hero/SongSection.jsx';
import ArtistSection from "./Hero/ArtistSection.jsx";
import AlbumSection from './Hero/AlbumSection.jsx';
import FeaturesSection from './Hero/FeaturesSection.jsx';
import RadioSection from './Hero/RadioSection.jsx';
import CountryBest from './Hero/CountryBest.jsx';
import Footer from './Hero/Footer.jsx';
import BrowsePage from "./Pages/BrowsePage.jsx";


const Hero = ({children}) => {

  const location=useLocation();
  const isDefaultPage=location.pathname==='/';

  return (
    <div className="flex flex-grow flex-col w-0 mr-1 h-97 bg-zinc-900 text-white rounded-md overflow-auto custom-scrollbar gap-3">
      
      {isDefaultPage?(<><SongSection/>
      <ArtistSection/>
      <AlbumSection/>
      <RadioSection/>
      <FeaturesSection/>  
      <CountryBest/></>):
      (<>
      {children}
      </>)}

      <Footer/>
    </div>
  );
};


export default Hero
