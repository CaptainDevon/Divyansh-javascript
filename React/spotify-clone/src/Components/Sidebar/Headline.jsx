import React from 'react';

const Headline = () => {
  return (
    <div className="flex justify-between items-center mt-3 ml-3 text-[11px]">
        <label className="font-bold">Your Library</label>
        <a href="#" className="flex justify-center items-center mr-5 text-[16px] h-6 w-6 hover:bg-zinc-800 rounded-full"><i className='bx bx-plus'></i></a>
      </div>
  );
}

export default Headline;
