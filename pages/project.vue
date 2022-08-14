<script lang="ts" setup>
import Card from "~~/components/Project/Card.vue";
definePageMeta({
  pageTransition: {
    name: "fade",
    mode: "out-in",
  },
});

const { t } = useLang();

useHead(() => ({
  title: t("pages.project.title"),
  // meta: [
  //   {
  //     name: 'description',
  //     content: t('pages.blank.description'),
  //   },
  // ],
}));
</script>

<template>
  <div class="">
    <h1 class="font-bold text-5xl md:text-7xl text-center tracking-tight mb-8">
      {{ $t("pages.project.nav") }}
    </h1>
    <div class="space-y-8 my-4">
      <ProjectCard
        desription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto doloribus officia et dicta odit itaque quod suscipit ratione ipsam praesentium!"
        title="Skck Online"
        link="https://skck-polresbeltim.com/"
        thumbnail="/tes.png"
      />
    </div>
  </div>
</template>

<style scoped></style>
