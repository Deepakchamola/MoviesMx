import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadPeople, removePeople } from "../store/actions/peopleActions";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import HorizontalCards from "../components/Templates/HorizontalCards";
import Loading from "../components/Loading";
import DropDown from "../components/Templates/DropDown";

const PeopleDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.person);
  const [category, setCategory] = useState("movie");

  useEffect(() => {
    dispatch(asyncLoadPeople(id));
    return () => {
      dispatch(removePeople());
    };
  }, [id]);

  return info ? (
    <div className="w-screen h-full flex flex-col overflow-hidden">
      {/* Part-1 navigation */}
      <nav className="h-[10vh] w-full px-10 text-2xl text-zinc-200 flex items-center justify-between gap-5">
        <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line hover:text-[#4692DD]"
        />
      </nav>

      <div className="w-full h-full flex mb-3 overflow-y-auto">
        {/* Part-2 left poster & details */}
        <div className="w-[20%] h-full pl-10 pr-3 overflow-hidden overflow-y-auto">
          <img
            className="h-[45vh] w-[90%] object-fill rounded-md shadow-[8px_13px_20px_1px_rgba(0,0,0,.7)]"
            src={`https://image.tmdb.org/t/p/original/${info.details.profile_path}`}
            alt=""
          />

          <hr className="mt-5 w-[90%] border-none h-[1px] bg-zinc-400" />
          {/* Social media links */}
          <div className="text-2xl text-white flex items-center gap-5 mt-3">
            {info.externalId.wikidata_id && (
              <Link
                to={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
                target="_blank"
              >
                <i className="ri-earth-fill hover:text-[#4692DD]" />
              </Link>
            )}

            {info.externalId.facebook_id && (
              <Link
                to={`https://www.facebook.com/${info.externalId.facebook_id}`}
                target="_blank"
              >
                <i className="ri-facebook-box-fill hover:text-[#4692DD]" />
              </Link>
            )}

            {info.externalId.instagram_id && (
              <Link
                to={`https://www.instagram.com/${info.externalId.instagram_id}/`}
                className="text-2xl hover:text-[#4692DD]"
                target="_blank"
              >
                <i className="ri-instagram-fill"></i>
              </Link>
            )}

            {info.externalId.twitter_id && (
              <Link
                to={`https://x.com/${info.externalId.twitter_id}/`}
                className="text-2xl hover:text-[#4692DD]"
                target="_blank"
              >
                <i className="ri-twitter-x-fill"></i>
              </Link>
            )}
          </div>

          {/* Personal info */}
          <div className="text-zinc-400 mt-3">
            <h1 className="text-2xl font-semibold">Personal Info</h1>

            <h1 className="text-lg mt-1">
              Known for :{" "}
              <span className="text-[1.2vw]">
                {info.details.known_for_department}
              </span>
            </h1>

            <h1 className="text-lg mt-1">
              Gender :{" "}
              <span className="text-[1.2vw]">
                {info.details.gender === 2 ? "Male" : "Female"}
              </span>
            </h1>

            <h1 className="text-lg mt-1">
              Birthday :{" "}
              <span className="text-[1.1vw]">{info.details.birthday}</span>
            </h1>

            {info.details.deathday && (
              <h1 className="text-lg mt-1">
                Passed away on :{" "}
                <span className="text-[1.1vw]">{info.details.deathday}</span>
              </h1>
            )}

            <h1 className="text-lg mt-1">
              Place Of Birth :{" "}
              <span className="text-[1.2vw]">
                {info.details.place_of_birth}
              </span>
            </h1>
          </div>
        </div>

        {/* Part-3 right details and informations */}
        <div className="w-[80%] h-full px-2 px-[5%] overflow-y-auto">
          <div className="text-zinc-400 mt-3 pb-5">
            <h1 className="text-5xl text-zinc-300 font-black mt-1">
              {info.details.name}
            </h1>

            <h1 className="text-3xl mt-2">Overview</h1>
            <p className="text-lg mt-1">
              {info.details.biography.slice(0, 1000)}
            </p>

            <h1 className="text-2xl mt-3">Famous For</h1>
            <HorizontalCards data={info.combinedCredits.cast} />

            {/* Tv and Movie credit*/}
            <div className="w-full flex justify-between mt-5">
              <h1 className="text-xl text-zinc-400 font-semibold mt-1">
                Acting
              </h1>
              <DropDown
                title="Category"
                options={["tv", "movie"]}
                func={(e) => setCategory(e.target.value)}
              />
            </div>

            <div className="list-disc text-zinc-400 w-full h-[50vh] mt-5 shadow-lg shadow-[rgba(255,255,255,.5)] overflow-hidden overflow-y-auto rounded-md border-2 border-zinc-700 py-2 px-4">
              {info[category + "Credits"].cast.map((c, i) => (
                <li className="text-lg hover:text-white hover:bg-[#4692DD] duration-200 p-3 cursor-pointer rounded-md">
                  <Link to={`/${category}/details/${c.id}`} key={i}>
                    <span>
                      {c.name || c.originl_title || c.title || c.originl_title}
                    </span>
                    {c.character && c.character != 'Self' && (
                      <span className="block ml-6">
                        Character name: {c.character}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </div>

          </div>
        </div>

      </div>
      
    </div>
  ) : (
    <Loading />
  );
};

export default PeopleDetails;
