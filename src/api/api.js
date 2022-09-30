import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11",
});

export const ratesAPI = {
    getRates() {
        return instance.get()
            .then(response => {
                return response;
            })
    }
};