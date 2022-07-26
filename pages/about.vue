<script lang="ts" setup>
definePageMeta({
  pageTransition: {
    name: "fade",
    mode: "out-in",
  },
});

const { t } = useLang();

useHead(() => ({
  title: t("pages.about.title"),
}));

const { data: abouts } = await useFetch("/api/about");

</script>

<template>
  <section
    class="text-center max-w-4xl w-full mx-auto bg-white bg-opacity-40 dark:bg-opacity-0 dark:backdrop-blur-0 backdrop-blur-xl py-8 px-1 md:p-32 rounded-3xl z-10"
  >
    <template v-for="about in abouts">
      <h1 class="font-bold text-5xl md:text-7xl text-center tracking-tight">
        {{ about.name }}
      </h1>
      <h2
        class="mt-4 text-xl md:text-2xl text-center text-gray-500 dark:text-gray-300"
      >
      {{ about.role }} <br />
      </h2>
      <div>
        <div class="text-left mt-4">
          <h1 class="title">{{ $t("pages.about.basic") }}</h1>
          <p class="text-gray-500 dark:text-gray-400 text-sm md:text-base">
            {{ about.basic }}
          </p>
        </div>
        <div class="flex text-left mt-6 justify-between flex-col md:flex-row">
          <div class="w-full md:w-2/5">
            <h1 class="title">{{ $t("pages.about.framework") }}</h1>
            <p
              class="flex flex-wrap text-gray-400 dark:text-gray-300 text-4xl gap-3"
            >
              <a
                v-for="tool in about.framework"
                :key="tool.icon"
                :href="tool.link"
                :aria-label="tool.icon"
                class="hover:text-gray-600 dark:hover:text-gray-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                <nuxt-icon :name="tool.icon" />
              </a>
            </p>
          </div>
          <div class="w-full md:w-2/5 mt-6 md:mt-0">
            <h1 class="title">{{ $t("pages.about.contact") }}</h1>
            <ul class="text-gray-500 dark:text-gray-400 text-sm md:text-base">
              <li>{{ about.address }}</li>
              <li>{{ about.email }}</li>
              <li
                class="flex gap-4 mt-4 text-2xl md:text-3xl text-gray-400 dark:text-gray-300"
              >
                <a
                  href="https://github.com/cand-99"
                  class="hover:text-gray-600 dark:hover:text-gray-100"
                  target="_blank"
                  aria-label="github"
                  rel="noopener noreferrer"
                >
                  <nuxt-icon name="github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/candra-herdiana-9064b024a/"
                  class="hover:text-gray-600 dark:hover:text-gray-100"
                  target="_blank"
                  aria-label="instagram"
                  rel="noopener noreferrer"
                >
                  <nuxt-icon name="linkedin" />
                </a>
                <a
                  href="https://www.instagram.com/candfpv"
                  class="hover:text-gray-600 dark:hover:text-gray-100"
                  target="_blank"
                  aria-label="instagram"
                  rel="noopener noreferrer"
                >
                  <nuxt-icon name="instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Button
        :title="t('pages.project.nav')"
        icon="arrow-right"
        to="/project"
        class="mt-12"
      />
    </template>
  </section>
</template>

<style scoped>
.title {
  @apply mb-3 text-gray-500 dark:text-gray-300 text-xl font-bold;
}
</style>
