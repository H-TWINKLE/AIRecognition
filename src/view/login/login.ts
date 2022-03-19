import { defineComponent, reactive, ref } from 'vue'
import { ElMessage, FormInstance } from 'element-plus'
import { useRouter } from 'vue-router'
import LoginStatus from '../../base_service/service/LoginStatus'

export default defineComponent(
    {
        name: 'Login',
        setup() {
            const cacheUserInfo = {
                userName: 'limei',
                userPass: 'limei'
            }
            const router = useRouter()
            const form = reactive({
                userName: '',
                userPass: ''
            })
            const formRef = ref(null)
            const rules = {
                userName: [{
                    required: true,
                    message: '请输入用户名',
                    trigger: 'change'
                }],
                userPass: [{
                    required: true,
                    message: '请输入密码',
                    trigger: 'change'
                }]
            }
            const validatorLoginInfo = () => {
                return cacheUserInfo.userName === form.userName && cacheUserInfo.userPass === form.userPass
            }
            const submitForm = async (formEl: FormInstance | undefined) => {
                if (!formEl) return
                await formEl.validate((valid, fields) => {
                    if (valid) {
                        if (validatorLoginInfo()) {
                            LoginStatus.setlogInSuccess()
                            ElMessage.success('登录成功，正在跳转')
                            setTimeout(() => {
                                router.push('/')
                            }, 1000)
                        } else {
                            ElMessage.error('账号或者密码错误！')
                        }
                    }
                })
            }
            return {
                form, formRef, rules, submitForm
            }
        }
    }
)