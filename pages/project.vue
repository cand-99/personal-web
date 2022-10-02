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

const projectCategory = ref("team-project");
const projects = ref([]);
const isLoading = ref(false);
const datas = useProjects();

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
    isLoading.value = true;
    const data = await $fetch("/api/projects");
    datas.value = data;
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
    computeSelectedProject();
  }
}

if (!datas.value) {
  getProject();
} else computeSelectedProject();
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
        :disabled="isLoading"
        :class="projectCategory === 'team-project' && 'active'"
        @click="projectCategory = 'team-project'"
        class="btn"
      >
        {{ $t("pages.project.team-project") }}
      </button>
      <button
        :disabled="isLoading"
        :class="projectCategory === 'personal-project' && 'active'"
        @click="projectCategory = 'personal-project'"
        class="btn"
      >
        {{ $t("pages.project.personal-project") }}
      </button>
    </div>
    <Skeleton v-if="isLoading" v-for="x in 1" />
    <div v-else class="space-y-8">
      <TransitionGroup name="list">
        <ProjectCard
          v-for="portofolio in projects"
          :key="portofolio.title"
          :description="portofolio.description"
          :title="portofolio.title"
          :link="portofolio.link"
          :thumbnail="portofolio.thumbnail"
          :technology="portofolio.technology"
          :project_start="portofolio.project_start"
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
