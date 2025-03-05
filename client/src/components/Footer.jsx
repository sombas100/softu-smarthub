import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{ marginTop: "26px" }}
      className="bg-gray-900 text-gray-300 py-8"
    >
      <div className="layout max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white">Softu SmartHub</h2>
            <p className="mt-2 text-gray-400">
              Bringing smart home automation to your fingertips. Control your
              home effortlessly with Softu SmartHub.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">Follow Us</h3>
            <div
              style={{ marginTop: "6px" }}
              className="mt-2 flex space-x-4 gap-3"
            >
              <a href="#" className="hover:text-blue-400 transition">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <FaInstagramSquare />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p>© 2025 Softu SmartHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
