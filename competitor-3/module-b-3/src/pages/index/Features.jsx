import React, { useEffect } from "react";
import feature1 from "../../assets/feature1.png";
import feature2 from "../../assets/feature2.png";
import feature3 from "../../assets/feature3.png";

/**
 * Component that displays the features
 */
const Features = () => {
  useEffect(() => {
    const features = document.querySelectorAll(".feature");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        }
      },
      { rootMargin: "-200px" }
    );

    features.forEach((feature) => observer.observe(feature));
  }, []);

  return (
    <section
      id="features"
      className="md:w-[min(1250px,100%)] px-4 py-20 mx-auto flex flex-col gap-12"
      style={{ scrollMarginTop: "200px" }}
    >
      <h2 className="text-[42px] font-bold">
        Powerful Features Designed for Efficiency
      </h2>

      {/* Features */}
      <div className="w-[min(400px,100%)] md:w-full flex items-start gap-8 flex-col md:flex-row">
        {/* Feature */}
        <div className="feature flex flex-col gap-2 items-start w-full md:w-1/3">
          <img src={feature1} alt="Feature 1" />
          <h3 className="text-[32px] font-bold">Inventory Management</h3>
          <p className="text-lg">
            Reduce waste with precise tracking and predictive ordering.
          </p>
          <a href="#" className="font-semibold hover:underline mt-2">
            Know more &rarr;
          </a>
        </div>

        {/* Feature */}
        <div className="feature flex flex-col gap-2 items-start w-full md:w-1/3">
          <img src={feature2} alt="Feature 2" />
          <h3 className="text-[36px] font-bold">Real-Time Analytics</h3>
          <p className="text-lg">
            Make informed decisions with up-to-the-minute data on sales,
            staffing, and customer preferences.
          </p>
          <a href="#" className="font-semibold hover:underline mt-2">
            Know more &rarr;
          </a>
        </div>

        {/* Feature */}
        <div className="feature flex flex-col gap-2 items-start w-full md:w-1/3">
          <img src={feature3} alt="Feature 3" />
          <h3 className="text-[36px] font-bold">CRM</h3>
          <p className="text-lg">
            Enhance guest experiences through personalized service and targeted
            marketing.
          </p>
          <a href="#" className="font-semibold hover:underline mt-2">
            Know more &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
