import React from "react";
import softuLogo from "../../assets/Softu.png";

const SoftuBanner = () => {
  return (
    <div className="relative w-full h-[550px] bg-black border-t-4 border-sky-600 mt-[52px]">
      <div className="layout">
        <img className="w-screen h-[520px] " src={softuLogo} alt="" />
      </div>
      <div className="border-b border-zinc-300 layout"></div>
    </div>
  );
};

export default SoftuBanner;
