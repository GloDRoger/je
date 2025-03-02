<script setup lang='ts' name=''>
const productInfo = ref({
  name: 'Jarressa-Estate-Pink-Moscato-South-Australia-2019',
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
