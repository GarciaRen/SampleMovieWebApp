import React from "react";

const Card = (props) => {
  const { Title, Poster } = props.movie;

  return (
    <div className="text-white w-[125px] h-[165px] justify-items-center mx-auto flex flex-col bg-slate-600 rounded-md hover:scale-110 duration-200">
      <img
        src={Poster}
        className="h-28 w-auto rounded-t-md bg-cover"
        alt="#"
      ></img>
      <div className="w-full h-20 flex flex-col ">
        <p className="text-sxs font-thin px-2 mt-1 ">Movie</p>
        <h4 className="text-sxs1 font-bold break-words text-orange-200 px-2">
          {Title}
        </h4>
      </div>
    </div>
  );
};

export default Card;
