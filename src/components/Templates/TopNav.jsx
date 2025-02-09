import React, { useState, useEffect } from "react";
import axios from "../../utils/Axios";
import { Link } from "react-router-dom";
import NoImage from "/NoImage.jpeg"

const TopNav = () => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState([]);

  const GetSearch = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearch(data.results);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  useEffect(() => {
    GetSearch();
  }, [query]);

  return (
    <div className="w-[50%] h-[10vh] group relative flex items-center m-auto gap-5">
      <i className="ri-search-2-line text-zinc-100 text-xl"></i>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-[85%] px-4 py-2 rounded-full outline-none bg-transparent border group-hover:text-white"
        type="text"
        placeholder="Search what you like!"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="ri-close-line text-zinc-100 text-xl"
        ></i>
      )}
      <div className="z-[100] absolute top-[86%] left-[10%] w-[81%] max-h-[50vh] bg-zinc-200 overflow-y-auto rounded">
        {search.map((p, i) => (
          <Link 
            to={`/${p.media_type}/details/${p.id}`}
            key={i}
            className="font-semibold bg-zinc-300 text-zinc-500 px-5 py-3 flex items-center justify-start gap-3 hover:bg-zinc-400 hover:text-zinc-900 duration-300 border border-b-[#4692DD]"
          >
            <img className="w-[5w] h-[9vh] rounded-md shadow-l"
              src={p.backdrop_path || p.profile_path ? `https://image.tmdb.org/t/p/original/${
                p.backdrop_path || p.profile_path
              }` : NoImage
            }
              alt=""
            />
            <h1>{p.name || p.originl_title || p.title || p.originl_title}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNav;
