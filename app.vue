<script setup lang="ts">
import { ITheme, ThemeManager } from "./utils/theme";
import { store } from "@/stores";
ThemeManager();
const theme = useState<ITheme>("theme.current");

const route = useRoute();

const blob1Class = computed(() => {
  if (store.loading) return "left-1/4 md:left-1/3 top-1/3 md:top-1/3";
  switch (route.name) {
    case "index":
      return "top-1/4 left-1";
    case "about":
      return "top-1/2 left-0";
    default:
      return "top-1/2 left-2/3";
  }
});
const blob2Class = computed(() => {
  if (store.loading) return "left-1/3 bottom-1/3 ";
  switch (route.name) {
    case "index":
      return "bottom-1/4 left-1/3";
    case "about":
      return "bottom-2/3 left-1/3";
    default:
      return "bottom-2/3 left-1";
  }
});
const blob3Class = computed(() => {
  if (store.loading) return "bottom-1/3 right-1/3";
  switch (route.name) {
    case "index":
      return "bottom-1/2 right-1";
    case "about":
      return "bottom-1/4 right-1/4";
    case "project":
      return "bottom-1/4 right-2/3";
    default:
      return "bottom-1/2 -right-1/2";
  }
});

const { setMeta } = useCustomMeta();
setMeta("Welcome to My Website 🤩");
</script>

<template>
  <Html :class="`${theme === 'dark' ? 'dark' : ''}`" lang="id">
    <div
      class="bg-white dark:bg-dark transition duration-300 text-gray-900 dark:text-gray-200 relative"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>

      <div
        class="z-0 fixed top-0 transform left-1/2 -translate-x-1/2 max-w-screen-lg w-full h-full"
      >
        <Blob
          :class="blob1Class"
          :style="{ animationDelay: `1s` }"
          class="bg-yellow-200 h-60 w-60 blur-3xl dark:bg-yellow-500 animate-blob"
        ></Blob>
        <Blob
          :style="{ animationDelay: `2.5s` }"
          :class="blob2Class"
          class="bg-purple-200 h-60 w-60 blur-3xl dark:bg-purple-700 animate-blob"
        ></Blob>
        <Blob
          :style="{ animationDelay: `3s` }"
          :class="blob3Class"
          class="bg-blue-300 h-60 w-60 blur-3xl dark:bg-blue-700 animate-blob"
        ></Blob>
      </div>
    </div>
  </Html>
</template>
