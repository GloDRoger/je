<script setup lang='ts' name=''>
const productInfo = ref({
  name: '2019 Jarressa Estate South Australia Chardonnay',
  price: '19.90',
  stock: 100,
  cate: 'je',
  pic: 'Jarressa-Estate-Pink-Moscato-South-Australia-2019.png',
})
</script>

<template>
  <div>
    <AppProductCard class="w-300" :data="productInfo" />
  </div>
</template>

<style lang='scss' scoped></style>
