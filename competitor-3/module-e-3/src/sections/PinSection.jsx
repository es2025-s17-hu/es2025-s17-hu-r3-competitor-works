import axios from "axios";
import React, { useEffect, useState } from "react";

/**
 * Component for the user to enter their pin
 */
const PinSection = ({ setToken }) => {
  const [error, setError] = useState(false);
  const [pin, setPin] = useState("");

  /**
   * Start the login after 4 pins
   */
  useEffect(() => {
    if (pin.length === 4) {
      (async () => {
        try {
          const res = await axios.post("/login/pin", { pin });
          setToken(res.data.token);
        } catch {
          setError(true);
          setPin("");
        }
      })();
    }
  }, [pin]);

  return (
    <div className="w-screen h-screen flex flex-col gap-16 p-2 bg-[#4b4b4b]">
      {/* Title */}
      <h1 className="border-b border-white text-white pb-3 pt-1 text-2xl font-semibold text-center">
        Enter Your PIN
      </h1>

      {error && (
        <div className="absolute top-24 bg-red-100/50 text-red-800 w-[300px] self-center p-2 rounded-md text-center">
          Incorrect PIN. Try again!
        </div>
      )}

      {/* The pin dots */}
      <div className="flex flex-col gap-2 self-center">
        {/* Dots */}
        <div className="flex items-center justify-center">
          <div className="w-[0] h-[48px]" />
          {new Array(pin.length).fill("").map((_, idx) => (
            <span key={idx} className="text-5xl text-[#f36f56]">
              *
            </span>
          ))}
        </div>
        <div className="w-[300px] h-[1px] bg-white" />
      </div>

      {/* Number pad */}
      <div className="w-[300px] grid grid-cols-3 gap-2 self-center">
        {[7, 8, 9, 4, 5, 6, 1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={() => {
              setError(false);
              setPin((prev) => `${prev}${num}`);
            }}
            className="w-full h-full aspect-square rounded-md text-lg bg-[#8c336d] font-semibold text-white"
          >
            {num}
          </button>
        ))}

        {/* Extra 0 and Clear */}
        <button
          onClick={() => {
            setError(false);
            setPin((prev) => `${prev}${0}`);
          }}
          className="h-[95px] w-full rounded-md text-lg bg-[#8c336d] font-semibold text-white"
          style={{
            gridColumn: "1 / 3",
          }}
        >
          0
        </button>
        <button
          onClick={() => {
            setPin("");
          }}
          className="h-[95px] w-full rounded-md text-lg bg-[#8c336d] font-semibold text-white"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default PinSection;
