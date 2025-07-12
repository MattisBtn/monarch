<template>
    <header ref="headerRef" class="fixed top-0 left-0 right-0 z-[110] bg-transparent">
        <!-- Container avec padding mobile optimisé -->
        <nav class="flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4 sm:py-6 transition-all duration-500"
            :class="mobileMenuOpen ? 'bg-black/20 backdrop-blur-sm' : 'bg-transparent'">
            <!-- Bouton menu des lieux à gauche -->
            <div class="flex-shrink-0">
                <LocationButton />
            </div>

            <!-- Logo centré avec dimensions mobiles -->
            <div class="absolute left-1/2 transform -translate-x-1/2">
                <!-- Container architectural pour le logo -->
                <NuxtLink to="/"
                    class="group relative block p-1.5 sm:p-2 transition-all duration-700 ease-out hover:scale-102 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
                    :aria-label="$t('menu.home')">
                    <!-- Cadre architectural principal -->
                    <div
                        class="absolute inset-0 border border-white/20 transition-all duration-500 group-hover:border-white/40">
                        <!-- Coins décoratifs élégants -->
                        <div
                            class="absolute -top-px -left-px w-3 h-3 sm:w-4 sm:h-4 border-l-2 border-t-2 border-white/40 transition-all duration-300 group-hover:border-white/70 group-hover:w-4 group-hover:h-4 sm:group-hover:w-5 sm:group-hover:h-5">
                        </div>
                        <div
                            class="absolute -top-px -right-px w-3 h-3 sm:w-4 sm:h-4 border-r-2 border-t-2 border-white/40 transition-all duration-300 group-hover:border-white/70 group-hover:w-4 group-hover:h-4 sm:group-hover:w-5 sm:group-hover:h-5">
                        </div>
                        <div
                            class="absolute -bottom-px -left-px w-3 h-3 sm:w-4 sm:h-4 border-l-2 border-b-2 border-white/40 transition-all duration-300 group-hover:border-white/70 group-hover:w-4 group-hover:h-4 sm:group-hover:w-5 sm:group-hover:h-5">
                        </div>
                        <div
                            class="absolute -bottom-px -right-px w-3 h-3 sm:w-4 sm:h-4 border-r-2 border-b-2 border-white/40 transition-all duration-300 group-hover:border-white/70 group-hover:w-4 group-hover:h-4 sm:group-hover:w-5 sm:group-hover:h-5">
                        </div>
                    </div>

                    <!-- Lignes de lumière animées -->
                    <div
                        class="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transition-all duration-1000 group-hover:w-full">
                    </div>
                    <div
                        class="absolute bottom-0 right-0 h-px w-0 bg-gradient-to-l from-transparent via-white/50 to-transparent transition-all duration-1000 group-hover:w-full">
                    </div>

                    <!-- Logo avec effet de profondeur -->
                    <div class="relative z-10">
                        <NuxtImg src="/images/logo.png" alt="Monarch Conciergerie"
                            class="h-7 sm:h-8 lg:h-10 w-auto transition-all duration-500 ease-out group-hover:brightness-110 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                            loading="eager" />
                    </div>

                    <!-- Aura subtile -->
                    <div
                        class="absolute inset-0 -z-10 bg-white/5 blur-xl scale-75 opacity-0 transition-all duration-700 group-hover:opacity-50 group-hover:scale-100">
                    </div>
                </NuxtLink>
            </div>

            <!-- Language switcher et hamburger menu à droite -->
            <div class="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                <!-- Language switcher - géré avec ClientOnly pour éviter l'hydratation mismatch -->
                <ClientOnly>
                    <template #default>
                        <!-- Language switcher pour desktop -->
                        <div v-if="!$device.isMobile" class="block">
                            <LanguageSelector />
                        </div>

                        <!-- Version mobile compacte du language selector -->
                        <div v-if="$device.isMobile" class="block">
                            <button @click="toggleLanguageMenu"
                                class="group relative w-11 h-11 flex items-center justify-center rounded-lg transition-all duration-300 ease-out hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 active:scale-95"
                                aria-label="Changer de langue" :aria-expanded="showMobileLanguageMenu">
                                <!-- Icône langue mobile -->
                                <div class="relative">
                                    <span
                                        class="font-inter font-medium text-white/90 text-sm group-hover:text-white transition-colors duration-300">
                                        {{ currentLanguage }}
                                    </span>
                                    <!-- Indicateur dropdown -->
                                    <div
                                        class="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-white/60 rounded-full group-hover:bg-white transition-colors duration-300">
                                    </div>
                                </div>

                                <!-- Dropdown mobile -->
                                <Transition name="mobile-dropdown">
                                    <div v-if="showMobileLanguageMenu"
                                        class="absolute top-full right-0 mt-2 bg-black/80 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden min-w-[100px] shadow-2xl"
                                        role="menu">
                                        <button v-for="lang in languages" :key="lang.code"
                                            @click="changeMobileLanguage(lang.code)"
                                            class="block w-full text-left px-4 py-3 text-white/90 hover:bg-white/20 transition-colors duration-200"
                                            :class="{ 'bg-white/30 text-white': lang.code === locale }" role="menuitem">
                                            <span class="font-inter font-medium text-sm">{{ lang.name }}</span>
                                        </button>
                                    </div>
                                </Transition>
                            </button>
                        </div>
                    </template>
                    <template #fallback>
                        <!-- Fallback pour SSR -->
                        <div class="w-11 h-11"></div>
                    </template>
                </ClientOnly>

                <!-- Hamburger menu optimisé -->
                <button @click="toggleMobileMenu"
                    class="group relative w-11 h-11 flex flex-col justify-center items-center rounded-lg transition-all duration-500 ease-out hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 active:scale-95"
                    :aria-label="mobileMenuOpen ? $t('menu.close') : $t('menu.open')" :aria-expanded="mobileMenuOpen">
                    <!-- Container des lignes avec meilleur centrage -->
                    <div class="relative w-6 h-4 flex flex-col justify-center">
                        <!-- Ligne du haut -->
                        <span
                            class="absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:bg-white/80 top-0.5 left-0 origin-center"
                            :class="mobileMenuOpen ? 'rotate-45 !top-1/2 -translate-y-1/2' : ''"></span>

                        <!-- Ligne du bas -->
                        <span
                            class="absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:bg-white/80 bottom-0.5 left-0 origin-center"
                            :class="mobileMenuOpen ? '-rotate-45 !top-1/2 -translate-y-1/2' : ''"></span>
                    </div>
                </button>
            </div>
        </nav>

        <!-- Mobile Menu Overlay -->
        <MobileMenu :isOpen="mobileMenuOpen" @close="closeMobileMenu" />
    </header>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { computed, ref } from 'vue'

const { locale, locales, setLocale } = useI18n()

const mobileMenuOpen = ref(false)
const showMobileLanguageMenu = ref(false)
const headerRef = ref(null)

// Utiliser les locales configurées dans nuxt.config.ts
const languages = computed(() => locales.value.map(l => ({
    code: l.code,
    name: l.name
})))

const currentLanguage = computed(() => {
    const current = locales.value.find(l => l.code === locale.value)
    return current?.code.toUpperCase() || 'FR'
})

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
    // Fermer le menu langue si ouvert
    showMobileLanguageMenu.value = false
}

const closeMobileMenu = () => {
    mobileMenuOpen.value = false
}

const toggleLanguageMenu = () => {
    showMobileLanguageMenu.value = !showMobileLanguageMenu.value
    // Fermer le menu principal si ouvert
    mobileMenuOpen.value = false
}

const changeMobileLanguage = async (langCode: string) => {
    await setLocale(langCode as 'fr' | 'en' | 'es')
    showMobileLanguageMenu.value = false
}

// Utilisation de VueUse pour gérer le click outside du language menu mobile
onClickOutside(headerRef, () => {
    showMobileLanguageMenu.value = false
}, {
    ignore: ['.mobile-menu'] // Ignorer les clics sur le menu mobile
})
</script>

<style scoped>
.mobile-dropdown-enter-active,
.mobile-dropdown-leave-active {
    transition: all 0.3s ease-out;
}

.mobile-dropdown-enter-from,
.mobile-dropdown-leave-to {
    opacity: 0;
    transform: translateY(-8px) scale(0.95);
}

.mobile-dropdown-enter-to,
.mobile-dropdown-leave-from {
    opacity: 1;
    transform: translateY(0) scale(1);
}
</style>