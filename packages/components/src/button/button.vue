<template>
  <button class="ea-button" :class="buttonStyle">测试按钮1</button>
</template>
<script setup lang="ts">
import './style/index.less'
import { computed } from 'vue'
defineOptions({
  name: 'ea-button'
})

type ButtonProps = {
  type?: string
}
const buttonProps = defineProps<ButtonProps>()
const buttonStyle = computed(() => {
  return {
    [`ea-button--${buttonProps.type}`]: buttonProps.type
  }
})
</script>
