import React, { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Calendar from "./Calendar";
import Time from "./Time";
import Form from "./Form";

/**
 * Constant for month names
 */
export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Decemer",
];

/**
 * Component for the book a demo page
 * @returns
 */
const BookPage = () => {
  // State for the calendar
  const [day, setDay] = useState(() => new Date().getDate());
  const [month, setMonth] = useState(() => new Date().getMonth());
  const [year, setYear] = useState(() => new Date().getFullYear());

  // Other state
  const [time, setTime] = useState("13:30");

  return (
    <>
      <Header />
      <main className="w-[min(750px,100%)] mx-auto px-4 py-32 flex flex-col gap-16">
        {/* Title */}
        <h1 className="text-[57px] text-center leading-none">
          Book a Free{" "}
          <span className="font-extrabold text-[#794cf2]">Demo</span>
        </h1>

        {/* Form */}
        <div className="flex items-start gap-8 flex-col md:flex-row w-[min(100%,500px)] mx-auto md:w-full">
          {/* Date and Time */}
          <div className="flex flex-col gap-2 w-full md:w-1/2">
            <Calendar
              day={day}
              month={month}
              year={year}
              setDay={setDay}
              setMonth={setMonth}
              setYear={setYear}
            />
            <Time setTime={setTime} time={time} />
          </div>

          <Form />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BookPage;
