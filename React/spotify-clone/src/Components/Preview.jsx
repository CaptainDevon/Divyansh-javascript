import React from 'react'

const Preview = () => {
  return (
    <div className="flex flex-row fixed bottom-[5px] ml-1 h-1/11 w-full bg-gradient-to-r from-fuchsia-700 to-blue-500">
      <div className="flex flex-col ml-2 justify-center leading-4">
        <h1 className="text-[10px] font-sans tracking-tighter font-bold">
          Preview of spotify
        </h1>
        <p className="text-[11px] font-sans tracking-tight font-medium">
          Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.
        </p>
      </div>
      <div className="flex  mr-4 ml-115 mt-[6px]">
        <a href="#" className="flex relative justify-center items-center text-black bg-white h-[33px] w-[110px] rounded-[30px] tracking-tight text-[12px] font-bold font-sans hover:bg-slate-200 hover:scale-105 transition ease delay-10">
          Sign up free
        </a>
      </div>
    </div>
  )
}

export default Preview
