import React from "react";
import { Link } from "react-router-dom";
import NoImage from "/NoImage.jpeg";

const Cards = ({ data, title }) => {
  return (
    <div className="w-full flex items-center flex-wrap py-5 gap-8 px-5 pr-4">
      {data.map((c, i) => (
        <Link
          to={`/${c.media_type || title}/details/${c.id}`}
          className="w-[16vw] h-[52vh] relative mb-5 rounded-md shadow-[8px_13px_20px_1px_rgba(0,0,0,.7)] hover:scale-105 duration-[50]"
          key={i}
        >
          <img
            className="h-[85%] w-full object-fill rounded-md"
            src={c.poster_path || c.backdrop_path || c.profile_path ? `https://image.tmdb.org/t/p/original/${
              c.poster_path || c.backdrop_path || c.profile_path
            }`:NoImage}
            alt=""
          />

          <h1 className="text-m text-zinc-300 font-semibold leading-none px-2 pt-3 pb-1">
            {(c.name || c.originl_name || c.title || c.originl_title).slice(
              0,
              33
            )}
          </h1>

          {c.vote_average > 0 && (
            <div className="absolute right-[-4%] top-[-2%] w-[3.5vw] h-[7vh] text-white text-lg bg-yellow-600 rounded-full flex items-center justify-center">
              {(c.vote_average * 10).toFixed()}
              <sup className="text-xs text-zinc-300">%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
