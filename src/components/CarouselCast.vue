<template>
  <section class="carousel-shows">
    <Carousel v-bind="settings" :breakpoints="breakpoints">
      <Slide v-for="(show, index) in props.cast" :key="index">
        <div class="carousel__item">
          <router-link :to="{ path: '/show/' + show.id }">
            <ImageThumbnail v-if="show.image" :image="show.image.medium" />

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
  </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import ImageThumbnail from "./ImageThumbnail.vue";

const props = defineProps<{
  cast: Array<any>;
}>();

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
	.show-carousel {
		position: relative;
		@include marginBottom(1);

		&__nav {
			position: absolute;
			width: 74px;
			height: 88px;
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
				font-size: 48px;
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
			cursor: pointer;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 100;
			opacity: 0;
			background: rgba(0, 0, 0, 0.5);
			@include transition(opacity, 0.5s, ease-in-out);
			@include display-flex;
			@include align-items(center);
			@include justify-content(center);
			@include flex-direction(row);
			@include flex-wrap(wrap);
			@include paddingLeft(0.25);
			@include paddingRight(0.25);

			&:hover {
				opacity: 1;
				@include transition(opacity, 0.5s, ease-in-out);
			}
		}

		&__rating {
			position: absolute;
			min-width: 55px;
			text-align: center;
			top: 0;
			right: 0;
			padding: 5px;
			background: darken($gold-highlight, 5);
			color: white;
		}
	}
  */
</style>
