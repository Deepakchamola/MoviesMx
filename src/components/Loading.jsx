import React from "react";
import loader from "/loader.gif"

const Loading = () => {

  return (
    <div className="w-full h-full flex justify-center items-center bg-black">
      <img className="h-[80%] text-blue-500" src={loader} alt="" />
    </div>
  );
};

export default Loading;