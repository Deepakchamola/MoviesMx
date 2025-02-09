import React, { useEffect, useState } from "react";
import axios from "../utils/Axios";
import { useNavigate } from "react-router-dom";
import TopNav from "../components/Templates/TopNav";
import DropDown from "../components/Templates/DropDown";
import Cards from "./Templates/Cards";
import Loading from "../components/Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Movies = () => {

  const navigate = useNavigate();
  const [category, setCategory] = useState("now_playing");
  document.title = "Movie " + category.toUpperCase();
  const [movie, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const GetMovies = async () => {
    try {
      const { data } = await axios.get(
        `/movie/${category}?page=${page}`
      );
      if (data.results.length > 0) {
        setMovies((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error :", error);
    }
  };

  const RefreshHandler = () => {
    if (movie.length === 0) {
      GetMovies();
    } else {
      setPage(1);
      setMovies([]);
      GetMovies();
    }
  };

  useEffect(() => {
    RefreshHandler();
  }, [ category ]);

  return movie.length > 0 ? (
    <div className="w-screen h-screen px-10 py-4 select-none overflow-hidden overflow-y-auto">
      <div className="w-full h-[8vh] flex items-center justify-between">
        <h1 className="text-2xl text-zinc-300 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line mr-2 hover:text-[#4692DD]"
          ></i>
          Movies <small className="text-xs text-zinc-500 capitalize">{category}</small>
        </h1>

        <div className="w-[85%] flex items-center justify-between">
          <TopNav />

          <DropDown
            title="Category"
            options={["popular", "top_rated", "upcoming", "now_playing"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={movie.length}
        next={GetMovies()}
        hasMore={hasMore}
        loader={<h1 className="text-white">Loading...</h1>}
      >
        <Cards data={movie} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Movies;
