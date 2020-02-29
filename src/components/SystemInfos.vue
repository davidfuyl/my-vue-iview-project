<template>
    <div>
        <Table border :columns="columns" :data="systemData"></Table>
    </div>
</template>


<script>
export default {
    name: 'SystemInfos',
    data () {
        return {
            columns: [
                    {
                        title: 'Name',
                        key: 'name'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    }
                ]
        }
    }
}
</script>

<style lang="less" scoped>



</style>
