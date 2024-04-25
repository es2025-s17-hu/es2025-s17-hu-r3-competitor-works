import React from "react";

const TIMES = ["12:00", "12:30", "13:30", "14:00"];

/**
 * Time selector component
 */
const Time = ({ time, setTime }) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[#535e70]">Time</span>

      <div className="flex flex-col gap-2">
        {TIMES.map((t) => (
          <button
            key={t}
            onClick={() => setTime(t)}
            className={`${
              t === time
                ? "bg-[#6926d7] text-white"
                : "bg-[#ede9fe] text-[#2c2c5b]"
            } p-2 rounded-md cursor-pointer hover:opacity-70 transition-all font-semibold`}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Time;
