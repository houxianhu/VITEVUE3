<template>
  <div class="app-container" id="map-container">
    <div class="echar-container" id="echar-container"></div>
  </div>
</template>

<script setup>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.chinatmsproviders";
import * as echarts from "echarts";

const satellite = L.tileLayer.chinaProvider("TianDiTu.Satellite.Map", {
  key: "f5c83905e5a8276d3f2eef5e7b6b471e",
  maxZoom: 18,
  minZoom: 2,
});

const annoion = L.tileLayer.chinaProvider("TianDiTu.Satellite.Annotion", {
  key: "f5c83905e5a8276d3f2eef5e7b6b471e",
  maxZoom: 18,
  minZoom: 2,
});

let map = ref(null);

onMounted(() => {
  nextTick(() => {
    initMap();

    var chartDom = document.getElementById("echar-container");
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          smooth: true,
        },
      ],
    };

    myChart.setOption(option);
  });
});

const initMap = () => {
  map = L.map("map-container", {
    layers: [L.layerGroup([satellite, annoion])],
    zoom: 11,
    center: [19.836786, 110.433161],
  });
};


</script>

<style lang="less" scoped>
.app-container {
  height: 100%;
  position: relative;
  overflow: hidden;
  .echar-container {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1000;
    width: 380px;
    height: 300px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 8px;
    padding: 15px;
  }
}
</style>
