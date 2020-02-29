<template>
    <div>
        <Row>
            <Col span="8">
                <Card class="card-1-cls">
                    <p slot="title">待处理<span style="margin-left:20px;color:red;">{{ waitOrders }}</span></p>
                    <p>商家信息修改<span style="margin-left:20px;color:red;">{{ waitOrders }}</span></p>
                    <p>待审核商品<span style="margin-left:20px;color:red;">{{ waitOrders }}</span></p>
                    <p>会员充值<span style="margin-left:20px;color:red;">{{ waitOrders }}</span></p>
                    <p>会员提现<span style="margin-left:20px;color:red;">{{ waitOrders }}</span></p>
                    <p>意见反馈<span style="margin-left:20px;color:red;">{{ waitOrders }}</span></p>
                    <p>商品评价<span style="margin-left:20px;color:red;">{{ waitOrders }}</span></p>
                    <p>入驻申请<span style="margin-left:20px;color:red;">{{ waitOrders }}</span></p>
                    <p>会员注册<span style="margin-left:20px;color:red;">{{ waitOrders }}</span></p>
                </Card>
            </Col>

            <Col span="8">
                <Card class="card-2-cls">
                    <p slot="title">今日商品<span style="margin-left:20px;color:red;">{{ commodites }}</span></p>
                    <p>平均商品总数<span style="margin-left:20px;color:red;">{{ commodites }}</span></p>
                    <p>入驻商品总数<span style="margin-left:20px;color:red;">{{ commodites }}</span></p>
                    <p>库存警告商品数<span style="margin-left:20px;color:red;">{{ commodites }}</span></p>
                    <p>库存警告商品数<span style="margin-left:20px;color:red;">{{ commodites }}</span></p>
                    <p>库存警告商品数<span style="margin-left:20px;color:red;">{{ commodites }}</span></p>
                    <p>库存警告商品数<span style="margin-left:20px;color:red;">{{ commodites }}</span></p>
                    <p>库存警告商品数<span style="margin-left:20px;color:red;">{{ commodites }}</span></p>
                    <p>库存警告商品数<span style="margin-left:20px;color:red;">{{ commodites }}</span></p>
                </Card>
            </Col>
               
            <Col span="8">
                <Card class="card-3-cls">
                    <p slot="title">订单统计<span style="margin-left:20px;color:red;">{{ ordersCount }}</span></p>
                    <p>预约订单<span style="margin-left:20px;color:red;">{{ ordersCount }}</span></p>
                    <p>待付款订单<span style="margin-left:20px;color:red;">{{ ordersCount }}</span></p>
                    <p>待服务订单<span style="margin-left:20px;color:red;">{{ ordersCount }}</span></p>
                    <p>待服务订单<span style="margin-left:20px;color:red;">{{ ordersCount }}</span></p>
                    <p>待服务订单<span style="margin-left:20px;color:red;">{{ ordersCount }}</span></p>
                    <p>待服务订单<span style="margin-left:20px;color:red;">{{ ordersCount }}</span></p>
                    <p>待服务订单<span style="margin-left:20px;color:red;">{{ ordersCount }}</span></p>
                    <p>待服务订单<span style="margin-left:20px;color:red;">{{ ordersCount }}</span></p>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
export default {
    name: 'ProductInfoCard',
    data () {
        return {
            ordersCount: 80,
            commodites: 100,
            waitOrders: 80
        }
    }
}
</script>

<style lang="less" scoped>
 .card-1-cls {
    margin-left: 9px;
    line-height: 28px;
 }
 .card-2-cls {
    margin-left: 10px;
    line-height: 28px;
 }
 .card-3-cls {
    margin-left: 10px;
    line-height: 28px;
    margin-right: 15px;
 }
</style>


