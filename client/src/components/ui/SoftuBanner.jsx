import React from "react";
import softuLogo from "../../assets/softu.png";

const SoftuBanner = () => {
  return (
    <div className="relative w-full h-[400px] bg-black border-t-4 border-sky-600 mt-[52px]">
      <div className="layout">
        <img className="w-screen h-[370px] " src={softuLogo} alt="" />
      </div>
      <div className="border-b border-zinc-300 layout"></div>
    </div>
  );
};

export default SoftuBanner;
