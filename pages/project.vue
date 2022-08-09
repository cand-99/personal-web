<script lang="ts" setup>
definePageMeta({
  pageTransition: {
    name: "fade",
    mode: "out-in",
  },
})

const { t } = useLang()

useHead(() => ({
  title: t('pages.project.title'),
  // meta: [
  //   {
  //     name: 'description',
  //     content: t('pages.blank.description'),
  //   },
  // ],
}))
</script>

<template>
  <div>
    Page: Project
  </div>
</template>

<style scoped></style>
