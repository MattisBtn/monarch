<template>
    <!-- Overlay Full-Screen avec Glassmorphism Luxury -->
    <Teleport to="body">
        <Transition name="mobile-menu">
            <div v-if="isOpen"
                class="fixed inset-0 z-[100] flex flex-col bg-gradient-to-br from-black/75 via-gray-900/70 to-black/75 backdrop-blur-lg"
                role="dialog" aria-modal="true" aria-labelledby="mobile-menu-title">
                <!-- Background Pattern Architectural -->
                <div class="absolute inset-0 opacity-5">
                    <div
                        class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent">
                    </div>
                    <div
                        class="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent">
                    </div>
                    <div
                        class="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent">
                    </div>
                    <div
                        class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent">
                    </div>
                </div>

                <!-- Content Container -->
                <div class="relative flex-1 flex flex-col justify-center px-6 sm:px-8">
                    <!-- Main Navigation -->
                    <nav class="space-y-2" role="navigation">
                        <!-- Menu Title avec Playfair -->
                        <div class="mb-12 text-center menu-item" style="--delay: 0">
                            <h2 id="mobile-menu-title"
                                class="font-playfair font-light text-3xl sm:text-4xl text-white mb-2 tracking-wide">
                                Menu
                            </h2>
                            <div
                                class="w-16 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto">
                            </div>
                        </div>

                        <!-- Navigation Links -->
                        <div class="space-y-1">
                            <MobileMenuItem v-for="(item, index) in navigationItems" :key="item.label"
                                :label="item.label" :href="item.href" :style="{ '--delay': index + 1 }"
                                @click="handleNavigation(item)" class="menu-item" />
                        </div>

                        <!-- Secondary Actions -->
                        <div class="mt-16 space-y-4">
                            <!-- Language Selector Luxury -->
                            <div class="menu-item" style="--delay: 6">
                                <div class="group relative">
                                    <!-- Frame architectural -->
                                    <div
                                        class="absolute inset-0 border border-white/15 transition-all duration-700 group-hover:border-white/35">
                                        <!-- Expanding corners -->
                                        <div
                                            class="absolute -top-px -left-px w-4 h-4 border-l-2 border-t-2 border-white/30 transition-all duration-500 group-hover:border-white/60 group-hover:w-6 group-hover:h-6">
                                        </div>
                                        <div
                                            class="absolute -top-px -right-px w-4 h-4 border-r-2 border-t-2 border-white/30 transition-all duration-500 group-hover:border-white/60 group-hover:w-6 group-hover:h-6">
                                        </div>
                                        <div
                                            class="absolute -bottom-px -left-px w-4 h-4 border-l-2 border-b-2 border-white/30 transition-all duration-500 group-hover:border-white/60 group-hover:w-6 group-hover:h-6">
                                        </div>
                                        <div
                                            class="absolute -bottom-px -right-px w-4 h-4 border-r-2 border-b-2 border-white/30 transition-all duration-500 group-hover:border-white/60 group-hover:w-6 group-hover:h-6">
                                        </div>
                                    </div>

                                    <!-- Content -->
                                    <div class="relative p-6 text-center">
                                        <h3 class="font-inter font-medium text-white/90 text-lg mb-4">{{
                                            $t('menu.language')
                                            }}</h3>
                                        <div class="flex justify-center gap-3">
                                            <button v-for="lang in languages" :key="lang.code"
                                                @click="changeLanguage(lang.code)"
                                                class="px-4 py-2 rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-all duration-300 font-inter font-medium text-sm min-w-[60px]"
                                                :class="{ 'bg-white/30 border-white/50': lang.code === locale }">
                                                {{ lang.code.toUpperCase() }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Contact CTA -->
                            <div class="menu-item" style="--delay: 7">
                                <button @click="handleContact"
                                    class="group relative w-full py-4 px-6 bg-white/3 hover:bg-white/8 border border-white/15 hover:border-white/35 rounded-xl transition-all duration-700 ease-out hover:scale-102">
                                    <div class="font-inter font-medium text-white text-lg">{{ $t('menu.contact') }}
                                    </div>
                                    <div class="font-inter text-white/70 text-sm mt-1">{{ $t('menu.contactSubtitle') }}
                                    </div>

                                    <!-- Shine effect -->
                                    <div
                                        class="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-white/60 to-transparent transition-all duration-1000 group-hover:w-full">
                                    </div>
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>


            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
interface NavigationItem {
    label: string
    href: string
    action?: string
}

interface Props {
    isOpen: boolean
}

interface Emits {
    (e: 'close'): void
    (e: 'navigate', item: NavigationItem): void
}

defineProps<Props>()
defineEmits<Emits>()

const { locale, locales, setLocale } = useI18n()

// Navigation items - à personnaliser selon vos besoins
const navigationItems: NavigationItem[] = [
    { label: 'Accueil', href: '/' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Services', href: '/services' },
    { label: 'À Propos', href: '/about' },
]

const languages = computed(() => locales.value.map(l => ({
    code: l.code,
    name: l.name
})))

const handleNavigation = (item: NavigationItem) => {
    // TODO: Implémenter la navigation
    console.log('Navigation vers:', item)
    // $emit('navigate', item)
    // $emit('close')
}

const changeLanguage = async (langCode: string) => {
    await setLocale(langCode as 'fr' | 'en' | 'es')
    console.log('Langue changée:', langCode)
}

const handleContact = () => {
    // TODO: Implémenter l'action de contact
    console.log('Contact action')
    // $emit('close')
}
</script>

<style scoped>
/* Animation d'entrée du menu - Volet qui se déploie */
.mobile-menu-enter-active {
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.mobile-menu-leave-active {
    transition: all 0.6s cubic-bezier(0.55, 0.06, 0.68, 0.19);
}

.mobile-menu-enter-from {
    opacity: 0;
    backdrop-filter: blur(0px);
    transform: translateY(-100%);
}

.mobile-menu-leave-to {
    opacity: 0;
    backdrop-filter: blur(0px);
    transform: translateY(-100%);
}

/* Animation staggered des éléments */
.menu-item {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
    animation: slideInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    animation-delay: calc(var(--delay) * 0.1s);
}

@keyframes slideInUp {
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

/* Animation pour mobile-menu-enter */
.mobile-menu-enter-active .menu-item {
    animation-delay: calc(0.3s + var(--delay) * 0.1s);
}

/* Respect des préférences d'animation */
@media (prefers-reduced-motion: reduce) {

    .mobile-menu-enter-active,
    .mobile-menu-leave-active {
        transition-duration: 0.2s;
    }

    .menu-item {
        animation: none;
        opacity: 1;
        transform: none;
    }
}
</style>