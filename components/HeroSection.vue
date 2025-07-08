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
</style>