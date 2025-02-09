import React, { useEffect, useState } from "react";
import axios from "../utils/Axios";
import { useNavigate } from "react-router-dom";
import TopNav from "../components/Templates/TopNav";
import DropDown from "../components/Templates/DropDown";
import Cards from "./Templates/Cards";
import Loading from "../components/Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {

  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  document.title = "Trending " + category.toUpperCase();
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [ page, setPage ] = useState(1);
  const [ hasMore, setHasMore ] = useState(true);

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
      if(data.results.length > 0){
        setTrending((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      }else{
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error :", error);
    }
  };

  const RefreshHandler = () =>{
    if(trending.length === 0){
      GetTrending();
    }else{
      setPage(1);
      setTrending([]);
      GetTrending();
    }
  }

  useEffect(() => {
    RefreshHandler();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="w-screen h-screen px-10 py-4 select-none overflow-hidden overflow-y-auto">
      <div className="w-full h-[8vh] flex items-center justify-between">
        <h1 className="text-2xl text-zinc-300 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line mr-2 hover:text-[#4692DD]"
          ></i>
          Trending <span className="text-sm font-semibold text-zinc-600 capitalize">{category}</span>
        </h1>

        <div className="w-[85%] flex items-center justify-between">
          <TopNav />

          <DropDown
            title="Category"
            options={["movie", "tv", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
          <DropDown
            title="Duration"
            options={["day", "week"]}
            func={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={GetTrending()}
        hasMore={hasMore}
        loader={<h1 className="text-white">Loading...</h1>}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
