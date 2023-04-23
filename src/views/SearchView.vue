<!-- Listing view for shows -->
<template>
  <div class="search show-search-results">
    <div v-if="results.length">
      <div
        v-for="(result, index) in results"
        :key="index"
        class="show-search-results__results"
      >
        <!-- Thumbnail -->
        <div class="show-search-results__image">
          <router-link :to="{ path: '/show/' + result.show.id }">
            <ImageThumbnail
              v-if="result.show.image"
              :image="result.show.image.original"
            />
          </router-link>
        </div>

        <div class="show-search-results__meta">
          <ShowSummary :show="result.show" :type="'search'" />
        </div>
      </div>
    </div>

    <div v-else>
      <ErrorMessage />
    </div>
  </div>
</template>

<script setup lang="ts">
// Imports: Store
import { storeToRefs } from "pinia";
import { useSeriesStore } from "../store";

// Imports: Components
import ShowSummary from "../components/ShowSummary.vue";
import ErrorMessage from "../components/ErrorMessage.vue";
import ImageThumbnail from "../components/ImageThumbnail.vue";

// Props: Store
const store = useSeriesStore();
const { results } = storeToRefs(store);
</script>

<style scoped lang="scss">
@import "../assets/scss/global.scss";

.show-search-results {
  &__results {
    @include display-flex;
    @include flex-direction(column);
    @include align-items(flex-start);
    @include justify-content(flex-start);
    @include marginBottom(0.5);
    @include paddingBottom(0.5);
    border-bottom: 1px dashed $gold-highlight;

    &:last-of-type {
      border-bottom: 0;
    }

    @include media-breakpoint-up(sm) {
      @include flex-direction(row);
    }
  }

  &__image {
    width: 100%;
    @include marginBottom(1.5);

    @include media-breakpoint-up(sm) {
      width: 50%;
      max-width: 300px;
      @include paddingRight(1);
      @include marginBottom(0);
    }
  }

  &__meta {
    width: 100%;
  }
}
</style>
