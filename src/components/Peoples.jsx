import React, { useEffect, useState } from "react";
import axios from "../utils/Axios";
import { useNavigate } from "react-router-dom";
import TopNav from "../components/Templates/TopNav";
import Cards from "./Templates/Cards";
import Loading from "../components/Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Peoples = () => {

  const navigate = useNavigate();
  const [ category, setCategory ] = useState("popular");
  document.title = "People " + category.toUpperCase();
  const [ person, setPersons ] = useState([]);
  const [ page, setPage ] = useState(1);
  const [ hasMore, setHasMore ] = useState(true);

  const GetPersons = async () => {
    try {
      const { data } = await axios.get(
        `/person/${category}?page=${page}`
      );
      if (data.results.length > 0) {
        setPersons((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error :", error);
    }
  };

  const RefreshHandler = () => {
    if (person.length === 0) {
      GetPersons();
    } else {
      setPage(1);
      setPersons([]);
      GetPersons();
    }
  };

  useEffect(() => {
    RefreshHandler();
  }, [ category ]);

  return person.length > 0 ? (
    <div className="w-screen h-screen px-10 py-4 select-none overflow-hidden overflow-y-auto">
      <div className="w-full h-[8vh] flex items-center justify-between">
        <h1 className="text-2xl text-zinc-300 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line mr-2 hover:text-[#4692DD]"
          ></i>
          Peoples <small className="text-xs text-zinc-500 capitalize">{category}</small>
        </h1>

        <div className="w-[85%] flex items-center justify-between">
          <TopNav />
        </div>
      </div>

      <InfiniteScroll
        dataLength={person.length}
        next={GetPersons()}
        hasMore={hasMore}
        loader={<h1 className="text-white">Loading...</h1>}
      >
        <Cards data={person} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Peoples;