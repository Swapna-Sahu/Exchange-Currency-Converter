<template>
  <div>
    <div>
      <h2>Get historical rates for any day since 1999.</h2>
      <p class="base">Base = EUR</p>
      <label>Date =
      <input type="date" v-model="date" required />
      </label>
      <button v-on:click="renderData" class="show">Show</button>
      <table id="data">
        <tr :key="unit" v-for="unit in Object.keys(unitsArr)">
          <td>{{ unit }} : {{ unitsArr[unit].toFixed(3) }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { axiosAPI } from "../../axios-lib";
import { EventBus, ResponseEventType } from "../../eventbus";

export default {
  data() {
    return {
      unitsArr: [],
      date: "",
    };
  },
  created() {
    this.renderData();
  },
  mounted: function () {
    EventBus.$on(ResponseEventType.HISTORY_BASE_EUR, (response) => {
      this.unitsArr = response.data.rates;
      this.date = response.data.date;
    });
  },
  beforeDestroy() {
    EventBus.$off(ResponseEventType.HISTORY_BASE_EUR);
  },
  methods: {
    renderData: function () {
      axiosAPI.historyBaseEurRequest(this.date);
    },
  },
};
</script>

<style>
@import "../../css/fiatOptions.css";

input {
  background-color: white;
  margin: 10px;
}
</style>
