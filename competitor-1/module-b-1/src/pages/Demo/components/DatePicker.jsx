import { useEffect, useMemo, useState } from "react";
import calendarIcon from "../../../assets/calendar.svg";

const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

export default function DatePicker({ onChange }) {
  const [selection, setSelection] = useState(new Date());

  const slotsBefore = useMemo(() => {
    const d = new Date(selection);
    d.setDate(1);
    return (d.getDay() + 6) % 7;
  }, [selection]);

  const noOfDays = useMemo(() => {
    const d = new Date(selection);
    d.setMonth(d.getMonth() + 1);
    d.setDate(0);
    return d.getDate();
  }, [selection]);

  useEffect(() => {
    onChange(selection);
  }, [selection]);

  return (
    <div className="border rounded">
      <div className="flex items-center justify-between p-2 border-b">
        <p>{selection.toLocaleDateString("en-uk")}</p>
        <img src={calendarIcon} />
      </div>
      <div className="p-2">
        <div className="justify-between flex items-center font-bold mb-2">
          <button
            onClick={() => {
              setSelection((selection) => {
                const n = new Date(selection);
                n.setMonth(selection.getMonth() - 1);
                n.setDate(1);
                return n;
              });
            }}
          >
            &lt;
          </button>
          <p>
            {selection.toLocaleDateString("en-UK", {
              month: "long",
              year: "numeric",
            })}
          </p>
          <button
            onClick={() => {
              setSelection((selection) => {
                const n = new Date(selection);
                n.setMonth(selection.getMonth() + 1);
                n.setDate(1);
                return n;
              });
            }}
          >
            &gt;
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {DAYS.map((x) => (
            <p key={x} className="text-center text-sm text-gray-500">
              {x}
            </p>
          ))}
          {new Array(slotsBefore).fill(0).map((_, i) => (
            <div key={"slot_" + i}></div>
          ))}
          {new Array(noOfDays).fill(0).map((_, i) => (
            <button
              className={
                "w-full py-1 rounded-full transition-all" +
                (selection.getDate() === i + 1
                  ? " bg-gradient-to-r from-[#fc255a] via-[#c73597] to-[#8948e0] text-white font-medium"
                  : "")
              }
              onClick={() => {
                setSelection((selection) => {
                  const n = new Date(selection);
                  n.setDate(i + 1);
                  return n;
                });
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
