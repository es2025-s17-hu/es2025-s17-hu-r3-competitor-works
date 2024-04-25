import React from "react";
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";

/**
 * Component for displaying the footer at the bottom of every page
 */
const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="w-[min(1250px,100%)] px-4 mx-auto py-[80px] flex items-start justify-between">
        {/* Footer left */}
        <div className="flex flex-col gap-4 items-start">
          <img src={logo} alt="DineEase Logo" />

          <div className="flex items-center gap-4">
            <a href="#" className="text-white hover:underline">
              Terms of Use
            </a>
            <a href="#" className="text-white hover:underline">
              Privacy Policy
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:+36301234567" className="text-white hover:underline">
              +36 30 123 4567
            </a>
            <a
              href="mailto:support@dineease.com"
              className="text-white hover:underline"
            >
              support@dineease.com
            </a>
          </div>

          <span className="text-neutral-400 mt-3">
            &copy; 2024 - All rights reserved
          </span>
        </div>

        {/* Footer Right */}
        <div className="flex flex-col gap-3">
          <span className="text-white text-lg">Follow Us</span>
          <div className="flex items-center gap-2">
            <a href="#">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="#">
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
