import React from "react";
import banner from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div
      style={{ marginTop: "56px" }}
      className="relative w-full h-[550px] border-t-4 border-sky-600 mt-[52px]"
    >
      {/* Background Img */}
      <img
        className="w-full h-full object-cover brightness-65"
        src={banner}
        alt="Hero Banner"
      />

      {/* Overlay Txt */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1
          style={{ marginBottom: "8px" }}
          className="text-5xl font-bold drop-shadow-lg text-sky-200"
        >
          Your Home, Smarter Than Ever
        </h1>
        <p className="text-lg mt-2 drop-shadow-md">
          Experience the next level of convenience with seamless automation and
          real-time monitoring. Next-gen technology that brings efficiency,
          security, and convenience to your fingertips.
        </p>
        <button
          style={{ padding: "7px", marginTop: "6px" }}
          type="button"
          className="md:mr-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:cursor-pointer"
        >
          Explore &rarr;
        </button>
      </div>
    </div>
  );
};

export default Hero;
