import { useEffect, useState } from "react";
import { ratesAPI } from "../api/api";
import style from "./Exchange.module.css"
import InputBox from "./InputBox";

const Exchange = () => {

    const[amount1, setAmount1] = useState(0);
    const[amount2, setAmount2] = useState(0);
    const[currency1, setCurrency1] = useState('USD');
    const[currency2, setCurrency2] = useState('USD');
    const[rates, setRates] = useState([]);

    useEffect(() => async() => {
        const response = await ratesAPI.getRates();
        const ccy = [];
        const buy = [];
        const rateArr = {};
        response.data.map(rate => (ccy.push(rate.ccy), buy.push(rate.buy)))
        ccy.forEach((currency, rate) => rateArr[currency] = buy[rate])
        setRates(rateArr)
    },[])

    function format(number) {
        return number.toFixed(4)
    }

    function handleAmountChange1(amount1) {
        setAmount2(format((1 / rates[currency2] * rates[currency1]) * amount1))
        setAmount1(amount1)
    };

    function handleCurrencyChange1(currency1) {
        setAmount2(format((1 / rates[currency2] * rates[currency1]) * amount1))
        setCurrency1(currency1)
    };

    function handleAmountChange2(amount2) {
        setAmount1(format((1 / rates[currency1] * rates[currency2]) * amount2))
        setAmount2(amount2)
    };

    function handleCurrencyChange2(currency2) {
        setAmount2(format((1 / rates[currency2] * rates[currency1]) * amount1))
        setCurrency2(currency2)
    };

    return <div>
        <h3 className={style.h3}>Exchange</h3>
        <InputBox 
            onAmountChange={handleAmountChange1}
            onCurrencyChange={handleCurrencyChange1}
            currencies={Object.keys(rates)} 
            amount={amount1} 
            currency={currency1} />
        <InputBox 
            onAmountChange={handleAmountChange2}
            onCurrencyChange={handleCurrencyChange2}
            currencies={Object.keys(rates)} 
            amount={amount2} 
            currency={currency2} />
    </div>
};

export default Exchange;
