<template>
    <div>
        <div class="form-cls">
            <Form :model="searchForm" inline class="form-search-cls" ref="searchForm">
                <FormItem><Icon type="ios-search" size="24" class="search-icon-cls"/></FormItem>
                <FormItem prop="orderCode">
                    <Input v-model="searchForm.orderCode" placeholder="快递单号"></Input>
                </FormItem>

                <FormItem prop="deliverName">
                    <Input v-model="searchForm.deliverName" placeholder="快递员"></Input>
                </FormItem>
                <FormItem label="选择区域" style="width:200px" prop="chooseArea">
                    <Select v-model="searchForm.chooseArea" class="select-option-cls" placehoder="请选择">
                        <Option value="beijing">北京</Option>
                        <Option value="shanghai">上海</Option>
                        <Option value="xian">西安</Option>
                        <Option value="guangzhou">广州</Option>
                        <Option value="shenzhen">深圳</Option>
                    </Select>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="search" class="btn-cls">搜索</Button>
                    <Button @click="reset(name)">重置</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OrderSearchPanel',
    data () {
        return {
            searchForm: {
                orderCode: '',
                deliverName: '',
                chooseArea: ''
            }
        }
    },
    methods: {
        search () {
            let orderCode = this.searchForm.orderCode;
            let deliverName = this.searchForm.deliverName;
            let area = this.searchForm.chooseArea;
            if(!orderCode && !deliverName &&!area) {
                return;
            }
            alert(`${orderCode}, ${deliverName}, ${area}`);

        },
        reset (searchForm) {
            this.$refs.searchForm.resetFields();
        }

    }
}
</script>


<style lang="less" scoped>
.form-cls {
    border: 1px solid #DCDEE2;
    height: 55px;
    margin-top: -50px;
    text-align: left;
}

.form-search-cls {
    margin-top: 10px;
    margin-bottom: 20px;
}

.select-option-cls {
    margin-top: -63px;
    margin-left: 61px;
}

.btn-cls {
    margin-left: 57px;
}
.search-icon-cls {
    margin-left: 14px;
}

</style>
