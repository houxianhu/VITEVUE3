<template>
  <div
    class="side-bar"
    :style="{ backgroundColor: themeColor[theme] }"
  >
    <a-menu
      v-model:value="state.selectedKeys"
      mode="inline"
      :theme="theme"
      :open-keys="state.openKeys"
      @openChange="onOpenChange"
    >
      <sidebarItem
        v-for="(item, i) in routes"
        :key="item.path"
        :parentKey="item.path"
        :item="item"
      ></sidebarItem>
    </a-menu>
  </div>
</template>
<script setup>
import asyncRoutes from "@/router/asyncRoutes";
import sidebarItem from "./sidebarItem.vue";
const route = useRoute();
const state = ref({
  rootSubmenuKeys: [],
  openKeys: [route.path],
  selectedKeys: [route.path],
});
const themeColor = {
  dark: '#001529',
  light: "#fff"
}
const store = useStore();
const theme = computed(() => store.getters.setting.theme);
const routes = computed(() => asyncRoutes.filter((item) => item.children.length > 0));
routes.value.map(item => {
  state.value.rootSubmenuKeys.push(item.path)
});
// ref 与 reactive 区别: ref 一般给基本类型数据添加响应式， 也可以给引用类型添加响应式(返回{value: Proxy对象}), reactive 只能给引用类型添加响应式
const onOpenChange = (openKeys) => {
  const latestOpenKey = openKeys.find((key) => state.value.openKeys.indexOf(key) === -1);
  if (state.value.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    state.value.openKeys = openKeys;
  } else {
    state.value.openKeys = latestOpenKey ? [latestOpenKey] : [];
  }
};
</script>

<style lang="less" scoped>
.side-bar {
  height: 100%;
  width: 256px;
  overflow-y: auto;
  overflow-x: hidden;
  border-right: 1px solid #f2f2f2;
  :deep(.ant-menu-inline,
  .ant-menu-vertical,
  .ant-menu-vertical-left) {
    border-right: unset;
  }
}
::-webkit-scrollbar-track-piece {
  background: #001529 !important;
}

::-webkit-scrollbar {
  width: 10px !important;
  height: 10px !important;
}

::-webkit-scrollbar-thumb {
  background: #f2f2f2 !important;
  border-radius: 10px !important;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #f2f2f2 !important;
}
</style>
