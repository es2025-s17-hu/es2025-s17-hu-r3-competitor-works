import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [floating, setFloating] = useState(false);
  const [viewingPages, setViewingPages] = useState([]);

  const prefix = location.pathname === "/" ? "" : "/";

  useEffect(() => {
    function handler(e) {
      setFloating(window.scrollY !== 0);
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          setViewingPages((pages) => pages.concat([entry.target.id]));
        } else {
          setViewingPages((pages) =>
            pages.filter((x) => x !== entry.target.id)
          );
        }
      });
    });

    [
      document.getElementById("hero"),
      document.getElementById("features"),
      document.getElementById("about"),
      document.getElementById("pricing"),
    ]
      .filter((x) => x)
      .forEach((x) => {
        io.observe(x);
      });

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
      io.disconnect();
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-24">
      <nav
        className={
          "flex gap-4 fixed top-4 font-medium items-center z-50" +
          (floating
            ? " bg-white rounded-full shadow-lg px-8 py-4"
            : " md:px-32 md:w-full")
        }
      >
        <Link to="/">
          <img src={logo} />
        </Link>
        <ul className={"flex gap-4" + (floating ? "" : " md:w-full")}>
          <li>
            <a
              href={prefix + "#hero"}
              className={
                viewingPages[0] === "hero" ? "border-b border-[#fc255a]" : ""
              }
            >
              Overview
            </a>
          </li>
          <li>
            <a
              href={prefix + "#features"}
              className={
                viewingPages[0] === "features"
                  ? "border-b border-[#fc255a]"
                  : ""
              }
            >
              Features
            </a>
          </li>
          <li>
            <a
              href={prefix + "#about"}
              className={
                viewingPages[0] === "about" ? "border-b border-[#fc255a]" : ""
              }
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href={prefix + "#pricing"}
              className={
                viewingPages[0] === "pricing" ? "border-b border-[#fc255a]" : ""
              }
            >
              Pricing
            </a>
          </li>
        </ul>
        <Link
          to={"/demo"}
          className={
            "text-white py-1 px-2 rounded-full bg-gradient-to-r from-[#fc255a] via-[#c73597] to-[#8948e0] md:shrink-0" +
            (floating ? "" : " hidden md:block")
          }
        >
          Book a demo
        </Link>
      </nav>
    </div>
  );
}
