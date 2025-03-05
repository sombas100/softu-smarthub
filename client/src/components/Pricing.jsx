import React from "react";

const Pricing = () => {
  return (
    <section
      id="pricing"
      style={{ paddingBottom: "80px" }}
      className="py-16 bg-gray-100 dark:bg-gray-900"
    >
      <div className="layout max-w-screen-xl mx-auto px-6 text-center">
        <h2
          style={{ marginTop: "20px" }}
          className="text-4xl font-bold text-gray-900 dark:text-white"
        >
          Choose Your Plan
        </h2>
        <p
          style={{ marginBottom: "24px" }}
          className="text-lg text-gray-600 dark:text-gray-400 mt-2"
        >
          Flexible pricing tailored to your smart home needs.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          <div className="p-6  bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 h-[300px] flex flex-col justify-between">
            <div style={{ marginTop: "30px" }}>
              <h3
                style={{ marginBottom: "16px" }}
                className="text-2xl font-bold text-gray-900 dark:text-white"
              >
                Basic
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                £9.99 / month
              </p>
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li>✔ Remote Device Control</li>
                <li>✔ Standard Security Features</li>
                <li>✔ Email Notifications</li>
              </ul>
            </div>
            <button
              style={{ padding: "8px" }}
              type="button"
              className="md:mr-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:cursor-pointer"
            >
              Join Now
            </button>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 h-[300px] flex flex-col justify-between">
            <div style={{ marginTop: "30px" }}>
              <h3
                style={{ marginBottom: "16px" }}
                className="text-2xl font-bold text-gray-900 dark:text-white"
              >
                Pro
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                £19.99 / month
              </p>
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li>✔ Everything in Basic</li>
                <li>✔ Advanced Security Features</li>
                <li>✔ Smart Automation</li>
              </ul>
            </div>
            <button
              style={{ padding: "8px" }}
              type="button"
              className="md:mr-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:cursor-pointer"
            >
              Join Now
            </button>
          </div>

          <div className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-blue-700 to-black text-white h-[300px] flex flex-col justify-between">
            <div style={{ marginTop: "30px" }}>
              <h3
                style={{ marginBottom: "16px" }}
                className="text-2xl font-bold"
              >
                Deluxe
              </h3>
              <p className="mt-2">£29.99 / month</p>
              <ul className="mt-4 space-y-2">
                <li>✔ Everything in Pro</li>
                <li>✔ AI-Powered Automation</li>
                <li>✔ 24/7 Priority Support</li>
                <li>✔ Premium Smart Hub Integration</li>
              </ul>
            </div>
            <button
              style={{ padding: "8px" }}
              type="button"
              className="md:mr-4  bg-gradient-to-r bg-white text-black hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:cursor-pointer hover:bg-zinc-200 transition-all ease-in"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
