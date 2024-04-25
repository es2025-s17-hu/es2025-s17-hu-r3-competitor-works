import {useState} from "react";
import api from "../axios.js";
import {useNavigate} from "react-router";

export default function LoginPage() {
    const [pin, setPin] = useState('');
    const [displayPin, setDisplayPin] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const pressNum = (num) => {
        if(pin.length < 4) {
            let _pin = pin;
            _pin += num.toString();
            setPin(_pin);

            let _display = '';
            for (let i = 0; i < _pin.length; i++) {
                _display += '*';
            }

            setError('');

            setDisplayPin(_display);

            if(_pin.length === 4) {
                login(_pin);
            }
        }
    }

    const login = async (_pin) => {
        try {
            const { data } = await api.post('/login/pin', {
                pin: _pin
            });
            console.log(data);
            localStorage.setItem('token', data.token);
            navigate('/table-selection');
        } catch (e) {
            console.log(e);
            setDisplayPin('');
            setPin('');
            setError('Incorrect PIN. Try again!');
        }
    }

    const clearAll = () => {
        setError('');
        setDisplayPin('');
        setPin('');
    }

    return (
        <>
            <div className={'pin-area'}>
                <h1>Enter Your PIN</h1>
                <div className={'divider'}></div>
                <div className={'input'}>
                    <p className={'error-text'}>{error}</p>
                    <p className={'pin'}>{displayPin}</p>

                    <div className={'numpad'}>
                        <button onClick={() => pressNum(7)}>7</button>
                        <button onClick={() => pressNum(8)}>8</button>
                        <button onClick={() => pressNum(9)}>9</button>
                        <button onClick={() => pressNum(4)}>4</button>
                        <button onClick={() => pressNum(5)}>5</button>
                        <button onClick={() => pressNum(6)}>6</button>
                        <button onClick={() => pressNum(1)}>1</button>
                        <button onClick={() => pressNum(2)}>2</button>
                        <button onClick={() => pressNum(3)}>3</button>
                        <button onClick={() => pressNum(0)} className={'big'}>0</button>
                        <button onClick={() => clearAll()}
                        >Clear</button>
                    </div>
                </div>
            </div>
        </>
    )
}