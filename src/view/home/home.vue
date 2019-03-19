<template>
  <Main>
  	<div slot="main-tab">
  		<i-select :model.sync="model1" style="width:100px" placeholder="全省">
			<i-option v-for="city in cityList" :value="city.value" :key="city.value">{{ city.label }}</i-option>
	    </i-select>	
		<i-select :model.sync="model2" style="width:100px" placeholder="全量">
		<i-option v-for="item in ways" :value="item.value" :key="item.value">{{ item.label }}</i-option>
		</i-select>	
		<Date-picker :value="value1" format="yyyy年MM月dd日" type="date" placeholder="选择日期" style="width: 200px"></Date-picker>
		<i-button>查询</i-button>	
		<i-button icon="ios-search">
		导出
		</i-button>
  	</div>
  </Main>
</template>

<script>
import Main from '@/components/main/main'
export default {
  name: 'Home',
  data () {
    return {
      model1: '',
      model2: '',
      model3: '',
      value1: '2019-03-01',
      cityList: [
        {
            value: 'quansheng',
            label: '全省'
        },
        {
            value: 'guangzhou',
            label: '广州市'
        },
        {
            value: 'shenzhen',
            label: '深圳市'
        },
        {
            value: 'dongguan',
            label: '东莞市'
        },
        {
            value: 'foshan',
            label: '佛山市'
        },
        {
            value: 'shantou',
            label: '汕头市'
        }
    ],
    ways: [
        {
            value: 'quanliang',
            label: '全量'
        },
        {
            value: 'shishi',
            label: '实时优化'
        },
        {
            value: 'feishishi',
            label: '非实时优化'
        }
    ],
    pieData: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
    ],
    barData: {
        Mon: 13253,
        Tue: 34235,
        Wed: 26321,
        Thu: 12340,
        Fri: 24643,
        Sat: 1322,
        Sun: 1324
    },
    }
  },
  components: {
  	Main,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
