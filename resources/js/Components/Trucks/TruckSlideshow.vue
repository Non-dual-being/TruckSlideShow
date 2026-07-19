<script setup lang="ts">
import { A11y, Keyboard, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import type { Truck } from '@/types/truck';

import TruckSlide from './TruckSlide.vue';

interface Props {
    trucks: Truck[];
}

defineProps<Props>();
</script>

<template>
    <section aria-label="Volvo-tijdreis">
        <Swiper
            :modules="[A11y, Keyboard, Navigation, Pagination]"
            :slides-per-view="1"
            :speed="700"
            :keyboard="{ enabled: true }"
            :navigation="true"
            :pagination="{
                clickable: true,
                dynamicBullets: true,
            }"
            class="truck-swiper"
        >
            <SwiperSlide
                v-for="(truck, index) in trucks"
                :key="truck.id"
            >
                <TruckSlide
                    :truck="truck"
                    :position="index + 1"
                    :total="trucks.length"
                />
            </SwiperSlide>
        </Swiper>
    </section>
</template>

<style>
.truck-swiper {
    --swiper-navigation-color: #ffffff;
    --swiper-pagination-color: #38bdf8;
    --swiper-pagination-bullet-inactive-color: #cbd5e1;
    --swiper-pagination-bullet-inactive-opacity: 0.45;
}

.truck-swiper .swiper-button-prev,
.truck-swiper .swiper-button-next {
    width: 3.5rem;
    height: 3.5rem;
    border: 1px solid rgb(255 255 255 / 20%);
    border-radius: 9999px;
    background: rgb(15 23 42 / 70%);
    backdrop-filter: blur(12px);
}

.truck-swiper .swiper-button-prev::after,
.truck-swiper .swiper-button-next::after {
    font-size: 1rem;
    font-weight: 800;
}

@media (max-width: 640px) {
    .truck-swiper .swiper-button-prev,
    .truck-swiper .swiper-button-next {
        display: none;
    }
}
</style>