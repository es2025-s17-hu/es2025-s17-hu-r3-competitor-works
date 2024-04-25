import {FC, useState, useEffect} from 'react';

interface StatisticBox {
    number: number;
    additionalSymbol?: string;
    name: string;
}
const StatisticBox :FC <StatisticBox> = ({number, additionalSymbol, name}) => {

    const [renderedNumber, setRenderedNumber] = useState<number>(0);

    // ANIMATED NUMBERS STATISTICS
    useEffect(() => {
        let i = 0;
        let delta = 1;
        let timeout = 1;

        // DIFFERENT CASES FOR DIFFERENT NUMBERS OF SIZE
        if(number > 100000){
            delta = 1000;
            timeout = 0.01;
        }else if(number > 1000 && number < 100000){
            delta = 100;
            timeout = 100;
        }else{
            i = 0;
            delta = 1;
            timeout = 100;
        }
        const myInterval = setInterval(() => {
            // towards the end, set the delta to 1 in order not to overflow the original value
            if(number - i <= delta){
                delta = 1;
                timeout = 100;
            }
            i+=delta;

            // if the i is equal to final number, stop the loop
            if(i === number){
                clearInterval(myInterval);
            }
            setRenderedNumber(i);
        },timeout);

    }, []);

    return (
        <div className="Statistic-box">
            <div className="Statistic-number">{renderedNumber}{additionalSymbol}</div>
            <div className="Statistic-name">{name}</div>
        </div>
    );
};

export default StatisticBox;