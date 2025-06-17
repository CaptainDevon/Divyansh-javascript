import SongSection from './Hero/SongSection.jsx';
import ArtistSection from "./Hero/ArtistSection.jsx";
import AlbumSection from './Hero/AlbumSection.jsx';
import FeaturesSection from './Hero/FeaturesSection.jsx';
import RadioSection from './Hero/RadioSection.jsx';
import CountryBest from './Hero/CountryBest.jsx';
import Footer from './Hero/Footer.jsx';


const Hero = () => {

  return (
    <div className="flex flex-grow flex-col w-0 mr-1 h-full bg-zinc-900 text-white rounded-md overflow-auto custom-scrollbar gap-3">
      <SongSection/>
      <ArtistSection/>
      <AlbumSection/>
      <RadioSection/>
      <FeaturesSection/>  
      <CountryBest/>
      <Footer/>
    </div>
  );
};


export default Hero
