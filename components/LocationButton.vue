<template>
    <button @click="scrollToDestinations"
        class="group relative px-3 py-2 sm:px-6 sm:py-4 transition-all duration-700 ease-out hover:scale-102 focus:outline-none active:scale-98"
        aria-label="Explorer nos destinations privilégiées">
        <!-- Cadre architectural -->
        <div class="absolute inset-0 border border-white/30 transition-all duration-500 group-hover:border-white/60">
            <!-- Coins décoratifs - plus petits sur mobile -->
            <div
                class="absolute -top-px -left-px w-2 h-2 sm:w-4 sm:h-4 border-l-2 border-t-2 border-white/60 transition-all duration-300 group-hover:border-white group-hover:w-3 group-hover:h-3 sm:group-hover:w-6 sm:group-hover:h-6">
            </div>
            <div
                class="absolute -top-px -right-px w-2 h-2 sm:w-4 sm:h-4 border-r-2 border-t-2 border-white/60 transition-all duration-300 group-hover:border-white group-hover:w-3 group-hover:h-3 sm:group-hover:w-6 sm:group-hover:h-6">
            </div>
            <div
                class="absolute -bottom-px -left-px w-2 h-2 sm:w-4 sm:h-4 border-l-2 border-b-2 border-white/60 transition-all duration-300 group-hover:border-white group-hover:w-3 group-hover:h-3 sm:group-hover:w-6 sm:group-hover:h-6">
            </div>
            <div
                class="absolute -bottom-px -right-px w-2 h-2 sm:w-4 sm:h-4 border-r-2 border-b-2 border-white/60 transition-all duration-300 group-hover:border-white group-hover:w-3 group-hover:h-3 sm:group-hover:w-6 sm:group-hover:h-6">
            </div>
        </div>

        <!-- Ligne de lumière animée -->
        <div
            class="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-1000 group-hover:w-full">
        </div>

        <!-- Contenu centré -->
        <div class="relative flex items-center gap-2 sm:gap-4">
            <!-- Icône minimaliste - plus petite sur mobile -->
            <div class="relative flex items-center justify-center">
                <div
                    class="w-4 h-4 sm:w-6 sm:h-6 rounded-full border border-white/40 flex items-center justify-center transition-all duration-400 group-hover:border-white group-hover:bg-white/10">
                    <Icon name="lucide:map-pin"
                        class="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-white/80 transition-all duration-400 group-hover:text-white" />
                </div>
                <!-- Pulse subtil -->
                <div
                    class="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                </div>
            </div>

            <!-- Séparateur vertical -->
            <div
                class="w-px h-6 sm:h-8 bg-gradient-to-b from-transparent via-white/30 to-transparent transition-all duration-300 group-hover:via-white/60 hidden sm:block">
            </div>

            <!-- Texte architectural -->
            <div class="hidden sm:flex flex-col items-start">
                <span
                    class="font-inter font-light text-white/60 text-xs uppercase tracking-[0.2em] transition-all duration-300 group-hover:text-white/80">
                    Destinations
                </span>
                <span
                    class="font-inter font-medium text-white/90 text-sm tracking-wide transition-all duration-300 group-hover:text-white group-hover:tracking-wider">
                    Exclusives
                </span>
            </div>

            <!-- Version mobile épurée - juste un petit indicateur -->
            <div class="sm:hidden">
                <div
                    class="w-0.5 h-0.5 bg-white/50 transition-all duration-300 group-hover:bg-white group-hover:scale-150">
                </div>
            </div>
        </div>

        <!-- Ombre portée sophistiquée -->
        <div
            class="absolute inset-0 -z-10 bg-black/10 blur-xl scale-95 opacity-0 transition-all duration-500 group-hover:opacity-50 group-hover:scale-100">
        </div>
    </button>
</template>

<script setup>
const scrollToDestinations = () => {
    const destinationsSection = document.getElementById('destinations')
    if (destinationsSection) {
        destinationsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
}
</script>