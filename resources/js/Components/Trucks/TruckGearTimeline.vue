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
        indexes = [
            0,
            props.activeIndex - 1,
            props.activeIndex,
            props.activeIndex + 1,
            total - 1,
        ];
    }

    const steps: TimelineStep[] = [];

    indexes.forEach((index, position) => {
        const previousIndex = indexes[position - 1];

        if (previousIndex !== undefined && index - previousIndex > 1) {
            steps.push({
                type: 'ellipsis',
                key: `ellipsis-${previousIndex}-${index}`,
            });
        }

        steps.push({
            type: 'number',
            index,
            key: `step-${index}`,
        });
    });

    return steps;
});

const activeTruck = computed<Truck | undefined>(
    () => props.trucks[props.activeIndex],
);
</script>

<template>
    <nav
        class="gear-timeline"
        aria-label="Vrachtwagenmodellen"
    >
        <ol class="flex items-start justify-center gap-2 sm:gap-3">
            <li
                v-for="step in visibleSteps"
                :key="step.key"
                class="flex items-start"
            >
                <span
                    v-if="step.type === 'ellipsis'"
                    class="gear-ellipsis"
                    aria-hidden="true"
                >
                    <span />
                    <span />
                    <span />
                </span>

                <button
                    v-else
                    type="button"
                    class="gear-step group"
                    :class="{
                        'gear-step--active': step.index === activeIndex,
                    }"
                    :aria-current="
                        step.index === activeIndex
                            ? 'step'
                            : undefined
                    "
                    :aria-label="
                        `Versnelling ${step.index + 1}: ga naar ${
                            trucks[step.index]?.model ?? 'vrachtwagen'
                        }`
                    "
                    @click="emit('select', step.index)"
                >
                    <span class="gear-step__knob">
                        {{ step.index + 1 }}
                    </span>

                    <span
                        v-if="step.index === activeIndex"
                        class="gear-step__stick"
                        aria-hidden="true"
                    >
                        <span class="gear-step__shaft" />
                        <span class="gear-step__base" />
                    </span>
                </button>
            </li>
        </ol>

        <div
            class="mt-3 min-h-10 text-center"
            aria-live="polite"
            aria-atomic="true"
        >
            <p class="text-sm font-extrabold text-sky-100">
                {{ activeTruck?.model }}
            </p>

            <p class="mt-0.5 text-xs tabular-nums text-slate-400">
                {{ activeTruck?.startYear }}
            </p>
        </div>
    </nav>
</template>

<style scoped>
.gear-step {
    display: flex;
    min-width: 3rem;
    flex-direction: column;
    align-items: center;
    border: 0;
    padding: 0;
    color: #cbd5e1;
    background: transparent;
}

.gear-step__knob {
    display: grid;
    width: 2.8rem;
    height: 2.5rem;
    place-items: center;
    border: 1px solid rgb(100 116 139 / 78%);
    color: #cbd5e1;
    background:
        linear-gradient(
            145deg,
            rgb(30 41 59 / 98%),
            rgb(15 23 42 / 98%)
        );
    clip-path: polygon(
        18% 0,
        82% 0,
        100% 22%,
        100% 78%,
        82% 100%,
        18% 100%,
        0 78%,
        0 22%
    );
    box-shadow:
        inset 0 1px 0 rgb(255 255 255 / 8%),
        0 5px 12px rgb(2 6 23 / 28%);
    font-size: 0.875rem;
    font-weight: 800;
    font-variant-numeric: tabular-nums;
    transition:
        transform 180ms ease,
        border-color 180ms ease,
        color 180ms ease,
        background-color 180ms ease,
        box-shadow 180ms ease;
}

.gear-step:hover .gear-step__knob {
    transform: translateY(-2px);
    border-color: rgb(125 211 252 / 85%);
    color: #f0f9ff;
}

.gear-step:focus-visible {
    outline: none;
}

.gear-step:focus-visible .gear-step__knob {
    outline: 3px solid #38bdf8;
    outline-offset: 4px;
}

.gear-step--active .gear-step__knob {
    transform: translateY(-3px) scale(1.12);
    border-color: #bae6fd;
    color: #f0f9ff;
    background:
        linear-gradient(
            145deg,
            #155e75,
            #172033 72%
        );
    box-shadow:
        inset 0 1px 0 rgb(255 255 255 / 20%),
        0 0 0 3px rgb(56 189 248 / 18%),
        0 0 18px rgb(56 189 248 / 38%);
}

.gear-step__stick {
    display: flex;
    height: 1.45rem;
    flex-direction: column;
    align-items: center;
}

.gear-step__shaft {
    width: 2px;
    height: 0.95rem;
    background:
        linear-gradient(
            to bottom,
            #bae6fd,
            #475569
        );
}

.gear-step__base {
    width: 0.65rem;
    height: 0.28rem;
    border-radius: 0.12rem;
    background: #7dd3fc;
    box-shadow: 0 0 7px rgb(56 189 248 / 55%);
}

.gear-ellipsis {
    display: flex;
    width: 2.25rem;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    gap: 0.22rem;
}

.gear-ellipsis span {
    width: 0.42rem;
    height: 2px;
    background: #475569;
}

.gear-ellipsis span:nth-child(2) {
    background: rgb(125 211 252 / 65%);
}

@media (min-width: 640px) {
    .gear-step__knob {
        width: 3rem;
        height: 2.7rem;
    }
}
</style>