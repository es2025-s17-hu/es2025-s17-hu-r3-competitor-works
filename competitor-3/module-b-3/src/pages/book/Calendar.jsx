import React from "react";
import calendar from "../../assets/calendar.png";
import { MONTHS } from "./BookPage";

/**
 * Component for displaying the calendar
 * @returns
 */
const Calendar = ({ day, month, year, setDay, setYear, setMonth }) => {
  const daysInTheMo = new Date(year, month + 1, 0).getDate();
  const daysOffset = new Date(year, month, 0).getDay();

  return (
    <section className="flex flex-col gap-1">
      <span className="text-[#535e70]">Date</span>
      <div className="rounded-md border border-neutral-300">
        {/* Title */}
        <div className="border-b p-3 border-neutral-200 flex items-center justify-between">
          <span className="text-neutral-600">
            {day} / {month} / {year}
          </span>

          <img src={calendar} alt="Calendar Icon" />
        </div>

        {/* Current month */}
        <div className="p-3 flex items-center justify-between">
          <button
            className="scale-[150%] hover:opacity-70 transition-all font-bold text-[#545f71]"
            aria-label="Previous month"
            onClick={() => {
              setDay(1);
              if (month === 0) {
                setYear((prev) => prev - 1);
              }
              setMonth((prev) => (prev === 0 ? 11 : prev - 1));
            }}
          >
            &lt;
          </button>
          <span className="font-semibold text-[#545f71]">
            {MONTHS[month]} {year}
          </span>
          <button
            className="scale-[150%] hover:opacity-70 transition-all font-bold text-[#545f71]"
            aria-label="Next month"
            onClick={() => {
              setDay(1);
              if (month === 11) {
                setYear((prev) => prev + 1);
              }
              setMonth((prev) => (prev === 11 ? 0 : prev + 1));
            }}
          >
            &gt;
          </button>
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-2 p-4">
          <span className="text-neutral-500 text-[12px] flex items-center justify-center text-center">
            MON
          </span>
          <span className="text-neutral-500 text-[12px] flex items-center justify-center text-center">
            TUE
          </span>
          <span className="text-neutral-500 text-[12px] flex items-center justify-center text-center">
            WED
          </span>
          <span className="text-neutral-500 text-[12px] flex items-center justify-center text-center">
            THU
          </span>
          <span className="text-neutral-500 text-[12px] flex items-center justify-center text-center">
            FRI
          </span>
          <span className="text-neutral-500 text-[12px] flex items-center justify-center text-center">
            SAT
          </span>
          <span className="text-neutral-500 text-[12px] flex items-center justify-center text-center">
            SUN
          </span>

          {Array.from({ length: daysOffset })
            .fill("")
            .map((_, i) => (
              <div key={i}></div>
            ))}

          {/* Days */}
          {Array.from({ length: daysInTheMo })
            .fill("")
            .map((_, i) => (
              <input
                className={`day-radio ${i + 1 === day ? "checked" : ""}`}
                type="radio"
                key={i}
                value={i + 1}
                aria-label={i + 1}
                onChange={(e) => setDay(i + 1)}
                checked={i + 1 === day}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Calendar;
