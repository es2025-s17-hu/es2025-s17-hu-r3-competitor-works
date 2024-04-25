import { useContext, useEffect, useState } from "react";
import { login } from "../../api";
import { AuthContext } from "../../components/AuthProvider";
import { useNavigate } from "react-router-dom";

function BlockButton({ children, className, ...rest }) {
  return (
    <button
      className={
        "w-16 h-16 font-medium rounded bg-indigo-600" +
        (className ? " " + className : "")
      }
      {...rest}
    >
      {children}
    </button>
  );
}

export default function Auth() {
  const [pin, setPin] = useState("");
  const [isIncorrect, setIncorrect] = useState(false);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.token !== null) {
      navigate("/tables");
    }
  }, [auth.token]);

  useEffect(() => {
    if (pin.length === 4) {
      login(pin)
        .then((x) => auth.setToken(x.token))
        .catch((e) => {
          setPin("");
          setIncorrect(true);
        });
    } else if (pin.length > 0) {
      setIncorrect(false);
    }
  }, [pin]);

  useEffect(() => {
    function handler(e) {
      if (e.key.match(/^[0-9]$/)) {
        setPin((pin) => pin + e.key);
      }
    }

    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <main className="p-2 bg-gray-700 border w-1/2 flex flex-col justify-center gap-16">
        <h1 className="text-center border-b border-white font-bold pb-1">
          Enter Your PIN
        </h1>
        <p
          className={
            "text-center text-5xl" + (pin.length ? "" : " text-transparent")
          }
        >
          {pin.length ? "*".repeat(pin.length) : "."}
        </p>
        <p
          className={
            "text-center transition-opacity text-red-500 " +
            (isIncorrect ? "opacity-100" : "opacity-0")
          }
        >
          Incorrect PIN. Try again!
        </p>
        <div className="grid grid-cols-3 w-fit mx-auto gap-4 mb-16">
          <BlockButton onClick={() => setPin((pin) => (pin + "7").slice(0, 4))}>
            7
          </BlockButton>
          <BlockButton onClick={() => setPin((pin) => (pin + "8").slice(0, 4))}>
            8
          </BlockButton>
          <BlockButton onClick={() => setPin((pin) => (pin + "9").slice(0, 4))}>
            9
          </BlockButton>
          <BlockButton onClick={() => setPin((pin) => (pin + "4").slice(0, 4))}>
            4
          </BlockButton>
          <BlockButton onClick={() => setPin((pin) => (pin + "5").slice(0, 4))}>
            5
          </BlockButton>
          <BlockButton onClick={() => setPin((pin) => (pin + "6").slice(0, 4))}>
            6
          </BlockButton>
          <BlockButton onClick={() => setPin((pin) => (pin + "1").slice(0, 4))}>
            1
          </BlockButton>
          <BlockButton onClick={() => setPin((pin) => (pin + "2").slice(0, 4))}>
            2
          </BlockButton>
          <BlockButton onClick={() => setPin((pin) => (pin + "3").slice(0, 4))}>
            3
          </BlockButton>
          <BlockButton
            onClick={() => setPin((pin) => (pin + "0").slice(0, 4))}
            className="col-span-2 w-auto"
          >
            0
          </BlockButton>
          <BlockButton
            onClick={() => {
              setPin("");
              setIncorrect(false);
            }}
          >
            Clear
          </BlockButton>
        </div>
      </main>
    </div>
  );
}
