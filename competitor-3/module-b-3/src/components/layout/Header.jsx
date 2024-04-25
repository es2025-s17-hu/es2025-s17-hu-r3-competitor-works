import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useEffect, useRef, useState } from "react";

/**
 * Header component that displays the header
 */
const Header = () => {
  const { pathname } = useLocation();

  // Sticky header
  const [headerScollred, setHeaderScrolled] = useState(false);
  const stripeRef = useRef(null);

  // Highlight active link
  const [prevScroll, setPrevScroll] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);

  /**
   * Hook for checking whether the header was scolled or not
   */
  useEffect(() => {
    // Handle the scroll and apply the styles accordingly
    function handleScroll() {
      // Determine whether we are scrolling down or up
      setPrevScroll(window.scrollY);
      setScrollingDown(prevScroll < window.scrollY);

      /**
       * Sticky header
       */
      const scrolled =
        document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;
      if (scrolled) {
        stripeRef.current.style.height = "64px";
      } else {
        stripeRef.current.style.height = "0";
      }
      setHeaderScrolled(scrolled);
    }

    /**
     * Active link
     */
    const observer = new IntersectionObserver(
      (entries) => {
        for (const i of entries) {
          if (i.isIntersecting) {
            document
              .querySelector(`nav > a[href="/#${i.target.id}"]`)
              .classList.add("active");

            const active = [...document.querySelectorAll("nav > a.active")];
            if (active.length > 1) {
              active[scrollingDown ? 0 : 1].classList.remove("active");
            }
          }
        }
      },
      {
        rootMargin: scrollingDown ? "-300px" : "300px",
      }
    );
    document
      .querySelectorAll("section[id]")
      .forEach((e) => observer.observe(e));

    // Add and remove the veent listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

  /**
   * Scroll to the top every time
   */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div
        ref={stripeRef}
        className="sticky top-0 h-0 w-full z-[99] bg-[#976de6] transition-all duration-300"
      />
      <header
        className={`transition-all duration-200 rounded-[99px] p-4 mx-auto gap-[40px] flex items-center justify-center sticky z-[100] ${
          headerScollred
            ? "bg-white shadow-xl shadow-black/30 top-[24px] w-fit"
            : "top-0 w-[min(1250px,100%)]"
        }`}
      >
        <Link to={"/"}>
          <img src={logo} alt="DineEase Logo" />
        </Link>
        <nav className="flex items-center gap-[20px]">
          <a href="/#overview" className="whitespace-nowrap">
            Overview
          </a>
          <a href="/#features" className="whitespace-nowrap">
            Features
          </a>
          <a href="/#about" className="whitespace-nowrap">
            About Us
          </a>
          <a href="/#pricing" className="whitespace-nowrap">
            Pricing
          </a>
        </nav>

        <Link
          to={"/book"}
          className={`transition-all hover:opacity-80 hidden md:block whitespace-nowrap text-white font-semibold px-5 py-2 bg-gradient-to-r from-[#fc255a] to-[#7f4aec] ml-auto ${
            headerScollred ? "rounded-full ml-[20px]" : "rounded-md"
          }`}
        >
          Book a demo
        </Link>
      </header>
    </>
  );
};

export default Header;
