import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {

  return (
    <div className="w-full h-[60vh] px-2 select-none">
      <div
        style={{
          background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5),rgba(0,0,0,.8)), 
        url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat:  "no-repeat"
        }}
        className="w-full h-full rounded-md flex flex-col justify-end pb-[2%]"
      >
        <div className="w-[70%] text-white px-5 flex flex-col items-start">
          <h1 className="text-2xl font-black">
            {data.name ||
              data.originl_title ||
              data.title ||
              data.originl_title}
          </h1>
          <p className="text-m font-semibold">
            {data.overview.slice(0, 300)}...<Link to={`/${ data.media_type }/details/${data.id}`} className="cursor-pointer hover:text-blue-400">more</Link>
          </p>
          <p className="mt-2">
            <i className="ri-megaphone-fill text-yellow-500" /> {data.release_date || 'No Info'}
            <i className="ri-movie-2-ai-fill text-yellow-500 ml-4" /> {data.media_type.toUpperCase()}
          </p>
        <Link to={`/${data.media_type}/details/${data.id}/trailer`} className="px-3 py-2 text-white rounded-md bg-[#4692DD] mt-3 hover:scale-105">Watch trailer</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
