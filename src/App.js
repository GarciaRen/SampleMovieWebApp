import { React, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import Card from "./component/Card";
import "animate.css";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=a211e640";

const App = () => {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovie(data.Search);
  };

  useEffect(() => {
    searchMovies(search);
  }, []);

  const withMovie = () => {
    return (
      sliceArr.length > 0 && (
        <div className="h-full grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3">
          {sliceArr.map((data) => {
            return <Card movie={data} />;
          })}
        </div>
      )
    );
  };
  const withoutMovie = () => {
    return (
      !sliceArr.length && (
        <div className="h-auto flex flex-col items-center text-white py-24">
          <h1 className="font-bold font-serif"> No movie/s found ..... </h1>
        </div>
      )
    );
  };

  const sliceArr = !movie ? [] : movie.slice(0, 10);

  return (
    <div className="min-h-screen bg-slate-800 flex flex-col">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="lg:text-xl3 md:text-xl2 xl font-bold font-serif mt-5 text-orange-200 animate__animated animate__bounceInDown">
          Pinoyflix Movies
        </h1>
        <div className="flex flex-row gap-1">
          <input
            className="bg-slate-600 lg:w-[350px] md:w-[330px] w-[245px]  rounded-md  text-orange-100 text-s tracking-normal indent-1 font-thin"
            placeholder="Search movie"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button
            className="text-slate-500 text-xl  hover:text-white rounded-md hover:scale-110 duration-300"
            onClick={() => searchMovies(search)}
          >
            <FiSearch />
          </button>
        </div>
      </div>
      <div className="py-10 mx-5 grow">
        {withMovie()}
        {withoutMovie()}
      </div>
      <div className="text-center text-gray-400 p-2">
        <p className="text-sxs">
          Developed by: <i className="text-sxs text-yellow-50">Oyieboy</i>
        </p>
      </div>
    </div>
  );
};

export default App;
