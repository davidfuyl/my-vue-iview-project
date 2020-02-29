<template>
    <div class="histogram-cls">
        <ve-histogram :data="chartData" :extend="extend"></ve-histogram>
    </div>
</template>

<script>
export default {
    data () {
        this.extend = {
            series: {
            label: { show: true, position: "top" }
        }
      }
      return {
        chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'], //配置的列，这里有四列
          rows: [
            { '日期': '2019-01-01', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '2019-02-01', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '2019-03-01', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '2019-04-01', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '2019-05-01', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '2019-06-01', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        }
      }
    }
}
</script>

<style lang="less" scoped>

.histogram-cls {
  margin-left: 50px;
}


</style>


