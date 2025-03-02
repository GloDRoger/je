<script setup lang='ts' name=''>
interface Props {
  price: string
}
defineProps<Props>()
</script>

<template>
  <span class="app-price">
    <bdi>$<span>{{ price }}</span></bdi>
  </span>
</template>

<style lang='scss' scoped>
.app-price {
  text-align: center;
  font-size: 14px;
  color: #777;
  font-weight: 600;
}
</style>
