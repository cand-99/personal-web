<script lang="ts" setup>
import { SunIcon, MoonIcon } from "@heroicons/vue/solid";
  const isDark = useDark();
  const toggleDark = useToggle(isDark);

const isLoading = ref(true)

  setTimeout(() => {
    isLoading.value = false
  }, 10);

</script>

<template>
  <div class="z-10 w-full flex justify-end items-center py-4 lg:py-8">
    <nav
      class="relative flex space-x-4 md:space-x-6 items-center text-base md:text-lg"
    >
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/project">Project</NuxtLink>
    </nav>
    <div
      class="flex items-center border-l border-gray-300 dark:border-gray-800 ml-6 pl-6 transition duration-200"
    >
      <label class="sr-only"> Theme</label>
      <button class="" aria-label="Toggle Dark mode" @click="toggleDark()">
        <transition name="fade" mode="out-in">
          <!-- <nuxt-icon v-if="isDark" name="moon" />
          <nuxt-icon v-else name="sun" /> -->
          <div v-if="!isLoading">
            <SunIcon class="h-4 w-4" v-if="!isDark" />
            <MoonIcon class="h-4 w-4" v-else />
          </div>
        </transition>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
