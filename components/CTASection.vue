<template>
    <section
        class="cta-section relative py-24 md:py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
        <!-- Background architectural pattern -->
        <div class="absolute inset-0 opacity-[0.02]">
            <div
                class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent">
            </div>
            <div
                class="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent">
            </div>
            <div
                class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent">
            </div>
        </div>

        <div class="relative max-w-5xl mx-auto px-6 text-center">
            <!-- Logo architectural -->
            <div class="mb-12 md:mb-16">
                <div class="group relative inline-block">
                    <!-- Architectural frame around logo -->
                    <div
                        class="absolute inset-0 -m-6 md:-m-8 border border-white/15 rounded-2xl transition-all duration-700">
                        <!-- Expanding corners -->
                        <div
                            class="absolute -top-px -left-px w-6 h-6 md:w-8 md:h-8 border-l-2 border-t-2 border-white/30 transition-all duration-500 rounded-tl-2xl">
                        </div>
                        <div
                            class="absolute -top-px -right-px w-6 h-6 md:w-8 md:h-8 border-r-2 border-t-2 border-white/30 transition-all duration-500 rounded-tr-2xl">
                        </div>
                        <div
                            class="absolute -bottom-px -left-px w-6 h-6 md:w-8 md:h-8 border-l-2 border-b-2 border-white/30 transition-all duration-500 rounded-bl-2xl">
                        </div>
                        <div
                            class="absolute -bottom-px -right-px w-6 h-6 md:w-8 md:h-8 border-r-2 border-b-2 border-white/30 transition-all duration-500 rounded-br-2xl">
                        </div>
                    </div>

                    <!-- Logo with subtle glow -->
                    <div class="relative p-6 md:p-8">
                        <NuxtImg src="/images/logo.png" alt="Monarch"
                            class="h-16 md:h-20 w-auto mx-auto filter brightness-110" loading="lazy" />

                        <!-- Subtle aura -->
                        <div class="absolute inset-0 bg-white/[0.02] blur-xl rounded-full scale-50 opacity-50"></div>
                    </div>
                </div>
            </div>

            <!-- CTA Content -->
            <div class="mb-12 md:mb-16">
                <h2
                    class="font-playfair font-light text-4xl md:text-5xl lg:text-6xl text-white mb-6 md:mb-8 tracking-wide">
                    {{ $t('cta.title') }}
                </h2>
                <p class="font-inter text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                    {{ $t('cta.subtitle') }}
                </p>
            </div>

            <!-- CTA Button -->
            <div class="relative">
                <button @click="handleContact"
                    class="group relative inline-flex items-center gap-4 px-8 md:px-12 py-4 md:py-6 
                           bg-white/[0.02] backdrop-blur-sm transition-all duration-700 ease-out 
                           hover:bg-white/[0.05] hover:scale-105 active:scale-95
                           focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent">

                    <!-- Architectural frame -->
                    <div
                        class="absolute inset-0 border border-white/20 transition-all duration-700 group-hover:border-white/40">
                        <!-- Expanding corners -->
                        <div
                            class="absolute -top-px -left-px w-6 h-6 md:w-8 md:h-8 border-l-2 border-t-2 border-white/40 
                                   transition-all duration-500 group-hover:border-white/70 group-hover:w-8 group-hover:h-8 md:group-hover:w-12 md:group-hover:h-12">
                        </div>
                        <div
                            class="absolute -top-px -right-px w-6 h-6 md:w-8 md:h-8 border-r-2 border-t-2 border-white/40 
                                   transition-all duration-500 group-hover:border-white/70 group-hover:w-8 group-hover:h-8 md:group-hover:w-12 md:group-hover:h-12">
                        </div>
                        <div
                            class="absolute -bottom-px -left-px w-6 h-6 md:w-8 md:h-8 border-l-2 border-b-2 border-white/40 
                                   transition-all duration-500 group-hover:border-white/70 group-hover:w-8 group-hover:h-8 md:group-hover:w-12 md:group-hover:h-12">
                        </div>
                        <div
                            class="absolute -bottom-px -right-px w-6 h-6 md:w-8 md:h-8 border-r-2 border-b-2 border-white/40 
                                   transition-all duration-500 group-hover:border-white/70 group-hover:w-8 group-hover:h-8 md:group-hover:w-12 md:group-hover:h-12">
                        </div>
                    </div>

                    <!-- Shine effects -->
                    <div class="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-white/60 to-transparent 
                               transition-all duration-1000 group-hover:w-full"></div>
                    <div class="absolute bottom-0 right-0 h-px w-0 bg-gradient-to-l from-transparent via-white/60 to-transparent 
                               transition-all duration-1000 group-hover:w-full"></div>

                    <!-- Button content -->
                    <div class="relative flex items-center gap-4">
                        <span class="font-inter font-medium text-white text-lg md:text-xl tracking-wide 
                                   transition-all duration-300 group-hover:text-white/95">
                            {{ $t('cta.button') }}
                        </span>

                        <div class="transition-all duration-300 group-hover:translate-x-1">
                            <Icon name="lucide:arrow-right"
                                class="w-5 h-5 md:w-6 md:h-6 text-white/80 group-hover:text-white" />
                        </div>
                    </div>

                    <!-- Subtle background glow -->
                    <div class="absolute inset-0 -z-10 bg-white/[0.01] blur-xl scale-75 opacity-0 
                               transition-all duration-700 group-hover:opacity-50 group-hover:scale-100"></div>
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
const { t } = useI18n()
const { openWhatsApp } = useWhatsApp()

const handleContact = () => {
    openWhatsApp()
}
</script>

<style scoped>
/* Respect des préférences d'animation */
@media (prefers-reduced-motion: reduce) {
    * {
        transition-duration: 0.2s !important;
        animation: none !important;
    }
}
</style>