<script lang="ts" setup></script>

<template>
  <div class="max-w-4xl bg-white bg-opacity-50 dark:bg-opacity-0 dark:backdrop-blur-0 backdrop-blur-xl mx-auto p-7 rounded-3xl flex flex-col md:flex-row">
    <figure class="max-w-xl max-h-80 h-full w-full md:w-8/12 rounded-2xl overflow-hidden ">
      <img class="object-contain w-full h-full" src="/tes.png" alt="portofolio">
    </figure>
    <div class="w-full md:w-4/12 mt-4 md:mt-0 ml-0 md:ml-8 flex flex-col justify-center">
      <h1 class="text-2xl md:text-3xl font-bold mb-3"> Project Name</h1>
      <p class="mb-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto doloribus officia et dicta odit itaque quod suscipit ratione ipsam praesentium!
      </p>
      <Button title="Visit" to="/" icon="external-link" class="w-min" />
    </div>
  </div>
</template>

<style scoped></style>
