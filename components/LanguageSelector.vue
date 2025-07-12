<template>
    <div class="relative" ref="target">
        <button @click="toggleMenu"
            class="text-white font-medium hover:text-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-2 py-1"
            aria-label="Changer de langue" aria-haspopup="true" :aria-expanded="showMenu">
            {{ currentLanguage }}
            <Icon name="lucide:chevron-down" class="w-4 h-4 inline ml-1 transition-transform duration-200"
                :class="{ 'rotate-180': showMenu }" />
        </button>

        <Transition name="dropdown">
            <div v-if="showMenu"
                class="absolute top-full right-0 mt-2 bg-white/10 backdrop-blur-md rounded-lg overflow-hidden min-w-[80px] shadow-xl border border-white/20"
                role="menu">
                <button v-for="lang in languages" :key="lang.code" @click="changeLanguage(lang.code)"
                    class="block w-full text-left px-4 py-2 text-white hover:bg-white/20 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                    :class="{ 'bg-white/30': lang.code === locale }" role="menuitem">
                    {{ lang.name }}
                </button>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'
import { computed, ref } from 'vue'

const { locale, locales, setLocale } = useI18n()

const showMenu = ref(false)
const target = ref(null)

// Utiliser les locales configurées dans nuxt.config.ts
const languages = computed(() => locales.value.map(l => ({
    code: l.code,
    name: l.name
})))

const currentLanguage = computed(() => {
    const current = locales.value.find(l => l.code === locale.value)
    return current?.code.toUpperCase() || 'FR'
})

const toggleMenu = () => {
    showMenu.value = !showMenu.value
}

const changeLanguage = async (langCode) => {
    await setLocale(langCode)
    showMenu.value = false
}

// Utilisation de VueUse pour gérer le click outside
onClickOutside(target, () => {
    showMenu.value = false
})
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
    transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
    opacity: 0;
    transform: translateY(-8px) scale(0.95);
}

.dropdown-enter-to,
.dropdown-leave-from {
    opacity: 1;
    transform: translateY(0) scale(1);
}
</style>