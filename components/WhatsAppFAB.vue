<template>
    <div class="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8">
        <!-- Tooltip - Monarch Style -->
        <div v-if="showTooltip"
            class="absolute bottom-full right-0 mb-4 px-4 py-3 bg-black/90 backdrop-blur-md text-white text-sm font-inter font-medium rounded-lg whitespace-nowrap opacity-0 translate-y-2 transition-all duration-500 ease-out border border-white/20"
            :class="{ 'opacity-100 translate-y-0': showTooltip }">
            {{ $t('whatsapp.fab.tooltip') }}
            <!-- Architectural arrow -->
            <div
                class="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90">
            </div>
        </div>

        <!-- FAB Button - Monarch Architectural Design -->
        <button @click="() => openWhatsApp()" @mouseenter="showTooltip = true" @mouseleave="showTooltip = false"
            @focus="showTooltip = true" @blur="showTooltip = false"
            class="group relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-full shadow-2xl overflow-hidden transition-all duration-700 ease-out hover:scale-102 hover:shadow-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 active:scale-98"
            :aria-label="$t('whatsapp.fab.tooltip')">

            <!-- Background luxury gradient -->
            <div
                class="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
            </div>

            <!-- Top architectural shine -->
            <div
                class="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-white/80 to-transparent transition-all duration-1000 group-hover:w-full">
            </div>

            <!-- Expanding corners - Monarch signature -->
            <div
                class="absolute -top-px -left-px w-3 h-3 md:w-4 md:h-4 border-l-2 border-t-2 border-white/60 transition-all duration-700 group-hover:border-white group-hover:w-5 group-hover:h-5 md:group-hover:w-6 md:group-hover:h-6">
            </div>
            <div
                class="absolute -top-px -right-px w-3 h-3 md:w-4 md:h-4 border-r-2 border-t-2 border-white/60 transition-all duration-700 group-hover:border-white group-hover:w-5 group-hover:h-5 md:group-hover:w-6 md:group-hover:h-6">
            </div>
            <div
                class="absolute -bottom-px -left-px w-3 h-3 md:w-4 md:h-4 border-l-2 border-b-2 border-white/60 transition-all duration-700 group-hover:border-white group-hover:w-5 group-hover:h-5 md:group-hover:w-6 md:group-hover:h-6">
            </div>
            <div
                class="absolute -bottom-px -right-px w-3 h-3 md:w-4 md:h-4 border-r-2 border-b-2 border-white/60 transition-all duration-700 group-hover:border-white group-hover:w-5 group-hover:h-5 md:group-hover:w-6 md:group-hover:h-6">
            </div>

            <!-- Subtle pulse effect -->
            <div
                class="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-0 group-hover:opacity-30 transition-opacity duration-700">
            </div>

            <!-- Content layer -->
            <div class="relative flex items-center justify-center w-full h-full">
                <!-- WhatsApp Icon - Elegant white version -->
                <svg class="w-7 h-7 md:w-8 md:h-8 text-white transition-all duration-500 group-hover:scale-110 group-hover:text-green-400"
                    viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
            </div>

            <!-- Bottom shine effect - delayed -->
            <div
                class="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-white/60 to-transparent transition-all duration-1000 delay-300 group-hover:w-full">
            </div>

            <!-- Side accent lines -->
            <div
                class="absolute left-0 top-1/2 w-0 h-px bg-gradient-to-r from-white/40 to-transparent transition-all duration-500 delay-100 group-hover:w-3 transform -translate-y-1/2">
            </div>
            <div
                class="absolute right-0 top-1/2 w-0 h-px bg-gradient-to-l from-white/40 to-transparent transition-all duration-500 delay-100 group-hover:w-3 transform -translate-y-1/2">
            </div>
        </button>
    </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { openWhatsApp } = useWhatsApp()

const showTooltip = ref(false)

// Hide tooltip on scroll for mobile UX
onMounted(() => {
    const handleScroll = () => {
        if (showTooltip.value) {
            showTooltip.value = false
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
    })
})
</script>

<style scoped>
/* Ensure the FAB doesn't interfere with scrolling */
.fixed {
    pointer-events: none;
}

.fixed>* {
    pointer-events: auto;
}

/* Custom animation for the ping effect */
@keyframes ping {
    0% {
        transform: scale(1);
        opacity: 1;
    }

    75%,
    100% {
        transform: scale(1.15);
        opacity: 0;
    }
}

/* Smooth animation for mobile touch */
@media (hover: none) {
    .group:hover {
        transform: none;
    }

    .group:active {
        transform: scale(0.98);
    }
}

/* Luxury timing for animations */
.group * {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Prefers reduced motion */
@media (prefers-reduced-motion: reduce) {

    .group *,
    .group {
        transition-duration: 0.1s !important;
        animation: none !important;
    }
}
</style>