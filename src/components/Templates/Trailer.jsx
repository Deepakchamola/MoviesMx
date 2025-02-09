import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NotFound from "../NotFound";

const Trailer = () => {

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideos = useSelector((state) => state[category].info.videos);

  return ytvideos ? (
    <div className="absolute z-[200] top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,.9)] flex items-center justify-center">
      <Link
          onClick={() => navigate(-1)}
          className="ri-close-fill absolute top-[3%] right-[3%] text-2xl text-white hover:text-[#4692DD]"
      />
      <ReactPlayer
        height={"90vh"}
        width={"80vw"}
        playing={true}
        controls={true}
        loop={true}
        url={`https://www.youtube.com/watch?v=${ytvideos.key}`}
      />

    </div>
  ):<NotFound />
};

export default Trailer;
