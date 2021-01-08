import Vue from "vue";
export const EventBus = new Vue();

export const ResponseEventType = {
    SELECTED_BASE: "selected-base-response",
    LATEST_BASE_EUR: "latest-base-eur-response",
    HISTORY_BASE_EUR: "history-base-eur-response",
    LATEST_SELECTED_BASE: "latest-selected-base-response",
    TWO_SYMBOL_BASE_EUR: "two-symbol-base-eur-response",
    HISTORY_TIME_PERIOD: "history-time-period-response",
    FIAT_TO_CRYPTO: "fiat-to-crypto-response",
};