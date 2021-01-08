<template>
  <div>
    <div class="grid-fiat-container">
      <div class="grid-item item1">
        <label for="amount4">Amount : </label>
        <input
          type="number"
          v-model="amount"
          placeholder="Amount"
          class="input-width"
          id="amount4"
          required
        />
      </div>
      <div class="grid-item item2">
        <label>From : </label>
        <select v-model="fiatUnitFrom" class="input-width">
          <option :key="fiat" v-for="fiat in fiatArray">{{ fiat }}</option>
        </select>
      </div>
      <div class="grid-item item3">
        <label>To : </label>
        <select v-model="fiatUnitTo" class="input-width">
          <option  :key="fiat" v-for="fiat in fiatArray">{{ fiat }}</option>
        </select>
      </div>
      <div class="grid-item item4">
        <button v-on:click="onSubmit" class="submit-btn">Submit</button>
      </div>
    </div>
    <div class="output-container">
      <p class="converted">
        {{ amount }} {{ fiatUnitFrom }} = {{ exchangedAmount }} {{ fiatUnitTo }}
      </p>
      <p class="text">1 {{ fiatUnitFrom }} = {{ rate }} {{ fiatUnitTo }}</p>
      <p class="text">1 {{ fiatUnitFrom }} = {{ selectedBase.EUR }} EUR</p>
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
      amount: null,
      fiatArray: [],
      fiatUnitFrom: "Unit",
      fiatUnitTo: "Unit",
      selectedBase: [],
      exchangedAmount: 0,
      rate: 0,
    };
  },
  created() {
    this.setFiatArr();
  },
  mounted: function () {
    EventBus.$on(ResponseEventType.LATEST_SELECTED_BASE, (response) => {
      this.selectedBase = response.data.rates;
      this.exchangeRate(this.fiatUnitTo);
    });
  },
  beforeDestroy() {
    EventBus.$off(ResponseEventType.SELECTED_BASE);
  },
  methods: {
    setFiatArr: function () {
      this.fiatArray = utils.methods.getFiatCurrencies();
    },
    onSubmit: function () {
      axiosAPI.latestSelectedBaseRequest(this.fiatUnitFrom);
    },
    exchangeRate: function (unit) {
      let x = this.selectedBase;
      let y = Object.keys(x).filter((key) => (key = key === unit));
      this.rate = this.selectedBase[y];
      this.rate= this.rate.toFixed(3);
      this.convertedAmount();
    },
    convertedAmount: function () {
      let output = this.rate * this.amount;
      this.exchangedAmount = output.toFixed(3);
    },
  },
};
</script>

<style>
@import "../../css/general.css";
.grid-fiat-container {
  display: grid;
  grid-gap: 10px;
}
.grid-item {
  padding: 20px;
  font-size: 20px;
}
.item1 {
  grid-column: 1 ;
  grid-row: 1;
}
.item2 {
  grid-column: 1 /span 1 !important ;
  grid-row: 2 /span 1;
}
.item3 {
  margin:0px !important;
  grid-column: 2 /span 1 !important;
  grid-row: 2/span 1;
}

.item4{
    grid-column: 1 /span 2;
  grid-row: 3;
}

#options {
  display: inline-grid;
  row-gap: 10px;
  margin-bottom: 10px;
}
.converted {
  font-size: 40px;
  text-align: center;
  margin: 20px 0px;
  color: yellow;
}
.text {
  text-align: center;
  font-size: 20px;
  margin: 20px 0px;
  color:white;
}
.output-container {
  background-color: teal;
  padding: 10px 0px;

  width: 70%;
}
</style>
