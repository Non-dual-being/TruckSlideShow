<script setup lang="ts">
import { computed } from 'vue';

import type { Truck } from '@/types/truck';

interface Props {
    trucks: Truck[];
    activeIndex: number;
}

interface NumberStep {
    type: 'number';
    index: number;
    key: string;
}

interface EllipsisStep {
    type: 'ellipsis';
    key: string;
}

type TimelineStep = NumberStep | EllipsisStep;

const props = defineProps<Props>();

const emit = defineEmits<{
    select: [index: number];
}>();

const visibleSteps = computed<TimelineStep[]>(() => {
    const total = props.trucks.length;

    if (total <= 5) {
        return Array.from({ length: total }, (_, index): NumberStep => ({
            type: 'number',
            index,
            key: `step-${index}`,
        }));
    }

    let indexes: number[];

    if (props.activeIndex <= 1) {
        indexes = [0, 1, 2, total - 1];
    } else if (props.activeIndex >= total - 2) {
        indexes = [0, total - 3, total - 2, total - 1];
    } else {
        indexes = [0, props.activeIndex - 1, props.activeIndex, props.activeIndex + 1, total - 1];
    }

    const steps: TimelineStep[] = [];

    indexes.forEach((index, position) => {
        const previousIndex = indexes[position - 1];

        if (previousIndex !== undefined && index - previousIndex > 1) {
            steps.push({ type: 'ellipsis', key: `ellipsis-${previousIndex}-${index}` });
        }

        steps.push({ type: 'number', index, key: `step-${index}` });
    });

    return steps;
});

const activeTruck = computed<Truck | undefined>(() => props.trucks[props.activeIndex]);
</script>

<template>
    <nav class="gear-timeline" aria-label="Vrachtwagenmodellen">
        <ol class="flex items-center justify-center gap-1.5 sm:gap-2.5">
            <li v-for="step in visibleSteps" :key="step.key" class="flex items-center">
                <span v-if="step.type === 'ellipsis'" class="w-5 text-center text-sm text-slate-500" aria-hidden="true">…</span>

                <button
                    v-else
                    type="button"
                    class="timeline-step grid h-9 w-9 place-items-center rounded-full border border-slate-600 bg-[#172033] text-sm font-bold tabular-nums text-slate-300 transition-all hover:border-sky-300 hover:text-sky-100 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-sky-400 sm:h-10 sm:w-10"
                    :class="{ 'timeline-step--active': step.index === activeIndex }"
                    :aria-current="step.index === activeIndex ? 'step' : undefined"
                    :aria-label="`Versnelling ${step.index + 1}: ga naar ${trucks[step.index]?.model ?? 'vrachtwagen'}`"
                    @click="emit('select', step.index)"
                >
                    {{ step.index + 1 }}
                </button>
            </li>
        </ol>

        <div class="mt-3 min-h-10 text-center" aria-live="polite" aria-atomic="true">
            <p class="text-sm font-extrabold text-sky-100">{{ activeTruck?.model }}</p>
            <p class="mt-0.5 text-xs tabular-nums text-slate-400">{{ activeTruck?.startYear }}</p>
        </div>
    </nav>
</template>

<style scoped>
.timeline-step--active {
    border-color: #bae6fd;
    color: #e0f2fe;
    background: #1e3a52;
    box-shadow: 0 0 0 3px rgb(125 211 252 / 25%), 0 0 15px rgb(56 189 248 / 48%);
}
</style>
