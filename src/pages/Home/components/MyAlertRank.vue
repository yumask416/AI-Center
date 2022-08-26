<script setup>
import * as echarts from 'echarts'
import { onMounted, ref, reactive, computed } from 'vue'

/* 模拟服务端返回的饼图数据 */
let fakeData = [
  { value: 10, name: '人员离岗' },
  { value: 7, name: '人员离岗' },
  { value: 5, name: '人员离岗' },
  { value: 4, name: '人员离岗' },
  { value: 3, name: '人员离岗' },
]

/* 模拟服务端返回的top4数据 */
let topList = reactive([
  {
    value: 86,
    name: '虚拟设备1',
    data: fakeData,
  },
  {
    value: 36,
    name: '虚拟设备2',
    data: fakeData,
  },
  {
    value: 16,
    name: '虚拟设备3',
    data: fakeData,
  },
  {
    value: 6,
    name: '虚拟设备4',
    data: fakeData,
  },
])

/* 用计算属性求进度条的长度 */
let sum = computed(() => topList.reduce((prev, item) => prev + item.value, 0))
const fillCalc = value => {
  return `width:${(value * 100) / sum.value}%`
}

/* 切换不同名次的设备 */
let isActive = ref(0) // 默认第一个激活
const switchHandler = index => {
  // 激活被选中样式
  isActive.value = index

  // 改变饼图的数据
}

let option = {
  title: {
    text: '虚拟设备1',
    textStyle: {
      color: '#fff',
      fontWeight: 'normal',
      fontSize: '18',
    },
    // subtext: "Fake Data",
    left: 'center',
    padding: [10, 0, 0, 0],
  },
  tooltip: {
    // TODO ??
    trigger: 'item',
    position: ['70%', '30%'],
  },
  legend: {
    type: 'scroll',
    icon: 'rect', // TODO ??
    itemWidth: 10, // 图例图形宽度
    itemHeight: 10,
    orient: 'horizontal', // TODO ??
    left: 8, // 图例位置
    bottom: 8,

    pageFormatter: ' ',
    textStyle: {
      color: '#fff',
      fontSize: 12,
    },
    pageButtonPosition: 'end', //翻页按钮的位置
    pageButtonItemGap: -14, //去掉翻页按钮之间的间距
    pageButtonGap: 4, // 翻页按钮与图例之间的距离
    pageIconColor: '#fff',
    pageTextStyle: {
      // show:false,
      color: '#fff',
    },
    itemGap: 20,

    selectedMode: false,
    itemWidth: 13,

    textStyle: {
      color: 'white',
    },
  },
  series: [
    {
      type: 'pie',
      radius: '70%',
      label: {
        show: false,
      },
      data: [
        { value: 1048, name: '人员离岗' },
        { value: 735, name: '打电话' },
        { value: 580, name: '抽烟' },
        { value: 484, name: '明火' },
        { value: 300, name: '烟雾' },
        { value: 120, name: '灭火器' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)', // TODO ??
        },
      },
    },
  ],
}

onMounted(() => {
  var myPieChart = echarts.init(document.getElementById('pie'))
  myPieChart.setOption(option)
})
</script>

<template>
  <div class="area">
    <div class="home-card-bar">
      <el-icon style="font-size: 0.75vw"><PieChart /></el-icon>
      告警数量Top4
    </div>
    <div class="content home-card-body">
      <div class="chart" id="pie"></div>
      <div class="rank">
        <div
          class="item"
          v-for="(item, index) in topList"
          @click="switchHandler(index)"
          :class="isActive === index ? 'active' : ''"
        >
          <div class="top">
            <div class="name">{{ item.name }}</div>
            <div class="rank">top{{ index + 1 }}</div>
          </div>
          <div class="bottom">
            <div class="bar">
              <div class="fill" :style="fillCalc(item.value)"></div>
            </div>
            <div class="score">{{ item.value }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.area {
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 0 0.5vw 0.5vw 0.5vw;
}
.home-card-body {
  padding-left: 0;
}
.content {
  display: flex;
  width: 100%;
  height: calc(100% - 1vw);
  // background-color: red;
  .chart {
    flex: 1;
    background: var(--card-background-shadow-color);

    // background-color: green;
  }
  .rank {
    flex: 1;
    // background-color: #fff;
    .item {
      width: 100%;
      height: 25%;
      // background: var(--card-background-shadow-color);
      padding: 0.3vw 0.4vw;
      font-size: 0.7vw;
      .top {
        padding-top: 2%;
        display: flex;

        .name {
          width: 80%;
        }
        .rank {
          width: 20%;
          text-align: center;
        }
      }
      .bottom {
        display: flex;
        padding-top: 0.6vw;
        .bar {
          width: 85%;
          height: 0.45vw;
          background-color: gray;
          border-radius: 0.5vw;
          overflow: hidden;
          .fill {
            background-color: skyblue;
            width: 50%;
            height: 0.5vw;
          }
        }
        .score {
          width: 15%;
          text-align: center;
          color: white;
        }
      }
    }
  }
}

.active {
  background: var(--card-background-shadow-color);
}
</style>
