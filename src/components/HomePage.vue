<!--首页模块:左侧导航Menu,表单查询，中间表格数据展示区域，区域查询，以及footer的版权展示信息-->
<template>
    <div class="layoutCls">
        <Layout>
            <Header class="header-1-cls">
                <div class="logoCls"><logoImage></logoImage></div>
            </Header>
        </Layout>
        <Layout>
            <Sider class="sider-1-cls">
                <side-tree-component @on-select="selectItem('', arguments)" :inChildScope="inParentScope" :transAryToChild="aryResultsInParent"></side-tree-component>
            </Sider>
            <Layout>
                <Header class="header-2-cls"></Header>
                <Content class="content-1-cls">
                    <keep-alive>
                        <component :is="currentComponent"></component><!--动态组件v-bind:is="myCurrentComponent"-->
                    </keep-alive>
                </Content>
                <!-- <Footer class="footer-1-cls">Copy Right 2018-2020</Footer> -->
            </Layout>
    </Layout>
    </div>
</template>

<script>
import logoImage from '@/components/LogoImage';
import sideTreeComponent from '@/components/SideTreeComponent';
import productInfoCard from '@/components/ProductInfoCard';
import deliverOrderTable from '@/components/DeliverOrderTable';
import orderSearchPanel from '@/components/OrderSearchPanel';
import theFirstQuarterProduction from '@/components/TheFirstQuarterProduction'
import addEmployeesForm from '@/components/manageEmployees/AddEmployeesForm';
import employeesInfoList from '@/components/manageEmployees/EmployeesInfoList';
import exportEmployees from '@/components/manageEmployees/ExportEmployees';
import Bus from '@/common/eventBus';

    export default {
        components: {
            logoImage,
            sideTreeComponent,
            productInfoCard,
            addEmployeesForm,
            deliverOrderTable,
            orderSearchPanel,
            theFirstQuarterProduction,
            employeesInfoList,
            exportEmployees
        },
        data() {
            return {
                inParentScope: {
                    name: 'david',
                    age: 20
                },
                aryResultsInParent: [
                    {"name": 'zhangsan', 'age': 20, 'gender': 'male'},
                    {"name": 'lisi', 'age': 21, 'gender': 'female'},
                    {"name": 'wangwu', 'age': 22, 'gender': 'male'}
                ],
                currentComponent: productInfoCard,
            }
        },
        created () {
            // this.currentComponent = productInfoCard;
        },
        /**
         * <keep-alive></keep-alive>钩子函数
         */
        // activated () {},
        // deactivated () {},
        methods: {
            selectItem () {
                console.log('name is', arguments[1][0]);
                switch (arguments[1][0]) {
                    case 'addEmployee':
                        this.currentComponent = addEmployeesForm;
                        break;
                    case 'employeeLists':
                        this.currentComponent = employeesInfoList;
                        break;
                    case 'exportEmployee':
                        this.currentComponent = exportEmployees;
                        break;
                    case 'theFirstQuarterSelling':
                        this.currentComponent = theFirstQuarterProduction;
                        break;
                    case 'platformProdList':
                        this.currentComponent = productInfoCard;
                        break;
                    case 'deliverOrderTable':
                        this.currentComponent = deliverOrderTable;
                        break;
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    body {
        background: #f7f7f7;
    }
    .logoCls {
        float: left;
        font-size: 16px;
    }

    .header-1-cls {
        background: #08A2BA;
        padding: 0 50px;
        height: 64px;
        line-height: 64px;
    }

    .layoutCls {
        margin-top: -60px;
    }

    .sider-1-cls {
        height: 560px;
        background: #28343F;
    }

    .footer-1-cls {
        height: 10px;
        background: #909294;
        text-align: center;
    }

    .content-1-cls, .header-2-cls {
        background: #f1ece9;
        // margin-top: -23px;
    }

    .report-cls {
        width: 50%;
    }
</style>

