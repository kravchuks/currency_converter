import style from "./InputBox.module.css"

const InputBox = (props) => {
    return <div className={style.input__box}>
        <input type="number" value={props.amount} placeholder="enter the amount" onChange={ev => props.onAmountChange(ev.target.value)} />
        <select value={props.currency} onChange={ev => props.onCurrencyChange(ev.target.value)}>
            {props.currencies.map((currency) => (
                <option key={currency} value={currency}>{currency}</option>
            ))}
        </select>
    </div>
};

export default InputBox;