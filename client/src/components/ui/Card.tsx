import React from "react";

const Card = ({ children }) => {
  return (
    <div
      style={{ paddingBottom: "20px" }}
      className="max-w-sm p-6 bg-white border border-gray-200 
      rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700
       hover:shadow-xl transition-all ease-in"
    >
      <a href="#">
        <h5
          style={{ padding: "14px" }}
          className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {children}
        </h5>
      </a>
      <p
        style={{ marginTop: "12px", marginBottom: "12px" }}
        className="mb-3 font-normal text-gray-700 dark:text-gray-400"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et aut tempora
        totam, pariatur aliquam neque dignissimos repellendus, saepe ipsum culpa
        dolorum enim cumque animi facere esse velit iure quis in.
      </p>

      <span
        style={{ marginTop: "6px", padding: "12px" }}
        className="text-blue-600 font-semibold cursor-pointer hover:scale-110 transition-transform duration-300 hover:underline inline-block mt-4"
      >
        Learn More &rarr;
      </span>
    </div>
  );
};

export default Card;
