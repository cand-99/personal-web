<script setup lang="ts">
// composable
const { t } = useLang()
//meta
definePageMeta({
  pageTransition: {
    name: "fade",
    mode: "out-in",
  },
});
useHead(() => ({
  title: t('pages.index.title'),
}))
</script>

<template>
<div class="z-10 my-auto">
  <div
    class="text-center max-w-4xl w-full mx-auto bg-white bg-opacity-50 dark:bg-opacity-0 dark:backdrop-blur-0 backdrop-blur-xl py-8 px-6 md:p-32 rounded-3xl"
  >
    <p
      class="inline-flex items-center text-center text-lg md:text-2xl text-gray-500 dark:text-gray-300 tracking-wide"
    >
      {{ $t('pages.index.hi') }}
      <span class="wave text-5xl mx-3 max-2">👋🏻</span>
      {{ $t('pages.index.im') }}
    </p>
    <h1 class="text-6xl md:text-8xl font-bold my-4 tracking-tight">Candra</h1>
    <p
      class="mt-6 text-lg md:text-xl text-center text-gray-500 dark:text-gray-300 tracking-wide"
    >
      Frontend Developer
    </p>
    <Button :title="t('pages.about.nav')" to="/about" icon="arrow-right" class="mt-12" />
  </div>
</div>
</template>

<style scoped></style>
