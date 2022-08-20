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
  technology: ITechnology [] ;
}
const props = defineProps<ICardProps>();
const { t } = useLang();
</script>

<template>
  <div
    class="max-w-5xl bg-white bg-opacity-50 dark:bg-opacity-0 dark:backdrop-blur-0 backdrop-blur-xl mx-auto p-4 md:p-7 rounded-3xl flex flex-col md:flex-row"
  >
    <figure
      class="max-w-xl max-h-80 h-full w-full md:w-8/12 rounded-2xl overflow-hidden my-auto"
    >
      <img
        class="object-contain w-full h-full"
        :src="`https://btimmzyxvpgqmxfswutt.supabase.co/storage/v1/object/public/portofolios/${props.thumbnail}`"
        alt="portofolio"
      />
    </figure>
    <div
      class="w-full md:w-4/12 mt-4 md:mt-0 ml-0 md:ml-8 flex flex-col justify-center"
    >
      <h1 class="text-2xl md:text-3xl font-bold mb-3">{{ props.title }}</h1>
      <p class="text-sm">
        {{ props.description }}
      </p>
      <div class="my-3">
        <h1 class="font-bold mb-1">Technology</h1>
        <div class="flex space-x-2 pb-1 text-2xl text-gray-600 dark:text-gray-300">
          <nuxt-icon v-for="tool in props.technology" :name="tool.icon" :title="tool.tools" />
        </div>
      </div>
      <Button
        :title="$t('pages.project.visit')"
        :href="link"
        icon="external-link"
        class="whitespace-nowrap w-min"
      />
    </div>
  </div>
</template>

<style scoped></style>
