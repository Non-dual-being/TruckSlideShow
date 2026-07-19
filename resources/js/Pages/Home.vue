<script setup lang="ts">
import { Head } from '@inertiajs/vue3';

import TruckSlideshow from '@/Components/Trucks/TruckSlideshow.vue';
import { trucks } from '@/data/trucks';

interface Props {
    dedication: string;
}

defineProps<Props>();
</script>

<template>
    <Head>
        <title>Wims Volvo-tijdreis</title>

        <meta
            head-key="description"
            name="description"
            content="Een persoonlijke reis door de geschiedenis van Volvo-vrachtwagens, van de F88 tot de moderne FH."
        >
    </Head>

    <main class="bg-slate-950">
        <section class="relative flex min-h-screen items-center overflow-hidden text-white">
            <div
                class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.18),_transparent_40%),linear-gradient(135deg,_#020617,_#0f172a_55%,_#172554)]"
            />

            <div class="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
                <p class="text-sm font-bold uppercase tracking-[0.35em] text-sky-300">
                    Van F88 tot FH
                </p>

                <h1 class="mt-6 max-w-5xl text-6xl font-black tracking-tight sm:text-8xl">
                    Wims Volvo-tijdreis
                </h1>

                <p class="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                    {{ dedication }}
                </p>

                <a
                    href="#tijdreis"
                    class="mt-12 inline-flex rounded-full bg-white px-7 py-4 font-bold text-slate-950 transition hover:bg-sky-300 focus:outline-none focus:ring-4 focus:ring-sky-300/40"
                >
                    Start de reis
                </a>
            </div>
        </section>

        <div id="tijdreis">
            <TruckSlideshow :trucks="trucks" />
        </div>
    </main>
</template>