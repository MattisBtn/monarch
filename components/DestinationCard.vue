<template>
    <div @click="$emit('click')"
        class="group relative cursor-pointer transition-all duration-700 ease-out hover:scale-102">
        <!-- Main card container -->
        <div class="relative h-[500px] md:h-[600px] overflow-hidden rounded-2xl bg-black/40">
            <!-- Background image from Unsplash -->
            <div class="absolute inset-0">
                <NuxtImg :src="heroImageUrl" :alt="translatedDestination.name"
                    class="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" loading="lazy"
                    width="800" height="600" />

                <!-- Gradient overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

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
                        {{ t(destination.taglineKey) }}
                    </span>
                </div>

                <!-- Destination name -->
                <h3 class="font-playfair font-light text-3xl md:text-4xl text-white mb-3 tracking-wide">
                    {{ t(destination.nameKey) }}
                </h3>

                <!-- Description -->
                <p class="font-inter text-white/80 text-base md:text-lg mb-4 line-clamp-2">
                    {{ t(destination.descriptionKey) }}
                </p>

                <!-- Highlights -->
                <div
                    class="flex flex-wrap gap-2 mb-4 opacity-0 transition-all duration-700 delay-200 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                    <span v-for="highlight in t(destination.highlightsKey).slice(0, 3)" :key="highlight"
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
                                {{ totalServices }} {{ t('destinations.services') }}
                            </span>
                        </div>

                        <!-- Popular services categories -->
                        <div class="flex gap-1">
                            <div v-for="category in uniqueCategories.slice(0, 3)" :key="category"
                                class="w-2 h-2 rounded-full opacity-60" :class="getCategoryColor(category)"></div>
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
            <div class="absolute top-6 right-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <div class="px-3 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                    <span class="text-white/90 text-xs font-inter font-medium">
                        {{ getCurrentTime(destination.timeZone) }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Destination } from '~/types';

interface Props {
    destination: Destination
    index: number
}

interface Emits {
    (e: 'click'): void
}

const props = defineProps<Props>()
defineEmits<Emits>()

const { t } = useI18n()
const { getTranslatedDestination } = useDestinations()
const { getCurrentTime } = useRealTime()

// Traduire la destination
const translatedDestination = computed(() => {
    return getTranslatedDestination(props.destination.id) || props.destination
})

// Generate Unsplash URL for hero image
const heroImageUrl = computed(() => {
    const keywords = props.destination.unsplashKeywords.join(',')
    return `https://images.unsplash.com/1200x800/?${keywords}`
})

// Get total number of services for this destination
const totalServices = computed(() => {
    const services = props.destination.services
    return (services.locations?.length || 0) +
        (services.activities?.length || 0) +
        (services.events?.length || 0)
})

// Get unique service categories for this destination
const uniqueCategories = computed(() => {
    const services = props.destination.services
    const categories: string[] = []

    if (services.locations?.length > 0) categories.push('locations')
    if (services.activities?.length > 0) categories.push('activities')
    if (services.events?.length > 0) categories.push('events')

    return categories
})

// Get category color class
const getCategoryColor = (categoryId: string) => {
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
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>