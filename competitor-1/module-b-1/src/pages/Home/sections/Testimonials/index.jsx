import quote from "../../../../assets/quote.svg";

function Testimonial({ author, restaurant, text, style }) {
  return (
    <li
      className={"relative p-8 pl-16 bg-white shadow rounded flex flex-col"}
      style={style}
    >
      <img src={quote} className="top-8 left-8 w-[16px] absolute" />

      <p className="mb-4 h-full">{text}</p>

      <p className="font-bold">{author}</p>
      <p className="text-sm text-gray-600">{restaurant}</p>
    </li>
  );
}

export default function Testimonials() {
  return (
    <section
      id="about"
      className="relative p-8 bg-[#d5fafc] pt-16 md:px-32 md:pb-24"
      style={{
        backgroundImage: "url(" + quote + ")",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "0.75rem",
        backgroundPositionY: "0.75rem",
      }}
    >
      <h2 className="text-5xl font-bold mb-16 md:w-1/2 md:absolute">
        Trusted by Restaurants Worldwide
      </h2>
      <ul
        className="flex flex-col gap-4 md:grid md:px-16 md:mt-16"
        style={{
          gridTemplateColumns: "repeat(6, 1fr)",
          gridTemplateRows: "repeat(7, 1fr)",
        }}
      >
        <Testimonial
          text="DineEase helped us reduce operational costs by 20% within the first six months."
          author="Jane Cooper"
          restaurant="The Gourmet Bistro"
          style={{
            gridRow: "1 / 4",
            gridColumn: "4 / 7",
          }}
        />
        <Testimonial
          text="DineEase revolutionized our operations, making it easy to manage multiple locations seamlessly. Their support team is incredibly responsive and truly understands the needs of the hospitality industry."
          author="Floyd Miles"
          restaurant="OceanView Cafe"
          style={{
            gridRow: "3 / 8",
            gridColumn: "2 / 4",
          }}
        />
        <Testimonial
          text="Our customer satisfaction has never been higher, thanks to the personalized service we can provide with DineEase."
          author="Kristin Watson"
          restaurant="City Diner"
          style={{
            gridRow: "4 / 8",
            gridColumn: "4 / 6",
          }}
        />
      </ul>
    </section>
  );
}
