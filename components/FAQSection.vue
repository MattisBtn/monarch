<template>
    <section
        class="faq-section relative py-24 md:py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
        <!-- Background pattern subtil -->
        <div class="absolute inset-0 opacity-[0.03]">
            <div
                class="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent">
            </div>
            <div
                class="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent">
            </div>
        </div>

        <div class="relative max-w-4xl mx-auto px-6">
            <!-- Section Header -->
            <div class="text-center mb-16 md:mb-24">
                <h2
                    class="font-playfair font-light text-4xl md:text-6xl lg:text-7xl text-white mb-6 md:mb-8 tracking-wide">
                    {{ $t('faq.title') }}
                </h2>
                <p class="font-inter text-lg md:text-2xl text-white/70 max-w-4xl mx-auto px-4">
                    {{ $t('faq.subtitle') }}
                </p>
            </div>

            <!-- FAQ Grid -->
            <div class="space-y-6 md:space-y-8">
                <div v-for="(faq, index) in faqs" :key="faq.id" class="faq-item group"
                    :style="{ '--delay': index * 0.1 + 's' }">

                    <!-- FAQ Card avec Glassmorphism -->
                    <div
                        class="relative overflow-hidden rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/10 
                                transition-all duration-500 hover:bg-white/[0.04] hover:border-white/20 hover:shadow-2xl hover:shadow-black/20">

                        <!-- Shine effect subtil -->
                        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        <!-- Question Button -->
                        <button @click="toggleItem(faq.id)" class="w-full text-left p-6 md:p-8 focus:outline-none focus:ring-2 focus:ring-white/30 rounded-2xl
                                       transition-all duration-300" :aria-expanded="activeItem === faq.id"
                            :aria-controls="`faq-answer-${faq.id}`">

                            <div class="flex items-start justify-between gap-6">
                                <!-- Question Text -->
                                <div class="flex-1">
                                    <h3 class="font-playfair font-light text-xl md:text-2xl text-white leading-relaxed pr-4
                                               group-hover:text-white transition-colors duration-300">
                                        {{ $t(faq.questionKey) }}
                                    </h3>
                                </div>

                                <!-- Icon Container -->
                                <div class="flex-shrink-0 relative">
                                    <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm 
                                                border border-white/20 flex items-center justify-center
                                                transition-all duration-500 group-hover:bg-white/20 group-hover:border-white/30 group-hover:scale-110"
                                        :class="{ 'bg-white/20 border-white/40 rotate-180': activeItem === faq.id }">

                                        <Icon name="lucide:plus"
                                            class="w-5 h-5 md:w-6 md:h-6 text-white/70 transition-all duration-500 group-hover:text-white"
                                            :class="{ 'text-white rotate-45': activeItem === faq.id }" />
                                    </div>

                                    <!-- Pulse effect -->
                                    <div class="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-30 
                                                animate-ping transition-opacity duration-300"></div>
                                </div>
                            </div>
                        </button>

                        <!-- Answer Content -->
                        <Transition name="faq-answer">
                            <div v-if="activeItem === faq.id" :id="`faq-answer-${faq.id}`"
                                class="px-6 pb-6 md:px-8 md:pb-8">

                                <!-- Divider -->
                                <div class="mb-6">
                                    <div class="w-full h-px bg-gradient-to-r from-white/20 via-white/10 to-white/20">
                                    </div>
                                </div>

                                <!-- Answer Text -->
                                <div class="prose prose-invert max-w-none">
                                    <p class="font-inter text-base md:text-lg text-white/80 leading-relaxed m-0">
                                        {{ $t(faq.answerKey) }}
                                    </p>
                                </div>
                            </div>
                        </Transition>

                        <!-- Hover gradient effect -->
                        <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const { t } = useI18n()
const { openWhatsApp } = useWhatsApp()

const activeItem = ref(null)

const faqs = [
    {
        id: 'how-it-works',
        questionKey: 'faq.questions.howItWorks.question',
        answerKey: 'faq.questions.howItWorks.answer'
    },
    {
        id: 'destinations',
        questionKey: 'faq.questions.destinations.question',
        answerKey: 'faq.questions.destinations.answer'
    },
    {
        id: 'booking-time',
        questionKey: 'faq.questions.bookingTime.question',
        answerKey: 'faq.questions.bookingTime.answer'
    },
    {
        id: 'availability',
        questionKey: 'faq.questions.availability.question',
        answerKey: 'faq.questions.availability.answer'
    },
    {
        id: 'pricing',
        questionKey: 'faq.questions.pricing.question',
        answerKey: 'faq.questions.pricing.answer'
    },
    {
        id: 'cancellation',
        questionKey: 'faq.questions.cancellation.question',
        answerKey: 'faq.questions.cancellation.answer'
    },
    {
        id: 'experiences',
        questionKey: 'faq.questions.experiences.question',
        answerKey: 'faq.questions.experiences.answer'
    }
]

const toggleItem = (id) => {
    activeItem.value = activeItem.value === id ? null : id
}

const handleContact = () => {
    openWhatsApp()
}
</script>

<style scoped>
/* Animation d'apparition des items */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.faq-item {
    animation: fadeInUp 0.6s ease-out var(--delay) forwards;
    opacity: 0;
}

/* Transitions fluides pour les réponses */
.faq-answer-enter-active {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-answer-leave-active {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-answer-enter-from {
    opacity: 0;
    transform: translateY(-20px);
    max-height: 0;
}

.faq-answer-leave-to {
    opacity: 0;
    transform: translateY(-10px);
    max-height: 0;
}

.faq-answer-enter-to,
.faq-answer-leave-from {
    opacity: 1;
    transform: translateY(0);
    max-height: 300px;
}

/* Glassmorphism enhancements */
.faq-item .relative {
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
}

/* Smooth hover states */
.faq-item:hover {
    transform: translateY(-2px);
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
    .faq-item {
        animation: none;
        opacity: 1;
        transform: none;
    }

    .faq-answer-enter-active,
    .faq-answer-leave-active {
        transition-duration: 0.2s;
    }

    * {
        transition-duration: 0.2s !important;
        animation: none !important;
    }
}

/* Mobile optimizations */
@media (max-width: 768px) {
    .faq-item {
        margin-bottom: 1rem;
    }

    .faq-item:hover {
        transform: none;
    }
}
</style>