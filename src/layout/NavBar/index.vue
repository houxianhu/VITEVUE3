<template>
  <div class="nav-bar">
    <div class="title">antdegist管理系统</div>
    <div class="tool">
      <!-- <a-button type="default" shape="circle" @click="showSetting">
        <template #icon><setting-outlined /></template>
      </a-button> -->
      <a-dropdown :trigger="['click']">
        <a class="ant-dropdown-link" @click.prevent>
          <a-avatar :size="40" style="cursor: pointer">
            <template #icon><UserOutlined /></template>
          </a-avatar>
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item key="1">个人中心</a-menu-item>
            <a-menu-item key="2" @click="visible = true">页面设置</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>

    <a-drawer
      v-model:visible="visible"
      title="设置"
      @after-visible-change="afterVisibleChange"
      placement="right"
    >
      <p>
        明亮模式<a-switch :checked="theme === 'dark'" @change="changeTheme" />黑暗模式
      </p>
    </a-drawer>
  </div>
</template>

<script setup>
import { SettingOutlined } from "@ant-design/icons-vue";
import { UserOutlined } from "@ant-design/icons-vue";
const visible = ref(false);
const theme = ref("dark");
const store = useStore();
const showSetting = () => {
  visible.value = true;
};
const afterVisibleChange = (bool) => {
  console.log("visible", bool);
};
const changeTheme = (checked) => {
  if (checked) {
    theme.value = "dark";
    store.commit("setting/CHANGE_SETTING", { key: "theme", value: "dark" });
  } else {
    theme.value = "ligth";
    store.commit("setting/CHANGE_SETTING", { key: "theme", value: "ligth" });
  }
};
</script>

<style lang="less" scoped>
.nav-bar {
  width: 100%;
  height: 60px;
  background-color: #00ac75;
  color: #fff;
  display: flex;
  justify-content: space-between;

  .title {
    width: 300px;
    line-height: 60px;
    font-size: 20px;
    font-weight: bold;
    padding: 0 30px;
  }
  .tool {
    line-height: 60px;
    padding: 0 30px;

    :deep(.ant-avatar) {
      border: 2px solid #00ac7552;
    }
  }
}
</style>
