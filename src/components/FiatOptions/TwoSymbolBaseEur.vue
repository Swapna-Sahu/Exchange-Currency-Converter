<template>
  <div>
    <div>
      <h3>Request specific exchange rates by setting the symbols parameter.</h3>
      <p class="base">Base = EUR</p>
      <label>Symbol 1 = </label>
      <select v-model="symbol1" class="unit">
        <option :key="fiat" v-for="fiat in fiatArray">{{ fiat }}</option>
      </select>
      <label>Symbol 2 = </label>
      <select v-model="symbol2" class="unit">
        <option :key="fiat" v-for="fiat in fiatArray">{{ fiat }}</option>
      </select>
      <button v-on:click="renderData" class="show">Show</button>
    </div>
    <div id="result">
      <ul>
        <li>{{ symbol1 }} : {{ output[symbol1] }}</li>
        <li>{{ symbol2 }} : {{ output[symbol2] }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import utils from "../../utils";
import { EventBus, ResponseEventType } from "../../eventbus";
import { axiosAPI } from "../../axios-lib";

export default {
  data() {
    return {
      symbol1: "Unit",
      symbol2: "Unit",
      fiatArray: [],
      output: [],
    };
  },
  created() {
    this.renderData();
    this.setFiatArr();
  },
  mounted: function () {
    EventBus.$on(ResponseEventType.TWO_SYMBOL_BASE_EUR, (response) => {
      this.output = response.data.rates;
      this.date = response.data.date;
    });
  },
  beforeDestroy() {
    EventBus.$off(ResponseEventType.TWO_SYMBOL_BASE_EUR);
  },
  methods: {
    setFiatArr: function () {
      this.fiatArray = utils.methods.getFiatCurrencies();
    },
    renderData: function () {
      axiosAPI.twoSymbolBaseEur(this.symbol1, this.symbol2);
    },
  },
};
</script>

<style>
@import "../../css/fiatOptions.css";
#result ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 10px;
  border: 1px solid #222;
  margin: 20px;
}
#result ul li {
  flex-grow: 1;
  flex-basis: 100px;
  text-align: left;
  padding: 10px;
  border: 1px solid #222;
  margin: 0px 10px;
  font-size: 35px;
}
.unit {
  background-color: white;
  margin: 10px;
  width: 150px;
  font-size: 15px;
  padding: 5px;
}
</style>
