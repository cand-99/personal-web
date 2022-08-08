<script setup lang="ts"></script>

<template>
  <div class="blur-blob animate-blob transition"></div>
</template>

<style scoped>
.blur-blob {
  transition-property: top, left, bottom, right;
  transition-duration: 1500ms;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  @apply absolute -z-10 w-8 h-8 -top-1 rounded-full opacity-70 dark:opacity-50 mix-blend-hard-light filter blur-xl;
}
</style>
