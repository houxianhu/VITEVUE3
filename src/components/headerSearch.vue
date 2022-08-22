<template>
    <div>{{msg}}</div>
    <a-form :model="formState" layout="inline" :label-col="{style: {with: '150px'}}" @finish="search">
      <a-form-item label="活动名称" name="name" :rules="[{ required: true, message: '' }]">
        <a-input v-model:value="formState.name" />
      </a-form-item>
      <a-form-item label="活动区域" name="region">
        <a-select v-model:value="formState['region']" :allowClear="true" placeholder="请选择" style="width: 200px">
          <a-select-option value="shanghai">上海</a-select-option>
          <a-select-option value="beijing">北京</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item name="range" label="时间范围">
        <a-range-picker v-model:value="formState['range']" value-format="YYYY-MM-DD" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">搜索</a-button>
      </a-form-item>
    </a-form>
</template>

<script setup>

const props = defineProps({
  msg: {
    type: String,
    required: true,
    default: ''
  }
})

const formState = reactive({
  name: '',
  region: '',
  range: [],
});

const emit = defineEmits(['on-search'])
const search = (value) => {
  console.log(value);
  emit('on-search', formState)
}
</script>

<style lang="less" scoped>
    
</style>