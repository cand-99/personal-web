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
    <ThemeSwitcher />
  </div>
</template>

<style scoped></style>
