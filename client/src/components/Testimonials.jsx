import React from "react";
import StarRating from "./ui/StarRating";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    feedback:
      "Softu SmartHub transformed my home! Controlling lights and security remotely is a game-changer.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "James Carter",
    role: "Tech Enthusiast",
    feedback:
      "The AI automation adapts to my schedule perfectly. I can't imagine my home without it!",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Apartment Renter",
    feedback:
      "Simple to set up and incredibly efficient! SmartHub makes my daily routine seamless.",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
  },
];

const Testimonials = () => {
  return (
    <section
      style={{ marginTop: "80px" }}
      className="py-16 bg-white dark:bg-gray-900"
    >
      <div className="layout max-w-screen-xl h-[450px] mx-auto px-6 text-center">
        <p
          style={{ marginBottom: "24px" }}
          className="text-lg text-gray-600 font-bold dark:text-gray-400 mt-2"
        >
          Hear from our satisfied users who have embraced smart living.
        </p>

        {/* Testimonials Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-10 bg-white border h-64 border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 text-center"
            >
              {/* User Avatar */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              {/* User Name & Role */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {testimonial.role}
              </p>
              {/* User Feedback */}
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                "{testimonial.feedback}"
              </p>
              <p style={{ padding: "14px" }}>
                <StarRating />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
