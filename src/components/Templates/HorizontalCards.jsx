import React from "react";
import { Link } from "react-router-dom";
import NoImage from "/NoImage.jpeg";

const HorizontalCards = ({ data }) => {
  return (
    <div className="scroll w-full h-[43vh] p-2 select-none text-white flex overflow-x-auto overflow-y-hidden mb-5">
      {data.length > 0 ? data.map((d, i) => (
        <Link
          to={`/${d.media_type}/details/${d.id}`}
          key={i}
          className="min-w-[16%] p-1 mr-3 bg-zinc-900 rounded-md hover:scale-105 duration-70 mb-5"
        >
          <img
            className="w-full h-[50%] rounded-md"
            src={d.backdrop_path || d.poster_path ? `https://image.tmdb.org/t/p/original/${
              d.backdrop_path || d.poster_path
            }`:NoImage}
            alt=""
          />
          <div className="px-1 pb-3 h-[50%] overflow-hidden">
            <h1 className="text-m font-semibold leading-none mb-1 mt-3">
              {d.name || d.originl_title || d.title || d.originl_title}
            </h1>
            <p className="text-xs font-semibold">
              {(d.overview).slice(0, 90)}...
              <span className="text-zinc-500 cursor-pointer hover:text-blue-400">
                more
              </span>
            </p>
          </div>
        </Link>
      )):<h1 className="text-3xl text-white font-semibold text-center">Nothing to show</h1>}
    </div>
  );
};

export default HorizontalCards;
