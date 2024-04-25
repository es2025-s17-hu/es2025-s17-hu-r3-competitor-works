import { useEffect, useRef } from "react";
import feature1 from "../../../../assets/feature1.svg";
import feature2 from "../../../../assets/feature2.svg";
import feature3 from "../../../../assets/feature3.svg";

function Feature({ title, description, img, i }) {
  const liRef = useRef();

  useEffect(() => {
    if (liRef.current) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            liRef.current.style.animation = "fadein 1s ease-in-out";
          }
        });
      });

      io.observe(liRef.current);

      function handler() {
        liRef.current.style.opacity = "1";
      }

      liRef.current.addEventListener("animationend", handler);

      return () => {
        if (liRef.current) {
          liRef.current.removeEventListener("animationend", handler);
        }

        io.disconnect();
      };
    }
  }, [liRef.current]);

  return (
    <li
      ref={liRef}
      className="md:w-full fade-in"
      style={{
        animationDelay: i * 0.5 + "s",
      }}
    >
      <img className="mb-4" src={img} />
      <h3 className="text-3xl font-bold mb-2">{title}</h3>
      <p className="mb-4 text-gray-700">{description}</p>
      <button className="font-medium">Know more &rarr;</button>
    </li>
  );
}

export default function Features() {
  return (
    <section className="p-8 md:px-32 md:py-16" id="features">
      <h2 className="text-5xl font-bold mb-8">
        Powerful Features Designed for Efficiency
      </h2>
      <ul className="flex flex-col md:flex-row md:justify-evenly md:items-center gap-8 w-1/2 md:w-full">
        <Feature
          title="Inventory Management"
          description="Reduce waste with precise tracking and predictive ordering."
          img={feature1}
          i={0}
        />
        <Feature
          title="Real-Time Analytics"
          description="Make informed decisions with up-to-the-minute data on sales, staffing, and customer preferences."
          img={feature2}
          i={1}
        />
        <Feature
          title="CRM"
          description="Enhance guest experiences through personalized service and targeted marketing."
          img={feature3}
          i={2}
        />
      </ul>
    </section>
  );
}
