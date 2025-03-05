import React from "react";
import Card from "./ui/Card";

const Features = () => {
  return (
    <section
      style={{ marginTop: "110px", paddingBottom: "80px" }}
      className="py-12 bg-gray-100 dark:bg-gray-900"
    >
      <div className="layout max-w-screen-xl mx-auto px-6 text-center">
        <p
          style={{ marginBottom: "15px" }}
          className="text-lg text-gray-600 dark:text-gray-400 mt-2 font-bold"
        >
          Discover the smart features that make home automation effortless.
        </p>

        {/* Centered Card Container */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 gap-6 justify-center place-items-center">
          <Card>
            <span>🔌 Smart Device Control</span>
            <p className="mt-2 text-gray-700 dark:text-gray-400">
              Remotely manage your lights, thermostats, and security cameras
              with ease.
            </p>
          </Card>

          <Card>
            <span>🔔 Real-Time Alerts</span>
            <p className="mt-2 text-gray-700 dark:text-gray-400">
              Get instant notifications for unusual activity or security
              breaches.
            </p>
          </Card>

          <Card>
            <span>📊 AI-Powered Automation</span>
            <p className="mt-2 text-gray-700 dark:text-gray-400">
              Let AI optimize your home environment based on your habits.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
