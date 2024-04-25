import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import DatePicker from "./components/DatePicker";

function Label({ children }) {
  return <p className="text-gray-500 mb-1 text-sm">{children}</p>;
}

function Input({ className, ...rest }) {
  return (
    <input
      className={
        "p-2 border rounded w-full mb-4" + (className ? " " + className : "")
      }
    />
  );
}

export default function Demo() {
  const [date, setDate] = useState(new Date());
  const [times, setTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState(0);

  useEffect(() => {
    const start = Math.floor(Math.random() * 20);
    setTimes([
      start.toString().padStart(2, "0") + ":00",
      start.toString().padStart(2, "0") + ":30",
      (start + 1).toString().padStart(2, "0") + ":00",
      (start + 1).toString().padStart(2, "0") + ":30",
      (start + 2).toString().padStart(2, "0") + ":00",
    ]);
  }, [date]);

  return (
    <>
      <Navbar />

      <section className="p-16">
        <h1 className="text-7xl text-center mb-32">
          Book a Free <span className="font-bold text-[#794cf2]">Demo</span>
        </h1>

        <div className="flex flex-col gap-4 md:w-2/3 md:mx-auto md:grid md:grid-cols-2 md:grid-flow-col md:grid-rows-2">
          <div>
            <Label>Date</Label>
            <DatePicker onChange={(date) => setDate(date)} />
          </div>
          <div role="radiogroup">
            <Label>Time</Label>
            {times.map((x, i) => (
              <button
                key={date + "_" + x}
                onClick={() => {
                  setSelectedTime(i);
                }}
                className={
                  "w-full mb-4 p-2 rounded-lg transition-all font-medium " +
                  (selectedTime === i
                    ? " bg-[#6926d7] text-white"
                    : " bg-[#ede9fe] hover:bg-[#dcd8ed] text-[#313165]")
                }
              >
                {x}
              </button>
            ))}
          </div>
          <div>
            <Label>Name</Label>
            <Input />
            <Label>Phone number</Label>
            <Input type="tel" />
            <Label>Email address</Label>
            <Input type="email" />
            <button className="p-2 w-full bg-[#6926d7] rounded-lg text-white font-medium">
              Book Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
