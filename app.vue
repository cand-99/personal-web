<script setup lang="ts">
import { ITheme, ThemeManager } from "./utils/theme";
ThemeManager();
const theme = useState<ITheme>("theme.current");
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Site Title` : "Site Title";
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "My amazing site." }],
});
</script>

<template>
  <Html :class="`${theme === 'dark' ? 'dark' : ''}`" lang="id">
    <div class="bg-white dark:bg-dark transition duration-300">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </Html>
</template>
