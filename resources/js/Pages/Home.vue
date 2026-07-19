<script setup lang="ts">
import { Head } from '@inertiajs/vue3';

interface Props {
    dedication: string;
}

defineProps<Props>();
</script>

<template>
    <Head title="Wims Volvo-tijdreis" />

    <main class="min-h-screen bg-slate-950 text-white">
        <section
            class="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-16 sm:px-10 lg:px-16"
        >
            <p class="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
                Van F88 tot FH
            </p>

            <h1 class="max-w-4xl text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl">
                Wims Volvo-tijdreis
            </h1>

            <p class="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                {{ dedication }}
            </p>

            <div class="mt-12">
                <button
                    type="button"
                    class="rounded-full bg-white px-7 py-4 font-semibold text-slate-950 transition hover:bg-sky-300"
                >
                    Start de reis
                </button>
            </div>

            <p class="mt-16 text-sm text-slate-500">
                Eerste technische proefversie
            </p>
        </section>
    </main>
</template>
