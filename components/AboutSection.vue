<template>
    <section class="about-section relative overflow-hidden">
        <!-- Process Section with Media (enhanced for mobile) -->
        <div class="relative py-16 md:py-32 bg-gradient-to-b from-black to-gray-900">
            <div class="max-w-7xl mx-auto px-4 md:px-6">
                <div class="text-center mb-16 md:mb-24">
                    <h2
                        class="font-playfair font-light text-4xl md:text-6xl lg:text-7xl text-white mb-6 md:mb-8 tracking-wide">
                        {{ $t('about.process.title') }}
                    </h2>
                    <p class="font-inter text-lg md:text-2xl text-white/70 max-w-4xl mx-auto px-4">
                        {{ $t('about.process.subtitle') }}
                    </p>
                </div>

                <!-- Process Steps with Enhanced Mobile Experience -->
                <div class="space-y-16 md:space-y-32">
                    <div v-for="(step, index) in processSteps" :key="step.id" class="process-step-container" :class="{
                        'grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center': true,
                        'lg:grid-flow-col-dense': index % 2 === 1
                    }" :style="{ '--delay': index * 0.4 + 's' }">

                        <!-- Mobile-First Media Container -->
                        <div class="relative group process-media mb-8 lg:mb-0"
                            :class="{ 'lg:order-1': index % 2 === 0, 'lg:order-2': index % 2 === 1 }">

                            <!-- Mobile: Compact but engaging video -->
                            <div class="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden bg-black/20 
                                        transform transition-all duration-700 hover:scale-[1.02] active:scale-[0.98]">

                                <!-- Video Background -->
                                <div class="absolute inset-0">
                                    <video :src="step.video"
                                        class="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-active:scale-105"
                                        autoplay muted loop playsinline preload="metadata">
                                    </video>
                                    <div
                                        class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30">
                                    </div>
                                </div>

                                <!-- Mobile-Optimized Architectural frame -->
                                <div
                                    class="absolute inset-0 border border-white/30 md:border-2 md:border-white/20 rounded-2xl md:rounded-3xl 
                                           transition-all duration-700 group-hover:border-white/50 group-active:border-white/60">

                                    <!-- Responsive expanding corners -->
                                    <div class="absolute -top-0.5 -left-0.5 w-6 h-6 md:w-8 md:h-8 border-l-2 border-t-2 md:border-l-4 md:border-t-4 
                                               border-white/50 transition-all duration-500 group-hover:border-white/80 
                                               group-hover:w-8 group-hover:h-8 md:group-hover:w-12 md:group-hover:h-12 
                                               rounded-tl-2xl md:rounded-tl-3xl"></div>
                                    <div class="absolute -top-0.5 -right-0.5 w-6 h-6 md:w-8 md:h-8 border-r-2 border-t-2 md:border-r-4 md:border-t-4 
                                               border-white/50 transition-all duration-500 group-hover:border-white/80 
                                               group-hover:w-8 group-hover:h-8 md:group-hover:w-12 md:group-hover:h-12 
                                               rounded-tr-2xl md:rounded-tr-3xl"></div>
                                    <div class="absolute -bottom-0.5 -left-0.5 w-6 h-6 md:w-8 md:h-8 border-l-2 border-b-2 md:border-l-4 md:border-b-4 
                                               border-white/50 transition-all duration-500 group-hover:border-white/80 
                                               group-hover:w-8 group-hover:h-8 md:group-hover:w-12 md:group-hover:h-12 
                                               rounded-bl-2xl md:rounded-bl-3xl"></div>
                                    <div class="absolute -bottom-0.5 -right-0.5 w-6 h-6 md:w-8 md:h-8 border-r-2 border-b-2 md:border-r-4 md:border-b-4 
                                               border-white/50 transition-all duration-500 group-hover:border-white/80 
                                               group-hover:w-8 group-hover:h-8 md:group-hover:w-12 md:group-hover:h-12 
                                               rounded-br-2xl md:rounded-br-3xl"></div>
                                </div>

                                <!-- Enhanced Mobile Shine Effects -->
                                <div
                                    class="absolute top-0 left-0 h-1 md:h-2 w-0 bg-gradient-to-r from-transparent via-white/60 to-transparent 
                                           transition-all duration-1500 group-hover:w-full rounded-t-2xl md:rounded-t-3xl">
                                </div>

                                <!-- Mobile pulse effect on touch -->
                                <div
                                    class="absolute inset-0 rounded-2xl md:rounded-3xl border border-white/20 opacity-0 
                                           group-active:opacity-30 group-active:animate-ping transition-opacity duration-300">
                                </div>
                            </div>
                        </div>

                        <!-- Mobile-Optimized Content -->
                        <div class="relative process-content"
                            :class="{ 'lg:order-2': index % 2 === 0, 'lg:order-1': index % 2 === 1 }">
                            <div class="relative p-6 md:p-12 bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl 
                                        border border-white/10 transform transition-all duration-500 
                                        hover:bg-white/[0.07] active:scale-[0.98]">

                                <!-- Background pattern -->
                                <div class="absolute inset-0 opacity-5 rounded-2xl md:rounded-3xl overflow-hidden">
                                    <div
                                        class="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-white/20 to-transparent">
                                    </div>
                                </div>

                                <div class="relative">
                                    <!-- Mobile-Optimized Step indicator -->
                                    <div class="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                                        <div class="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/60 rounded-full"></div>
                                        <span
                                            class="font-inter font-light text-white/60 text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em]">
                                            {{ $t('about.process.step') }} {{ index + 1 }}
                                        </span>
                                        <div class="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
                                    </div>

                                    <h3 class="font-playfair font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                                              text-white mb-6 md:mb-8 tracking-wide leading-tight">
                                        {{ $t(step.titleKey) }}
                                    </h3>

                                    <p
                                        class="font-inter text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed mb-6 md:mb-8">
                                        {{ $t(step.descriptionKey) }}
                                    </p>

                                    <!-- Mobile-Optimized Process details -->
                                    <div class="space-y-6 md:space-y-8">
                                        <div v-for="(detail, detailIndex) in step.details" :key="detail"
                                            class="relative" :style="{ '--detail-delay': detailIndex * 0.15 + 's' }">

                                            <!-- Architectural detail card -->
                                            <div class="relative p-4 md:p-6 bg-white/[0.02] backdrop-blur-sm rounded-xl md:rounded-2xl 
                                                        border border-white/10">

                                                <!-- Background pattern -->
                                                <div
                                                    class="absolute inset-0 opacity-[0.02] rounded-xl md:rounded-2xl overflow-hidden">
                                                    <div
                                                        class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent">
                                                    </div>
                                                </div>

                                                <!-- Number indicator -->
                                                <div class="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-8 h-8 md:w-10 md:h-10 
                                                           bg-white/10 backdrop-blur-md rounded-full border border-white/20 
                                                           flex items-center justify-center shadow-lg shadow-black/20">
                                                    <span
                                                        class="font-playfair font-light text-sm md:text-base text-white/80">
                                                        {{ String(detailIndex + 1).padStart(2, '0') }}
                                                    </span>
                                                </div>

                                                <!-- Content -->
                                                <div class="relative pr-4 md:pr-6">
                                                    <div class="flex items-start gap-3 md:gap-4">
                                                        <!-- Detail text -->
                                                        <div class="flex-1">
                                                            <p
                                                                class="font-inter text-base md:text-lg text-white/85 leading-relaxed">
                                                                {{ $t(detail) }}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <!-- Connecting line to next item -->
                                                <div v-if="detailIndex < step.details.length - 1"
                                                    class="absolute left-1/2 -translate-x-1/2 bottom-0 w-px h-4 bg-gradient-to-b from-white/20 to-transparent">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Mobile CTA hint (subtle) -->
                                    <div
                                        class="mt-8 md:mt-12 opacity-0 group-hover:opacity-60 transition-opacity duration-500">
                                        <div class="flex items-center gap-2 text-white/40">
                                            <div class="w-1 h-1 bg-white/40 rounded-full"></div>
                                            <span class="font-inter text-sm tracking-wide">{{
                                                $t('common.touchToExplore') }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const { t } = useI18n()

const primaryVideo = ref(null)
const secondaryVideo = ref(null)
const currentVideoIndex = ref(0)

const videoSources = [
    '/videos/luxury_villa.mp4',
    '/videos/private_yacht.mp4',
    '/videos/penthouse.mp4'
]

// Enhanced process steps with media
const processSteps = [
    {
        id: 'listen',
        titleKey: 'about.process.steps.listen.title',
        descriptionKey: 'about.process.steps.listen.description',
        video: '/videos/private_helicopter.mp4',
        details: [
            'about.process.steps.listen.detail1',
            'about.process.steps.listen.detail2',
            'about.process.steps.listen.detail3'
        ]
    },
    {
        id: 'design',
        titleKey: 'about.process.steps.design.title',
        descriptionKey: 'about.process.steps.design.description',
        video: '/videos/penthouse.mp4',
        details: [
            'about.process.steps.design.detail1',
            'about.process.steps.design.detail2',
            'about.process.steps.design.detail3'
        ]
    },
    {
        id: 'orchestrate',
        titleKey: 'about.process.steps.orchestrate.title',
        descriptionKey: 'about.process.steps.orchestrate.description',
        video: '/videos/mega_yacht.mp4',
        details: [
            'about.process.steps.orchestrate.detail1',
            'about.process.steps.orchestrate.detail2',
            'about.process.steps.orchestrate.detail3'
        ]
    },
    {
        id: 'perfect',
        titleKey: 'about.process.steps.perfect.title',
        descriptionKey: 'about.process.steps.perfect.description',
        video: '/videos/private_jet.mp4',
        details: [
            'about.process.steps.perfect.detail1',
            'about.process.steps.perfect.detail2',
            'about.process.steps.perfect.detail3'
        ]
    }
]

// Enhanced stats with icons
const stats = [
    {
        id: 'years',
        value: '12+',
        labelKey: 'about.numbers.years',
        icon: 'lucide:calendar'
    },
    {
        id: 'destinations',
        value: '40+',
        labelKey: 'about.numbers.destinations',
        icon: 'lucide:map-pin'
    },
    {
        id: 'experiences',
        value: '2,500+',
        labelKey: 'about.numbers.experiences',
        icon: 'lucide:sparkles'
    },
    {
        id: 'concierges',
        value: '24/7',
        labelKey: 'about.numbers.availability',
        icon: 'lucide:clock'
    }
]

onMounted(() => {
    // Initialize videos
    if (primaryVideo.value) {
        primaryVideo.value.play()
    }
})
</script>

<style scoped>
@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(60px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fade-in-up {
    from {
        opacity: 0;
        transform: translateY(80px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes spin-slow {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes spin-reverse {
    from {
        transform: rotate(360deg);
    }

    to {
        transform: rotate(0deg);
    }
}

@keyframes particle-float {

    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
        opacity: 0.2;
    }

    50% {
        transform: translateY(-20px) rotate(180deg);
        opacity: 0.8;
    }
}

.particle {
    animation: particle-float var(--duration, 8s) infinite ease-in-out;
}

.philosophy-center-card {
    animation: fade-in-up 2s ease-out 0.8s forwards;
    opacity: 0;
}

.philosophy-side-card {
    animation: fade-in-up 1.8s ease-out 1.2s forwards;
    opacity: 0;
}

.process-media {
    animation: fade-in-up 1.2s ease-out var(--delay) forwards;
    opacity: 0;
}

.process-content {
    animation: fade-in-up 1.2s ease-out calc(var(--delay) + 0.3s) forwards;
    opacity: 0;
}

.stat-card {
    animation: fade-in-up 1.4s ease-out var(--delay) forwards;
    opacity: 0;
}

.animate-spin-slow {
    animation: spin-slow 12s linear infinite;
}

.animate-spin-reverse {
    animation: spin-reverse 8s linear infinite;
}

/* Respect des préférences d'animation */
@media (prefers-reduced-motion: reduce) {

    .philosophy-center-card,
    .philosophy-side-card,
    .process-media,
    .process-content,
    .stat-card,
    .particle {
        animation: none;
        opacity: 1;
        transform: none;
    }
}
</style>