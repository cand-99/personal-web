<script lang="ts" setup>
import Tes from "./tes.vue";
import ThemeSwitcher from "./ThemeSwitcher.vue";

</script>

<template>
  <div class="z-10 w-full flex justify-end items-center py-4 lg:py-6">
    <nav
      class="relative flex space-x-4 md:space-x-6 items-center text-sm md:text-base font-medium"
    >
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/project">Project</NuxtLink>
    </nav>
    <div class="flex items-center border-l border-gray-300 dark:border-gray-800 ml-6 pl-6 transition duration-200 space-x-4">
      <ThemeSwitcher />
      <a href="https://github.com/cand-99" target="_blank" rel="noopener noreferrer">
        <nuxt-icon name="github" class="text-xl text-gray-600 dark:text-gray-400"/>
      </a>
    </div>
  </div>
</template>

<style scoped></style>
