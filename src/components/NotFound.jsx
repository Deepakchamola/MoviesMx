import React from "react";
import Error from "/Error.gif"

const NotFound = () => {

  return (
    <div className="w-full h-full flex justify-center items-center bg-black">
      <img className="h-[80%]" src={Error} alt="" />
    </div>
  );
};

export default NotFound;