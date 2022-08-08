<script lang="ts" setup>
import { Listbox, ListboxButton, ListboxLabel, ListboxOptions, ListboxOption} from '@headlessui/vue'

import { IThemeSettingOptions, availableThemes } from '~/utils/theme'

// micro compiler
const props = defineProps({
  type: {
    type: String,
    default: 'dropdown-right-top',
  },
})

// state
const themeSetting = useState<IThemeSettingOptions>('theme.setting')
const currentStyle = toRef(props, 'type')
</script>
 
<template>
  <div class="flex items-center">
    <Listbox
      v-if="currentStyle === 'dropdown-right-top'"
      v-model="themeSetting"
      as="div"
      class="relative flex items-center"
    >
     <ListboxLabel class="sr-only">
       Theme Switcher
      </ListboxLabel>
      <ListboxButton
        type="button"
        aria-label="Theme"
        title="Change Theme"
        class="transition-colors duration-300 text-sky-500"
      >
        <span class="flex justify-center items-center dark:hidden">
          <nuxt-icon name="sun" fill class="text-xl stroke-2" />
        </span>
        <span class="justify-center items-center hidden dark:flex">
          <nuxt-icon name="moon" fill clas class="text-xl stroke-2" />
        </span>
      </ListboxButton>
      <ListboxOptions
        class="p-1 absolute z-50 top-8 right-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300"
      >
        <ListboxOption
          v-for="theme in availableThemes"
          :key="theme.key"
          :value="theme.key"
          :class="{
            'py-2 px-2 flex items-center cursor-pointer': true,
            'text-sky-500 bg-gray-100 dark:bg-gray-600/30':
              themeSetting === theme.key,
            'hover:bg-gray-50 dark:hover:bg-gray-700/30':
              themeSetting !== theme.key,
          }"
        >
          <span class="text-lg stroke-2 mr-2 flex items-center">
            <nuxt-icon name="sun" fill v-if="theme.key === 'light'" />
            <nuxt-icon name="moon" fill v-else-if="theme.key === 'dark'" />
            <nuxt-icon name="desktop" fill  v-else-if="theme.key === 'system'" />
            <nuxt-icon name="clock" fill v-else-if="theme.key === 'realtime'" />
          </span>
          {{ theme.text }}
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
    <select
      v-if="currentStyle === 'select-box'"
      v-model="themeSetting"
      class="w-full px-2 pr-3 py-1 outline-none rounded border bg-transparent text-gray-700 dark:text-gray-300 border-gray-900/10 dark:border-gray-50/[0.2]"
    >
      <option
        v-for="theme in availableThemes"
        :key="theme.key"
        :value="theme.key"
      >
        {{ theme.text }}
      </option>
    </select>
  </div>
</template>
