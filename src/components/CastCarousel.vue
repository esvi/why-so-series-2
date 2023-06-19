<template>
  <section class="cast-carousel wss-carousel">
    <!-- Carousel -->
    <Carousel v-bind="settings">
      <!-- Slide -->
      <Slide v-for="(actor, index) in props.cast" :key="index">
        <div class="carousel__item">
          <!-- Thumbnail -->
          <ImageThumbnail
            v-if="actor.person.image"
            :image="actor.person.image.medium"
          />

          <div class="wss-carousel__overlay">
            <!-- Actor -->
            <h5
              v-if="actor.person && actor.character"
              class="text-center wss-carousel__text"
            >
              {{ actor.person.name }}

              <hr />

              <small class="d-block">as {{ actor.character.name }}</small>
            </h5>
          </div>
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
import { defineProps } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import ImageThumbnail from "./ImageThumbnail.vue";

const props = defineProps<{
  cast: Array<any>;
}>();

// TODO: Create interface
const settings = {
  itemsToShow: 2.5,
  itemsToScroll: 1,
  wrapAround: true,
  transition: 500,
  snapAlign: "left",
  breakpoints: {
    576: { itemsToShow: 3.5, itemsToScroll: 3 },
    768: { itemsToShow: 4.5, itemsToScroll: 4 },
    992: { itemsToShow: 5.5, itemsToScroll: 5 },
    1200: { itemsToShow: 5.5, itemsToScroll: 5 },
    1400: { itemsToShow: 7.5, itemsToScroll: 7 },
    1600: { itemsToShow: 8.5, itemsToScroll: 8 },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/global.scss";
@import "../assets/scss/carousel.scss";
</style>
