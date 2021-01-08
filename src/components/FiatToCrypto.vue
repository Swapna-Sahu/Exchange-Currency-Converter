<template>
  <div id="fiatStyle">
    <button class="btn-home">
      <router-link to="/">
        <span class="btn-style">Home Page</span>
      </router-link>
    </button>
    <h1>Fiat - Crypto Currency</h1>
    <div class="grid-container">
      <div class="grid-item item-1">
        <label for="amount3">Amount = </label>
        <input
          type="number"
          v-model="amount"
          placeholder="Amount"
          class="input-width"
          id="amount3"
          required
        />
      </div>
      <div class="grid-item item-2">
        <label>From Fiat : 
        <select v-model="fiatUnitFrom" class="input-width">
          <option :key="fiat" v-for="fiat in fiatArray">{{ fiat }}</option>
        </select>
        </label>
        <label> To Crypto : 
        <select v-model="cryptoUnitTo" class="input-width">
          <option :key="crypto" v-for="crypto in cryptoArray">{{ crypto }}</option>
        </select>
        </label>
      </div>
      <div class="grid-item item-3 info">
        <p>
          Could not find your pair symbol in dropdown? Type your pair symbol
          below ...
        </p>
      </div>
      <div class="grid-item item-4">
        <label>From Fiat : 
        <input type="string" v-model="fiatUnitFrom" class="input-width" />
        </label>
        <label>To Crypto : 
        <input type="string" v-model="cryptoUnitTo" class="input-width" />
        </label>
      </div>
      <div class="grid-item item-5">
        <button v-on:click="onSubmit" class="submit-btn">Show</button>
      </div>
      <div class="converted">
        <div class="exchange-rate">
          <p>Symbol : {{ selectedSymbol }}</p>
          <p v-show="exchangeRate > 0">Rate : {{ exchangeRate }}</p>
          <p v-show="exchangeRate === null">Rate : Not listed</p>
        </div>
        <p class="calculated-amount">Output : {{ convertedAmount }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import utils from "../utils";
import { EventBus, ResponseEventType } from "../eventbus";
import { axiosAPI } from "../axios-lib";

export default {
  data() {
    return {
      amount: null,
      fiatUnitFrom: "",
      cryptoUnitTo: "",
      cryptoArray: [],
      fiatArray: [],
      fetchedData: [],
      output: null,
      selectedSymbol: "Selected Symbols",
      exchangeRate: null,
      convertedAmount: null,
      //filtered:[],
    };
  },
  created() {
    this.setCryptoArr();
    this.setFiatArr();
  },
  mounted: function () {
    EventBus.$on(ResponseEventType.FIAT_TO_CRYPTO, (response) => {
      this.fetchedData = response.data;
      this.exchangeRateCalc();
    });
  },
  beforeDestroy() {
    EventBus.$off(ResponseEventType.FIAT_TO_CRYPTO);
  },
  methods: {
    setFiatArr: function () {
      this.fiatArray = utils.methods.getFiatForCryptoCurrencies();
    },
    setCryptoArr: function () {
      this.cryptoArray = utils.methods.getCryptoCurrencies();
    },
    onSubmit: function () {
      axiosAPI.fiatToCrypto();
    },
    exchangeRateCalc: function () {
      this.fiatUnitFrom = this.fiatUnitFrom.toUpperCase();
      this.cryptoUnitTo = this.cryptoUnitTo.toUpperCase();
      this.selectedSymbol = this.fiatUnitFrom.concat(this.cryptoUnitTo);
      let filtered = [];
      let arr = this.fetchedData;
      filtered = arr.filter((item) => item.symbol === this.selectedSymbol);
      if (filtered.length) {
        this.exchangeRate = filtered[0].price;
      }
      this.convertedAmountCalc();
    },
    convertedAmountCalc: function () {
      this.convertedAmount = this.exchangeRate * this.amount;
    },
  },
};
</script>

<style>
@import "../css/general.css";
@import "../css/fiatToCrypto.css";
</style>