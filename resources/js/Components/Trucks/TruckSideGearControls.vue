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
            type="button"
            class="side-gear side-gear--left group left-4 lg:left-7"
            :disabled="props.activeIndex === 0"
            aria-label="Ga met de linker versnellingspook naar de vorige vrachtwagen"
            @click="emit('previous')"
        >
            <svg viewBox="0 0 64 112" class="h-24 w-14" aria-hidden="true">
                <path d="M32 92V43" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="7" />
                <path d="M32 92 18 105M32 92l14 13" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="5" />
                <circle class="gear-knob" cx="32" cy="26" r="18" fill="#172033" stroke="currentColor" stroke-width="4" />
                <path d="m36 18-8 8 8 8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" />
            </svg>
        </button>

        <button
            type="button"
            class="side-gear side-gear--right group right-4 lg:right-7"
            :disabled="props.activeIndex === props.total - 1"
            aria-label="Ga met de rechter versnellingspook naar de volgende vrachtwagen"
            @click="emit('next')"
        >
            <svg viewBox="0 0 64 112" class="h-24 w-14" aria-hidden="true">
                <path d="M32 92V43" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="7" />
                <path d="M32 92 18 105M32 92l14 13" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="5" />
                <circle class="gear-knob" cx="32" cy="26" r="18" fill="#172033" stroke="currentColor" stroke-width="4" />
                <path d="m28 18 8 8-8 8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" />
            </svg>
        </button>
    </div>
</template>

<style scoped>
.side-gear {
    pointer-events: auto;
    position: absolute;
    top: 50%;
    display: grid;
    place-items: center;
    width: 4.5rem;
    height: 8rem;
    transform: translateY(-50%);
    border: 1px solid rgb(148 163 184 / 35%);
    border-radius: 0.75rem;
    color: #bae6fd;
    background: rgb(15 23 42 / 72%);
    opacity: 0.58;
    transition: transform 250ms ease, opacity 250ms ease, border-color 250ms ease, background-color 250ms ease;
}

.side-gear--left:hover:not(:disabled),
.side-gear--left:focus-visible {
    transform: translate(0.4rem, -50%);
}

.side-gear--right:hover:not(:disabled),
.side-gear--right:focus-visible {
    transform: translate(-0.4rem, -50%);
}

.side-gear:hover:not(:disabled),
.side-gear:focus-visible {
    border-color: #7dd3fc;
    background: rgb(23 32 51 / 92%);
    opacity: 1;
}

.side-gear:focus-visible {
    outline: 3px solid #38bdf8;
    outline-offset: 3px;
}

.side-gear:disabled {
    cursor: not-allowed;
    opacity: 0.18;
}

.gear-knob {
    transform-box: fill-box;
    transform-origin: center;
    transition: transform 250ms ease;
}

.side-gear:hover:not(:disabled) .gear-knob,
.side-gear:focus-visible .gear-knob {
    transform: rotate(12deg) scale(1.08);
}
</style>
