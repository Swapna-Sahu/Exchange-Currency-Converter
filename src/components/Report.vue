<template>
  <div id="chartdiv"></div>
</template>

<script>
import { EventBus, ResponseEventType } from "../eventbus";
import { axiosAPI } from "../axios-lib";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default {
  name: "Report",
  data() {
    return {
      fetchedData: {},
      graphData: [],
      chart: "",
    };
  },
  created() {
    axiosAPI.latestRequest();
  },

  mounted() {
    EventBus.$on(ResponseEventType.LATEST_BASE_EUR, (response) => {
      this.graphDataFormat(response.data.rates);

      this.reportGraph();
    });
  },

  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
    EventBus.$off(ResponseEventType.LATEST_BASE_EUR);
  },

  methods: {
    graphDataFormat: function (res) {
      let resData = [];
      resData = resData.concat(res);
      let arrObj = [];
      for (var key in resData[0]) {
        if (Object.prototype.hasOwnProperty.call(resData[0],key)) {
          let obj = {
            category: key,
            value: resData[0][key],
          };
          arrObj.push(obj);
        }
        arrObj = arrObj.filter((c) => (c = c.category != "IDR")); // Removing IDR only to look graph good in future this line will be deleted
        this.graphData = arrObj;
      }
    },
    reportGraph: function () {
      let chart = am4core.create("chartdiv", am4charts.XYChart);

      // Add data
      chart.data = this.graphData;
      // Create axes
      var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "category";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 10;

      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.minWidth = 25;

      // Create series
      var series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = "value";
      series.dataFields.categoryX = "category";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#chartdiv {
  width: 100%;
  height: 180px;
  background-color: rgb(231, 222, 222);
  font-size: 8px;
  font-weight: bold;
  color: white !important ;
}
</style>