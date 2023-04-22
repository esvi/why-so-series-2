<template>
  <section class="carousel-cast">
    <!-- Carousel -->
    <Carousel v-bind="settings" :breakpoints="breakpoints">
      <!-- Slide -->
      <Slide v-for="(actor, index) in props.cast" :key="index">
        <div class="carousel__item">
          <!-- Thumbnail -->
          <ImageThumbnail
            v-if="actor.person.image"
            :image="actor.person.image.medium"
          />

          <div class="show-carousel__overlay">
            <!-- Actor -->
            <h5 v-if="actor.person && actor.character" class="text-center">
              {{ actor.person.name }}
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
// Imports: Vue
import { defineProps } from "vue";

// Imports: Third-party
import { Carousel, Slide, Navigation } from "vue3-carousel";

// Imports: Components
import ImageThumbnail from "./ImageThumbnail.vue";

// Props: Component
const props = defineProps<{
  cast: Array<any>;
}>();

// Props: Carousel
const settings = {
  itemsToShow: 1,
  itemsToScroll: 1,
};
const breakpoints = {
  380: { itemsToShow: 2, itemsToScroll: 2 },
  576: { itemsToShow: 3, itemsToScroll: 3 },
  768: { itemsToShow: 4, itemsToScroll: 4 },
  960: { itemsToShow: 5, itemsToScroll: 5 },
  1025: { itemsToShow: 6, itemsToScroll: 6 },
  1200: { itemsToShow: 7, itemsToScroll: 7 },
  1600: { itemsToShow: 8, itemsToScroll: 8 },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/global.scss";
/*
.cast-carousel {
  position: relative;
  &__nav {
    position: absolute;
    width: 58px;
    height: 68px;
    top: 50%;
    z-index: 200;
    @include transform(translateY(-50%));
    @include transition(all, 0.5s, ease-in-out);
    @include display-flex;
    @include align-items(center);
    @include justify-content(center);
    padding: 20px;
    opacity: 0.25;
    cursor: pointer;

    & svg {
      font-size: 28px;
    }

    &:hover {
      opacity: 1;
      background: rgba(0, 0, 0, 0.25);
      @include transition(all, 0.5s, ease-in-out);
    }

    // Touch screens
    @media (any-pointer: coarse) and (any-hover: none) {
      opacity: 1;
      background: rgba(0, 0, 0, 0.25);
    }

    &--left {
      left: 0;
    }

    &--right {
      right: 0;
    }
  }

  &__overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 100;
    opacity: 1;
    background: rgba(0, 0, 0, 0.5);
    @include transition(opacity, 0.5s, ease-in-out);
    @include display-flex;
    @include align-items(flex-end);
    @include justify-content(center);
    @include flex-direction(row);
    @include flex-wrap(wrap);
    @include padding(0.25, 0.25, 0.25, 0.25);

    &:hover {
      opacity: 1;
      @include transition(opacity, 0.5s, ease-in-out);
    }
  }
}
*/
</style>
