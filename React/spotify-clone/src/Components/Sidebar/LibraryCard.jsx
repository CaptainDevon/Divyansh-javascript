import React from 'react';

const LibraryCard = ({labelOne,labelTwo,linkText}) => {
  return (
    <div className="flex flex-col h-30 w-11/12 bg-zinc-800 rounded-md gap-1">
      <label className="ml-2 mt-2 text-[12px]">{labelOne}</label>
      <label className="ml-2 text-[10px]">{labelTwo}</label>
      <a href="#" className="flex ml-2 mt-3 mb-2 justify-center items-center text-black text-[10px] bg-white w-25 h-5 rounded-full font-bold tracking-tight">{linkText}</a>
    </div>
  );
}

export default LibraryCard;
