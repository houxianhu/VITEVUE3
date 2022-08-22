<template>
  <div>
    <div :class="$style.red">这是config</div>
    <div :class="$style.green">组件props传值和emit事件传值</div>
    <p class="text">hello</p>
    <!-- // 组件props传值和emit事件传值 -->
    <headerSearch :msg="'Hello Message!'" @on-search="search"></headerSearch>

    <a-button type="danger" @click="showConfirm">点击</a-button>
  </div>
</template>

<script setup>
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { createVNode } from 'vue';
import headerSearch from "@/components/headerSearch.vue";
import { message, Modal  } from "ant-design-vue";
const theme = "#ff0000";

const search = (data) => {
  console.log(data.name);
  message.success('提取成功!')
};

const showConfirm = () => {
  Modal.confirm({
    title: 'Do you want to delete these items?',
    icon: createVNode(ExclamationCircleOutlined),
    content: 'When clicked the OK button, this dialog will be closed after 1 second',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'));
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onCancel() {},
  });
}
</script>

<style lang="less" scoped module>
@import url("@/styles/var.less");
.red {
  color: red;
}
p {
  color: v-bind("theme");
}
</style>
