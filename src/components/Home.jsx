import React, { useState, useEffect } from "react";
import axios from "../utils/Axios";
import SideNav from "./Templates/SideNav";
import TopNav from "./Templates/TopNav";
import Header from "./Templates/Header";
import HorizontalCards from "./Templates/HorizontalCards";
import DropDown from "./Templates/DropDown";
import Loading from "./Loading";

const Home = () => {
  document.title = "Home";
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState('all');

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let GetWallpaper =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(GetWallpaper);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  useEffect(() => {
    GetTrending();
    !wallpaper && GetHeaderWallpaper();
  }, [category]);

  return wallpaper && trending ? (
    <div className="flex">
      <SideNav />
      <div className="w-[80%] h-screen overflow-auto overflow-x-hidden">
        <TopNav />
        <Header data={wallpaper} />

        <div className="mt-4 px-2 py-2 flex justify-between items-center">
          <h1 className="text-3xl text-zinc-500 font-semibold">Trending</h1>

          <DropDown
            title="Filter"
            options={["tv", "movie", "all"]}
            func={(e)=> setCategory(e.target.value)}
          />
        </div>

        <HorizontalCards data={trending} />
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Home;
