<script setup lang="ts"></script>

<template>
  <div class="min-h-screen max-w-6xl mx-auto  px-4 md:px-6 md:pl-6 lg:pl-0 flex flex-col">
    <Header />
      <slot />
    <Footer />
  </div>
</template>

<style scoped></style>
