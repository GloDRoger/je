<script setup lang='ts' name=''>
interface Props {
  src?: string,
  loading?: 'eager' | 'lazy'
  alt?: string
}
const props = withDefaults(defineProps<Props>(), {
  loading: 'lazy',
})

const _src = computed(() => `/img${props.src}`)
</script>

<template>
  <img :loading="loading" :src="_src" :alt="alt">
</template>

<style lang='scss' scoped>
img {
  display: block;
  transition: opacity .3s ease-out;
  transform: translateZ(0);
}
</style>
