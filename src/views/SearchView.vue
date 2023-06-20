<!-- Listing view for shows -->
<template>
  <section class="search show-search-results">
    <!-- Results -->
    <section v-if="results.length">
      <section
        v-for="(result, index) in results"
        :key="index"
        class="show-search-results__results"
      >
        <!-- Thumbnail (with link) -->
        <section class="show-search-results__image">
          <router-link :to="{ path: '/show/' + result.show.id }">
            <ImageThumbnail
              v-if="result.show.image"
              :image="result.show.image.original"
            />
          </router-link>
        </section>

        <!-- Summary -->
        <section class="show-search-results__meta">
          <ShowSummary :show="result.show" :type="'search'" />
        </section>
      </section>
    </section>

    <!-- Error Message -->
    <section v-else>
      <ErrorMessage :message="errorMessage" />
    </section>
  </section>
</template>

<script setup lang="ts">
import { Message } from "@/types";
import { storeToRefs } from "pinia";
import { useSeriesStore } from "../store";
import ShowSummary from "../components/ShowSummary.vue";
import ErrorMessage from "../components/ErrorMessage.vue";
import ImageThumbnail from "../components/ImageThumbnail.vue";

const store = useSeriesStore();
const { results } = storeToRefs(store);

const errorMessage = {
  type: "error",
  name: "Oh no :(",
  description:
    "That show doesn't seem to be available yet, or something went horribly wrong!",
} as Message;
</script>

<style scoped lang="scss">
@import "../assets/scss/global.scss";

.show-search-results {
  &__results {
    @include display-flex;
    @include flex-direction(column);
    @include align-items(flex-start);
    @include justify-content(flex-start);
    @include margin-bottom(0.5);
    @include padding-bottom(0.5);
    @include dashed-border;

    &:last-of-type {
      @include no-dashed-border;
    }

    @include media-breakpoint-up(sm) {
      @include flex-direction(row);
    }
  }

  &__image {
    width: 100%;
    @include margin-bottom(1.5);

    @include media-breakpoint-up(sm) {
      width: 50%;
      max-width: 18.75rem;
      @include padding-right(1);
      @include margin-bottom(0);
    }
  }

  &__meta {
    width: 100%;
  }
}
</style>
