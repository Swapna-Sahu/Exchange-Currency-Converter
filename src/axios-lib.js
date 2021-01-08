import { EventBus,ResponseEventType } from './eventbus';

const axios = require('axios').default;


export let axiosAPI;

let showErrorRes = function (res) {
    let errors = Object.values(res.data.errors);
    errors = errors.flat();
    alert.showErrorAlert(errors);
};

axiosAPI = function () {
    return {

        latestRequest: function () {
            axios.get("https://api.exchangeratesapi.io/latest")
                .then(function (response) {
                    EventBus.$emit(ResponseEventType.LATEST_BASE_EUR, response);
                }).catch(function (error) {
                    showErrorRes(error.response);
                });
        },
        historyBaseEurRequest: function (newDate) {
            axios.get("https://api.exchangeratesapi.io/"+newDate)
                .then(function (response) {
                    EventBus.$emit(ResponseEventType.HISTORY_BASE_EUR, response);
                }).catch(function (error) {
                    showErrorRes(error.response);
                });
        },
        latestSelectedBaseRequest: function (base) {
           axios.get("https://api.exchangeratesapi.io/latest?base="+ base)
                .then(function (response) {
                    EventBus.$emit(ResponseEventType.LATEST_SELECTED_BASE, response);
                }).catch(function (error) {
                    showErrorRes(error.response);
                });
        },
        twoSymbolBaseEur: function (selectedBase1,selectedBase2) {
            axios.get("https://api.exchangeratesapi.io/latest?symbols="+ selectedBase1 +','+selectedBase2)
                .then(function (response) {
                    EventBus.$emit(ResponseEventType.TWO_SYMBOL_BASE_EUR, response);
                }).catch(function (error) {
                    showErrorRes(error.response);
                });
        },
        historyTimePeriod: function (startDate,endDate) {
            //let startDate = "2018-01-01";
            //let endDate = "2018-03-01";
            axios.get("https://api.exchangeratesapi.io/history?start_at="+startDate+'&end_at='+endDate)
                .then(function (response) {
                    EventBus.$emit(ResponseEventType.HISTORY_TIME_PERIOD, response);
                }).catch(function (error) {
                    showErrorRes(error.response);
                });
        },
        fiatToCrypto: function () {
            axios.get("https://api.binance.com/api/v3/ticker/price")
                .then(function (response) {
                    EventBus.$emit(ResponseEventType.FIAT_TO_CRYPTO, response);
                }).catch(function (error) {
                    showErrorRes(error.response);
                });
        },
    };
}();