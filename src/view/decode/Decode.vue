<template>
    <base-page>
        <template v-slot:body>
            <div class="encode-page">
                <div class="input-box">
                    <el-card class="box-card">
                        <template #header>
                            <div class="card-header">
                                <span>文本采集</span>
                            </div>
                        </template>
                        <el-form
                            ref="formRef"
                            :model="form"
                            label-width="100px"
                            class="demo-ruleForm">
                            <el-form-item label="请输入链接" prop="url">
                                <el-input clearable v-model="form.url"/>
                            </el-form-item>
                            <el-form-item label="请上传文件" prop="file">
                                <el-upload action="#"
                                           list-type="picture-card"
                                           :limit="1"
                                           :file-list="form.fileList"
                                           :auto-upload="false">
                                    <template #default>
                                        <el-icon>
                                            <Plus/>
                                        </el-icon>
                                    </template>
                                    <template #file="{ file }">
                                        <div>
                                            <img class="el-upload-list__item-thumbnail" :src="file.url" alt=""/>
                                            <span class="el-upload-list__item-actions">
                                        </span>
                                        </div>
                                    </template>
                                </el-upload>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="reset()">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </el-card>
                </div>
                <div class="result-box">
                    <el-card class="box-card">
                        <template #header>
                            <div class="card-header">
                                <span>文字识别</span>
                            </div>
                        </template>
                        <el-form>
                            <div class="img-result">
                            </div>
                        </el-form>
                    </el-card>
                </div>
            </div>
        </template>
    </base-page>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'

const form = reactive({
    url: '',
    fileList: []
})
const reset = () => {
    form.url = ''
    form.fileList = []
}
</script>

<style lang="less" scoped>
.encode-page {
    position: fixed;
    top: 11%;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("/src/assets/img/background.jpg");
    background-size: 100% 100%;

    .input-box {
        display: inline-block;
        margin-top: 8%;
        width: 40%;
        padding: 3%;

    }

    .result-box {
        float: right;
        display: inline-block;
        margin-top: 8%;
        width: 40%;
        padding-top: 3%;
        padding-right: 6%;
        min-height: 400px;

        .img-result {
            text-align: center;
            width: 100%;
            height: 265px;
            background: url("/src/assets/img/background.jpg");
            background-size: 100% 100%;
        }
    }
}
</style>