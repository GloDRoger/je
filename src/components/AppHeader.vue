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
function toggleChild(i: number) {
  menuList.value[i].childrenIsOpen = !menuList.value[i].childrenIsOpen
}
const enter = (el) => {
  el.style.height = "0px";
  nextTick(() => {
    el.style.height = el.scrollHeight + "px";
  });
};

const leave = (el) => {
  el.style.height = el.scrollHeight + "px";
  nextTick(() => {
    el.style.height = "0px";
  });
};
</script>

<template>
  <div class="w-full px-15">
    <div class="relative w-full h-100">
      <div
        class="absolute cursor-pointer flex left-0 top-[50%] translate-y-[-50%] items-center py-10 pr-10 justify-center text-[12px]"
        @click="toggleMenu">
        <BaseIcon name="bars" />
      </div>
      <div class="h-100 flex items-center justify-center w-full">
        <BaseImage class="h-80" src="/logo/logo-mid.png" />
      </div>
    </div>
    <!-- menu -->
    <Transition name="scale" >
      <div v-show="showMenu"
        class="w-full overflow-hidden flex flex-col">
        <div v-for="item, i in menuList" :key="item.name" class="flex flex-col">
          <div
            class="flex items-center duration-200 ease hover:text-secondary cursor-pointer justify-between border-solid border-b-[1px] border-[#eaeaea] text-[13px] text-je-text leading-[26px] py-10">
            <span class="capitalize">{{ item.name }}</span>
            <div @click.stop="toggleChild(i)" v-if="item.children.length > 0" class="pl-10 py-10 flex items-center text-[9px]"
              :class="[item.childrenIsOpen ? 'rotate-90' : '']">
              <BaseIcon name="arrow" />
            </div>
          </div>
          <!-- children -->
          <Transition name="expand" @enter="enter" @leave="leave">
            <div v-show="item.childrenIsOpen" class="overflow-hidden">
              <div v-for="c in item.children" :key="c.name"
                class="ml-20 cursor-pointer border-solid duration-200 ease hover:text-secondary border-b-[1px] border-[#eaeaea] text-[13px] text-je-text leading-[26px] py-10">
                <span class="capitalize">{{ c.name }}</span>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.scale-enter-active {
  animation: scale-in 0.3s;
}
.scale-leave-active {
  animation: scale-in 0.3s reverse;
}
@keyframes scale-in {
  0% {
    height: 0;
  }
  100% {
    height: 241px;
  }
}
.expand-enter-active, .expand-leave-active{
  transition: height 0.3s ease-in-out;
}
.expand-enter-from,
.expand-leave-to {
  height: 0;
}
</style>
