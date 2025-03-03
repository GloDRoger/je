<script setup lang="ts" name="BaseIcon">
interface Props {
  prefix?: string
  name: string
}

const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon',
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<template>
  <svg class="base-icon" aria-hidden="true">
    <use :href="symbolId" />
  </svg>
</template>

<style lang="scss" scoped>
.base-icon {
  width: 1em;
  height: 1em;
  display: inline-block;
  pointer-events: none;
  fill: currentColor;
  stroke: currentColor;
  color: var(--je-icon-color);
}
</style>
