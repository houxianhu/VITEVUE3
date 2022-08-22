<template>
<div>
  <template v-if="!item.children||item.children.length == 1">
    <router-link :to="item.meta.toPath">
      <a-menu-item :key="item.redirect || item.path">
        <template #icon>
          <AppstoreOutlined />
        </template>
        <span>{{item.meta.title}}</span>
      </a-menu-item>
    </router-link>
  </template>
  <template v-else>
    <a-sub-menu :key="item.path">
        <template #icon>
          <AppstoreOutlined />
        </template>
        <template #title>
        <span>{{item.meta.title}}</span>
        </template>
        <sidebarItem v-for="(child, key) in item.children" :key="item.path" :item="child"></sidebarItem>
    </a-sub-menu>
  </template>
</div>
</template>

<script setup>
import {AppstoreOutlined} from "@ant-design/icons-vue";
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="less" scoped></style>
