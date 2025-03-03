<script setup lang='ts' name=''>
interface Props {
  size?: 'md' | 'sm'
}
withDefaults(defineProps<Props>(), {
  size: 'md',
})
</script>

<template>
  <button :class="[size]">
    <slot />
  </button>
</template>

<style lang='scss' scoped>
button {
  font-size: 13px;
  border: 2px solid var(--je-prime-color);
  color: var(--je-prime-color);
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0 17px;
  font-weight: 700;
  border-radius: 4px;
  transition: all .1s linear;

  &:hover {
    background-color: var(--je-secondary-color);
    border-color: var(--je-secondary-color);
    color: #fff;
  }
}

.md {
  height: 42px;
}

.sm {
  height: 38px;
}
</style>
