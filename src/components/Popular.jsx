import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/Axios";
import TopNav from "../components/Templates/TopNav";
import DropDown from "../components/Templates/DropDown";
import Cards from "./Templates/Cards";
import Loading from "../components/Loading";
import InfiniteScroll from "react-infinite-scroll-component";


const Popular = () => {


  const navigate = useNavigate();
  const [ category, setCategory ] = useState("movie");
  document.title = "Popular " + category.toUpperCase();
  const [ popular, setPopular ] = useState([]);
  const [ page, setPage ] = useState(1);
  const [ hasMore, setHasMore ] = useState(true);

  const GetPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);
      if(data.results.length > 0){
        setPopular((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      }else{
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error :", error);
    }
  };

  const RefreshHandler = () =>{
    if(popular.length === 0){
      GetPopular();
    }else{
      setPage(1);
      setPopular([]);
      GetPopular();
    }
  }

  useEffect(() => {
    RefreshHandler();
  }, [ category ]);


  return popular.length > 0 ? (
    <div className="w-screen h-screen px-10 py-4 select-none overflow-hidden overflow-y-auto">
      <div className="w-full h-[8vh] flex items-center justify-between">
        <h1 className="text-2xl text-zinc-300 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line mr-2 hover:text-[#4692DD]"
          ></i>
          Popular <span className="text-sm font-semibold text-zinc-600">{category}</span>
        </h1>

        <div className="w-[85%] flex items-center justify-between">
          <TopNav />

          <DropDown
            title="Category"
            options={["movie", "tv"]}
            func={(e) => setCategory(e.target.value)}
          />
          
        </div>
      </div>

      <InfiniteScroll
        dataLength={popular.length}
        next={GetPopular()}
        hasMore={hasMore}
        loader={<h1 className="text-white">Loading...</h1>}
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Popular;