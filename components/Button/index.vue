<script lang="ts" setup>
interface IButtonProps {
  title: string;
  to?: string;
  icon?: string;
  href?: string;
}

const props = defineProps<IButtonProps>();
</script>

<template>
  <a
    v-if="href"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center bg-gray-900 dark:bg-black py-3 px-6 text-white rounded-xl text-lg md:text-xl font-medium"
    >{{ props.title }} <nuxt-icon v-if="icon" :name="icon" class="ml-3"
  /></a>

  <NuxtLink
    v-else
    :to="to"
    class="inline-flex items-center bg-gray-900 dark:bg-black py-3 px-6 text-white rounded-xl text-lg md:text-xl font-medium"
  >
    {{ title }} <nuxt-icon v-if="icon" :name="icon" class="ml-3" />
  </NuxtLink>
</template>

<style scoped>
.nuxt-icon {
  @apply mb-0;
}
</style>
