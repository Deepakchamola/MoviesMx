import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadTv, removeTv } from "../store/actions/tvActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import HorizontalCards from "../components/Templates/HorizontalCards";
import Loading from "../components/Loading";

const TvDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.tv);

  useEffect(() => {
    dispatch(asyncLoadTv(id));
    return () => {
      dispatch(removeTv());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5),rgba(0,0,0,.8)), 
    url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen h-screen relative px-10 overflow-x-hidden overflow-y-auto"
    >
      {/* Part-1 navigation */}
      <nav className="h-[10vh] w-full text-2xl text-zinc-200 flex items-center justify-between gap-5">
        <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line hover:text-[#4692DD]"
        />

        <div className="flex items-center justify-between gap-5">
          <Link to={`${info.details.homepage}`} target="_blank">
            <i className="ri-external-link-fill hover:text-[#4692DD]" />
          </Link>

          <Link
            to={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
            target="_blank"
          >
            <i className="ri-earth-fill hover:text-[#4692DD]" />
          </Link>

          <Link
            to={`https://www.imdb.com/title/${info.externalId.imdb_id}/`}
            className="text-2xl hover:text-[#4692DD]"
            target="_blank"
          >
            imdb
          </Link>
        </div>
      </nav>

      {/* Part-2 poster details */}
      <div className="w-full flex gap-16 select-none">
        <img
          className="h-[87vh] w-[45%] object-fill rounded-md mb-2"
          src={`https://image.tmdb.org/t/p/original/${
            info.details.poster_path || info.details.backdrop_path
          }`}
          alt=""
        />
        <div className="content">
          <h1 className="top text-5xl text-white font-black">
            {info.details.name ||
              info.details.originl_name ||
              info.details.title ||
              info.details.originl_title}
            <span className="text-xl text-zinc-300 font-bold ml-3">
              ({info.details.first_air_date.split("-")[0]})
            </span>
          </h1>

          <div className="saptrate text-xl text-white font-semibold flex items-center gap-5 mt-3">
            <h3 className="flex items-center gap-x-2">
              Users Score:{" "}
              <span className="px-2 py-1 text-white text-lg font-normal bg-yellow-600 rounded-md flex items-center justify-center">
                {(info.details.vote_average * 10).toFixed()}%
              </span>
            </h3>

            <h1>
              Release Date:{" "}
              <span className="text-lg font-normal">
                {info.details.first_air_date}
              </span>
            </h1>
          </div>

          <div className="mid text-xl text-white font-semibold mt-2">
            <h1 className="mt-2">
              Genres:{" "}
              <span className="text-lg font-normal">
                {info.details.genres.map((g) => g.name).join(", ")}
              </span>
            </h1>

            <h1 className="mt-2">
              Run Time:{" "}
              <span className="text-lg font-normal">
                {info.details.runtime} mins
              </span>
            </h1>

            {info.details.tagline && (
              <h1 className="mt-2">
                Tag Line:{" "}
                <span className="text-lg font-normal italic">
                  {info.details.tagline}
                </span>
              </h1>
            )}
          </div>

          <h1 className="overview text-xl text-white font-semibold mt-2">
            Overview
          </h1>
          <p className="text-m text-white font-normal">
            {info.details.overview}
          </p>

          <h1 className="bottom text-xl text-white font-semibold mt-2">
            Languages In{" "}
          </h1>
          <p className="text-white text-m mb-5">
            {info.translations.join(", ")}
          </p>

          <Link
            to={`${pathname}/trailer`}
            className="px-4 py-3 text-xl text-white bg-[#4692DD] rounded-md"
          >
            <i className="ri-play-fill text-lg mr-2"></i>Play Trailer
          </Link>
        </div>
      </div>

      {/* Part-3 */}
      <div className="text-xl flex items-center justify-start gap-10 mt-5">
        {info.watchProvider && info.watchProvider.flatrate && (
          <div className="text-white font-semibold flex flex-col gap-1">
            <h1>Available to watch on</h1>
            <div className="flex flex-wrap gap-5">
              {info.watchProvider.flatrate.map((w, i) => (
                <img
                  key={i}
                  title={w.provider_name}
                  className="h-[7vh] w-[7vh] object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          </div>
        )}

        {info.watchProvider && info.watchProvider.rent && (
          <div className="text-white font-semibold flex flex-col gap-1">
            <h1>Available to rent on</h1>
            <div className="flex flex-wrap gap-5">
              {info.watchProvider.rent.map((w, i) => (
                <img
                  key={i}
                  title={w.provider_name}
                  className="h-[7vh] w-[7vh] object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          </div>
        )}

        {info.watchProvider && info.watchProvider.buy && (
          <div className="text-white font-semibold flex flex-col gap-1">
            <h1>Available to buy on</h1>
            <div className="flex flex-wrap gap-5">
              {info.watchProvider.buy.map((w, i) => (
                <img
                  key={i}
                  title={w.provider_name}
                  className="h-[7vh] w-[7vh] object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Available Seasons */}
      <hr className="mt-10 mb-5 border-none h-[1px] bg-zinc-400" />
      <h1 className="text-4xl text-white font-semibold mb-5">Seasons</h1>
      <div className="w-full h-[60%] flex gap-8 overflow-y-hidden mt-2 cursor-pointer">
        {info.details.seasons.length > 0 ? info.details.seasons.map((s, i) => (
          <div
            key={i}
            className="flex flex-col shrink-0 gap-4 mb-3 hover:scale-105"
          >
            <img
              className="h-[85%] w-[100%] w-full object-cover rounded-md"
              src={`https://image.tmdb.org/t/p/original/${s.poster_path}`}
              alt=""
            />

            <h1 className="text-3xl text-white font-semibold leading-none px-2 pb-1">
              {s.name}
            </h1>
          </div>
        )):<h1 className="text-white text-6xl flex items-center justify-center">Not Available</h1>}
      </div>

      {/* Part-4 Recommandation & similarities */}
      <hr className="mt-10 border-none h-[1px] bg-zinc-400" />
      <div className="mt-2">
        <h1 className="text-4xl text-white font-semibold mb-3">
          Recommendations
        </h1>
        <HorizontalCards
          data={
            info.recommendations.length > 0
              ? info.recommendations
              : info.similar
          }
        />
      </div>

      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default TvDetails;
