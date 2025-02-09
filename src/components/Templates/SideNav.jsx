import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="w-[100%] md:w-[20%] h-screen md:border-r-[1px] md:border-zinc-600 p-5 select-none">
      <h1 className="mb-5 flex items-center justify-between text-lg md:text-3xl text-[#4692DD] font-semibold">
        <i className="ri-movie-ai-line">
          <span className="ml-3">MoviesMx</span>
        </i>
      </h1>
      <nav className="flex flex-col gap-2 text-zinc-600 ">
        <h1 className="text-xl text-white font-semibold">New Feeds</h1>
        <Link
          to="/trending"
          className="p-3 text-m rounded-md group hover:bg-[#4692DD] hover:text-white duration-300"
        >
          <i className="ri-fire-fill group-hover:text-[#FF4500]"></i> Trending
        </Link>

        <Link
          to="/popular"
          className="p-3 text-m rounded-md group hover:bg-[#4692DD] hover:text-white duration-300"
        >
          <i className="ri-bard-fill group-hover:text-[#FFB511]"></i> Popular
        </Link>

        <Link
          to="movie"
          className="p-3 text-m rounded-md group hover:bg-[#4692DD] hover:text-white duration-300"
        >
          <i className="ri-movie-ai-line"></i> Movies
        </Link>

        <Link
          to="/tv"
          className="p-3 text-m rounded-md group hover:bg-[#4692DD] hover:text-white duration-300"
        >
          <i className="ri-tv-2-fill group-hover:text-[#0011D4]"></i> TV Shows
        </Link>

        <Link
          to="/person"
          className="p-3 text-m rounded-md group hover:bg-[#4692DD] hover:text-white duration-300 mb-2"
        >
          <i className="ri-team-fill group-hover:text-[#000000] "></i> Peoples
        </Link>
      </nav>
      <hr className="border-[1px] border-zinc-700 mb-5" />
      <nav className="flex flex-col gap-2 text-zinc-600">
        <h1 className="text-xl text-white font-semibold">Website Info</h1>
        <Link
          to="/about"
          className="p-3 text-m rounded-md group hover:bg-[#4692DD] hover:text-white duration-300"
        >
          <i className="ri-information-2-fill text-xl group-hover:text-[#013D83]"></i>{" "}
          About
        </Link>
      </nav>
    </div>
  );
};

export default SideNav;
