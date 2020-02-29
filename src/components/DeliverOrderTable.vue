<template>
    <div>
        <div class="search-panel-cls">
            <order-search-panel></order-search-panel>
        </div>
        <Table :data="searchTableData" :columns="orderTable" border ref="searchTable" size="small" height="390" class="table-cls" stripe>
            <!-- <template slot-scope="{ row }" slot="name">
                <strong>{{ row.name }}</strong>
            </template> -->
            <!-- <template slot-scope="{ row, index }" slot="action">
                <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">查看</Button>
                <Button type="error" size="small" @click="modify(index)">修改</Button>
                <Button type="error" size="small" @click="remove(index)">删除</Button>
            </template> -->
        </Table>
        <div class="footer-cls">
            <Select v-model="cityList" class="select-cls">
                <!-- <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option> -->
                <Option value="beijing">北京</Option>
                <Option value="shanghai">上海</Option>
                <Option value="xian">西安</Option>
                <Option value="guangzhou">广州</Option>
                <Option value="shenzhen">深圳</Option>
            </Select>
            <Button class="btn-cls" @click="regionSearch" type="primary">提交</Button>
        </div>
        <div class="page-cls">
            <Page :total="100" show-total />
        </div>
    </div>
</template>

<script>
// import deliverOrderTable from "./static/DeliverOrderTable.json";
import orderSearchPanel from './OrderSearchPanel'

export default {
    // name: 'DeliverOrderTable',
    components: {
        orderSearchPanel
    },
    data () {
        return {
            cityList: [],
            orderTable: [
                {
                    type: 'index',
                    width: 40,
                    align: 'center'
                },
                {
                    type: 'selection',
                    width: 50,
                    align: 'center'
                },
                {
                    title: '快递单序列号',
                    key: 'orderNum',
                    width: 130,
                    fixed: 'left',
                    sortable: true
                },
                {
                    title: '快递单号',
                    key: 'orderCode',
                    width: 120
                },
                {
                    title: '下单时间',
                    key: 'orderTime',
                    width: 150,
                    sortable: true
                },
                // {
                //     title: '发件人',
                //     key: 'sender',
                //     width: 120,
                //     // tooltip: true
                // },
                // {
                //     title: '收件人',
                //     key: 'receiver',
                //     width: 120
                // },
                {
                    title: '完成时间',
                    key: 'finishedTime',
                    width: 150,
                    sortable: true
                },
                {
                    title: '快递金额',
                    key: 'price',
                    width: 120,
                    sortable: true
                },
                {
                    title: '快递状态',
                    key: 'orderStatus',
                    width: 150
                },
                {
                    title: '快递员',
                    key: 'expressName',
                    width: 120
                },
                {
                    title: '操作',
                    key: 'operations',
                    width: 180,
                    align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            // this.show(params.index)
                                        }
                                    }
                                }, 'View'),

                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                }
            ],
            searchTableData: [
                {
                    "orderNum": "1901001",
                    "orderCode": "030600001",
                    "orderTime": "2019-01-20 18:25:34",
                    "sender": "张大鹏",
                    "receiver": "王晓红",
                    "finishedTime": "2019-01-23 16:25:34",
                    "price": "￥35.80",
                    "orderStatus": "已寄出 未签收",
                    "expressName": "张大鹏"
                },
                {
                    "orderNum": "1901001",
                    "orderCode": "030600001",
                    "orderTime": "2019-01-20 18:25:34",
                    "sender": "张大鹏",
                    "receiver": "王晓红",
                    "finishedTime": "2019-01-23 16:25:34",
                    "price": "￥35.80",
                    "orderStatus": "已寄出 未签收",
                    "expressName": "张大鹏"
                },
                {
                    "orderNum": "1901001",
                    "orderCode": "030600001",
                    "orderTime": "2019-01-20 18:25:34",
                    "sender": "张大鹏",
                    "receiver": "王晓红",
                    "finishedTime": "2019-01-23 16:25:34",
                    "price": "￥35.80",
                    "orderStatus": "已寄出 未签收",
                    "expressName": "张大鹏"
                },
                {
                    "orderNum": "1901001",
                    "orderCode": "030600001",
                    "orderTime": "2019-01-20 18:25:34",
                    "sender": "张大鹏",
                    "receiver": "王晓红",
                    "finishedTime": "2019-01-23 16:25:34",
                    "price": "￥35.80",
                    "orderStatus": "已寄出 未签收",
                    "expressName": "张大鹏"
                },
                {
                    "orderNum": "1901001",
                    "orderCode": "030600001",
                    "orderTime": "2019-01-20 18:25:34",
                    "sender": "张大鹏",
                    "receiver": "王晓红",
                    "finishedTime": "2019-01-23 16:25:34",
                    "price": "￥35.80",
                    "orderStatus": "已寄出 未签收",
                    "expressName": "张大鹏"
                },
                {
                    "orderNum": "1901001",
                    "orderCode": "030600001",
                    "orderTime": "2019-01-20 18:25:34",
                    "sender": "张大鹏",
                    "receiver": "王晓红",
                    "finishedTime": "2019-01-23 16:25:34",
                    "price": "￥35.80",
                    "orderStatus": "已寄出 未签收",
                    "expressName": "张大鹏"
                },
                {
                    "orderNum": "1901001",
                    "orderCode": "030600001",
                    "orderTime": "2019-01-20 18:25:34",
                    "sender": "张大鹏",
                    "receiver": "王晓红",
                    "finishedTime": "2019-01-23 16:25:34",
                    "price": "￥35.80",
                    "orderStatus": "已寄出 未签收",
                    "expressName": "张大鹏"
                },
                {
                    "orderNum": "1901001",
                    "orderCode": "030600001",
                    "orderTime": "2019-01-20 18:25:34",
                    "sender": "张大鹏",
                    "receiver": "王晓红",
                    "finishedTime": "2019-01-23 16:25:34",
                    "price": "￥35.80",
                    "orderStatus": "已寄出 未签收",
                    "expressName": "张大鹏"
                },
                {
                    "orderNum": "1901001",
                    "orderCode": "030600001",
                    "orderTime": "2019-01-20 18:25:34",
                    "sender": "张大鹏",
                    "receiver": "王晓红",
                    "finishedTime": "2019-01-23 16:25:34",
                    "price": "￥35.80",
                    "orderStatus": "已寄出 未签收",
                    "expressName": "张大鹏"
                },
                {
                    "orderNum": "1901001",
                    "orderCode": "030600001",
                    "orderTime": "2019-01-20 18:25:34",
                    "sender": "张大鹏",
                    "receiver": "王晓红",
                    "finishedTime": "2019-01-23 16:25:34",
                    "price": "￥35.80",
                    "orderStatus": "已寄出 未签收",
                    "expressName": "张大鹏"
                },
                {
                    "orderNum": "1901001",
                    "orderCode": "030600001",
                    "orderTime": "2019-01-20 18:25:34",
                    "sender": "张大鹏",
                    "receiver": "王晓红",
                    "finishedTime": "2019-01-23 16:25:34",
                    "price": "￥35.80",
                    "orderStatus": "已寄出 未签收",
                    "expressName": "张大鹏"
                }
            ]
        }
    },
    methods: {
        regionSearch () {
            let regionVal = this.cityList;
            alert(regionVal);
        }
    }
}
</script>

<style lang="less" scoped>
.table-cls {
    overflow: auto;
    text-overflow: ellipsis;
    margin: 5px 15px;
}
.search-panel-cls {
    margin: 5px 15px;
}
.footer-cls {
    float: left;
    .select-cls {
        width: 150px;
        margin: 10px 0px 0px 20px;
    }
    .btn-cls {
        margin: 10px 0px 0px 5px;
    }
}
.page-cls {
    float: right;
    margin: 10px 10px 0px 0px;
}


</style>
