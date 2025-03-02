<script setup lang='ts' name=''>
interface Props {
  data: {
    name: string
    price: string
    stock: number
    cate: string
    pic: string
  }
}
const props = defineProps<Props>()

const _imgSrc = computed(() => `/${props.data.cate}/${props.data.pic}`)
</script>

<template>
  <div class="flex flex-col items-center bg-white">
    <div class="relative">
      <BaseImage :src="_imgSrc" />
      <!-- <BaseButton class="absolute">
        add to cart
      </BaseButton> -->
    </div>
    <div class="h-full pt-8">
      <h6
        class="font-bold uppercase px-15 tracking-[1px] mt-7 text-center duration-[0.3s] ease-in-out leading-[1.5] text-[13px] text-prime">
        {{ data.name }}
      </h6>
      <div class="text-center h-26 mb-16">
        <AppPrice :price="data.price" />
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped></style>
