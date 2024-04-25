import { Link } from "react-router-dom";
import heroImage from "../../assets/hero.png";
import phoneIcon from "../../assets/phone.png";

/**
 * Eye-catching hero page
 */
const Hero = () => {
  return (
    <section
      id="overview"
      className="w-[min(1250px,100%)] px-4 pt-[50px] pb-[70px] mx-auto flex items-center md:gap-32 flex-col md:flex-row"
    >
      {/* Hero text */}
      <div className="flex flex-col gap-[40px]">
        <h1 className="text-[50px] md:text-[57px] leading-tight text-center md:text-left">
          Elevate Your Restaurant with{" "}
          <span className="font-extrabold bg-gradient-to-r from-[#fc255a] to-[#7f4aec] text-transparent bg-clip-text">
            DineEase
          </span>
        </h1>
        <p className="text-lg text-[#26264e] text-center md:text-left">
          Streamline operations, enhance customer service, and boost your
          profits with our comprehensive management software.
        </p>
        <Link
          to={"/book"}
          className="flex items-center gap-3 transition-all hover:opacity-80 mx-auto md:mx-[unset] w-fit self-start mt-[20px] md:mt-[40px] rounded-md text-white font-semibold px-5 py-3 bg-gradient-to-r from-[#fc255a] to-[#7f4aec]"
        >
          <img src={phoneIcon} alt="Phone Icon" className="w-[18px] h-[18px]" />
          Book a Free Demo
        </Link>
      </div>

      {/* Hero Image */}
      <img
        src={heroImage}
        alt="Hero Image"
        className="w-[320px] mb-[-420px] md:mb-[-540px]"
      />
    </section>
  );
};

export default Hero;
