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
                            <!-- Accueil -->
                            <MobileMenuItem :label="$t('menu.home')" :style="{ '--delay': 1 }"
                                @click="handleNavigation({ label: $t('menu.home'), href: '/' })" class="menu-item" />

                            <!-- Destinations avec sous-menu -->
                            <div class="menu-item" :style="{ '--delay': 2 }">
                                <!-- Bouton principal Destinations -->
                                <button @click="toggleDestinationsMenu"
                                    class="group relative w-full text-left transition-all duration-700 ease-out hover:scale-102 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-xl">
                                    <!-- Background glassmorphism -->
                                    <div class="absolute inset-0 bg-white/3 hover:bg-white/8 rounded-xl transition-all duration-500"
                                        :class="showDestinationsMenu ? 'bg-white/8' : ''"></div>

                                    <!-- Architectural frame -->
                                    <div class="absolute inset-0 border border-white/15 rounded-xl transition-all duration-700 group-hover:border-white/35"
                                        :class="showDestinationsMenu ? 'border-white/35' : ''">
                                        <!-- Expanding corners -->
                                        <div class="absolute -top-px -left-px w-3 h-3 border-l-2 border-t-2 border-white/25 transition-all duration-500 group-hover:border-white/50 group-hover:w-5 group-hover:h-5"
                                            :class="showDestinationsMenu ? 'border-white/50 w-5 h-5' : ''">
                                        </div>
                                        <div class="absolute -top-px -right-px w-3 h-3 border-r-2 border-t-2 border-white/25 transition-all duration-500 group-hover:border-white/50 group-hover:w-5 group-hover:h-5"
                                            :class="showDestinationsMenu ? 'border-white/50 w-5 h-5' : ''">
                                        </div>
                                        <div class="absolute -bottom-px -left-px w-3 h-3 border-l-2 border-b-2 border-white/25 transition-all duration-500 group-hover:border-white/50 group-hover:w-5 group-hover:h-5"
                                            :class="showDestinationsMenu ? 'border-white/50 w-5 h-5' : ''">
                                        </div>
                                        <div class="absolute -bottom-px -right-px w-3 h-3 border-r-2 border-b-2 border-white/25 transition-all duration-500 group-hover:border-white/50 group-hover:w-5 group-hover:h-5"
                                            :class="showDestinationsMenu ? 'border-white/50 w-5 h-5' : ''">
                                        </div>
                                    </div>

                                    <!-- Shine effect -->
                                    <div class="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transition-all duration-1000 group-hover:w-full rounded-t-xl"
                                        :class="showDestinationsMenu ? 'w-full' : ''">
                                    </div>
                                    <div class="absolute bottom-0 right-0 h-px w-0 bg-gradient-to-l from-transparent via-white/50 to-transparent transition-all duration-1000 group-hover:w-full rounded-b-xl"
                                        :class="showDestinationsMenu ? 'w-full' : ''">
                                    </div>

                                    <!-- Content -->
                                    <div class="relative px-6 py-4 min-h-[60px] flex items-center justify-between">
                                        <span
                                            class="font-inter font-medium text-white/90 group-hover:text-white text-xl tracking-wide transition-colors duration-500"
                                            :class="showDestinationsMenu ? 'text-white' : ''">
                                            {{ $t('menu.destinations') }}
                                        </span>

                                        <!-- Arrow indicator -->
                                        <div class="transition-all duration-500 transform"
                                            :class="showDestinationsMenu ? 'rotate-180 text-white' : 'text-white/60 group-hover:text-white'">
                                            <Icon name="lucide:chevron-down" class="w-5 h-5" />
                                        </div>
                                    </div>

                                    <!-- Pulse effect on tap (mobile) -->
                                    <div
                                        class="absolute inset-0 rounded-xl border border-white/20 scale-100 opacity-0 group-active:opacity-30 group-active:scale-95 transition-all duration-200">
                                    </div>
                                </button>

                                <!-- Sous-menu Destinations -->
                                <Transition name="destinations-dropdown">
                                    <div v-if="showDestinationsMenu" class="mt-2 ml-4 space-y-1">
                                        <button v-for="destination in destinations" :key="destination.id"
                                            @click="navigateToDestination(destination.id)"
                                            class="group w-full text-left px-6 py-3 hover:bg-white/5 transition-all duration-300 rounded-lg border border-white/10 hover:border-white/20">
                                            <div class="flex items-center justify-between">
                                                <div>
                                                    <div
                                                        class="font-inter font-medium text-white/90 group-hover:text-white transition-colors text-lg">
                                                        {{ destination.name }}
                                                    </div>
                                                    <div
                                                        class="font-inter text-white/60 text-xs mt-1 group-hover:text-white/80 transition-colors">
                                                        {{ $t(destination.taglineKey) }}
                                                    </div>
                                                </div>
                                                <Icon name="lucide:map-pin"
                                                    class="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" />
                                            </div>
                                        </button>
                                    </div>
                                </Transition>
                            </div>

                            <!-- À Propos -->
                            <MobileMenuItem :label="$t('menu.about')" :style="{ '--delay': 3 }"
                                @click="handleAboutNavigation" class="menu-item" />
                        </div>

                        <!-- Secondary Actions -->
                        <div class="mt-16 space-y-4">
                            <!-- Language Selector Luxury -->
                            <div class="menu-item" style="--delay: 4">
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
                            <div class="menu-item" style="--delay: 5">
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
import { onMounted } from 'vue'
import { destinations } from '~/data/destinations'

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

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const { locale, locales, setLocale } = useI18n()
const route = useRoute()
const { openWhatsApp } = useWhatsApp()

// État pour le sous-menu destinations
const showDestinationsMenu = ref(false)

const languages = computed(() => locales.value.map(l => ({
    code: l.code,
    name: l.name
})))

const toggleDestinationsMenu = () => {
    showDestinationsMenu.value = !showDestinationsMenu.value
}

const handleNavigation = (item: NavigationItem) => {
    navigateTo(item.href)
    emit('close')
}

const navigateToDestination = (destinationId: string) => {
    navigateTo(`/destinations/${destinationId}`)
    emit('close')
}

const changeLanguage = async (langCode: string) => {
    await setLocale(langCode as 'fr' | 'en' | 'es')
}

const handleContact = () => {
    openWhatsApp()
    emit('close')
}

const handleAboutNavigation = async () => {
    // Fermer le menu mobile
    emit('close')

    // Si nous sommes déjà sur la page d'accueil
    if (route.path === '/') {
        const aboutSection = document.getElementById('about')
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' })
        }
    } else {
        // Sinon, naviguer vers la page d'accueil
        await navigateTo('/')

        // Attendre que la page soit chargée
        await nextTick()
        setTimeout(() => {
            const aboutSection = document.getElementById('about')
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' })
            }
        }, 100)
    }
}

// Gérer le défilement automatique si on arrive avec un hash #about
onMounted(() => {
    if (window.location.hash === '#about') {
        const aboutSection = document.getElementById('about')
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' })
        }
    }
})

// Fermer le sous-menu destinations quand le menu principal se ferme
watch(() => props.isOpen, (newValue) => {
    if (!newValue) {
        showDestinationsMenu.value = false
    }
})
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

/* Animation du sous-menu destinations */
.destinations-dropdown-enter-active,
.destinations-dropdown-leave-active {
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.destinations-dropdown-enter-from,
.destinations-dropdown-leave-to {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
    max-height: 0;
}

.destinations-dropdown-enter-to,
.destinations-dropdown-leave-from {
    opacity: 1;
    transform: translateY(0) scale(1);
    max-height: 500px;
}

/* Respect des préférences d'animation */
@media (prefers-reduced-motion: reduce) {

    .mobile-menu-enter-active,
    .mobile-menu-leave-active,
    .destinations-dropdown-enter-active,
    .destinations-dropdown-leave-active {
        transition-duration: 0.2s;
    }

    .menu-item {
        animation: none;
        opacity: 1;
        transform: none;
    }
}
</style>