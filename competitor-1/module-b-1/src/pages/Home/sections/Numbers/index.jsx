import { useEffect, useRef, useState } from "react";

const duration = 1;

function commadNumber(num) {
  let out = "";
  let remainder = num;

  do {
    out = (remainder % 1000) + "," + out;
    remainder = Math.floor(remainder / 1000);
  } while (remainder !== 0);

  return out.slice(0, -1);
}

function NumberBox({ value, label, suffix }) {
  const [start, setStart] = useState(0);
  const [_, rerender] = useState(0);
  const currentValue = Math.round(
    value * (Math.min(Date.now() - start, duration * 1000) / duration / 1000)
  );
  const renderedValue = commadNumber(currentValue);
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            setStart(Date.now());
            io.disconnect();
          }
        });
      });

      io.observe(ref.current);

      return () => {
        io.disconnect();
      };
    }
  }, [ref.current]);

  useEffect(() => {
    function animate() {
      if ((Date.now() - start) / 1000 < duration) {
        rerender(Math.random());
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [start]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center text-center bg-[#6926d7] rounded gap-2 py-8 md:w-full"
    >
      <h3 className="text-5xl font-medium">
        {renderedValue}
        {suffix}
      </h3>
      <p>{label}</p>
    </div>
  );
}

export default function Numbers() {
  return (
    <section className="text-white bg-[#976de6] text-center p-8 md:px-32 md:py-16">
      <h2 className="text-5xl font-bold mb-4">DineEase by the Numbers</h2>
      <p className="mb-8 md:mb-12">
        Our achievement in the journey depicted in numbers
      </p>
      <ul className="flex flex-col md:flex-row md:justify-evenly gap-4">
        <NumberBox value={2531} label="Customers" suffix="+" />
        <NumberBox value={1235764} label="Transactions monthly" />
        <NumberBox value={98} label="Customer Satisfaction" suffix="%" />
        <NumberBox value={25} label="Awards Won" suffix="+" />
      </ul>
    </section>
  );
}
