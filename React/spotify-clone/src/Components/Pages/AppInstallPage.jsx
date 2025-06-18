import React from 'react'
import spotifyLogo from '../../assets/downloadPageIcon.png'
import microsoftIcon from '../../assets/microsoftLogo.png'
import laptopImage from '../../assets/laptopImage.png'
const AppInstallPage = () => {
  return (
    <div className='flex h-full w-full justify-center items-center bg-gradient-to-b from-emerald-500 to-pink-300'>
  <div className='flex flex-row m-4 h-5/6 w-11/12 rounded-lg overflow-hidden bg-gradient-to-b from-pink-400 to-emerald-500'>

    <div className='flex flex-col w-1/2 p-6 gap-4 text-black'>
      <img src={spotifyLogo} className='h-12 w-16' alt='Spotify Logo'/>
      <h1 className='font-bold text-2xl tracking-tight'>Download Spotify for Windows</h1>
      <h3 className='text-sm tracking-tight w-72'>
        Enjoy high-quality audio and offline playback, plus Windows Game Bar integration and a friend activity feed that lets you see what your friends are listening to in real time.
      </h3>
      
      <a
        href="https://apps.microsoft.com/detail/9NCBCSZSJRSB?hl=en-us&gl=IN&ocid=pdpshare"
        className='flex flex-row justify-center items-center bg-neutral-800 h-10 w-44 rounded-md'
      >
        <img src={microsoftIcon} className='h-8 w-10' alt='Microsoft Icon'/>
        <div className='flex flex-col ml-1'>
          <span className='text-white text-[6px]'>Download from the</span>
          <span className='text-white text-[10px] font-bold'>Microsoft Store</span>
        </div>
      </a>

      <a href='#' className='text-[10px] hover:underline'>Download directly from Spotify</a>
    </div>

    
    <div className='overflow-hidden flex justify-center items-center'>
      <img className='object-contain h-full' src={laptopImage} alt='Spotify on Laptop'/>
    </div>

  </div>
</div>

  )
}

export default AppInstallPage
