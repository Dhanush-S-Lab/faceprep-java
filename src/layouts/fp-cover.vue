<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '@slidev/client'

const props = defineProps({
  background: {
    default: '',
  },
})

const style = computed(() => handleBackground(props.background, true))
</script>

<template>
  <div class="slidev-layout cover fp-layout-cover" :style="style">
    <div class="my-auto w-full">
      <slot />
    </div>
    <GlobalBottom />
  </div>
</template>
