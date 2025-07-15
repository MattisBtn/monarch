<template>
    <div>
        <!-- Header -->
        <AppHeader />

        <!-- Hero Section avec video de destination -->
        <section class="relative min-h-screen overflow-hidden">
            <!-- Vidéo de fond spécifique à la destination -->
            <div class="absolute inset-0 z-0">
                <video :src="getDestinationVideo(destination.id)" class="w-full h-full object-cover" autoplay muted loop
                    playsinline preload="metadata">
                </video>

                <!-- Overlay sombre pour améliorer la lisibilité -->
                <div class="absolute inset-0 bg-black/50"></div>
            </div>

            <!-- Contenu du Hero -->
            <div class="relative z-10 flex items-center justify-center min-h-screen px-6 text-center">
                <div class="max-w-4xl mx-auto">
                    <!-- Tagline de la destination -->
                    <div class="mb-4 animate-fade-in">
                        <span
                            class="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-inter font-medium tracking-wide uppercase">
                            {{ $t(destination.taglineKey) }}
                        </span>
                    </div>

                    <!-- Nom de la destination -->
                    <h1
                        class="text-white text-6xl lg:text-8xl xl:text-9xl font-playfair font-light tracking-tight mb-8 animate-fade-in-up leading-none">
                        {{ $t(destination.nameKey) }}
                    </h1>

                    <!-- Description -->
                    <p
                        class="text-white/90 text-lg lg:text-2xl font-inter font-light tracking-wide max-w-3xl mx-auto mb-8 animate-fade-in-up-delay">
                        {{ $t(destination.descriptionKey) }}
                    </p>

                    <!-- Stats -->
                    <div class="flex flex-wrap items-center justify-center gap-8 mb-8 animate-fade-in-up-delay">
                        <div class="text-center">
                            <div class="text-white text-3xl font-playfair font-light">{{ getTotalServices(destination)
                                }}
                            </div>
                            <div class="text-white/70 text-sm font-inter uppercase tracking-wide">{{
                                $t('destinations.services') }}</div>
                        </div>
                        <div class="text-center">
                            <div class="text-white text-3xl font-playfair font-light">{{
                                getUniqueCategories(destination.id).length }}</div>
                            <div class="text-white/70 text-sm font-inter uppercase tracking-wide">{{
                                $t('destinations.categories') }}</div>
                        </div>
                        <div class="text-center">
                            <div class="text-white text-3xl font-playfair font-light">24/7</div>
                            <div class="text-white/70 text-sm font-inter uppercase tracking-wide">{{
                                $t('destinations.availability') }}</div>
                        </div>
                    </div>


                </div>
            </div>
        </section>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div class="group cursor-pointer" @click="scrollToServices">
                <div class="flex flex-col items-center gap-2">
                    <!-- Chevron animé -->
                    <div class="animate-scroll-float">
                        <Icon name="lucide:chevron-down"
                            class="w-6 h-6 text-white/60 group-hover:text-white transition-colors duration-500" />
                    </div>

                    <!-- Ligne verticale -->
                    <div
                        class="w-px h-8 bg-gradient-to-b from-white/60 to-transparent group-hover:from-white transition-colors duration-500">
                    </div>

                    <!-- Texte subtil -->
                    <div
                        class="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <span class="text-white/60 text-xs font-inter font-medium uppercase tracking-widest">
                            {{ $t('destinations.scrollToServices') }}
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Services Section -->
        <section class="services-section py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
            <div class="max-w-7xl mx-auto">
                <!-- Section Header -->
                <div class="text-center mb-16">
                    <h2 class="font-playfair font-light text-4xl md:text-5xl text-white mb-6 tracking-wide">
                        {{ $t('destinations.ourServices') }}
                    </h2>
                    <p class="font-inter font-light text-lg text-white/80 max-w-2xl mx-auto">
                        {{ $t('destinations.servicesDescription') }}
                    </p>
                </div>

                <!-- Services par catégorie -->
                <div v-for="categoryId in getUniqueCategories(destination.id)" :key="categoryId" class="mb-20 lg:mb-24">
                    <!-- Titre de catégorie -->
                    <div class="mb-12 lg:mb-16">
                        <div class="flex items-center gap-4 mb-6">
                            <!-- Indicateur de catégorie -->
                            <div class="relative">
                                <div class="w-3 h-3 rounded-full animate-pulse" :class="getCategoryColor(categoryId)">
                                </div>
                                <div class="absolute inset-0 w-3 h-3 rounded-full opacity-20 animate-ping"
                                    :class="getCategoryColor(categoryId)"></div>
                            </div>

                            <!-- Titre de catégorie -->
                            <h3 class="font-playfair font-light text-3xl lg:text-4xl text-white tracking-wide">
                                {{ $t(`categories.${categoryId}`) }}
                            </h3>
                        </div>

                        <!-- Ligne décorative -->
                        <div class="flex items-center gap-4">
                            <div class="w-32 h-px bg-gradient-to-r from-white/60 via-white/30 to-transparent"></div>
                            <div class="w-2 h-2 rounded-full bg-white/20"></div>
                            <div class="w-16 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
                        </div>
                    </div>

                    <!-- Grid des services de cette catégorie -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        <article v-for="serviceKey in getServicesByCategory(destination.id, categoryId)"
                            :key="serviceKey"
                            class="group relative cursor-pointer transition-all duration-700 ease-out hover:scale-102 focus-within:scale-102"
                            :aria-label="$t(serviceKey)" tabindex="0" role="button" @keydown.enter="contactConcierge"
                            @keydown.space="contactConcierge">

                            <!-- Service Card -->
                            <div
                                class="relative h-96 lg:h-80 xl:h-96 overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm">
                                <!-- Background Video -->
                                <div class="absolute inset-0">
                                    <video :src="getServiceVideo(serviceKey)"
                                        class="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-focus-within:scale-110"
                                        autoplay muted loop playsinline preload="metadata" :aria-hidden="true">
                                    </video>

                                    <!-- Gradient overlay -->
                                    <div
                                        class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                                    </div>

                                    <!-- Glassmorphism hover overlay -->
                                    <div
                                        class="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 transition-all duration-700 group-hover:opacity-100 group-focus-within:opacity-100">
                                    </div>
                                </div>

                                <!-- Architectural frame with expanding corners -->
                                <div
                                    class="absolute inset-0 border border-white/20 rounded-2xl transition-all duration-700 group-hover:border-white/40 group-focus-within:border-white/40">
                                    <!-- Top-left corner -->
                                    <div
                                        class="absolute -top-px -left-px w-4 h-4 border-l-2 border-t-2 border-white/30 transition-all duration-500 group-hover:border-white/70 group-hover:w-6 group-hover:h-6 group-focus-within:border-white/70 group-focus-within:w-6 group-focus-within:h-6 rounded-tl-2xl">
                                    </div>
                                    <!-- Top-right corner -->
                                    <div
                                        class="absolute -top-px -right-px w-4 h-4 border-r-2 border-t-2 border-white/30 transition-all duration-500 group-hover:border-white/70 group-hover:w-6 group-hover:h-6 group-focus-within:border-white/70 group-focus-within:w-6 group-focus-within:h-6 rounded-tr-2xl">
                                    </div>
                                    <!-- Bottom-left corner -->
                                    <div
                                        class="absolute -bottom-px -left-px w-4 h-4 border-l-2 border-b-2 border-white/30 transition-all duration-500 group-hover:border-white/70 group-hover:w-6 group-hover:h-6 group-focus-within:border-white/70 group-focus-within:w-6 group-focus-within:h-6 rounded-bl-2xl">
                                    </div>
                                    <!-- Bottom-right corner -->
                                    <div
                                        class="absolute -bottom-px -right-px w-4 h-4 border-r-2 border-b-2 border-white/30 transition-all duration-500 group-hover:border-white/70 group-hover:w-6 group-hover:h-6 group-focus-within:border-white/70 group-focus-within:w-6 group-focus-within:h-6 rounded-br-2xl">
                                    </div>
                                </div>

                                <!-- Content Container -->
                                <div class="absolute inset-0 flex flex-col justify-between p-6 lg:p-8">
                                    <!-- Top section - Category badge -->
                                    <div class="flex justify-start">
                                        <div
                                            class="transform transition-all duration-500 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                                            <span
                                                class="inline-flex items-center px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white/90 text-xs font-inter font-medium uppercase tracking-widest border border-white/20">
                                                <div class="w-2 h-2 rounded-full mr-2"
                                                    :class="getCategoryColor(categoryId)"></div>
                                                {{ $t(`categories.${categoryId}`) }}
                                            </span>
                                        </div>
                                    </div>

                                    <!-- Bottom section - Service info -->
                                    <div class="space-y-4">
                                        <!-- Service name -->
                                        <h3
                                            class="font-playfair font-light text-2xl lg:text-3xl text-white leading-tight tracking-wide">
                                            {{ $t(serviceKey) }}
                                        </h3>

                                        <!-- Service description -->
                                        <p
                                            class="font-inter font-light text-sm lg:text-base text-white/80 leading-relaxed line-clamp-2 transition-all duration-500 opacity-70 group-hover:opacity-100 group-focus-within:opacity-100">
                                            {{ getServiceDescription(serviceKey, categoryId) }}
                                        </p>
                                    </div>
                                </div>

                                <!-- Shine effect -->
                                <div
                                    class="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-white/60 to-transparent transition-all duration-1000 group-hover:w-full group-focus-within:w-full rounded-t-2xl">
                                </div>

                                <!-- Pulse effect on focus -->
                                <div
                                    class="absolute inset-0 rounded-2xl border border-white/20 animate-pulse opacity-0 group-focus-within:opacity-30 transition-opacity duration-300">
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

                <!-- Contact CTA -->
                <div class="text-center mt-16">
                    <button @click="contactConcierge"
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
                            {{ $t('destinations.contactConcierge') }}
                            <Icon name="lucide:phone"
                                class="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                        </span>

                        <!-- Shine effect -->
                        <div
                            class="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-white/60 to-transparent transition-all duration-1000 group-hover:w-full rounded-t-2xl">
                        </div>
                    </button>
                </div>
            </div>
        </section>

        <AppFooter />
    </div>
</template>

<script setup>
import { getServicesByCategory, getUniqueCategories } from '~/data/destinations'

const { t } = useI18n()
const route = useRoute()
const { openWhatsApp } = useWhatsApp()

// Utiliser le composable pour obtenir la destination traduite
const { getDestinationById } = useDestinations()

// Récupérer la destination par ID
const destinationId = route.params.id
const destination = getDestinationById(destinationId)

// Vérifier si la destination existe
if (!destination) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Destination not found'
    })
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

// Get total number of services
const getTotalServices = (destination) => {
    return Object.values(destination.services).flat().length
}

// Get service video URL
const getServiceVideo = (serviceKey) => {
    // Extract service type from key (e.g., 'services.locations.luxury_villa' -> 'luxury_villa')
    const serviceType = serviceKey.split('.').pop()

    const videoMap = {
        // Locations
        'luxury_villa': '/videos/luxury_villa.mp4',
        'supercar': '/videos/supercar.mp4',
        'private_yacht': '/videos/private_yacht.mp4',
        'private_jet': '/videos/private_jet.mp4',
        'luxury_limousine': '/videos/limousine.mp4',
        'private_helicopter': '/videos/private_helicopter.mp4',
        'luxury_vehicle': '/videos/luxury_car.mp4',
        'manhattan_penthouse': '/videos/penthouse.mp4',
        'luxury_van': '/videos/luxury_van.mp4',
        'private_chauffeur': '/videos/private_chauffeur.mp4',
        'private_chef': '/videos/private_chef.mp4',
        // Activities
        'yacht_experience': '/videos/yacht.mp4',
        'supercar_experience': '/videos/luxury_car.mp4',
        'helicopter_tour': '/videos/helicopter.mp4',
        'limousine_tour': '/videos/limousine.mp4',
        'jet_ski': '/videos/jet_ski.mp4',
        'manhattan_tour': '/videos/manhattan_tour.mp4',

        // Events
        'nightclub': '/videos/nightclub.mp4',
        'restaurant': '/videos/restaurant.mp4',
        'house_party': '/videos/house_party.mp4',
        'yacht_party': '/videos/yacht_party.mp4',
        'beach_club': '/videos/beach_club.mp4',
        'rooftop_party': '/videos/rooftop_party.mp4'
    }

    return videoMap[serviceType] || '/videos/service-placeholder.mp4'
}

// Get service description
const getServiceDescription = (serviceKey, categoryId) => {
    const serviceType = serviceKey.split('.').pop()
    const descriptionKey = `services.descriptions.${categoryId}.${serviceType}`

    // Vérifier si la clé existe avant de la traduire
    const description = t(descriptionKey)

    // Si la traduction retourne la clé elle-même, cela signifie qu'elle n'existe pas
    if (description === descriptionKey) {
        return t('common.touchToExplore') // Fallback
    }

    return description
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

const contactConcierge = () => {
    const customMessage = t('destinations.cta.description') + ' - ' + t(destination.nameKey)
    openWhatsApp(customMessage)
}

// Scroll to services section
const scrollToServices = () => {
    const servicesSection = document.querySelector('.services-section')
    if (servicesSection) {
        servicesSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
}

// SEO
useHead({
    title: `${t(destination.nameKey)} - ${t('seo.title')}`,
    meta: [
        {
            name: 'description',
            content: `${t(destination.descriptionKey)} - ${t('seo.description')}`
        },
        {
            property: 'og:title',
            content: `${t(destination.nameKey)} - ${t('seo.ogTitle')}`
        },
        {
            property: 'og:description',
            content: t(destination.descriptionKey)
        }
    ]
})
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

.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Respect des préférences d'animation */
@media (prefers-reduced-motion: reduce) {

    .animate-fade-in,
    .animate-fade-in-up,
    .animate-fade-in-up-delay {
        animation: none;
        opacity: 1;
        transform: none;
    }
}

/* Scroll indicator animation */
@keyframes scroll-float {

    0%,
    100% {
        transform: translateY(0);
        opacity: 0.6;
    }

    50% {
        transform: translateY(8px);
        opacity: 1;
    }
}

.animate-scroll-float {
    animation: scroll-float 2s ease-in-out infinite;
}

/* Respect des préférences d'animation */
@media (prefers-reduced-motion: reduce) {

    .animate-fade-in,
    .animate-fade-in-up,
    .animate-fade-in-up-delay,
    .animate-scroll-float,
    .animate-pulse,
    .animate-ping {
        animation: none;
        opacity: 1;
        transform: none;
    }

    .group:hover .group-hover\:scale-102,
    .group:hover .group-hover\:scale-105,
    .group:hover .group-hover\:scale-110 {
        transform: none;
    }
}
</style>
