import { getRates } from "../redux/reducer";
import { connect } from 'react-redux';
import { useEffect, useState } from "react";
import style from "./Rates.module.css"

const Rates = (props) => {

    const[currency1, setCurrency1] = useState('USD');

    useEffect(() => {
        props.getRates();
    }, [])

    function format(number) {
        return number.toFixed(5)
    }
    
    return <div className={style.rates}>

        <h3>Currency</h3>

        <div className={style.select__box}>
            <select className={style.select} value={currency1} onChange={ev => setCurrency1(ev.target.value)}>
                {Object.keys(props.rateee).map((rate) => (
                    <option key={rate} value={rate}>{rate}</option>
                ))}
            </select>
        </div>

        {currency1 == 'RUR' && 
            <div>{props.rates.map(rate => (<div className={style.rates__table} key={rate.ccy}>
                    <div className={style.ccy}>{rate.ccy}</div>
                    <div className={style.buy}>{format(1 / Object.values(props.rateee)[2] * rate.buy)}</div>
                </div>))}
            </div> }

        {currency1 == 'USD' && 
            <div>{props.rates.map(rate => (<div className={style.rates__table} key={rate.ccy}>
                    <div className={style.ccy}>{rate.ccy}</div>
                    <div className={style.buy}>{format(1 / Object.values(props.rateee)[0] * rate.buy)}</div>
                </div>))}
            </div> }

        {currency1 == 'EUR' && 
            <div>{props.rates.map(rate => (<div className={style.rates__table} key={rate.ccy}>
                    <div className={style.ccy}>{rate.ccy}</div>
                    <div className={style.buy}>{format(1 / Object.values(props.rateee)[1] * rate.buy)}</div>
                </div>))}
            </div> }
            
        {currency1 == 'BTC' && 
            <div>{props.rates.map(rate => (<div className={style.rates__table} key={rate.ccy}>
                    <div className={style.ccy}>{rate.ccy}</div>
                    <div className={style.buy}>{format(1 / Object.values(props.rateee)[3] * rate.buy)}</div>
                </div>))}
            </div> }
    </div>
};

let mapStateToProps = (state) => {
    return {
        rates: state.reducer.rates,
        rateee: state.reducer.rateee
    }
}

export default connect(mapStateToProps, { getRates })(Rates);
