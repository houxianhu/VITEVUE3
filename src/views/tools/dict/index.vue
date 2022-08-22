<template>
  <div class="app-container">
    <div id="intro_mine"></div>
    <div id="intro_user"></div>
    <div id="intro_title"></div>
    <div id="intro_save"></div>
    <vue3-intro-step v-model:show="show" :config="config" @close:show="closeIntro" />
  </div>
</template>

<script setup>
import Vue3IntroStep from "vue3-intro-step";

let show = ref(false);

let config = {
  backgroundOpacity: 0.8,
  titleStyle: {
    textAlign: "center",
    fontSize: "19px",
  },
  contentStyle: {
    textAlign: "center",
    fontSize: "15px",
  },
  tips: [
    {
      el: "#intro_title",
      tipPosition: "bottom",
      title: "欢迎使用问答管理系统",
      content: "点击左侧菜单进行操作",
      onNext: () => {
        return new Promise((resolve, reject) => {
          // 延迟2秒 再执行下一步
          setTimeout(() => {
            resolve(true);
          }, 2000);
        });
      },
    },
    {
      el: "#intro_mine",
      tipPosition: "bottom",
      // title: '点击进入个人中心',
      content:
        "查看个人信息，修改密码查看个人信息，修改密码查看个人信息，修改密码查看个人信息，修改密码查看个人信息，修改密码查看个人信息，修改密码查看个人信息，修改密码查看个人信息，修改密码",
      // 点击上一步时，触发的事件
      onPrev: () => {
        return new Promise((resolve) => {
          resolve(true);
        });
      },
      onNext: () => {
        return new Promise((resolve) => {
          // 当页面很长，下一步的内容不在此可视区域内时，可进行下面操作
          document.body.style.overflow = "auto";
          // 让body滚动到顶部
          window.scrollTo(0, 0);
          resolve(true);
        });
      },
    },
    {
      el: "#intro_user",
      tipPosition: "bottom",
      title: "点击进入用户管理",
      content: "查看用户信息，添加用户",
      onNext: () => {
        return Promise.resolve(true);
      },
    },
    {
      el: "#intro_save",
      tipPosition: "bottom",
      title: "点击进入用户管理",
      content: "查看用户信息，添加用户",
    },
  ],
};

const closeIntro = () => {
  console.log("关闭");
};
</script>
