import { ratesAPI } from "../api/api";

const SET_RATES = 'SET_RATES';
const SET_RATEEE = 'SET_RATEEE';

let initialState = {
    rates: [],
    rateee : {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RATES:
            return {
                ...state,
                rates: [...action.rates]
            }
        case SET_RATEEE:
            const ccy = [];
            const buy = [];
            const rateArr = {};
            action.rates.map(rate => (ccy.push(rate.ccy), buy.push(rate.buy)))
            ccy.forEach((currency, rate) => rateArr[currency] = buy[rate])
            return {
                ...state,
                rateee: {...rateArr}
            }
        default:
            return state;
    } 
}

export const setRates = (rates) => ({ type: SET_RATES , rates})
export const setRateee = (rates) => ({ type: SET_RATEEE , rates})

export const getRates = () => async (dispatch) =>{
    let response = await ratesAPI.getRates()
    dispatch(setRates(response.data))
    dispatch(setRateee(response.data))
}


export default reducer;