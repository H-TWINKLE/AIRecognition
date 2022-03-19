<template>
    <base-page>
        <template v-slot:body>
            <div class="login-page">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span>登录</span>
                        </div>
                    </template>
                    <el-form
                        ref="formRef"
                        :model="form"
                        :rules="rules"
                        label-width="100px"
                        class="demo-ruleForm">
                        <el-form-item label="用户名" prop="userName">
                            <el-input v-model="form.userName"/>
                        </el-form-item>
                        <el-form-item label="密码" prop="userPass">
                            <el-input v-model="form.userPass" show-password/>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm(formRef)">登录</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </div>
        </template>
    </base-page>
</template>

<script>
import Login from './login'

export default Login
</script>

<style lang="less" scoped>
.login-page {
    position: fixed;
    left: 0;
    top: 80px;
    width: 100%;
    height: 100%;
    background: url("/src/assets/img/school.jpg");
    background-size: 100% 100%;

    .box-card {
        display: inline-block;
        margin-top: 15%;
        margin-left: 60%;
        width: 350px;

        .card-header {
            text-align: center;
        }
    }
}
</style>