import KeyPadNumber from "./KeyPadNumber.jsx";
import {useEffect, useState, useContext} from "react";
import axios from 'axios';
import {LoginContext} from "../context/LoginContext.jsx";
import {useNavigate} from "react-router-dom";


const KeyPad = () => {

    const [numbers, setNumbers] = useState([]);
    const [textareaValue, setTextareaValue] = useState("");
    const [pin, setPin] = useState("");
    const navigate = useNavigate();

    const loginCtx = useContext(LoginContext);

    const login = () => {
        axios.post("https://module-c-6-solution.dineease.com/api/v1/login/pin", {
                "pin": pin
            }
        )
            .then(response => {
                if (response.status === 200) {
                    loginCtx.setLoggedIn(true);
                    loginCtx.setToken(response.data.token);
                    setTextareaValue("");
                    setPin("");
                    navigate("/tables");
                }

            })
            .catch(() => {
                alert("Invalid pin");
                setTextareaValue("");
                setPin("");
            });
    }

    const addToPin = (e) => {
        setTextareaValue(prevState => prevState += "*");
        setPin(prevState => prevState += e.target.innerText);
    }

    useEffect(() => {
        if (textareaValue.length === 4) {
            login();
        }
    }, [textareaValue]);

    const clearPin = () => {
        setTextareaValue("");
        setPin("");
    }


    useEffect(() => {
        for (let i = 1; i <= 9; i++) {
            setNumbers(prevState => [...prevState, i]);
        }
    }, []);

    return (
        <div className={"keypad"}>
            <div className="keypad-header">
                <h1>Enter your pin</h1>
            </div>
            <textarea className={"entered-pin"} contentEditable={false} disabled={true} value={textareaValue}>
            </textarea>
            <div className="keypad-actions">
                {numbers.map(number => {
                    return <KeyPadNumber key={number} number={number} action={addToPin}/>
                })}
                <KeyPadNumber number={0} action={addToPin}/>
                <button style={{gridColumn: "span 2"}} className={"keypad-number"} onClick={clearPin}>
                    Clear
                </button>
            </div>
        </div>
    );
};

export default KeyPad;