<template>
  <div>
    <div>
      <h3>
        Rates are quoted against the Euro by default. Quote against a different
        currency by setting the base parameter in your request.
      </h3>
      <label class="base">Base = </label>
      <select v-model="selectedBase" class="unit">
        <option value="">Select your option</option>
        <option :key="fiat" v-for="fiat in fiatArray">{{ fiat }}</option>
      </select>
      <button v-on:click="renderData" class="show">Show</button>
      <p class="base">Date = {{ date }}</p>
      <table id="data">
        <tr :key="unit" v-for="unit in Object.keys(unitsArr)">
          <td>{{ unit }} : {{ unitsArr[unit].toFixed(3) }}</td>
        </tr>
      </table>
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
      date: new Date().toLocaleDateString("en-CA"),
      unitsArr: [],
      fiatArray: [],
      selectedBase: "",
    };
  },
  created() {
    this.renderData();
    this.setFiatArr();
  },
  mounted: function () {
    EventBus.$on(ResponseEventType.LATEST_SELECTED_BASE, (response) => {
      this.unitsArr = response.data.rates;
      this.date = response.data.date;
    });
  },
  beforeDestroy() {
    EventBus.$off(ResponseEventType.LATEST_SELECTED_BASE);
  },
  methods: {
    setFiatArr: function () {
      this.fiatArray = utils.methods.getFiatCurrencies();
    },
    renderData: function () {
      axiosAPI.latestSelectedBaseRequest(this.selectedBase);
    },
  },
};
</script>

<style>
@import "../../css/fiatOptions.css";

.unit {
  background-color: white;
  margin: 10px;
  width: 150px;
  font-size: 15px;
  padding: 5px;
}
h3 {
  margin-bottom: 20px;
}
</style>
