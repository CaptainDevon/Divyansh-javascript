import React from 'react'

const ArtistCard = ({ name, photo, artists }) => {
  return (
    <div className="flex items-start justify-center">
      <div className="group relative flex flex-col justify-start items-center text-white p-2 w-[9rem] h-[11rem] overflow-hidden rounded-lg hover:bg-gradient-to-r from-neutral-800 to-zinc-800">
        <img
          className="w-[120px] h-[120px] object-cover rounded-full"
          src={photo}
          alt="album"
        />
        <a className="text-sm hover:underline decoration-1 mr-10">{name}</a>
        <div className="flex flex-wrap text-[8px] text-neutral-400 ml-2">
          {artists.map((art, index) => (
            <a
              key={index}
              className="truncate max-w-[80px] mr-2 hover:underline decoration-1 inline-block"
              title={art}
            >
              {art},
            </a>
          ))}
        </div>
        <a
          href="#"
          className="flex absolute justify-center items-center bottom-2 h-8 w-8 right-4 bg-green-500 text-black rounded-full opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-[-45px] shadow-lg"
        >
          <i className="bx bx-play text-2xl"></i>
        </a>
      </div>
    </div>
  );
};

export default ArtistCard
