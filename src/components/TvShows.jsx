import React, { useEffect, useState } from "react";
import axios from "../utils/Axios";
import { useNavigate } from "react-router-dom";
import TopNav from "../components/Templates/TopNav";
import DropDown from "../components/Templates/DropDown";
import Cards from "./Templates/Cards";
import Loading from "../components/Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const TvShows = () => {

  const navigate = useNavigate();
  const [ category, setCategory ] = useState("airing_today");
  document.title = "Tv Shows " + category.toUpperCase();
  const [ tv, setTvShows ] = useState([]);
  const [ page, setPage ] = useState(1);
  const [ hasMore, setHasMore ] = useState(true);

  const GetTvShows = async () => {
    try {
      const { data } = await axios.get(
        `/tv/${category}?page=${page}`
      );
      if (data.results.length > 0) {
        setTvShows((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error :", error);
    }
  };

  const RefreshHandler = () => {
    if (tv.length === 0) {
      GetTvShows();
    } else {
      setPage(1);
      setTvShows([]);
      GetTvShows();
    }
  };

  useEffect(() => {
    RefreshHandler();
  }, [ category ]);

  return tv.length > 0 ? (
    <div className="w-screen h-screen px-10 py-4 select-none overflow-hidden overflow-y-auto">
      <div className="w-full h-[8vh] flex items-center justify-between">
        <h1 className="text-2xl text-zinc-300 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line mr-2 hover:text-[#4692DD]"
          ></i>
          Tv <small className="text-xs text-zinc-500 capitalize">{category}</small>
        </h1>

        <div className="w-[85%] flex items-center justify-between">
          <TopNav />

          <DropDown
            title="Category"
            options={["on_the_air", "popular", "top_rated", "airing_today"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={tv.length}
        next={GetTvShows()}
        hasMore={hasMore}
        loader={<h1 className="text-white">Loading...</h1>}
      >
        <Cards data={tv} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default TvShows;