<script setup lang='ts' name=''>
const bannerRef = ref()
const activeIndex = ref(1)

function changBanner(direction: 'left' | 'right') {
  if (direction === 'left') {
    if (activeIndex.value === 1) {
      activeIndex.value = 3
    }
    else {
      activeIndex.value = activeIndex.value - 1
    }
  }
  else if (direction === 'right') {
    if (activeIndex.value === 3) {
      activeIndex.value = 1
    }
    else {
      activeIndex.value = activeIndex.value + 1
    }
  }
}
function listenToScroll() {
  document.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    bannerRef.value.style.transform = `translateY(${scrollTop * 0.3}px)`;
  });
}

onMounted(() => {
  listenToScroll()
})
</script>

<template>
  <div class="w-full pt-30 bg-[#f6f6f6]">
    <div class="relative w-full h-806 overflow-hidden">
      <div ref="bannerRef" class="banner" :style="{ backgroundImage: `url(/img/home/img${activeIndex}.jpg)` }"></div>
      <div class="absolute top-0 left-0 justify-center w-full h-full flex flex-col items-center">
        <p class="text-[13px] select-none text-white">EXPLORE AND DISCOVER</p>
        <BaseImage class="w-[36%] select-none" src="/logo/logo-white.png" />
      </div>
      <div class="absolute top-[50%] cursor-pointer translate-y-[-50%] right-0 flex items-center justify-center w-30 h-100 bg-[#00000080]" @click="changBanner('left')">
        <BaseIcon name="arrow" />
      </div>
      <div class="absolute top-[50%] cursor-pointer translate-y-[-50%] left-0 rotate-180 flex items-center justify-center w-30 h-100 bg-[#00000080]" @click="changBanner('right')">
        <BaseIcon name="arrow" />
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.banner {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  background-color: transparent;
  background-attachment: fixed;
  position: absolute;
  transform: translateY(0);
  transition: transform 0.1s linear;
}
</style>
