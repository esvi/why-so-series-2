<template>
  <section class="show-carousel wss-carousel">
    <!-- Carousel -->
    <Carousel v-bind="settings" :breakpoints="breakpoints">
      <!-- Slide -->
      <Slide v-for="(show, index) in props.shows" :key="index">
        <div class="wss-carousel__item">
          <router-link :to="{ path: '/show/' + show.id }">
            <!-- Thumbnail -->
            <ImageThumbnail v-if="show.image" :image="show.image.medium" />

            <div class="wss-carousel__overlay">
              <!-- Star rating -->
              <div v-if="show.rating" class="wss-carousel__rating">
                <font-awesome-icon icon="star" />
                {{ show.rating.average }}
              </div>

              <!-- Title & premiere year -->
              <h4
                v-if="show.name"
                class="text-center text-white wss-carousel__text"
              >
                {{ show.name }}

                <hr />

                <small v-if="show.premiered" class="d-block">
                  Premiered {{ show.premiered }}
                </small>
              </h4>
            </div>
          </router-link>
        </div>
      </Slide>

      <!-- Navigation -->
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </section>
</template>

<script setup lang="ts">
// Imports: Vue
import { defineProps } from "vue";

// Imports: Third-party
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

// Imports: Components
import ImageThumbnail from "./ImageThumbnail.vue";

// Props: Component
const props = defineProps<{
  shows: Array<any>;
}>();

// Props: Carousel
const settings = {
  itemsToShow: 1.5,
  itemsToScroll: 1,
  wrapAround: true,
  transition: 500,
  snapAlign: "left",
};
const breakpoints = {
  360: { itemsToShow: 2.5, itemsToScroll: 2 },
  576: { itemsToShow: 3.5, itemsToScroll: 3 },
  768: { itemsToShow: 4.5, itemsToScroll: 4 },
  960: { itemsToShow: 5.5, itemsToScroll: 5 },
  1025: { itemsToShow: 6.5, itemsToScroll: 6 },
  1200: { itemsToShow: 7.5, itemsToScroll: 7 },
  1400: { itemsToShow: 8.5, itemsToScroll: 8 },
  1600: { itemsToShow: 9.5, itemsToScroll: 9 },
  1800: { itemsToShow: 10.5, itemsToScroll: 10 },
  2000: { itemsToShow: 11.5, itemsToScroll: 11 },
  2200: { itemsToShow: 12.5, itemsToScroll: 12 },
  2400: { itemsToShow: 14.5, itemsToScroll: 14 },
  2600: { itemsToShow: 16.5, itemsToScroll: 16 },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/global.scss";
@import "../assets/scss/carousel.scss";
</style>
