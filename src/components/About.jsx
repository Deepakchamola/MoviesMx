import React from "react";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-full overflow-hidden">
      <nav className="h-[10vh] w-full px-10 text-2xl text-zinc-200 flex items-center justify-between gap-5">
        <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line hover:text-[#4692DD]"
        />
      </nav>

      <div className="w-full h-full flex">
        {/* side nav */}
        <div className="w-[20%] pl-10 pr-2 border-r-[1px] border-zinc-600">
          <h1 className="text-3xl text-[#4692DD] font-semibold">
            <i className="ri-movie-ai-line mr-3"></i>
            <span>MoviesMx</span>
          </h1>
          <nav className="text-lg flex flex-col items-start justify-center text-zinc-200 gap-3 mt-3">
            <h1 className="text-2xl text-white">Sections</h1>
            <Link
              to="/trending"
              className="w-[100%] p-3 rounded-md group hover:bg-[#4692DD] hover:text-white duration-300"
            >
              <i className="ri-fire-fill group-hover:text-[#FF4500]"></i>{" "}
              Trending
            </Link>

            <Link
              to="/popular"
              className="w-[100%] p-3 rounded-md group hover:bg-[#4692DD] hover:text-white duration-300"
            >
              <i className="ri-bard-fill group-hover:text-[#FFB511]"></i>{" "}
              Popular
            </Link>

            <Link
              to="movie"
              className="w-[100%] p-3 rounded-md group hover:bg-[#4692DD] hover:text-white duration-300"
            >
              <i className="ri-movie-ai-line"></i> Movies
            </Link>

            <Link
              to="/tv"
              className="w-[100%] p-3 rounded-md group hover:bg-[#4692DD] hover:text-white duration-300"
            >
              <i className="ri-tv-2-fill group-hover:text-[#0011D4]"></i> TV
              Shows
            </Link>

            <Link
              to="/person"
              className="w-[100%] p-3 rounded-md group hover:bg-[#4692DD] hover:text-white duration-300 mb-2"
            >
              <i className="ri-team-fill group-hover:text-[#000000] "></i>{" "}
              Peoples
            </Link>
          </nav>
        </div>

        {/* right details */}
        <div className="w-[80%] px-10 pb-3 text-zinc-300 overflow-x-hidden overflow-y-auto">
          <h1 className="text-3xl text-white font-semibod">About Us</h1>
          <p className="text-lg mt-2">
            Welcome to <strong className="text-[#4692DD]">MoviesMx</strong>,
            your ultimate destination for streaming movies and TV shows! Whether
            you're looking for the latest blockbusters, timeless classics, or
            hidden gems, we’ve got you covered. Our platform not only offers
            seamless streaming but also provides comprehensive details about
            movies, TV shows, and the talented actors and actresses behind them.
            Explore our Trending and Popular sections to discover the hottest
            titles everyone’s talking about. Want to know more about a film or
            show? Dive into our Details section for in-depth information,
            including plot summaries, cast and crew bios, and much more. With an
            easy-to-use interface and an extensive library of content,{" "}
            <strong className="text-[#4692DD]">MoviesMx</strong> ensures that
            your entertainment experience is always just a few clicks away.
          </p>

          <h1 className="text-3xl text-white font-semibod mt-5">Our Mission</h1>
          <p className="text-lg mt-2">
            At <strong className="text-[#4692DD]">MoviesMx</strong>, our mission
            is to create an all-in-one platform where movie and TV enthusiasts
            can easily discover, stream, and learn more about their favorite
            content. We aim to provide an engaging and user-friendly experience
            by offering not just entertainment but also rich, informative
            content about the stars and stories behind the screen. Our goal is
            to keep you up-to-date with the latest trends and popular media
            while delivering a deep dive into the world of film and television.
            Whether you're a casual viewer or a cinephile, we want to be your
            trusted source for all things movies and TV!
          </p>

          <h1 className="text-3xl text-white font-semibod mt-5">Key Feature</h1>
          <div className="w-full h-[75vh] mt-2 ml-5 mb-2">
            <ul className="list-disc">
              <li className="text-m">
                <span className="block text-lg text-zinc-200">
                  Seamless Streaming Experience :{" "}
                </span>
                Enjoy high-quality streaming of a wide range of movies and TV
                shows across all genres. Watch your favorite content anytime,
                anywhere, without interruptions.
              </li>

              <li className="text-m mt-1">
                <span className="block text-lg text-zinc-200">
                  Trending & Popular Sections:{" "}
                </span>{" "}
                Stay up to date with the latest hits! Our Trending and Popular
                sections showcase the hottest movies and TV shows that everyone
                is talking about.
              </li>

              <li className="text-m mt-1">
                <span className="block text-lg text-zinc-200">
                  In-Depth Details:
                </span>{" "}
                Dive deeper into the world of entertainment with detailed
                information about each movie, TV show, and its cast. From plot
                summaries to actor bios, we’ve got everything you need to
                explore the stories behind the screen.
              </li>

              <li className="text-m mt-1">
                <span className="block text-lg text-zinc-200">
                  Actor & Actress Profiles:
                </span>{" "}
                Learn more about the stars of your favorite films and shows. Our
                platform provides detailed profiles of actors and actresses,
                including their career highlights, filmography, and other
                interesting facts.
              </li>

              <li className="text-m mt-1">
                <span className="block text-lg text-zinc-200">
                  User-Friendly Interface:
                </span>{" "}
                With a sleek and intuitive design powered by React and Tailwind
                CSS, our website makes it easy to browse, search, and stream
                content with just a few clicks.
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;
