<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'
import MyCard from './components/MyCard.vue'
import { debounce } from '../../../utils/debounce.js'

/* 获取DOM元素 */
const chart1 = ref()
const chart2 = ref()
const chart3 = ref()
const chart4 = ref()
const chart5 = ref()
const chart6 = ref()

/* 初始化响应式配置 */
let options = reactive({
  title: {
    text: 'Referer of a Website',
    left: 'left',
    textStyle: {
      color: '#fff',
      fontWeight: 'normal',
      fontSize: '16',
    },
    padding: [10, 0, 0, 10],
  },
  tooltip: {
    trigger: 'item',
    position: ['70%', '30%'],
  },
  legend: {
    icon: 'rect',
    orient: 'vertical', // 图例横向排布
    // y: 'bottom',
    right: 55, // 图例位置
    bottom: 15,
    textStyle: {
      color: '#fff',
      fontSize: 12,
    },
  },
  color: ['#fc8251', '#5470c6', '#91cd77', '#ef6567', '#f9c956', '#75bedc'],
  series: [
    {
      data: [], //210, 100, 1, 9, 99
      type: 'pie',
      radius: ['30%', '70%'],
      center: ['40%', '50%'],
      showBackground: false,
      // labelLine: {
      //   show: false,
      // },
      // label: {
      //   show: false,
      //   position: "center",
      // },
      backgroundStyle: {
        color: '#031822',
      },
      barWidth: 20,
    },
  ],
})

/* chart实例 */
let myChartArr = reactive([])

/* 全部resize */
const resizeAll = () => {
  for (let i = 0; i < myChartArr.length; i++) {
    myChartArr[i].resize()
  }
}

/* 封装绘图函数 */
const drawChart = (chartDom, seriesData, title, color) => {
  // TODO
  options.title.text = title
  options.series[0].data = seriesData
  options.color = color
  let myChart = echarts.init(chartDom)
  myChart.setOption(options)
  myChartArr.push(myChart)
}

onMounted(() => {
  drawChart(
    chart1.value,
    [
      { value: 200, name: '在线数量' },
      { value: 2, name: '离线数量' },
    ],
    'AIBOX在线率',
    ['#BEEDC7', '#F4606C']
  )
  drawChart(
    chart2.value,
    [
      { value: 100, name: '>80' },
      { value: 50, name: '>50' },
      { value: 50, name: '<30' },
    ],
    '内存占用率',
    ['#AB545A', '#676662', '#E6D6D9']
  )
  drawChart(
    chart3.value,
    [
      { value: 80, name: '>3GB' },
      { value: 70, name: '<1GB' },
      { value: 50, name: '<500MB' },
    ],
    '硬盘剩余空间',
    ['#B57C82', '#F4D1D7', '#FEECD8']
  )
  drawChart(
    chart4.value,
    [
      { value: 100, name: '>10h' },
      { value: 50, name: '>5h' },
      { value: 50, name: '<1h' },
    ],
    '在线时长',
    ['#8CC7B5', '#BEE7E9', '#19CAAD']
  )
  drawChart(
    chart5.value,
    [
      { value: 80, name: '>=80' },
      { value: 70, name: '>3' },
      { value: 50, name: '<3' },
    ],
    '接入IPC数量',
    ['#686789', '#B77F70', '#E5E2B9']
  )
  drawChart(
    chart6.value,
    [
      { value: 100, name: '>1000个' },
      { value: 50, name: '>500个' },
      { value: 50, name: '>100个' },
    ],
    '告警信息数量',
    ['#CB9BFF', '#95A2FF', '#EBA19F']
  )
  window.onresize = debounce(resizeAll, 300)
})
onUnmounted(() => {
  window.onresize = null // TODO 是否安全
})
</script>

<template>
  <div class="area">
    <div class="summary">
      <MyCard num="10" desc="告警事件总数" />
      <MyCard num="10" desc="告警事件总数" />
      <MyCard num="10" desc="告警事件总数" />
      <MyCard num="10" desc="告警事件总数" />
      <MyCard num="10" desc="告警事件总数" />
    </div>
    <div class="chart-box">
      <div class="box-line">
        <div class="card" ref="chart1">123</div>
        <div class="card" ref="chart2">456</div>
        <div class="card" ref="chart3">123</div>
      </div>
      <div class="box-line">
        <div class="card" ref="chart4">123</div>
        <div class="card" ref="chart5">123</div>
        <div class="card" ref="chart6">123</div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.area {
  overflow: hidden;
  /* 统计卡片 */
  .summary {
    display: flex;
    justify-content: space-between;
    padding: 1vw 1.4vw 1vw;
  }
  .chart-box {
    display: flex;
    flex-direction: column;
    padding: 1.4vw;
    width: 100%;
    height: calc(100% - 7.2vw);
    overflow: hidden;
    .box-line {
      display: flex;
      overflow: hidden;

      flex: 1;
      &:nth-child(2) {
        padding-top: 1.6vw;
      }
    }
    .card {
      flex: 1;
      border-radius: 0.3vw;
      &:not(&:nth-child(3n)) {
        margin-right: 2vw;
      }
      overflow: hidden;
      background-color: var(--equip-bg-shadow-color);
    }
  }
}
</style>
