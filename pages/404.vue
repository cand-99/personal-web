<script lang="ts" setup>
// composable
const { t } = useLang()

useHead(() => ({
  title: t("pages.404.title"),
}));
</script>

<template>
    <div class="container mx-auto flex justify-center items-center my-auto z-10">
    <div class="w-full lg:w-1/3 px-10 lg:px-0">
      <h1 class="text-center mt-6 mb-8 text-6xl md:text-8xl font-bold">
        404
      </h1>
      <h2 class="font-medium mb-3 text-2xl md:text-3xl text-center">
       {{ $t('pages.404.error') }}
      </h2>
      <p class="text-center font-light text-sm md:text-base">
         {{ $t('pages.404.description') }}
      </p>
      <div class="mb-4 mt-6">
        <div class="mb-3 flex justify-center">
          <Button :title="$t('pages.404.button')" to="/" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
