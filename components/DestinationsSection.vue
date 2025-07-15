<template>
    <section id="destinations"
        class="destinations-section relative py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-5">
            <div
                class="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent">
            </div>
            <div
                class="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent">
            </div>
        </div>

        <div class="relative max-w-7xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <h2
                    class="font-playfair font-light text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-wide animate-fade-in">
                    {{ $t('home.destinations.title') }}
                </h2>
                <p class="font-inter font-light text-lg md:text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up">
                    {{ $t('home.destinations.subtitle') }}
                </p>
                <div
                    class="w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mt-8 animate-fade-in-up-delay">
                </div>
            </div>

            <!-- Current Destinations Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                <!-- Destination Video Cards -->
                <div v-for="(destination, index) in featuredDestinations" :key="destination.id"
                    @click="navigateToDestination(destination.id)"
                    class="group relative cursor-pointer transition-all duration-700 ease-out hover:scale-102 destination-preview-card"
                    :style="{ '--delay': index * 0.3 + 's' }">
                    <!-- Main card container -->
                    <div class="relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl bg-black/40">
                        <!-- Background video -->
                        <div class="absolute inset-0">
                            <video :src="getDestinationVideo(destination.id)"
                                class="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                                autoplay muted loop playsinline preload="metadata">
                            </video>

                            <!-- Gradient overlay -->
                            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                            </div>

                            <!-- Hover overlay -->
                            <div
                                class="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                            </div>
                        </div>

                        <!-- Architectural frame -->
                        <div
                            class="absolute inset-0 border border-white/20 rounded-2xl transition-all duration-700 group-hover:border-white/40">
                            <!-- Expanding corners -->
                            <div
                                class="absolute -top-px -left-px w-4 h-4 border-l-2 border-t-2 border-white/30 transition-all duration-500 group-hover:border-white/70 group-hover:w-6 group-hover:h-6 rounded-tl-2xl">
                            </div>
                            <div
                                class="absolute -top-px -right-px w-4 h-4 border-r-2 border-t-2 border-white/30 transition-all duration-500 group-hover:border-white/70 group-hover:w-6 group-hover:h-6 rounded-tr-2xl">
                            </div>
                            <div
                                class="absolute -bottom-px -left-px w-4 h-4 border-l-2 border-b-2 border-white/30 transition-all duration-500 group-hover:border-white/70 group-hover:w-6 group-hover:h-6 rounded-bl-2xl">
                            </div>
                            <div
                                class="absolute -bottom-px -right-px w-4 h-4 border-r-2 border-b-2 border-white/30 transition-all duration-500 group-hover:border-white/70 group-hover:w-6 group-hover:h-6 rounded-br-2xl">
                            </div>
                        </div>

                        <!-- Shine effects -->
                        <div
                            class="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transition-all duration-1000 group-hover:w-full rounded-t-2xl">
                        </div>
                        <div
                            class="absolute bottom-0 right-0 h-px w-0 bg-gradient-to-l from-transparent via-white/50 to-transparent transition-all duration-1000 group-hover:w-full rounded-b-2xl">
                        </div>

                        <!-- Content -->
                        <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                            <!-- Destination tagline -->
                            <div
                                class="mb-2 opacity-0 transition-all duration-500 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                                <span
                                    class="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-xs font-inter font-medium tracking-wide uppercase">
                                    {{ $t(destination.taglineKey) }}
                                </span>
                            </div>

                            <!-- Destination name -->
                            <h3 class="font-playfair font-light text-3xl md:text-4xl text-white mb-3 tracking-wide">
                                {{ $t(destination.nameKey) }}
                            </h3>

                            <!-- Description -->
                            <p class="font-inter text-white/80 text-base md:text-lg mb-4 line-clamp-2">
                                {{ $t(destination.descriptionKey) }}
                            </p>

                            <!-- Highlights -->
                            <div
                                class="flex flex-wrap gap-2 mb-4 opacity-0 transition-all duration-700 delay-200 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                                <span v-for="highlight in getDestinationHighlights(destination)" :key="highlight"
                                    class="inline-block px-2 py-1 bg-white/10 backdrop-blur-sm rounded text-white/70 text-xs font-inter">
                                    {{ highlight }}
                                </span>
                            </div>

                            <!-- Services count and CTA -->
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-4">
                                    <!-- Services count -->
                                    <div class="flex items-center gap-2">
                                        <Icon name="lucide:star" class="w-4 h-4 text-white/60" />
                                        <span class="text-white/80 text-sm font-inter">
                                            {{ getTotalServices(destination) }} {{ $t('destinations.services') }}
                                        </span>
                                    </div>

                                    <!-- Popular services categories -->
                                    <div class="flex gap-1">
                                        <div v-for="category in getUniqueCategories(destination)" :key="category"
                                            class="w-2 h-2 rounded-full opacity-60" :class="getCategoryColor(category)">
                                        </div>
                                    </div>
                                </div>

                                <!-- Arrow indicator -->
                                <div
                                    class="opacity-0 transition-all duration-500 group-hover:opacity-80 transform translate-x-0 group-hover:translate-x-1">
                                    <Icon name="lucide:arrow-right" class="w-5 h-5 text-white" />
                                </div>
                            </div>
                        </div>

                        <!-- Atmosphere indicator -->
                        <div
                            class="absolute top-6 right-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
                            <div class="px-3 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                                <span class="text-white/90 text-xs font-inter font-medium">
                                    {{ getCurrentTime(destination.timeZone) }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Coming Soon Section -->
            <div class="mb-16">
                <!-- Coming Soon Header -->
                <div class="text-center mb-12">
                    <h3 class="font-playfair font-light text-3xl md:text-4xl text-white mb-4 tracking-wide">
                        {{ $t('home.destinations.comingSoon.title') }}
                    </h3>
                    <p class="font-inter font-light text-lg text-white/70 max-w-2xl mx-auto">
                        {{ $t('home.destinations.comingSoon.subtitle') }}
                    </p>
                    <div class="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mt-6">
                    </div>
                </div>

                <!-- Coming Soon Destinations Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div v-for="(destination, index) in comingSoonDestinationsTranslated" :key="destination.id"
                        class="group relative coming-soon-card" :style="{ '--delay': (index + 4) * 0.2 + 's' }">
                        <!-- Main card container -->
                        <div class="relative h-[320px] overflow-hidden rounded-xl bg-black/20 border border-white/10">
                            <!-- Background video -->
                            <div class="absolute inset-0">
                                <video :src="getComingSoonVideo(destination.id)"
                                    class="w-full h-full object-cover opacity-90 transition-opacity duration-700 group-hover:opacity-100"
                                    autoplay muted loop playsinline preload="metadata">
                                </video>

                                <!-- Gradient overlay -->
                                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30">
                                </div>

                                <!-- Coming Soon overlay -->
                                <div class="absolute inset-0 bg-black/30 backdrop-blur-[1px]">
                                </div>
                            </div>

                            <!-- Coming Soon Badge -->
                            <div class="absolute top-4 left-4 z-10">
                                <div class="px-3 py-1 bg-white/15 backdrop-blur-sm rounded-full border border-white/20">
                                    <span class="text-white/90 text-xs font-inter font-medium tracking-wide uppercase">
                                        {{ $t('home.destinations.comingSoon.badge') }}
                                    </span>
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="absolute bottom-0 left-0 right-0 p-6">
                                <!-- Destination name -->
                                <h4 class="font-playfair font-light text-2xl text-white mb-2 tracking-wide">
                                    {{ $t(destination.nameKey) }}
                                </h4>

                                <!-- Description -->
                                <p class="font-inter text-white/70 text-sm mb-3 line-clamp-2">
                                    {{ $t(destination.descriptionKey) }}
                                </p>

                                <!-- Highlights preview -->
                                <div class="flex flex-wrap gap-1 mb-3">
                                    <span v-for="highlight in getDestinationHighlights(destination).slice(0, 2)"
                                        :key="highlight"
                                        class="inline-block px-2 py-1 bg-white/10 backdrop-blur-sm rounded text-white/60 text-xs font-inter">
                                        {{ highlight }}
                                    </span>
                                </div>

                                <!-- Services preview -->
                                <div class="flex items-center gap-2 opacity-60">
                                    <Icon name="lucide:calendar" class="w-3 h-3 text-white/60" />
                                    <span class="text-white/60 text-xs font-inter">
                                        {{ getTotalServices(destination) }} {{ $t('destinations.services') }}
                                    </span>
                                    <span class="text-white/40 text-xs mx-2">•</span>
                                    <span class="text-white/60 text-xs font-inter">
                                        {{ getCurrentTime(destination.timeZone) }}
                                    </span>
                                </div>
                            </div>

                            <!-- Subtle frame -->
                            <div class="absolute inset-0 border border-white/10 rounded-xl pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- CTA to scroll to top or contact -->
            <div class="text-center">
                <button @click="scrollToContact"
                    class="group relative px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 rounded-2xl font-inter font-medium text-white transition-all duration-700 ease-out hover:scale-105">
                    <!-- Frame architectural -->
                    <div
                        class="absolute inset-0 border border-white/15 rounded-2xl transition-all duration-700 group-hover:border-white/35">
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

                    <span class="relative z-10 flex items-center gap-3">
                        {{ $t('home.destinations.contactUs') }}
                        <Icon name="lucide:arrow-right"
                            class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>

                    <!-- Shine effect -->
                    <div
                        class="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-white/60 to-transparent transition-all duration-1000 group-hover:w-full rounded-t-2xl">
                    </div>
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { comingSoonDestinations, getUniqueCategories as getDestinationCategories } from '~/data/destinations'

const { t } = useI18n()
const { openWhatsApp } = useWhatsApp()
const { getCurrentTime } = useRealTime()

// Utiliser le composable pour les destinations traduites
const { getTranslatedDestinations } = useDestinations()

// Featured destinations (all 4 destinations)
const featuredDestinations = computed(() => getTranslatedDestinations())

// Coming soon destinations
const comingSoonDestinationsTranslated = computed(() => {
    return comingSoonDestinations.map(dest => ({
        ...dest,
        name: t(dest.nameKey),
        description: t(dest.descriptionKey),
        tagline: t(dest.taglineKey),
        atmosphere: t(dest.atmosphereKey),
        highlights: t(dest.highlightsKey),
        bestSeason: t(dest.bestSeasonKey)
    }))
})

// Navigation functions
const navigateToDestination = (destinationId) => {
    navigateTo(`/destinations/${destinationId}`)
}

const scrollToContact = () => {
    openWhatsApp()
}

// Get destination video URL
const getDestinationVideo = (destinationId) => {
    const videoMap = {
        'los-angeles': '/videos/los-angeles.mp4',
        'las-vegas': '/videos/las-vegas.mp4',
        'miami': '/videos/miami.mp4',
        'new-york': '/videos/nyc.mp4'
    }
    return videoMap[destinationId] || '/videos/hero-horizontal.mp4'
}

// Get coming soon video URL (vous pourrez définir vos propres URLs)
const getComingSoonVideo = (destinationId) => {
    const videoMap = {
        'marbella': '/videos/marbella.mp4', // À définir
        'paris': '/videos/paris.mp4', // À définir
        'cannes': '/videos/cannes.mp4', // À définir
        'saint-tropez': '/videos/saint-tropez.mp4' // À définir
    }
    return videoMap[destinationId] || '/videos/hero-horizontal.mp4'
}

// Get destination highlights (first 3)
const getDestinationHighlights = (destination) => {
    const highlights = t(destination.highlightsKey)
    return Array.isArray(highlights) ? highlights.slice(0, 3) : []
}

// Get total number of services
const getTotalServices = (destination) => {
    return Object.values(destination.services).flat().length
}

// Get unique service categories for a destination
const getUniqueCategories = (destination) => {
    return getDestinationCategories(destination.id).slice(0, 3)
}

// Get category color class
const getCategoryColor = (categoryId) => {
    switch (categoryId) {
        case 'locations':
            return 'bg-amber-500'
        case 'activities':
            return 'bg-red-500'
        case 'events':
            return 'bg-purple-500'
        default:
            return 'bg-gray-400'
    }
}
</script>

<style scoped>
@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fade-in-up {
    from {
        opacity: 0;
        transform: translateY(40px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fade-in 1s ease-out forwards;
}

.animate-fade-in-up {
    animation: fade-in-up 1.2s ease-out 0.3s forwards;
    opacity: 0;
}

.animate-fade-in-up-delay {
    animation: fade-in-up 1.2s ease-out 0.6s forwards;
    opacity: 0;
}

.destination-preview-card {
    animation: fade-in-up 0.8s ease-out var(--delay) forwards;
    opacity: 0;
}

.coming-soon-card {
    animation: fade-in-up 0.6s ease-out var(--delay) forwards;
    opacity: 0;
}

.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Coming soon specific styles */
.coming-soon-card {
    cursor: default;
}

.coming-soon-card:hover {
    transform: translateY(-2px);
    transition: transform 0.3s ease-out;
}

/* Respect des préférences d'animation */
@media (prefers-reduced-motion: reduce) {

    .animate-fade-in,
    .animate-fade-in-up,
    .animate-fade-in-up-delay,
    .destination-preview-card,
    .coming-soon-card {
        animation: none;
        opacity: 1;
        transform: none;
    }
}
</style>