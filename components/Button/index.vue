<script lang="ts" setup>
import { ArrowRightIcon } from "@heroicons/vue/solid";

interface ButtonProps{
  title: string
  to: string;
}

const props = defineProps<ButtonProps>()

</script>

<template>
  <NuxtLink
      :to="to"
      class="inline-flex items-center mt-12 bg-gray-900 dark:bg-black py-3 px-6 text-white rounded-xl text-xl font-medium"
    >
      {{ title }} <ArrowRightIcon class="h-5 w-5 ml-3" />
    </NuxtLink>
</template>

<style scoped></style>
