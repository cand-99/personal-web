<script lang="ts" setup>
interface ITechnology {
  id: number;
  icon: string;
  tools: string;

}
interface ICardProps {
  title: string;
  description: string;
  link: string;
  thumbnail: string;
  project_start: string
  technology: ITechnology[];
}
const props = defineProps<ICardProps>();
const { t } = useLang();
</script>

<template>
  <div
    class="max-w-5xl bg-white bg-opacity-50 dark:bg-opacity-0 dark:backdrop-blur-0 backdrop-blur-xl mx-auto p-4 md:p-7 rounded-3xl flex flex-col md:flex-row">
    <figure class="max-w-xl max-h-80 h-full w-full md:w-8/12 rounded-2xl overflow-hidden my-auto">
      <div>
        <TwicImg :src="`/personal/${props.thumbnail}`" class="h-48 md:h-80" ratio="none" alt="project image" />
      </div>
    </figure>
    <div class="w-full md:w-4/12 mt-4 md:mt-0 ml-0 md:ml-8 flex flex-col justify-center">
      <h1 class="text-2xl md:text-3xl font-bold mb-3">{{ props.title }}</h1>
      <p class="text-sm">
        {{ props.description }}
      </p>
      <div class="my-3">
        <div class="flex justify-between">
          <h1 class="font-bold mb-1">Technology</h1>
          <h1 class="text-xs">{{ props.project_start }}</h1>
        </div>
        <div class="flex space-x-2 pb-1 text-2xl text-gray-600 dark:text-gray-300">
          <!-- Tooltip Component Start -->
          <div class="relative flex flex-col items-center group" v-for="tool in props.technology" :key="tool.tools">
            <nuxt-icon :name="tool.icon" />
            <div class="absolute bottom-2 flex flex-col items-center hidden mb-6 group-hover:flex">
              <span
                class="relative z-10 p-2 text-xs leading-none text-white dark:text-black whitespace-no-wrap bg-black dark:bg-white shadow-lg rounded-[4px] min-w-[100px]">{{
                  tool.tools
                }}</span>
              <div class="w-3 h-3 -mt-2 rotate-45 bg-black dark:bg-white"></div>
            </div>
          </div>
          <!-- Tooltip Component End  -->
        </div>
      </div>
      <Button :title="$t('pages.project.visit')" :href="link" icon="external-link" class="whitespace-nowrap w-min" />
    </div>
  </div>
</template>

<style scoped>

</style>
