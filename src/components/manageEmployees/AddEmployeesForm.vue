<template>
    <div class="bakg-cls">
        <Col span="12">
            <Card dis-hover=false class="cardCls">
                <Form :model="addEmpForm" ref="addEmpForm" :label-width="70">
                    <FormItem label="员工姓名" prop="employeeName">
                        <Input v-model="addEmpForm.employeeName"></Input>
                    </FormItem>

                     <FormItem label="身份证号" prop="IdNum">
                        <Input v-model="addEmpForm.IdNum"></Input>
                    </FormItem>

                    <FormItem label="出生日期" prop="birthOfDate">
                        <Row>
                            <Col span="11" class="date-cls">
                                <DatePicker type="date" placeholder="Select date" v-model="addEmpForm.birthOfDate"></DatePicker>
                            </Col>
                        </Row>
                    </FormItem>

                    <FormItem label="现居住地" prop="currentHomeAddress">
                        <Input v-model="addEmpForm.currentHomeAddress"></Input>
                    </FormItem>

                    <FormItem label="所属部门" prop="departments">
                        <Select v-model="addEmpForm.departments">
                            <Option value=""></Option>
                            <Option value="sellDept">销售部</Option>
                            <Option value="buyDept">采购部</Option>
                            <Option value="ADDept">广告部</Option>
                        </Select>
                    </FormItem>

                    <FormItem label="月任务量" prop="monthTasks">
                        <Input v-model="addEmpForm.monthTasks"></Input>
                    </FormItem>

                    <FormItem label="基本薪资" prop="baseSalary">
                        <Input v-model="addEmpForm.baseSalary"></Input>
                    </FormItem>
                </Form>
            </Card>
        </Col>

        <Col span="12">
            <Card dis-hover="false" class="cardCls">
                <Form :model="addEmpForm" ref="addEmpForm" :label-width="75">
                <FormItem label="性别" prop="gender">
                        <RadioGroup v-model="addEmpForm.gender" class="gender-cls">
                            <Radio label="male" style="margin-left:0px;">男</Radio>
                            <Radio label="female">女</Radio>
                        </RadioGroup>
                    </FormItem>

                    <FormItem label="手机号码" prop="telephoneNum">
                        <Input v-model="addEmpForm.telephoneNum"></Input>
                    </FormItem>

                    <FormItem label="籍贯" prop="homeAddress">
                        <Input v-model="addEmpForm.homeAddress"></Input>
                    </FormItem>

                    <FormItem label="详细地址" prop="addressDetails">
                        <Input v-model="addEmpForm.addressDetails"></Input>
                    </FormItem>

                    <FormItem label="入职日期" prop="entryDate">
                        <Row>
                            <Col span="11" class="date-cls">
                                <DatePicker type="date" placeholder="Select date" v-model="addEmpForm.entryDate"></DatePicker>
                            </Col>
                        </Row>
                    </FormItem>

                    <FormItem label="月休息天数" prop="restDays">
                        <Input v-model="addEmpForm.restDays"></Input>
                    </FormItem>

                    <FormItem label="备注" prop="notes">
                        <Input v-model="addEmpForm.notes" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                    </FormItem>
                </Form>
                <div>
                    <Button type="primary" @click="handleConfirm">确 定</Button>
                    <Button @click="handleReset('addEmpForm')">重 置</Button>
                </div>
            </Card>
        </Col>
    </div>
</template>


<script>
export default {
    name: 'AddEmployeesForm',
    data () {
        return {
            addEmpForm: {
                employeeName: '',
                gender: 'male',
                telephoneNum: '',
                IdNum: '',
                departments: '',
                homeAddress: '',
                addressDetails: '',
                restDays: '',
                monthTasks: '',
                baseSalary: '',
                notes: '',
                birthOfDate: '',
                entryDate: '',
                currentHomeAddress: ''
            },
        }
    },
    methods: {
        handleConfirm () {

        },
        handleReset (addEmpForm) {
            this.$refs[addEmpForm].resetFields();
        }
    }
}
</script>

<style lang="less" scoped>

.bakg-cls {
    background-color: #a9eaa9;
}

.ivu-input {
    line-height: 0.5px;
}

.cardCls {
    margin-left: 20px;
    background-color: #a9eaa9;
}

.date-cls {
    margin-left: -10px;
}

.gender-cls {
    float: left;
}

/* .ivu-form .ivu-form-item-label {
    
} */
</style>
