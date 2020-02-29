<template>
    <div>
        <Modal title="登 录" v-model="visible" :mask-closable="false" class-name="vertical-center-modal">
            <Form :model="loginForm" :rules="rulesValidate" ref="loginform" label-position="right" :label-width="100">
                <FormItem label="用户名" prop="username">
                    <Input v-model="loginForm.username" placeholder="Pleae enter your usename" />
                </FormItem>
                <FormItem label="密码" prop="password">
                    <Input v-model="loginForm.password" type="password" placeholder="Please enter your password" />
                </FormItem>
            </Form>
            <div slot="footer" style="text-align:center">
                <Button type="text" v-text="cancelText" @click="cancel('loginform')"></Button>
                <Button type="primary" v-text="confirmText" @click="confirm"></Button>
            </div>
        </Modal>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            visible: true,
            loginForm: {
                username: '',
                password: ''
            },
            rulesValidate: {
                username: [
                    { required: true, message: 'The username cannot be empty', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: 'The password cannot be empty', trigger: 'blur' },
                    { min: 3, message: '密码位数不能少于 3 个字符', trigger: 'blur' }
                ]
            },
            cancelText: '取 消',
            confirmText: '确 定'

        }
    },
    methods: {
        cancel (loginform) {
            this.$refs[loginform].resetFields();
            this.visible = false;
        },
        confirm () {
            let username = this.loginForm.username;
            let passwd = this.loginForm.password;
            this.$router.push('/homePage');
            // alert(`the username is ${username} and passwod is ${passwd}`);
        }
    }
}
</script>

<style lang="less">
    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;
        .ivu-modal{
            top: 0;
        }
    }



</style>


