<script lang="ts" setup>
import { ArrowRightIcon } from "@heroicons/vue/solid";

interface ButtonProps{
  title: string;
  to: string;
  icon: string;
}

const props = defineProps<ButtonProps>()

</script>

<template>
  <NuxtLink
      :to="to"
      class="inline-flex items-center bg-gray-900 dark:bg-black py-3 px-6 text-white rounded-xl text-lg md:text-xl font-medium"
    >
      {{ title }} <nuxt-icon :name="icon" class="ml-3" />
    </NuxtLink>
</template>

<style scoped>
.nuxt-icon{
  @apply mb-0;
}
</style>
