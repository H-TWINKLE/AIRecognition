<template>
    <div class="base-header">
        <span class="logo" @click="router.push('/')"></span>
        <span class="divider"></span>
        <span class="title" @click="router.push('/')">{{ route.meta?.title ?? '卷积神经网络人工智能平台' }}</span>
        <span class="login">
            <span v-if="loginSuccess">
                <el-dropdown>
                    <span class="el-dropdown-link">应用
                        <el-icon class="el-icon--right">
                            <arrow-down/>
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item v-for="(item,index) in appList"
                                              :key="index" @click="router.push(item.path)">
                                {{
                                    item.meta.title
                                }}
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                 <span @click="logOut()">退出</span>
            </span>
            <span v-else @click="router.push('/login')">登录</span>
        </span>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import LoginStatus from '../../base_service/service/LoginStatus'

const route = useRoute()
const router = useRouter()
const appList = computed(() => {
    const info = router.getRoutes().filter((item) => {
        return item.meta && item.meta.asApp
    })
    return info
})
const loginSuccess = computed(() => {
    return LoginStatus.isLoginSuccess()
})
const logOut = () => {
    LoginStatus.logOut()
    router.push('/login')
}
</script>

<style lang="less" scoped>
.base-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px;

    .logo {
        width: 50px;
        height: 50px;
        background: url("src/assets/img/logo.png");
        display: inline-block;
        background-size: 100% 100%;
        float: left;
    }

    .divider {
        display: inline-block;
        background: rgba(117, 103, 103, 0.77);
        width: 1px;
        height: 30px;
        float: left;
        margin-top: 10px;
        margin-left: 10px;
        margin-right: 10px;
    }

    .title {
        display: inline-block;
        font-weight: bold;
        font-size: 18px;
        color: #4f3e7c;
        margin-top: 20px;
        margin-left: 5px;
    }

    .login {
        float: right;
        margin-top: 20px;
        margin-right: 30px;
        font-weight: bold;
        color: #4f3e7c;

        .el-dropdown-link {
            font-size: 16px;
            font-weight: bold;
            color: #39393b;
            margin-top: 1px;
            position: relative;
            display: inline-block;
        }
    }
}
</style>