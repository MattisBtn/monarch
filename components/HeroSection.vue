<template>
    <div class="relative min-h-screen overflow-hidden">
        <!-- Vidéo de fond -->
        <div class="absolute inset-0 z-0">
            <!-- Vidéo pour desktop -->
            <video ref="desktopVideo" class="hidden md:block w-full h-full object-cover" autoplay muted loop playsinline
                preload="metadata" @loadstart="handleVideoLoad" @error="handleVideoError">
                <source src="/videos/hero-horizontal.mp4" type="video/mp4">
                Votre navigateur ne supporte pas les vidéos HTML5.
            </video>

            <!-- Vidéo pour mobile -->
            <video ref="mobileVideo" class="block md:hidden w-full h-full object-cover" autoplay muted loop playsinline
                preload="metadata" @loadstart="handleVideoLoad" @error="handleVideoError">
                <source src="/videos/hero-vertical.mp4" type="video/mp4">
                Votre navigateur ne supporte pas les vidéos HTML5.
            </video>

            <!-- Image de fallback si vidéo ne charge pas -->
            <div v-if="videoError" class="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>

            <!-- Overlay sombre pour améliorer la lisibilité -->
            <div class="absolute inset-0 bg-black/40"></div>
        </div>

        <!-- Contenu du Hero -->
        <div class="relative z-10 flex items-center justify-center min-h-screen px-6 text-center">
            <div class="max-w-4xl mx-auto">
                <!-- Petit titre -->
                <h1
                    class="text-white/90 text-sm lg:text-base font-inter font-light tracking-[0.25em] uppercase mb-4 animate-fade-in">
                    {{ t('hero.tagline') }}
                </h1>

                <!-- Nom principal avec Playfair Display -->
                <h2
                    class="text-white text-6xl lg:text-8xl xl:text-9xl font-playfair font-light tracking-tight mb-8 animate-fade-in-up leading-none">
                    {{ t('hero.title') }}
                </h2>

                <!-- Texte animé -->
                <div
                    class="text-white/90 text-lg lg:text-2xl font-inter font-light tracking-wide animate-fade-in-up-delay">
                    <Transition name="service-change" mode="out-in">
                        <span :key="currentService" class="inline-block">{{ currentService }}</span>
                    </Transition>
                </div>
            </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div class="group cursor-pointer" @click="scrollToDestinations">
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
                            {{ t('hero.scrollToExplore') }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const { t } = useI18n()

const desktopVideo = ref(null)
const mobileVideo = ref(null)
const videoError = ref(false)

// Services de la conciergerie Monarch avec traductions
const services = computed(() => [
    t('hero.services.villas'),
    t('hero.services.vehicles'),
    t('hero.services.yachts'),
    t('hero.services.jets'),
    t('hero.services.limousines'),
    t('hero.services.experiences'),
    t('hero.services.events'),
    t('hero.services.butler')
])

const currentService = ref('')
const serviceIndex = ref(0)
let serviceInterval = null

// Gestion des vidéos
const handleVideoLoad = () => {
    videoError.value = false
}

const handleVideoError = () => {
    videoError.value = true
    console.warn('Erreur de chargement de la vidéo, utilisation du fallback')
}

// Animation des services
const startServiceRotation = () => {
    // Initialiser avec le premier service
    currentService.value = services.value[0]

    serviceInterval = setInterval(() => {
        serviceIndex.value = (serviceIndex.value + 1) % services.value.length
        currentService.value = services.value[serviceIndex.value]
    }, 3000)
}

const stopServiceRotation = () => {
    if (serviceInterval) {
        clearInterval(serviceInterval)
        serviceInterval = null
    }
}

// Scroll to destinations section
const scrollToDestinations = () => {
    const destinationsSection = document.querySelector('.destinations-section')
    if (destinationsSection) {
        destinationsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
}

// Gestion du cycle de vie
onMounted(() => {
    startServiceRotation()
})

onUnmounted(() => {
    stopServiceRotation()
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

/* Transition pour le changement de service */
.service-change-enter-active,
.service-change-leave-active {
    transition: all 0.5s ease-in-out;
}

.service-change-enter-from {
    opacity: 0;
    transform: translateY(20px);
}

.service-change-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}

.service-change-enter-to,
.service-change-leave-from {
    opacity: 1;
    transform: translateY(0);
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
    .animate-scroll-float {
        animation: none;
        opacity: 1;
        transform: none;
    }
}
</style>