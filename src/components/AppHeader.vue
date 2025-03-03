<script setup lang="ts" name="">
const showMenu = ref(false)
const menuList = ref([
  { name: 'Home', route: '/', children: [], childrenIsOpen: false },
  {
    name: 'Shop Wines',
    route: '/shop',
    children: [
      { name: 'Jarressa Estate', route: '/product-category/jarressa-estate' },
      { name: 'Whites Road', route: '/product-category/whites-road' },
      { name: 'Harold', route: '/product-category/harold' },
      { name: 'Regal.Er', route: '/product-category/brands' },
    ],
    childrenIsOpen: false,
  },
  { name: 'News', route: '/news', children: [], childrenIsOpen: false },
  {
    name: 'Contact Us',
    route: '/contact-us',
    children: [],
    childrenIsOpen: false,
  },
  {
    name: 'Login',
    route: '/login',
    children: [
      { name: 'Cart', route: '/cart' },
      { name: 'Checkout', route: '/checkout' },
    ],
    childrenIsOpen: false,
  },
])

function toggleMenu() {
  showMenu.value = !showMenu.value
}
</script>

<template>
  <div class="w-full px-15">
    <div class="relative w-full h-100">
      <div
        class="absolute cursor-pointer flex left-0 top-[50%] translate-y-[-50%] items-center py-10 pr-10 justify-center text-[12px]"
        @click="toggleMenu"
      >
        <BaseIcon name="bars" />
      </div>
      <div class="h-100 flex items-center justify-center w-full">
        <BaseImage class="h-80" src="/logo/logo-mid.png" />
      </div>
    </div>
    <!-- menu -->
    <div v-if="showMenu" class="w-full flex flex-col">
      <div v-for="item in menuList" :key="item.name" class="flex flex-col">
        <div
          class="flex items-center duration-200 ease hover:text-secondary cursor-pointer justify-between border-solid border-b-[1px] border-[#eaeaea] text-[13px] text-je-text leading-[26px] py-10"
        >
          <span class="capitalize">{{ item.name }}</span>
          <div
            v-if="item.children.length > 0"
            class="flex items-center text-[9px]"
            :class="[item.childrenIsOpen ? 'rotate-90' : '']"
          >
            <BaseIcon name="arrow" />
          </div>
        </div>
        <!-- children -->
        <div
          v-for="c in item.children"
          :key="c.name"
          class="ml-20 cursor-pointer border-solid duration-200 ease hover:text-secondary border-b-[1px] border-[#eaeaea] text-[13px] text-je-text leading-[26px] py-10"
        >
          <span class="capitalize">{{ c.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
