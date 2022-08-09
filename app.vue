<script setup lang="ts">
import { ITheme, ThemeManager } from "./utils/theme";
import { LanguageManager } from './utils/lang'
ThemeManager();
LanguageManager();
const theme = useState<ITheme>("theme.current");
const locale = useState<string>('locale.setting')

const { setMeta } = useCustomMeta();
setMeta("Welcome to My Website 🤩");
</script>

<template>
  <Html :class="`${theme === 'dark' ? 'dark' : ''}`" :lang="locale">
    <div
      class="bg-white dark:bg-dark transition duration-300 text-gray-900 dark:text-gray-200 relative"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <BlobGroup />
    </div>
  </Html>
</template>
