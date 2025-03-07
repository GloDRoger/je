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
    <AppBanner />
    <div class="text-center pt-50 pb-57 section_inner">
      <p>
        Jarressa Estate (JE) is a proudly family owned brand established by the White family in South Australia and
        rated
        a 5 star winery by James Halliday. Run by Jarrad White, the 3rd generation of the White Family, every bottle of
        Jarressa Estate represents its heritage and persistence of traditional wine culture. White family members have
        dedicated their passion into this winery and they continue bringing newer meaning and inspiration to this family
        brand.
      </p>
    </div>
    <div class="text-center pt-50 pb-57 section_inner">
      <BaseImage src="/home/img4.jpg" />
    </div>
  </div>
</template>

<style lang='scss' scoped></style>
