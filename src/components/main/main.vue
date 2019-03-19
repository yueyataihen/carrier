<template>
  <Layout style="height: 100%" class="main">
  	<header>
  		<Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo">
            	<img src="../../assets/images/header_logo.79effd1.png" alt="">
            </div>
            <div class="layout-nav">
                <Menu-item name="1">
                    <Icon type="ios-navigate"></Icon>
                    首页
                </Menu-item>
                <Menu-item name="2">
                    <Icon type="ios-keypad"></Icon>
                    资源中心
                </Menu-item>
                <Menu-item name="3">
                    <Icon type="ios-analytics"></Icon>
                    调度中心
                </Menu-item>
                <Menu-item name="4">
                    <Icon type="ios-paper"></Icon>
                    评估中心
                </Menu-item>
                <Menu-item name="5">
                    <Icon type="ios-paper"></Icon>
                    配置中心
                </Menu-item>
            </div>
        </Menu>
    </header>
    <div class="layout-content">
      <slot name="main-tab"></slot>
    </div>
  </Layout>
</template>
  	
<script>
export default {
  name: 'MainPage',
  components: {
    // mainHeader,
  },
  data () {
    return {
      theme1: 'light',
    }
  },
}
  
</script>

<style scoped>
.ivu-menu-dark {
    background: #0085d0;
}
.ivu-menu {
	padding: 0 20px;
}
.layout-logo {
	float:left;
	display:inline;
	height:30px;
}
.layout-nav{
    width: 800px;
    margin: 0 auto;
    overflow: hidden;
}
.layout-breadcrumb{
    padding: 10px 15px 0;
}
.layout-content{
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
}
.layout-content-main{
    padding: 10px;
}
.layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}
.main-content-con{
    height: calc(100% - 60px);
    overflow: hidden;
}
.main-layout-con{
    height: 100%;
    overflow: hidden;
}
.ivu-select {
	margin: 10px 8px 10px 8px;
}
</style>
