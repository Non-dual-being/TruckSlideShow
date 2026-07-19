<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Swiper as SwiperInstance } from 'swiper';
import { A11y, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import type { Truck } from '@/types/truck';

import TruckGearTimeline from './TruckGearTimeline.vue';
import TruckSideGearControls from './TruckSideGearControls.vue';
import TruckSlide from './TruckSlide.vue';
import TruckSteeringControls from './TruckSteeringControls.vue';

interface Props {
    trucks: Truck[];
}

const props = defineProps<Props>();

const swiperInstance = ref<SwiperInstance | null>(null);
const activeIndex = ref(0);

const isFirstSlide = computed(() => activeIndex.value === 0);
const isLastSlide = computed(() => activeIndex.value === props.trucks.length - 1);
const activeTruck = computed(() => props.trucks[activeIndex.value]);

function setSwiper(instance: SwiperInstance): void {
    swiperInstance.value = instance;
    activeIndex.value = instance.activeIndex;
}

function updateActiveIndex(instance: SwiperInstance): void {
    activeIndex.value = instance.activeIndex;
}

function goToPrevious(): void {
    swiperInstance.value?.slidePrev();
}

function goToNext(): void {
    swiperInstance.value?.slideNext();
}

function goToSlide(index: number): void {
    swiperInstance.value?.slideTo(index);
}
</script>

<template>
    <section aria-label="Volvo-tijdreis">
        <div class="relative">
            <Swiper
                :modules="[A11y, Keyboard]"
                :slides-per-view="1"
                :speed="700"
                :keyboard="{ enabled: true }"
                :a11y="{ enabled: true }"
                class="truck-swiper"
                @swiper="setSwiper"
                @slide-change="updateActiveIndex"
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

            <TruckSideGearControls
                :active-index="activeIndex"
                :total="trucks.length"
                @previous="goToPrevious"
                @next="goToNext"
            />
        </div>

        <div class="border-t border-slate-700 bg-[#101827] px-4 py-4 text-white sm:px-8">
            <div class="mx-auto max-w-7xl">
                <TruckGearTimeline
                    :trucks="trucks"
                    :active-index="activeIndex"
                    @select="goToSlide"
                />

                <div class="mt-3 border-t border-slate-700/70 pt-4">
                    <TruckSteeringControls
                        :is-first="isFirstSlide"
                        :is-last="isLastSlide"
                        :active-index="activeIndex"
                        :total="trucks.length"
                        :model="activeTruck?.model ?? ''"
                        @previous="goToPrevious"
                        @next="goToNext"
                    />
                </div>
            </div>
        </div>
    </section>
</template>
