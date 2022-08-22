<template>
  <a-card hoverable style="width: 300px">
    <template #cover>
      <img
        alt="example"
        :src="item.img"
      />
    </template>
    <template #actions>
      <setting-outlined key="setting" @click="setting"/>
      <edit-outlined key="edit" @click="edit"/>
      <ellipsis-outlined key="ellipsis" />
    </template>
    <a-card-meta title="Card title" description="This is the description">
      <template #avatar>
        <a-avatar :src="item.avatar" />
      </template>
    </a-card-meta>
  </a-card>
</template>
<script setup>
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons-vue';

const props = defineProps({
    item: {
        type: Object,
        required: true,
    }
})
const emit = defineEmits(['on-edit'])
const num = ref(5)
const val = ref('这是传值')
const setting = () => {
    num.value++
}
const edit = () => {
    console.log("开始编辑了")
    emit('on-edit', num.value)
}


const sumbit = () => {
  
}

defineExpose({
    setting,
    num
})
</script>

<style lang="less" scoped>
    
</style>