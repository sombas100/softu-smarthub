import React from "react";

const Banner = () => {
  return (
    <section className="flex items-center justify-center bg-zinc-600 h-16 md:px-4">
      <div className="flex items-center justify-center gap-3">
        <button
          style={{ padding: "5px" }}
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:cursor-pointer"
        >
          Exclusive offer
        </button>
        <span className="text-white font-bold">UP TO 20% OFF</span>
        <p className="text-zinc-300 text-md">
          Use CODE: Softu100 | Limited time offer
        </p>
      </div>
    </section>
  );
};

export default Banner;
