<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/solid";
definePageMeta({
  pageTransition: {
    name: "fade",
    mode: "out-in",
  },
});
</script>

<template>
  <div
    class="text-center max-w-4xl w-full mx-auto bg-white bg-opacity-40 dark:bg-opacity-0 dark:backdrop-blur-0 backdrop-blur-xl py-8 px-6 md:p-32 rounded-3xl"
  >
    <p
      class="inline-flex items-center text-center text-lg md:text-2xl text-gray-500 dark:text-gray-300 tracking-wide"
    >
      Hi
      <span class="wave text-5xl mx-3 max-2">👋🏻</span>
      I am
    </p>
    <h1 class="text-6xl md:text-8xl font-bold my-4 tracking-tight">Candra</h1>
    <p
      class="mt-6 text-lg md:text-xl text-center text-gray-500 dark:text-gray-300 tracking-wide"
    >
      Frontend Developer
    </p>
    <Button title="About" to="/about" />
  </div>
</template>

<style scoped></style>
