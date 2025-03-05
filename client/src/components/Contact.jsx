import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      style={{ marginTop: "80px" }}
      className="py-16  dark:bg-gray-900"
    >
      <div className="layout max-w-screen-xl mx-auto px-6">
        {/* Contact Section Container */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left - Contact Information */}
          <div className="md:w-1/2 text-left">
            <h2
              style={{ marginBottom: "16px" }}
              className="text-5xl font-bold text-gray-900 dark:text-white"
            >
              Get in Touch
            </h2>
            <p
              style={{ marginBottom: "12px" }}
              className="text-gray-600 dark:text-gray-400 mt-4"
            >
              For any enquires do not hesitate to reach out to our support team.
              We will aim to get back to you as soon as possible.
            </p>
            <p className="mt-4 font-semibold text-gray-700 dark:text-gray-300">
              📧 Email: support@softu.com <br />
              📞 Phone: +447 234 567 890
            </p>
          </div>

          {/* Right - Contact Form */}
          <div className="md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <form
              style={{ padding: "30px" }}
              className="mt-4 rounded-lg bg-zinc-100"
            >
              <h3
                style={{ marginBottom: "12px" }}
                className="text-2xl font-semibold text-gray-900 dark:text-white"
              >
                Contact Form
              </h3>

              <div className="mb-4">
                <input
                  style={{ marginBottom: "16px" }}
                  type="text"
                  id="name"
                  className="w-full mt-1 p-4 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:ring focus:ring-blue-300"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-4">
                <input
                  style={{ marginBottom: "16px" }}
                  type="email"
                  id="email"
                  className="w-full mt-1 p-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:ring focus:ring-blue-300"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-4">
                <textarea
                  style={{ marginBottom: "8px" }}
                  id="message"
                  rows="4"
                  className="w-full mt-1 p-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:ring focus:ring-blue-300"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                style={{ padding: "6px" }}
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:cursor-pointer hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
