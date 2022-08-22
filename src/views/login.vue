<template>
  <div class="login-page">
    <div class="login-box">
      <h1 style="padding: 20px">ant-design-admin系统</h1>
      <a-form
        style="width: 90%"
        :model="formState"
        name="basic"
        autocomplete="off"
        :wrapper-col="{ offset: 1, span: 23 }"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label=""
          name="username"
          :rules="[{ required: true, message: '请输入用户名!' }]"
        >
          <a-input v-model:value="formState.username" size="large" placeholder="请输入用户名">
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          label=""
          name="password"
          :rules="[{ required: true, message: '请输入密码!' }]"
        >
          <a-input-password v-model:value="formState.password" size="large" placeholder="请输入密码">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item name="remember" :wrapper-col="{ offset: 1, span: 23 }">
          <a-checkbox v-model:checked="formState.remember">记住密码</a-checkbox>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 1, span: 23 }">
          <a-button type="primary" html-type="submit" size="large" block>登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script setup>
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import router from "../router";
const formState = ref({
  username: localStorage.getItem("username") || "",
  password: localStorage.getItem("password") || "",
  remember: true,
});
const isDisable = ref(true)

const onFinish = (values) => {
  if (formState.remember) {
    localStorage.setItem("username", formState.username);
    localStorage.setItem("password", formState.password);
  }
  router.replace("/");
};
watch(() => formState, (val, oldVal) => {
  const rawValue = val._rawValue
  if(rawValue.username&&rawValue.password) {
    isDisable.value = false
  } else {
    isDisable.value = true
  }
}, {deep: true})
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
</script>
<style scoped lang="less">
.login-page {
  height: 100%;
  background: url("../assets/loginbj.webp") center center  no-repeat;
  background-size: 100%;
  overflow: hidden;
  display: grid;
  place-items: center;
  .login-box {
    width: 500px;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 2px 2px 5px #f2f2f2, -2px -2px 5px  #f2f2f2;
    background-color: #f2f2f2;
    display: grid;
    place-items: center;
  }
}
</style>
