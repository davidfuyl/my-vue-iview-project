// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VCharts from 'v-charts'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import { 
  Button, 
  Table, 
  Modal, 
  Form, 
  FormItem, 
  Input, 
  Content, 
  Layout, 
  Header, 
  Footer, 
  Sider,
  Collapse,
  Row,
  Menu,
  MenuGroup,
  MenuItem,
  Submenu,
  CollapsePanel,
  Panel,
  Icon,
  Col,
  Select,
  Card,
  Option,
  Radio,
  RadioGroup,
  TextArea,
  Dropdown

} from 'iview';
Vue.component('Modal', Modal);
Vue.component('Button', Button);
Vue.component('Form', Form);
Vue.component('FormItem', FormItem);
Vue.component('Input', Input);
Vue.component('Content', Content);
Vue.component('Layout', Layout);
Vue.component('Header', Header);
Vue.component('Footer', Footer);
Vue.component('Sider', Sider);
Vue.component('Collapse', Collapse);
Vue.component('CollapsePanel', CollapsePanel);
Vue.component('Panel', Panel);
Vue.component('Row', Row);
Vue.component('Menu', Menu);
Vue.component('MenuGroup', MenuGroup);
Vue.component('MenuGroup', MenuGroup);
Vue.component('MenuItem', MenuItem);
Vue.component('Icon', Icon);
Vue.component('Col', Col);
Vue.component('Submenu', Submenu);
Vue.component('Select', Select);
Vue.component('Option', Option);
Vue.component('Card', Card);
Vue.component('Radio', Radio);
Vue.component('RadioGroup', RadioGroup);
Vue.component('TextArea', TextArea);
Vue.component('Dropdown', Dropdown);
// Vue.component('DropdownMenu', DropdownMenu);
// Vue.component('DropdownItem', DropdownItem);


Vue.use(iView);
Vue.use(VCharts);



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
