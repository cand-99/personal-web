<script lang="ts" setup>
import ThemeSwitcher from "./ThemeSwitcher.vue";
const route = useRoute();

const navBlobClass = computed(() => {
  switch (route.name) {
    case "index":
      return "bg-yellow-400 dark:bg-yellow-500 -left-6";
    case "about":
      return "bg-purple-400 dark:bg-purple-500  left-12  md:left-22";
    case "project":
      return "bg-blue-400 dark:bg-blue-500  left-28  md:left-42";
  }
});
</script>

<template>
  <div class="z-10 w-full flex justify-end items-center py-4 lg:py-6 sticky">
    <nav
      class="relative z-10 flex space-x-4 md:space-x-6 items-center text-sm md:text-base font-medium"
    >
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/project">Project</NuxtLink>
      <Blob :class="navBlobClass" class="w-7 h-7 -top-1 blur-xl" />
    </nav>
    <div
      class="flex items-center border-l border-gray-300 dark:border-gray-800 ml-3 pl-3 md:ml-6 md:pl-6 transition duration-200 space-x-4"
    >
      <ThemeSwitcher />
      <a
        href="https://github.com/cand-99"
        target="_blank"
        rel="noopener noreferrer"
        title="Github"
      >
        <nuxt-icon
          name="github"
          class="text-xl text-gray-600 dark:text-gray-400"
        />
      </a>
    </div>
  </div>
</template>

<style scoped></style>
