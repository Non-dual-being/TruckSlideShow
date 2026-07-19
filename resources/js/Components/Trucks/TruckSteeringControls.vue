<script setup lang="ts">
interface Props {
    isFirst: boolean;
    isLast: boolean;
    activeIndex: number;
    total: number;
    model: string;
}

defineProps<Props>();

const emit = defineEmits<{
    previous: [];
    next: [];
}>();
</script>

<template>
    <div class="flex items-center justify-center gap-4 sm:gap-7" aria-label="Slideshowbediening">
        <button type="button" class="steering-button group" :class="{ 'steering-button--unavailable': isFirst }" :disabled="isFirst" aria-label="Ga naar de vorige vrachtwagen" @click="emit('previous')">
            <svg viewBox="0 0 64 64" class="h-12 w-12 transition-transform duration-300 ease-out group-hover:-rotate-12 group-focus-visible:-rotate-12" aria-hidden="true">
                <circle cx="32" cy="32" r="27" fill="none" stroke="currentColor" stroke-width="5" />
                <circle cx="32" cy="32" r="7" fill="none" stroke="currentColor" stroke-width="4" />
                <path d="M9 27h17M38 27h17M28 38 17 53M36 38l11 15" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4" />
                <path d="m25 32-6-5 6-5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
            </svg>
        </button>

        <div class="min-w-36 text-center" aria-live="polite" aria-atomic="true">
            <div class="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-sky-200">
                <svg viewBox="0 0 20 20" class="h-5 w-5" aria-hidden="true">
                    <circle cx="10" cy="4" r="3" fill="currentColor" />
                    <path d="M10 7v7m0 0-4 3m4-3 4 3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" />
                </svg>
                <span>Versnelling {{ activeIndex + 1 }} van {{ total }}</span>
            </div>
            <p class="mt-1 text-sm font-semibold text-slate-100">{{ model }}</p>
        </div>

        <button type="button" class="steering-button group" :class="{ 'steering-button--unavailable': isLast }" :disabled="isLast" aria-label="Ga naar de volgende vrachtwagen" @click="emit('next')">
            <svg viewBox="0 0 64 64" class="h-12 w-12 transition-transform duration-300 ease-out group-hover:rotate-12 group-focus-visible:rotate-12" aria-hidden="true">
                <circle cx="32" cy="32" r="27" fill="none" stroke="currentColor" stroke-width="5" />
                <circle cx="32" cy="32" r="7" fill="none" stroke="currentColor" stroke-width="4" />
                <path d="M9 27h17M38 27h17M28 38 17 53M36 38l11 15" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4" />
                <path d="m39 22 6 5-6 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
            </svg>
        </button>
    </div>
</template>

<style scoped>
.steering-button {
    display: grid;
    place-items: center;
    width: 4rem;
    height: 4rem;
    flex: 0 0 auto;
    border: 1px solid rgb(148 163 184 / 45%);
    border-radius: 9999px;
    color: #bae6fd;
    background: #172033;
    transition: border-color 200ms ease, background-color 200ms ease, opacity 200ms ease;
}

.steering-button:hover:not(:disabled) { border-color: #7dd3fc; background: #202c42; }
.steering-button:focus-visible { outline: 3px solid #38bdf8; outline-offset: 4px; }
.steering-button--unavailable { visibility: hidden; opacity: 0; }
</style>
