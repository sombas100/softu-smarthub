import React from "react";

const Banner = () => {
  return (
    <div className="flex items-center justify-center bg-zinc-600 h-16">
      <div className="flex items-center justify-center gap-3">
        <button
          style={{ padding: "5px" }}
          className="bg-amber-300 hover:cursor-pointer hover:bg-amber-500 transition-all ease-in"
        >
          Exclusive offer
        </button>
        <span className="text-white font-bold">UP TO 20% OFF</span>
        <p className="text-zinc-300 text-md">
          Use CODE Softu | Limited time offer
        </p>
      </div>
    </div>
  );
};

export default Banner;
