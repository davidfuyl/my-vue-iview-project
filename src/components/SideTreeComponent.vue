<template>
    <div>
        <Menu :theme="theme2" class='sideCls' width="100px;" accordion @on-select="route">
            <Submenu name="commodityMan" class="sideCls">
                <template slot="title"><Icon type="ios-people" size='20'/>商品管理</template>
                    <Menu-item name="platformProdList">平台商品列表</Menu-item>
                    <Menu-item name="entryProdList">入驻商品列表</Menu-item>
                    <Menu-item name="addNewProd">添加新商品</Menu-item>
                    <Menu-item name="commodityType">商品分类</Menu-item>
                    <Menu-item name="customerRate">用户评论</Menu-item>
            </Submenu>

            <Submenu name="workerMan">
                <template slot="title"><Icon type="ios-stats" size='20'/>员工管理</template>
                    <Menu-item name="employeeLists" >员工信息列表</Menu-item>
                    <Menu-item name="addEmployee">添加员工</Menu-item>
                    <Menu-item name="exportEmployee">导出员工</Menu-item>
            </Submenu>

            <Submenu name="buyerMan">
                <template slot="title"><Icon type="ios-paper" size='20'/>商家管理</template>
            </Submenu>
            
            <Submenu name="orderMan">
                <template slot="title"><Icon type="ios-stats" size='20'/>订单管理</template>
                <Menu-item name="deliverOrderTable">查询订单</Menu-item>
            </Submenu>

            <Submenu name="memberMan">
                <template slot="title"><Icon type="md-people" size='20'/>会员管理</template>
            </Submenu>

            <Submenu name="chartReport">
                <template slot="title"><Icon type="ios-podium" size='20'/>报表统计</template>
                    <Menu-item name="theFirstQuarterSelling">第一季度销售数据</Menu-item>
            </Submenu>

        </Menu>
    </div>
</template>


<script>
import Bus from '@/common/eventBus';

export default {
    name: 'SideTreeComponent',
    props: {
        inChildScope: Object,
        transAryToChild: Array
    },
    data () {
        return {
            theme2: 'light',
            productInfoShow: false
        }
    },
    created () {
        // alert(this.inChildScope);
        // console.log(JSON.stringify(this.inChildScope));
        // let results = JSON.stringify(this.inChildScope);
        // console.log(results);
        // console.log(this);
        // console.log(this.inChildScope.name);
        // console.log(this.inChildScope.age);
        // const list = this.transAryToChild.forEach( item => {
        //     console.log(`${item.name} --- ${item.age} --- ${item.gender}`);
        // });
    },
    methods: {
        route (name) {
            switch (name) {
                case 'platformProdList':
                    this.$emit('on-select', 'platformProdList');
                    break;
                case 'addEmployee':
                    this.$emit('on-select', 'addEmployee');
                    break;
                case 'employeeLists':
                    this.$emit('on-select', 'employeeLists');
                    break;
                case 'exportEmployee':
                    this.$emit('on-select', 'exportEmployee');
                    break;
                case 'theFirstQuarterSelling':
                    this.$emit('on-select', 'theFirstQuarterSelling');
                    break;
                case 'deliverOrderTable':
                    this.$emit('on-select', 'deliverOrderTable');
                    break;
            }
        }
    }
}

</script>

<style lang="less" scoped>

.sideCls {
    background: #28343F;
    color: white;
}

</style>


