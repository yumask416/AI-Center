<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { useUserStore } from '../../store/index'
import { useRouter } from 'vue-router'
import { login } from '../../api/api.js'

const userStore = useUserStore()
const router = useRouter()

let flag = ref(false)
let msg = ref('')
let formData = reactive({
  username: '',
  password: '',
})

const checkPass = value => {
  /* 表单校验 */
  let reg =
    /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,}$/
  if (!value) {
    msg.value = '请输入密码'
    flag.value = true
  } else if (!reg.test(value)) {
    msg.value = '请输入:大小字母、数字、特殊符号，四选三，八位以上 的密码'
    flag.value = true
  } else {
    flag.value = false
    msg.value = '格式正确'
  }
}

const submitHandler = async () => {
  try {
    let { data: res } = await login(formData)
    if (res.code === 2200) {
      // 登录成功
      ElMessage({
        message: '登录成功！',
        showClose: true,
        grouping: true,
        type: 'success',
      })
      // store存储
      userStore.userInfo.userId = res.data.id
      userStore.userInfo.userName = res.data.user_name
      userStore.userInfo.nickName = res.data.nickname
      // 本地化存储
      localStorage.setItem('token', res.data.token)
      // 导航到首页
      router.push('/')
    } else if (res.code === 4405) {
      // 账号或密码错误
      ElMessage({
        message: '账号或密码错误！',
        showClose: true,
        grouping: true,
        type: 'error',
      })
    }
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <div class="main">
    <div class="login-box">
      <h2>AI+安防智能系统</h2>
      <div class="user-box">
        <input
          id="username"
          type="text"
          v-model.trim="formData.username"
          name=""
          required=""
          autocomplete="off"
        />
        <label>用户名</label>
      </div>
      <div class="user-box">
        <input
          id="password"
          type="password"
          v-model.trim="formData.password"
          @change="checkPass(formData.password)"
          name=""
          required=""
          autocomplete="off"
        />
        <label>密码</label>
        <div class="msg" v-if="flag" style="color: red; font-size: 0.8vw">{{ msg }}</div>
      </div>
      <button class="login" type="submit" @click="submitHandler">
        <span></span>
        <span></span>
        登录
        <span></span>
        <span></span>
      </button>
      <!-- <div class="register" @click="Register"> >立即注册</div> -->
    </div>
    <div class="bounced-div"></div>
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.main {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  /* cursor: url(/static/images) 0 0, auto !important; */
  /* TODO */
  background: url('images/background.png') no-repeat;
  background-size: cover;
  background-position: top; /* TODO PS裁剪图片 */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.login-box {
  position: absolute;
  top: 47%;
  left: 70%;
  width: 30vw;
  height: 22vw;
  padding: 4%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0;
  padding: 0;
  color: #fff;
  position: relative;
  top: -10%;
  text-align: center;
  font-size: 1.5rem;
  text-shadow: 0 0 0.2rem #00d8ff;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
  cursor: url(images/cursor_3.png) 0 0, auto !important;
}

.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  opacity: 0;
  color: #00d8ff;
  font-size: 12px;
}

.login-box button {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 40px;
  background: none;
  border: none;
  color: #00d8ff;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
  cursor: url(images/cursor_2.png) 0 0, auto !important;
  outline: none;
}

.login-box button:hover {
  background: #00a1bf;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #00a1bf, 0 0 25px #00a1bf, 0 0 50px #00a1bf, 0 0 100px #00a1bf;
}

.login-box button span {
  position: absolute;
  display: block;
}

.login-box button span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00d8ff);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }

  50%,
  100% {
    left: 100%;
  }
}

.login-box button span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #00d8ff);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }

  50%,
  100% {
    top: 100%;
  }
}

.login-box button span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #00d8ff);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }

  50%,
  100% {
    right: 100%;
  }
}

.login-box button span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #00d8ff);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }

  50%,
  100% {
    bottom: 100%;
  }
}

.bounced-div {
  width: 15%;
  height: 30%;
  position: absolute;
  right: 2%;
  bottom: 2%;
  z-index: 9;
}

.bounced-div div {
  width: 100%;
  height: 20%;
  position: absolute;
  bottom: 0;
  text-align: center;
  display: table;
  font-size: 0.9rem;
}

.bounced-success {
  background: url('images/success.png') no-repeat;
  background-size: 100% 100%;
  color: #00d8ff;
}

.bounced-warning {
  background: url('images/warning.png') no-repeat;
  background-size: 100% 100%;
  color: #d69935;
}

.bounced-error {
  background: url('images/error.png') no-repeat;
  background-size: 100% 100%;
  color: #ff301d;
}

.bounced-success span,
.bounced-warning span,
.bounced-error span {
  display: table-cell;
  vertical-align: middle;
}

.register {
  position: relative;
  float: right;
  color: #ff301d;
}
</style>
