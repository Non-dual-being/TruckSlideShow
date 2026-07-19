<script setup lang="ts">
import type { Truck } from '@/types/truck';

interface Props {
    truck: Truck;
    position: number;
    total: number;
}

defineProps<Props>();

const fallbackImage = '/images/trucks/placeholder-truck.svg';

function handleImageError(event: Event): void {
    const image = event.currentTarget;

    if (!(image instanceof HTMLImageElement)) {
        return;
    }

    if (image.dataset.fallbackApplied === 'true') {
        return;
    }

    image.dataset.fallbackApplied = 'true';
    image.src = fallbackImage;
}
</script>

<template>
    <article class="relative min-h-screen overflow-hidden bg-slate-950 text-white">
        <img
            :src="truck.image.src"
            :alt="truck.image.alt"
            class="absolute inset-0 h-full w-full object-cover opacity-35"
            @error="handleImageError"
        >

        <div
            class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/30"
        />

        <div
            class="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 sm:px-10 md:px-28 lg:px-32 xl:px-16"
        >
            <div class="max-w-3xl">
                <div class="mb-8 flex items-center gap-4">
                    <span
                        class="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur"
                    >
                        Generatie {{ String(position).padStart(2, '0') }}
                        /
                        {{ String(total).padStart(2, '0') }}
                    </span>

                    <span class="text-sm uppercase tracking-[0.25em] text-sky-300">
                        {{ truck.startYear }}
                        <template v-if="truck.endYear">
                            — {{ truck.endYear }}
                        </template>
                    </span>
                </div>

                <p class="text-lg font-semibold text-sky-300">
                    {{ truck.tagline }}
                </p>

                <h2 class="mt-4 text-6xl font-black tracking-tight sm:text-7xl lg:text-8xl">
                    {{ truck.model }}
                </h2>

                <p class="mt-5 text-xl font-medium text-slate-300">
                    {{ truck.generation }}
                </p>

                <p class="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                    {{ truck.description }}
                </p>

                <dl class="mt-10 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
                    <div
                        v-for="specification in truck.specifications"
                        :key="specification.label"
                    >
                        <dt class="text-xs uppercase tracking-widest text-slate-500">
                            {{ specification.label }}
                        </dt>

                        <dd class="mt-2 font-semibold text-slate-100">
                            {{ specification.value }}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
        <div
            v-if="
                truck.image.creator
                || truck.image.sourceName
                || truck.image.licenseName
            "
            class="absolute bottom-4 right-4 z-20 max-w-sm rounded-md bg-slate-950/75 px-3 py-2 text-right text-[0.7rem] leading-5 text-slate-300 backdrop-blur"
        >
            <span v-if="truck.image.creator">
                Foto: {{ truck.image.creator }}
            </span>

            <span v-if="truck.image.sourceName">
                · {{ truck.image.sourceName }}
            </span>

            <a
                v-if="truck.image.sourceUrl"
                :href="truck.image.sourceUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="ml-1 underline decoration-slate-500 underline-offset-2 hover:text-white"
            >
                bron
            </a>

            <a
                v-if="truck.image.licenseUrl"
                :href="truck.image.licenseUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="ml-1 underline decoration-slate-500 underline-offset-2 hover:text-white"
            >
                {{ truck.image.licenseName ?? 'licentie' }}
            </a>

            <span> · bijgesneden/geoptimaliseerd</span>
        </div>
    </article>
</template>
