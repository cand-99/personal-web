<script setup lang="ts">
import { ITheme, ThemeManager } from "./utils/theme";
import { LanguageManager } from './utils/lang'
ThemeManager();
LanguageManager();
const theme = useState<ITheme>("theme.current");
const locale = useState<string>('locale.setting')
const { t } = useLang()

const { setMeta } = useCustomMeta();
setMeta(t('pages.index.title'));
</script>

<template>
  <Html :class="`${theme === 'dark' ? 'dark bg-dark' : 'bg-white'}`" :lang="locale">
    <div
      class="bg-white dark:bg-dark transition duration-300 text-gray-900 dark:text-gray-200 relative"
    >
      <NuxtLayout>
         <NuxtLoadingIndicator />
        <NuxtPage />
      </NuxtLayout>
      <BlobGroup />
    </div>
  </Html>
</template>
