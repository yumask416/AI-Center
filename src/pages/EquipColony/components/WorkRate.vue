<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'
import { debounce } from '../../../utils/debounce.js'

/* 筛选交互 */
let selectedEquip = ref('all')
let selectEquipOptions = [
  {
    value: 'all',
    label: '全部',
  },
]
let selectedTime = ref('all')
let selectTimeOptions = [
  {
    value: 'all',
    label: '全部',
  },
]
// TODO 分开写两个切换选项逻辑
const changeHandler = () => {}

/* 模拟数据 */
let options = reactive({
  // 标题
  title: {
    // text: "多条折线图测试用例" // 标题名称
  },
  grid: [
    {
      left: '5%',
      bottom: '10%',
      top: '10%',
      right: '2%',
    },
  ],
  // x轴
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['1-1', '1-2', '1-3', '1-4', '1-5', '1-6', '1-7'], // x轴坐标名称
    axisLabel: {
      color: '#fff',
      show: true,
      interval: 'auto',
    },
    // axisLine: {
    //   show: true,
    //   color: "#fff"
    // }
  },
  // y轴
  yAxis: {
    show: true,
    type: 'value',
    name: '次',
    nameLocation: 'end',
    axisLine: {
      show: true,
      color: '#fff',
    },
    axisLabel: {
      show: true,
      color: '#fff',
      interval: 'auto',
      formatter: '{value} ',
    },
    splitLine: {
      //网格线
      show: false,
    },
    // max: function(value) {
    //   return value.max + 21;
    // }
  },
  // 提示框，鼠标悬浮交互时的信息提示
  tooltip: {
    show: true, // 是否显示
    trigger: 'axis', // 触发类型，默认数据触发，见下图，可选为：'item' | 'axis'
  },
  legend: {
    orient: 'horizontal',
    x: 'center', //可设定图例在左、右、居中
    y: 'top', //可设定图例在上、下、居中
    padding: [10, 0, 0, 0], //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
    textStyle: {
      color: '#fff',
    },
    data: ['AIBOX1', 'AIBOX2', 'AIBOX3', 'AIBOX4', 'AIBOX5', 'AIBOX6'],
  },

  // 指定图标的类型
  series: [
    // 第一条折线图
    {
      name: 'AIBOX1', // 系列名称
      type: 'line', // 类型：线
      smooth: true, //平滑
      data: [11, 99, 33, 44, 55, 66, 77], // 数据
      // 折线图圆点
      label: {
        normal: {
          show: false,
          //position: 'bottom', // 文字位置
          // 显示的文字
          formatter: '{c}',
          textStyle: {
            color: '#fff', // 文字颜色
          },
        },
      },
      lineStyle: {
        color: '#71df6f', //改变折线颜色
      },
      lineWidth: 2,
      itemStyle: {
        normal: {
          areaStyle: { type: 'default' },
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#56ad66' },
            { offset: 0.5, color: 'rgba(98, 199, 98, 0.3)' },
            { offset: 1, color: 'rgba(98, 199, 98, 0.1)' },
          ]),
          borderColor: '#71df6f', //拐点边框颜色
          borderWidth: 2, //拐点边框大小
        },
      },
    },
    // 第二条折线图
    {
      name: 'AIBOX2', // 系列名称
      type: 'line', // 类型：线
      smooth: true, //平滑
      data: [1, 9, 3, 4, 5, 6, 7], // 数据
      // 折线图圆点
      label: {
        normal: {
          show: false,
          //position: 'bottom', // 文字位置
          // 显示的文字
          formatter: '{c}',
          textStyle: {
            color: '#fff', // 文字颜色
          },
        },
      },
      lineStyle: {
        color: '#9254de', //改变折线颜色
      },
      lineWidth: 2,
      itemStyle: {
        normal: {
          areaStyle: { type: 'default' },
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#9254de' },
            { offset: 0.5, color: 'rgba(146, 84, 222, 0.3)' },
            { offset: 1, color: 'rgba(146, 84, 222, 0.1)' },
          ]),
          borderColor: '#71df6f', //拐点边框颜色
          borderWidth: 2, //拐点边框大小
        },
      },
    },
    // 第三条折线图数据
    {
      name: 'AIBOX3', // 系列名称
      type: 'line', // 类型：线
      smooth: true, //平滑
      data: [0, 3, 0, 10, 2, 5, 9], // 数据
      // 折线图圆点
      label: {
        normal: {
          show: false,
          //position: 'bottom', // 文字位置
          // 显示的文字
          formatter: '{c}',
          textStyle: {
            color: '#fff', // 文字颜色
          },
        },
      },
      // #ffc53d
      lineStyle: {
        color: '#ffc53d', //改变折线颜色
      },
      lineWidth: 2,
      itemStyle: {
        normal: {
          areaStyle: { type: 'default' },
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#ffc53d' },
            { offset: 0.5, color: 'rgba(255, 197, 61, 0.3)' },
            { offset: 1, color: 'rgba(255, 197, 61, 0.1)' },
          ]),
          borderColor: '#71df6f', //拐点边框颜色
          borderWidth: 2, //拐点边框大小
        },
      },
    },
    // 第四条折线图数据
    {
      name: 'AIBOX4', // 系列名称
      type: 'line', // 类型：线
      smooth: true, //平滑
      data: [1400, 1346, 326, 210, 1424, 157, 219], // 数据
      // 折线图圆点
      label: {
        normal: {
          show: false,
          //position: 'bottom', // 文字位置
          // 显示的文字
          formatter: '{c}',
          textStyle: {
            color: '#fff', // 文字颜色
          },
        },
      },
      lineStyle: {
        color: '#1d39c4', //改变折线颜色
      },
      lineWidth: 2,
      itemStyle: {
        normal: {
          areaStyle: { type: 'default' },
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#1d39c4' },
            { offset: 0.5, color: 'rgba(29, 57, 196, 0.3)' },
            { offset: 1, color: 'rgba(29, 57, 196, 0.1)' },
          ]),
          borderColor: '#71df6f', //拐点边框颜色
          borderWidth: 2, //拐点边框大小
        },
      },
    },
    // 第五条折线图数据
    {
      name: 'AIBOX5', // 系列名称
      type: 'line', // 类型：线
      smooth: true, //平滑
      data: [1120, 1316, 306, 920, 440, 57, 109], // 数据
      // 折线图圆点
      label: {
        normal: {
          show: false,
          //position: 'bottom', // 文字位置
          // 显示的文字
          formatter: '{c}',
          textStyle: {
            color: '#fff', // 文字颜色
          },
        },
      },
      lineStyle: {
        color: '#EB2F96', //改变折线颜色
      },
      lineWidth: 2,
      itemStyle: {
        normal: {
          areaStyle: { type: 'default' },
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#EB2F96' },
            { offset: 0.5, color: 'rgba(235, 47, 250, 0.3)' },
            { offset: 1, color: 'rgba(235, 47, 250, 0.1)' },
          ]),
          borderColor: '#71df6f', //拐点边框颜色
          borderWidth: 2, //拐点边框大小
        },
      },
    },
    // 第六条折线图数据
    {
      name: 'AIBOX6', // 系列名称
      type: 'line', // 类型：线
      smooth: true, //平滑
      data: [106, 160, 36, 20, 444, 57, 109], // 数据
      // 折线图圆点
      label: {
        normal: {
          show: false,
          //position: 'bottom', // 文字位置
          // 显示的文字
          formatter: '{c}',
          textStyle: {
            color: '#fff', // 文字颜色
          },
        },
      },
      lineStyle: {
        color: '#DAA520', //改变折线颜色
      },
      lineWidth: 2,
      itemStyle: {
        normal: {
          areaStyle: { type: 'default' },
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#DAA520' },
            { offset: 0.5, color: 'rgba(218, 165, 23, 0.3)' },
            { offset: 1, color: 'rgba(218, 165, 23, 0.1)' },
          ]),
          borderColor: '#71df6f', //拐点边框颜色
          borderWidth: 2, //拐点边框大小
        },
      },
    },
  ],
})

/* 绘制图表 */
onMounted(() => {
  let myChart = echarts.init(document.querySelector('#chart'))
  myChart.setOption(options)

  const resizeChart = () => {
    myChart.resize()
  }
  window.onresize = debounce(resizeChart, 300)
})
onUnmounted(() => {
  window.onresize = null // TODO 是否安全
})
</script>

<template>
  <div class="area">
    <div class="operate">
      <span>设备：</span>
      <v-scale>
        <el-select
          :teleported="false"
          v-model="selectedEquip"
          placeholder="请选择设备"
          size="small"
          @change="changeHandler"
        >
          <el-option
            v-for="item in selectEquipOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </v-scale>
      <span>时间范围：</span>
      <v-scale>
        <el-select
          :teleported="false"
          v-model="selectedTime"
          placeholder="请选择时间范围"
          size="small"
          @change="changeHandler"
        >
          <el-option
            v-for="item in selectTimeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </v-scale>
    </div>
    <div class="chart" id="chart"></div>
  </div>
</template>

<style lang="less" scoped>
.area {
  overflow: hidden;
}
.operate {
  display: flex;
  align-items: center;
  padding-left: 1.4vw;
  height: 5vw;
  color: white;
  span:nth-of-type(2) {
    padding-left: 5vw;
  }
}
.chart {
  width: 100%;
  height: calc(100% - 5.1vw);
  overflow: hidden;
}
</style>
