import quote from "../../assets/quote.png";

/**
 * Tesimonials, about section component
 */
const Testimonials = () => {
  return (
    <section
      id="about"
      className="bg-[#d5fafc] px-4 py-8 relative md:h-[748px]"
      style={{ scrollMarginTop: "100px" }}
    >
      <img
        src={quote}
        alt="Quote"
        className="md:absolute opacity-30 left-[120px] top-[80px] mb-[-60px]"
      />
      <h2 className="font-bold text-[42px] md:max-w-[500px] md:absolute top-[132px] left-[220px] mb-8">
        Trusted by Restaurants Worldwide
      </h2>

      {/* Testimonials */}
      <div className="flex flex-col gap-4">
        {/* Testimonial */}
        <div className="bg-white flex items-start gap-[16px] p-[32px] shadow-md rounded-md md:absolute top-[195px] left-[739px] md:w-[487px]">
          <img src={quote} alt="Quote" className="w-[16px]" />

          <div className="flex flex-col gap-4 text-lg">
            <p>
              DineEase helped us reduce operational costs by 20% within the
              first six months.
            </p>
            <h6 className="font-semibold">Jane Cooper</h6>
            <span className="text-neutral-600 mt-[-18px] text-sm">
              The Gourmet Bistro
            </span>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-white flex items-start gap-[16px] p-[32px] shadow-md rounded-md md:absolute top-[339px] left-[323px] md:w-[385px]">
          <img src={quote} alt="Quote" className="w-[16px]" />

          <div className="flex flex-col gap-4 text-lg">
            <p>
              DineEase revolutionized our operations, making it easy to manage
              multiple locations seamlessly. Their support team is incredibly
              responsive and truly understands the needs of the hospitality
              industry.
            </p>
            <h6 className="font-semibold">Floyd Miles</h6>
            <span className="text-neutral-600 mt-[-18px] text-sm">
              OceanView Cafe
            </span>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-white flex items-start gap-[16px] p-[32px] shadow-md rounded-md md:absolute top-[403px] left-[739px] md:w-[388px]">
          <img src={quote} alt="Quote" className="w-[16px]" />

          <div className="flex flex-col gap-4 text-lg">
            <p>
              Our customer satisfaction has never been higher, thanks to the
              personalized service we can provide with DineEase.
            </p>
            <h6 className="font-semibold">Kristin Watson</h6>
            <span className="text-neutral-600 mt-[-18px] text-sm">
              City Diner
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
