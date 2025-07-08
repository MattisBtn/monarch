<template>
    <button @click="$emit('click')"
        class="group relative w-full text-left transition-all duration-700 ease-out hover:scale-102 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-xl">
        <!-- Background glassmorphism -->
        <div class="absolute inset-0 bg-white/3 hover:bg-white/8 rounded-xl transition-all duration-500"></div>

        <!-- Architectural frame -->
        <div
            class="absolute inset-0 border border-white/15 rounded-xl transition-all duration-700 group-hover:border-white/35">
            <!-- Expanding corners -->
            <div
                class="absolute -top-px -left-px w-3 h-3 border-l-2 border-t-2 border-white/25 transition-all duration-500 group-hover:border-white/50 group-hover:w-5 group-hover:h-5">
            </div>
            <div
                class="absolute -top-px -right-px w-3 h-3 border-r-2 border-t-2 border-white/25 transition-all duration-500 group-hover:border-white/50 group-hover:w-5 group-hover:h-5">
            </div>
            <div
                class="absolute -bottom-px -left-px w-3 h-3 border-l-2 border-b-2 border-white/25 transition-all duration-500 group-hover:border-white/50 group-hover:w-5 group-hover:h-5">
            </div>
            <div
                class="absolute -bottom-px -right-px w-3 h-3 border-r-2 border-b-2 border-white/25 transition-all duration-500 group-hover:border-white/50 group-hover:w-5 group-hover:h-5">
            </div>
        </div>

        <!-- Shine effect -->
        <div
            class="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transition-all duration-1000 group-hover:w-full rounded-t-xl">
        </div>
        <div
            class="absolute bottom-0 right-0 h-px w-0 bg-gradient-to-l from-transparent via-white/50 to-transparent transition-all duration-1000 group-hover:w-full rounded-b-xl">
        </div>

        <!-- Content -->
        <div class="relative px-6 py-4 min-h-[60px] flex items-center">
            <span
                class="font-inter font-medium text-white/90 group-hover:text-white text-xl tracking-wide transition-colors duration-500">
                {{ label }}
            </span>

            <!-- Subtle arrow indicator -->
            <div
                class="ml-auto opacity-0 group-hover:opacity-60 transition-all duration-500 transform translate-x-0 group-hover:translate-x-1">
                <Icon name="lucide:arrow-right" class="w-5 h-5 text-white" />
            </div>
        </div>

        <!-- Pulse effect on tap (mobile) -->
        <div
            class="absolute inset-0 rounded-xl border border-white/20 scale-100 opacity-0 group-active:opacity-30 group-active:scale-95 transition-all duration-200">
        </div>
    </button>
</template>

<script setup lang="ts">
interface Props {
    label: string
    href: string
}

interface Emits {
    (e: 'click'): void
}

defineProps<Props>()
defineEmits<Emits>()
</script>

<style scoped>
/* Touch feedback pour mobile */
@media (hover: none) and (pointer: coarse) {
    .group:active {
        transform: scale(0.98);
    }
}
</style>