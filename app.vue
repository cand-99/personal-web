<script setup lang="ts">
import { ITheme, ThemeManager } from "./utils/theme";
ThemeManager();
const theme = useState<ITheme>("theme.current");

const { setMeta } = useCustomMeta()
setMeta("Welcome to My Website 🤩")
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
