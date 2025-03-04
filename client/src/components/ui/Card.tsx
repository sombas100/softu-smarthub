import React from "react";

const Card = ({ children }) => {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
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
        className="text-blue-500 mt-8 font-bold hover:underline hover:cursor-pointer transition-all ease-in"
      >
        Learn More &rarr;
      </span>
    </div>
  );
};

export default Card;
