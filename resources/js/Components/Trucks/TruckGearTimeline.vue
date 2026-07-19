<script setup lang="ts">
import { nextTick, ref, watch } from 'vue';

import type { Truck } from '@/types/truck';

interface Props {
    trucks: Truck[];
    activeIndex: number;
}

const props = defineProps<Props>();
const timeline = ref<HTMLElement | null>(null);
const stepButtons = ref<(HTMLButtonElement | null)[]>([]);

const emit = defineEmits<{
    select: [index: number];
}>();

watch(
    () => props.activeIndex,
    async (index) => {
        await nextTick();
        const button = stepButtons.value[index];

        if (!button || !timeline.value || timeline.value.scrollWidth <= timeline.value.clientWidth) {
            return;
        }

        timeline.value.scrollTo({
            left: button.offsetLeft + button.offsetWidth / 2 - timeline.value.clientWidth / 2,
            behavior: 'smooth',
        });
    },
    { immediate: true },
);

function setStepButton(element: unknown, index: number): void {
    stepButtons.value[index] = element instanceof HTMLButtonElement ? element : null;
}
</script>

<template>
    <nav ref="timeline" class="gear-timeline overflow-x-auto pb-2" aria-label="Vrachtwagenmodellen">
        <ol class="relative flex min-w-[56rem] items-start px-2 py-5 md:min-w-0 md:w-full">
            <li
                v-for="(truck, index) in trucks"
                :key="truck.id"
                class="relative w-32 shrink-0 px-1 text-center md:min-w-0 md:flex-1"
            >
                <span
                    v-if="index < trucks.length - 1"
                    class="absolute top-[1.2rem] left-1/2 h-px w-full bg-slate-600"
                    aria-hidden="true"
                />

                <button
                    :ref="(element) => setStepButton(element, index)"
                    type="button"
                    class="group relative z-10 w-full rounded-md px-1 pb-1 text-slate-400 transition-colors hover:text-sky-200 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
                    :class="{ 'text-sky-200': index === activeIndex }"
                    :aria-current="index === activeIndex ? 'step' : undefined"
                    :aria-label="`Versnelling ${index + 1}: ga naar ${truck.model}, geïntroduceerd in ${truck.startYear}`"
                    @click="emit('select', index)"
                >
                    <span
                        class="marker mx-auto grid h-6 w-6 place-items-center rounded-full border-2 border-slate-500 bg-[#172033] text-[0.65rem] font-bold tabular-nums text-slate-400 transition-all group-hover:border-sky-300"
                        :class="{ 'marker--active': index === activeIndex }"
                        aria-hidden="true"
                    >
                        {{ index + 1 }}
                    </span>
                    <span
                        v-if="index === activeIndex"
                        class="gear-indicator mx-auto mt-1 block h-4 w-4 text-sky-200"
                        aria-hidden="true"
                    >
                        <svg viewBox="0 0 20 20" class="h-full w-full">
                            <circle cx="10" cy="4" r="3" fill="currentColor" />
                            <path d="M10 7v7m0 0-4 3m4-3 4 3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" />
                        </svg>
                    </span>
                    <span :class="['block text-sm', index === activeIndex ? 'mt-1 font-extrabold text-sky-100' : 'mt-3 font-semibold']">
                        {{ truck.model }}
                    </span>
                    <span class="mt-0.5 block text-xs tabular-nums text-slate-500">{{ truck.startYear }}</span>
                </button>
            </li>
        </ol>
    </nav>
</template>

<style scoped>
.gear-timeline {
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.gear-timeline::-webkit-scrollbar {
    display: none;
}

.marker--active {
    width: 2.5rem;
    height: 2.5rem;
    border-color: #bae6fd;
    color: #e0f2fe;
    background: #1e3a52;
    box-shadow: 0 0 0 4px rgb(125 211 252 / 28%), 0 0 18px rgb(56 189 248 / 58%);
}
</style>
