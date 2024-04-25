import { Link } from "react-router-dom";
import heroPhone from "../../../../assets/hero.png";

export default function Hero() {
  return (
    <section className="md:px-32 relative" id="hero">
      <h1 className="text-5xl text-center md:text-left mb-8 md:w-2/3">
        Elevate Your Restaurant with{" "}
        <span className="font-black bg-clip-text text-transparent bg-gradient-to-r from-[#fc255a] via-[#c73597] to-[#8948e0]">
          DineEase
        </span>
      </h1>
      <p className="text-center mb-16 md:text-left md:w-3/5">
        Streamline operations, enhance customer service, and boost your profits
        with our comprehensive management software.
      </p>
      <Link
        to="/demo"
        className="mx-auto w-fit md:mx-0 block font-bold py-2 px-4 rounded bg-gradient-to-r from-[#fc255a] via-[#c73597] to-[#8948e0] text-white mb-16"
      >
        Book a Free Demo
      </Link>
      <img
        src={heroPhone}
        className="mx-auto object-[50%_10%] h-[282px] w-[331px] object-cover md:absolute md:right-32 md:-bottom-16"
      />
    </section>
  );
}
