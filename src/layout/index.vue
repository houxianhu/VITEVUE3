<template>
  <div class="app-wrapper">
    <NavBar></NavBar>
    <div class="main-container">
      <SideBar></SideBar>
      <div class="app-main" id="app-main">
        <router-view v-slot="{ Component, route }">
          <transition name="slide-fade" mode="out-in">
            <keep-alive>
               <Component :is="Component" :key="route.path"></Component>
            </keep-alive>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from "./NavBar/index.vue";
import SideBar from "./SideBar/index.vue";
</script>

<style lang="less" scoped>
.app-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  .main-container {
    flex: 1;
    display: flex;
    overflow: hidden;
  }
  .app-main {
    flex: 1;
    height: 100%;
  }
  /* 可以为进入和离开动画设置不同的持续时间和动画函数 */
  .slide-fade-enter-active, .slide-fade-leave-active  {
    transition: all 0.5s;
  }

  .slide-fade-enter-from, .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
}
</style>
