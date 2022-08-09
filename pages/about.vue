<script lang="ts" setup>
import { TrashIcon } from "@heroicons/vue/solid";
definePageMeta({
  pageTransition: {
    name: "fade",
    mode: "out-in",
  },
});
</script>

<template>
  <section
    class="text-center max-w-4xl w-full mx-auto bg-white bg-opacity-40 dark:bg-opacity-0 dark:backdrop-blur-0 backdrop-blur-xl py-8 px-6 md:p-32 rounded-3xl"
  >
    <h1 class="font-bold text-5xl md:text-7xl text-center tracking-tight">
      Candra
    </h1>
    <h2
      class="mt-4 text-xl md:text-2xl text-center text-gray-500 dark:text-gray-300"
    >
      Self-taught Frontend Developer <br />
    </h2>
    <div>
      <div class="text-left mt-4">
        <h5 class="title">Basic</h5>
        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto asperiores ipsam quos, ipsum placeat voluptas praesentium maxime dignissimos eum impedit ea laborum tempore quidem? Non a laborum blanditiis molestiae inventore? Ab quas voluptatum, quidem hic perspiciatis necessitatibus ducimus provident!
        </p>
      </div>
      <div class="flex text-left mt-6 justify-between flex-col md:flex-row">
        <div class="w-full md:w-2/5">
          <h5 class="title">Languange/Framework</h5>
          <p class="flex flex-wrap text-gray-400 text-4xl gap-2">
            <nuxt-icon name="vue" />
            <nuxt-icon name="nuxt" />
            <nuxt-icon name="tailwindcss" />
            <nuxt-icon name="laravel" />
          </p>
        </div>
        <div class="w-full md:w-2/5 mt-6 md:mt-0">
          <h5 class="title">Contact</h5>
            <ul>
              <li>Tasikmalaya, Jawabarat</li>
              <li>99cand@gmail.com</li>
              <li class="flex gap-4 mt-2 text-4xl text-gray-400">
                <a href="https://github.com/cand-99" target="_blank" rel="noopener noreferrer">
                  <nuxt-icon name="github" />
                </a>
                <a href="https://www.instagram.com/candfpv" target="_blank" rel="noopener noreferrer">
                  <nuxt-icon name="instagram" />
                </a>
                
              </li>
            </ul>
        </div>
      </div>
    </div>
    <Button title="Project" to="/project" />
  </section>
</template>

<style scoped>
.title{
  @apply mb-3 text-gray-500 dark:text-gray-300 text-xl font-bold;
}
</style>
