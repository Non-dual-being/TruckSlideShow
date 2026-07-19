<script setup lang="ts">
import type { Truck } from '@/types/truck';

interface Props {
    trucks: Truck[];
    activeIndex: number;
}

defineProps<Props>();

const emit = defineEmits<{
    select: [index: number];
}>();
</script>

<template>
    <nav class="overflow-x-auto pb-2" aria-label="Vrachtwagenmodellen">
        <ol class="relative flex min-w-max items-start px-2 py-3">
            <li
                v-for="(truck, index) in trucks"
                :key="truck.id"
                class="relative w-36 px-2 text-center sm:w-40"
            >
                <span
                    v-if="index < trucks.length - 1"
                    class="absolute top-[0.68rem] left-1/2 h-px w-full bg-slate-600"
                    aria-hidden="true"
                />

                <button
                    type="button"
                    class="group relative z-10 w-full rounded-md px-1 pb-1 text-slate-400 transition-colors hover:text-sky-200 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
                    :class="{ 'text-sky-200': index === activeIndex }"
                    :aria-current="index === activeIndex ? 'step' : undefined"
                    :aria-label="`Ga naar ${truck.model}, geïntroduceerd in ${truck.startYear}`"
                    @click="emit('select', index)"
                >
                    <span
                        class="mx-auto block h-5 w-5 rounded-sm border-2 border-slate-500 bg-slate-800 shadow-[inset_0_0_0_3px_#172033] transition-colors group-hover:border-sky-300"
                        :class="{ 'border-sky-300 bg-sky-300': index === activeIndex }"
                        aria-hidden="true"
                    />
                    <span class="mt-3 block text-sm font-bold">{{ truck.model }}</span>
                    <span class="mt-0.5 block text-xs tabular-nums text-slate-500">{{ truck.startYear }}</span>
                </button>
            </li>
        </ol>
    </nav>
</template>
