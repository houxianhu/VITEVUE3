<template>
  <div class="app-container">
    <div>ref、slot的使用</div>

    <div>
      <listCad :item="list[0]" ref="testRef"></listCad>
    </div>

    <a-button type="primary" @click="handle">操作子组件</a-button> <br />
    <a-button type="primary" @click="onAdd">count是：{{ count }}</a-button>
    <div class="list">
      <listCad
        v-for="item in list"
        :item="item"
        :key="item.id"
        @on-edit="onEdit"
        :ref="getListRefs"
      ></listCad>
    </div>
  </div>
</template>

<script setup>
import listCad from "@/components/list.vue";
import { nextTick } from "vue";
const testRef = ref(null);
let listDOM = [];
const getListRefs = (el) => {
  listDOM.push(el);
};

const count = ref(0);

const list = ref([
  {
    img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    avatar: "https://joeschmoe.io/api/v1/random",
    id: 0,
  },
]);

const onAdd = () => {
  count.value++;
  list.value.push({
    img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    avatar: "https://joeschmoe.io/api/v1/random",
    id: count.value,
  });
};

const onEdit = (data) => {
  console.log("收到了编辑信息：" + data);
};
const handle = () => {
  testRef.value.setting();
  console.log("子组件被操作了");
  console.log(testRef.value.num);
};

onBeforeMount(() => {
  console.log('beforeMount')
});
onMounted(() => {
  console.log('mounted')
})

onBeforeUpdate(() => {
  console.log("beforeUpdate")
})

onUpdated(() => {
  console.log("updated")
})

onBeforeUnmount(() => {
  console.log("beforeUnmount")
})

onUnmounted(() => {
  console.log("unmounted")
})
</script>

<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
}
</style>
