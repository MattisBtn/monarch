<template>
    <footer class="footer-section relative bg-gradient-to-b from-black via-gray-900 to-black">
        <!-- Subtle top border -->
        <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent">
        </div>

        <div class="relative py-16 md:py-24">
            <div class="max-w-7xl mx-auto px-6">
                <!-- Main footer content -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">

                    <!-- Brand column -->
                    <div class="lg:col-span-2">
                        <!-- Logo -->
                        <div class="mb-8">
                            <NuxtLink to="/" class="group relative inline-block">
                                <div class="absolute inset-0 -m-2 border border-white/10 transition-all duration-500 
                                           group-hover:border-white/20 rounded-lg">
                                    <!-- Subtle corners -->
                                    <div
                                        class="absolute -top-px -left-px w-3 h-3 border-l border-t border-white/20 
                                               transition-all duration-300 group-hover:border-white/40 group-hover:w-4 group-hover:h-4">
                                    </div>
                                    <div
                                        class="absolute -top-px -right-px w-3 h-3 border-r border-t border-white/20 
                                               transition-all duration-300 group-hover:border-white/40 group-hover:w-4 group-hover:h-4">
                                    </div>
                                    <div
                                        class="absolute -bottom-px -left-px w-3 h-3 border-l border-b border-white/20 
                                               transition-all duration-300 group-hover:border-white/40 group-hover:w-4 group-hover:h-4">
                                    </div>
                                    <div
                                        class="absolute -bottom-px -right-px w-3 h-3 border-r border-b border-white/20 
                                               transition-all duration-300 group-hover:border-white/40 group-hover:w-4 group-hover:h-4">
                                    </div>
                                </div>

                                <div class="relative p-2">
                                    <NuxtImg src="/images/logo.png" alt="Monarch"
                                        class="h-10 w-auto transition-all duration-300 group-hover:brightness-110"
                                        loading="lazy" />
                                </div>
                            </NuxtLink>
                        </div>

                        <!-- Brand description -->
                        <div class="mb-8">
                            <h3 class="font-playfair font-light text-2xl md:text-3xl text-white mb-4 tracking-wide">
                                {{ $t('footer.brand.title') }}
                            </h3>
                            <p class="font-inter text-white/70 text-base md:text-lg leading-relaxed max-w-md">
                                {{ $t('footer.brand.description') }}
                            </p>
                        </div>

                        <!-- Contact info -->
                        <div class="space-y-3">
                            <div class="flex items-center gap-3">
                                <div class="w-1 h-1 bg-white/40 rounded-full"></div>
                                <span class="font-inter text-white/80 text-sm">{{ $t('footer.contact.availability')
                                }}</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <div class="w-1 h-1 bg-white/40 rounded-full"></div>
                                <span class="font-inter text-white/80 text-sm">{{ $t('footer.contact.global') }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Navigation column -->
                    <div>
                        <h4 class="font-inter font-medium text-white text-lg mb-6 tracking-wide">
                            {{ $t('footer.navigation.title') }}
                        </h4>
                        <nav class="space-y-4">
                            <NuxtLink to="/"
                                class="block font-inter text-white/70 hover:text-white transition-colors duration-300 text-sm">
                                {{ $t('menu.home') }}
                            </NuxtLink>
                            <button @click="scrollToDestinations"
                                class="block font-inter text-white/70 hover:text-white transition-colors duration-300 text-sm text-left">
                                {{ $t('menu.destinations') }}
                            </button>
                            <button @click="scrollToAbout"
                                class="block font-inter text-white/70 hover:text-white transition-colors duration-300 text-sm text-left">
                                {{ $t('menu.about') }}
                            </button>
                        </nav>
                    </div>

                    <!-- Services column -->
                    <div>
                        <h4 class="font-inter font-medium text-white text-lg mb-6 tracking-wide">
                            {{ $t('footer.services.title') }}
                        </h4>
                        <div class="space-y-4">
                            <div class="font-inter text-white/70 text-sm">{{ $t('hero.services.villas') }}</div>
                            <div class="font-inter text-white/70 text-sm">{{ $t('hero.services.yachts') }}</div>
                            <div class="font-inter text-white/70 text-sm">{{ $t('hero.services.jets') }}</div>
                            <div class="font-inter text-white/70 text-sm">{{ $t('hero.services.experiences') }}</div>
                        </div>
                    </div>
                </div>

                <!-- Divider -->
                <div class="mt-16 md:mt-20 mb-8">
                    <div class="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>

                <!-- Bottom section -->
                <div class="flex flex-col md:flex-row justify-between items-center gap-6">
                    <!-- Copyright -->
                    <div class="font-inter text-white/60 text-sm text-center md:text-left">
                        © {{ currentYear }} {{ $t('footer.copyright') }}
                    </div>

                    <!-- Language selector -->
                    <div class="flex items-center gap-4">
                        <span class="font-inter text-white/60 text-sm">{{ $t('menu.language') }}:</span>
                        <div class="flex gap-2">
                            <button v-for="lang in languages" :key="lang.code" @click="changeLanguage(lang.code)"
                                class="px-3 py-1 rounded border border-white/20 bg-white/5 hover:bg-white/10 
                                       text-white/80 hover:text-white transition-all duration-300 font-inter font-medium text-xs"
                                :class="{ 'bg-white/20 border-white/40 text-white': lang.code === locale }">
                                {{ lang.code.toUpperCase() }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n()
const { t } = useI18n()

const currentYear = new Date().getFullYear()

const languages = computed(() => locales.value.map(l => ({
    code: l.code,
    name: l.name
})))

const changeLanguage = async (langCode) => {
    await setLocale(langCode)
}

const scrollToDestinations = () => {
    const element = document.getElementById('destinations')
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}

const scrollToAbout = () => {
    const element = document.querySelector('.about-section')
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}
</script>

<style scoped>
/* Respect des préférences d'animation */
@media (prefers-reduced-motion: reduce) {
    * {
        transition-duration: 0.2s !important;
    }
}
</style>