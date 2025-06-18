import {Link} from 'react-router-dom'
import spotifyIcon from '../assets/spotifyIcon.png'
import homeIcon from '../assets/homeIcon.png';
import { navbarLinks } from '../Constants/Values';
const Navbar = () => {

  
  return (
    <div className="fixed flex flex-row top-3 w-full">
      <Link to='/' className="flex ml-4" href="#">
        <img className="h-[20px] w-[20px]" src={spotifyIcon} />
      </Link>

      <Link to='/' className="flex mt-[-5px] ml-4 bg-zinc-900 h-[32px] w-[32px] rounded-full justify-center items-center hover:scale-110 transition ease delay-20" href="#">
        <img src={homeIcon} className="h-[20px] w-[20px] object-contain filter invert"/>
      </Link>

      <div className="relative group ml-2 mt-[-5px]">
        <div className="flex flex-row justify-center items-center bg-zinc-900 h-[32px] w-80 rounded-full hover:bg-zinc-800 px-2 group-focus-within:ring-2 group-focus-within:ring-green-400 transition-all duration-200">
          <i className="bx bx-search text-2xl mr-4 text-white"></i>

          <input className="flex text-[10px] w-6/8 h-3/5 outline-none border-r border-gray-400 bg-transparent text-white" placeholder="What do you want to play?"/>
          <Link to="/search">
            <i className="bx bxs-folder-open text-xl ml-2 text-white"></i>
          </Link>
        </div>
      </div>

      <div className="flex gap-2 ml-50 px-5 border-r-2 h-2/3 border-white">
        {navbarLinks.map((links,index)=>{
        return <Link to={links.href} className="flex text-[11px]  text-neutral-400 font-bold tracking-tight hover:text-white hover:scale-105 transition ease delay-20" key={index}>{links.name}</Link>
        })}
      </div>

      <div className='flex flex-row justify-center items-center ml-2 mt-[-10px] gap-5 '>
        <Link to="/download" href="#" className="flex gap-[4px] justify-center items-center text-neutral-400 text-[11px] font-semibold hover:text-white hover:scale-105 transition ease delay-20">
          <i class='bx bx-down-arrow-alt border-neutral-400 border-2 rounded-full hover:border-white hover:scale-105 transition ease delay-20'></i>
          Install App
        </Link>
        <a href="#" className="flex justify-center items-center text-neutral-400 text-[11px] font-semibold hover:text-white hover:scale-105 transition ease delay-20">
          Sign up
        </a>
        <a href="#" className="flex justify-center items-center text-[11px] font-semibold text-black bg-white w-[60px] h-[32px] rounded-full hover:bg-gray-200 hover:scale-110 transition ease delay-30">
          Log in
        </a>
      </div>
    </div>
  )
}

export default Navbar
