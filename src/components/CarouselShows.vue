<template>
  <div class="carousel-shows">
    <h1>HELLO</h1>
    <Carousel v-bind="settings" :breakpoints="breakpoints">
      <Slide v-for="(show, index) in props.shows" :key="index">
        <div class="carousel__item">
          <router-link :to="{ path: '/show/' + show.id }">
            <!-- <Thumbnail
						v-if="show.image"
						:image="show.image.medium"
					/> -->

            <div class="show-carousel__overlay">
              <div v-if="show.rating" class="show-carousel__rating">
                <font-awesome-icon icon="star" />
                {{ show.rating.average }}
              </div>

              <h3 v-if="show.name" class="text-center text-white">
                {{ show.name }}

                <small v-if="show.premiered" class="d-block">
                  {{ show.premiered }}
                </small>
              </h3>
            </div>
          </router-link>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";

// const props = defineProps({
//   shows: any,
// });

const props = defineProps<{
  shows: Array<any>;
}>();

const settings = {
  itemsToShow: 1,
};
const breakpoints = {
  // 0: { itemsToShow: 1, itemsToScroll: 1 },
  380: { itemsToShow: 2, itemsToScroll: 2 },
  576: { itemsToShow: 3, itemsToScroll: 3 },
  768: { itemsToShow: 4, itemsToScroll: 4 },
  960: { itemsToShow: 5, itemsToScroll: 5 },
  1025: { itemsToShow: 6, itemsToScroll: 6 },
  1200: { itemsToShow: 7, itemsToScroll: 7 },
  1600: { itemsToShow: 8, itemsToScroll: 8 },
};
</script>

<style scoped lang="scss"></style>
