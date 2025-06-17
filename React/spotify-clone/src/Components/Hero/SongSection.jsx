import { useRef ,React } from "react";
import SongCard from "./SongCard.jsx";
import { songs } from '../../Constants/Values.js'

const SongSection = () => {
    const scrollRef = useRef(null);
    
      const scrollLeft = (e) => {
        e.preventDefault();
        scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
      };
    
      const scrollRight = (e) => {
        e.preventDefault();
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
      };
    

  return (
    <section className="mt-5 mx-5">
        <div className="flex justify-between items-center mb-2">
          <a href="#" className="text-lg font-bold hover:underline decoration-1">Trending Songs</a>
          <a href="#" className="text-xs font-semibold text-neutral-400 hover:underline decoration-1">show all</a>
        </div>

        <div className="relative">
          <a
            href="#"
            onClick={scrollLeft}
            className="flex absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 z-10 justify-center items-center  hover:bg-black text-white p-1 rounded-full"
          >
            <i class='bx bx-arrow-back'></i>
          </a>

          <a
            href="#"
            onClick={scrollRight}
            className="flex absolute right-0 top-1/2 -translate-y-1/2 h-8 w-8 z-10 justify-center items-center  hover:bg-black text-white p-1 rounded-full"
          >
            <i class='bx bx-arrow-back bx-rotate-180' ></i>
          </a>

          <div
            ref={scrollRef}
            className="flex flex-row overflow-x-auto hide-scrollbar"
          >
            {songs.map((song, index) => (
              <a href="#" key={index}>
                <SongCard
                  name={song.name}
                  photo={song.photo}
                  artist={song.artists}
                />
              </a>
            ))}
          </div>
        </div>
      </section>
  );
}

export default SongSection;
