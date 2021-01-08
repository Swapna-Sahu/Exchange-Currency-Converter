<template>
  <div>
    <div>
      <h2>Latest with Base = EUR</h2>
      <p class="base">Date : {{ date }}</p>
      <table id="data">
        <tr :key="unit" v-for="unit in Object.keys(unitsArr)">
          <td>{{ unit }} : {{ unitsArr[unit] }}</td>
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
    EventBus.$on(ResponseEventType.LATEST_BASE_EUR, (response) => {
      this.unitsArr = response.data.rates;
      this.date = response.data.date;
    });
  },
  beforeDestroy() {
    EventBus.$off(ResponseEventType.LATEST_BASE_EUR);
  },
  methods: {
    renderData: function () {
      axiosAPI.latestRequest();
    },
  },
};
</script>

<style>
@import "../../css/fiatOptions.css";
</style>
