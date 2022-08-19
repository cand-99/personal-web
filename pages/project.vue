<script lang="ts" setup>
definePageMeta({
  pageTransition: {
    name: "fade",
    mode: "out-in",
  },
});
const { t } = useLang();

useHead(() => ({
  title: t("pages.project.title"),
}));

const projectCategory = ref("project");
const projects = ref([]);
const loading = ref(false);
const datas = ref();

// single ref
watch(projectCategory, (newProjectCategory) => {
  computeSelectedProject();
});
const computeSelectedProject = async () => {
  const filteredProject = datas.value.filter(
    (name: any) => name.category === projectCategory.value
  );
  projects.value = filteredProject.map((name: any) => name);
};

async function getProject() {
  try {
    loading.value = true;
    const data = await $fetch("/api/projects");
    datas.value = data;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
    computeSelectedProject();
  }
}

getProject();
</script>

<template>
  <div class="z-10">
    <h1 class="font-bold text-5xl md:text-7xl text-center tracking-tight mb-8">
      {{ $t("pages.project.nav") }}
    </h1>

    <div
      class="border-b border-slate-200 space-x-6 flex whitespace-nowrap dark:border-slate-200/5 justify-center mb-8"
    >
      <button
        :class="projectCategory === 'project' && 'active'"
        @click="projectCategory = 'project'"
        class="btn"
      >
        Project
      </button>
      <button
        :class="projectCategory === 'fun-project' && 'active'"
        @click="projectCategory = 'fun-project'"
        class="btn"
      >
        Fun Project
      </button>
    </div>
    <div v-if="loading">Loading</div>
    <div v-else class="space-y-8">
      <TransitionGroup name="list" mode="out-in">
        <ProjectCard
          v-for="portofolio in projects"
          :key="portofolio.title"
          :description="portofolio.description"
          :title="portofolio.title"
          :link="portofolio.link"
          :thumbnail="portofolio.thumbnail"
          :tools="portofolio.tools"
        />
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped>
.active {
  @apply border-sky-500 border-b-2 !text-sky-500;
}
.btn {
  @apply flex text-sm leading-6 font-semibold pt-3 pb-2.5 -mb-px text-slate-900 dark:text-slate-200;
}
.list-move, /* apply transition to moving elements */
.list-enter-active {
  transition: all 0.6s ease-in-out;
  opacity: 1;
}
.list-leave-active {
  opacity: 0;
  position: absolute;
}

.list-enter-from {
  /* transform: translateY(50%); */
  opacity: 0;
}
.list-leave-to {
  opacity: 0;
}
</style>
