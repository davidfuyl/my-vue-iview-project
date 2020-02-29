import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/Login'
import homePage from '@/components/HomePage'
import sideTreeComponent from '@/components/SideTreeComponent'
import topRightButtons from '@/components/TopRightButtons'
import deliverOrderTable from '@/components/DeliverOrderTable'
import orderSearchPanel from '@/components/OrderSearchPanel'
import productInfoCard from '@/components/ProductInfoCard'
import theFirstQuarterProduction from '@/components/TheFirstQuarterProduction'
import addEmployeesForm from '@/components/manageEmployees/AddEmployeesForm'


Vue.use(Router)

export default new Router({
  routes: [
    /* {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, */
    {
      path: '/',
      name: 'login',
      component: login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/sideTreeComponent',
      name: 'sideTreeComponent',
      component: sideTreeComponent
    },
    {
      path: '/addEmployeesForm',
      name: 'addEmployeesForm',
      component: addEmployeesForm,
      meta: {
        title: '添加员工'
      }
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: homePage,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/productInfoCard',
      name: 'productInfoCard',
      component: productInfoCard,
      meta: {
        title: '产品信息'
      }
    },
    {
      path: '/deliverOrderTable',
      name: 'deliverOrderTable',
      component: deliverOrderTable,
    },
    {
      path: '/orderSearchPanel',
      name: 'orderSearchPanel',
      component: orderSearchPanel
    }
  ]
})
