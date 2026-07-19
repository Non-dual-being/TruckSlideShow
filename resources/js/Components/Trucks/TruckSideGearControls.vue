<script setup lang="ts">
interface Props {
    activeIndex: number;
    total: number;
}

const props = defineProps<Props>();

const emit = defineEmits<{
    previous: [];
    next: [];
}>();
</script>

<template>
    <div class="pointer-events-none absolute inset-0 z-20 hidden md:block" role="group" aria-label="Zijbediening slideshow">
        <button
            v-if="props.activeIndex > 0"
            type="button"
            class="side-zone side-zone--left group left-0"
            aria-label="Ga met de linker versnellingspook naar de vorige vrachtwagen"
            @click="emit('previous')"
        >
            <span class="side-gear" aria-hidden="true">
                <svg viewBox="0 0 64 112" class="h-20 w-10">
                    <path d="M32 92V43" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="6" />
                    <path d="M32 92 20 103M32 92l12 11" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4" />
                    <circle cx="32" cy="26" r="16" fill="#172033" stroke="currentColor" stroke-width="4" />
                    <path d="m36 19-7 7 7 7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" />
                </svg>
            </span>
        </button>

        <button
            v-if="props.activeIndex < props.total - 1"
            type="button"
            class="side-zone side-zone--right group right-0"
            aria-label="Ga met de rechter versnellingspook naar de volgende vrachtwagen"
            @click="emit('next')"
        >
            <span class="side-gear" aria-hidden="true">
                <svg viewBox="0 0 64 112" class="h-20 w-10">
                    <path d="M32 92V43" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="6" />
                    <path d="M32 92 20 103M32 92l12 11" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4" />
                    <circle cx="32" cy="26" r="16" fill="#172033" stroke="currentColor" stroke-width="4" />
                    <path d="m28 19 7 7-7 7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" />
                </svg>
            </span>
        </button>
    </div>
</template>

<style scoped>
.side-zone {
    pointer-events: auto;
    position: absolute;
    top: 18%;
    bottom: 18%;
    width: 3rem;
    border: 0;
    background: transparent;
}

.side-zone:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: -3px;
}

.side-gear {
    position: absolute;
    top: 50%;
    display: grid;
    place-items: center;
    width: 2.75rem;
    height: 6.5rem;
    border: 1px solid rgb(148 163 184 / 28%);
    border-radius: 0.625rem;
    color: #bae6fd;
    background: rgb(15 23 42 / 82%);
    opacity: 0.06;
    transition: opacity 260ms ease, transform 260ms ease, border-color 260ms ease;
}

.side-zone--left .side-gear { left: 0; transform: translate(-1.25rem, -50%); }
.side-zone--right .side-gear { right: 0; transform: translate(1.25rem, -50%); }

.side-zone:hover .side-gear,
.side-zone:focus-visible .side-gear {
    border-color: rgb(125 211 252 / 70%);
    opacity: 0.88;
    transform: translate(0, -50%);
}
</style>
