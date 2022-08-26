<script setup>
import * as echarts from 'echarts'
import { onMounted, ref, reactive, computed } from 'vue'
let range = ref(1) // 显示的数据范围 1-分钟 2-小时 3-天

/* 模拟option */
let option = {
  color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],

  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
      },
    },
  },

  legend: {
    data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5'],
  },

  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: false,
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
  ],
  yAxis: [
    {
      type: 'value',
      // axisLine: {
      //   show: false,
      // },
      splitLine: {
        show: false,
      },
    },
  ],
  series: [
    {
      name: 'Line 1',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(128, 255, 165)',
          },
          {
            offset: 1,
            color: 'rgb(1, 191, 236)',
          },
        ]),
      },
      emphasis: {
        focus: 'series',
      },
      data: [140, 232, 101, 264, 90, 340, 250],
    },
    {
      name: 'Line 2',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(0, 221, 255)',
          },
          {
            offset: 1,
            color: 'rgb(77, 119, 255)',
          },
        ]),
      },
      emphasis: {
        focus: 'series',
      },
      data: [120, 282, 111, 234, 220, 340, 310],
    },
    {
      name: 'Line 3',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(55, 162, 255)',
          },
          {
            offset: 1,
            color: 'rgb(116, 21, 219)',
          },
        ]),
      },
      emphasis: {
        focus: 'series',
      },
      data: [320, 132, 201, 334, 190, 130, 220],
    },
    {
      name: 'Line 4',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 0, 135)',
          },
          {
            offset: 1,
            color: 'rgb(135, 0, 157)',
          },
        ]),
      },
      emphasis: {
        focus: 'series',
      },
      data: [220, 402, 231, 134, 190, 230, 120],
    },
    {
      name: 'Line 5',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      label: {
        show: true,
        position: 'top',
      },
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 191, 0)',
          },
          {
            offset: 1,
            color: 'rgb(224, 62, 76)',
          },
        ]),
      },
      emphasis: {
        focus: 'series',
      },
      data: [220, 302, 181, 234, 210, 290, 150],
    },
  ],
}
onMounted(() => {
  let myWaveChart = echarts.init(document.getElementById('wave'))
  myWaveChart.setOption(option)
})
</script>

<template>
  <div class="area">
    <div class="content">
      <div class="home-card-bar">
        <el-icon style="font-size: 0.75vw"><DataLine /></el-icon>
        告警-日期 趋势图
        <v-scale>
          <div class="selector">
            <el-radio-group v-model="range" size="small">
              <el-radio label="1">分钟</el-radio>
              <el-radio label="2">小时</el-radio>
              <el-radio label="3">天</el-radio>
            </el-radio-group>
          </div>
        </v-scale>
      </div>
      <div id="wave"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.area {
  width: 100%;
  height: 100%;
  padding: 0 0.3vw 0.3vw 0;
  overflow: hidden;
  // background-color: red;
}
.content {
  width: 100%;
  height: 100%;
  // background: green;
}

/* 单选区样式 */
.home-card-bar {
  // position: relative;

  .selector {
    padding-left: 3vw;
  }
}
:deep(.el-radio) {
  color: white;
}

/* echart容器 */
#wave {
  width: 100%;
  height: calc(100% - 1.2vw);
  background-color: rgba(3, 27, 39, 0.8);
}
</style>
