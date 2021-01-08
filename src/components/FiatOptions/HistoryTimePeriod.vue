<template>
  <div>
    <div>
      <div>
        <h3>Get historical rates for a time period.</h3>
        <p class="base">Base = EUR</p>
        <label for="startDate">Start Date</label>
        <input
          type="date"
          v-model="startDate"
          value=""
          placeholder="yyyy-mm-dd"
          class="time-style"
          id="startDate"
          required
        />
        <label for="endDate">End Date</label>
        <input
          type="date"
          v-model="endDate"
          value=""
          placeholder="yyyy-mm-dd"
          class="time-style"
          id="endDate"
          required
        />
        <button v-on:click="renderData" class="show">Show</button>
        <table id="data">
          <tr :key="unit" v-for="unit in Object.keys(unitsArr)">
            <td class="base">
              <p>{{ unit }}</p>
              <br />
              <table>
                <tr :key="item" v-for="item in Object.keys(unitsArr[unit])">
                  <td>
                    <p>{{ item }}: {{ unitsArr[unit][item] }}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus, ResponseEventType } from "../../eventbus";
import { axiosAPI } from "../../axios-lib";

export default {
  data() {
    return {
      unitsArr: [],
      startDate: "",
      endDate: "",
    };
  },
  created() {
    this.renderData();
  },
  mounted: function () {
    EventBus.$on(ResponseEventType.HISTORY_TIME_PERIOD, (response) => {
      this.unitsArr = response.data.rates;
    });
  },
  beforeDestroy() {
    EventBus.$off(ResponseEventType.HISTORY_TIME_PERIOD);
  },
  methods: {
    renderData: function () {
      axiosAPI.historyTimePeriod(this.startDate, this.endDate);
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
.text-center {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
}
.text-center li {
  flex-grow: 1;
  flex-basis: 10px;
  background-color: rgb(54, 157, 197);
  width: 0px !important;
  margin: 6px !important;
  padding: 0px !important;
}
</style>
