<!-- Listing view for shows -->
<template>
  <section class="show show-details">
    <!-- Thumbnail -->
    <section class="show-details__image">
      <ImageThumbnail v-if="show.image" :image="show.image.original" />
    </section>

    <!-- Show meta data -->
    <section class="show-details__meta">
      <ShowSummary :show="show" :type="'details'" />
    </section>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { onMounted, watch, computed } from "vue";
import { useSeriesStore } from "../store";

import ShowSummary from "../components/ShowSummary.vue";
import ImageThumbnail from "../components/ImageThumbnail.vue";

const store = useSeriesStore();
const { show } = storeToRefs(store);
const route = useRoute();
const id = computed(() => route.params.id);

onMounted(() => {
  store.getShowById(id);
});
</script>

<style scoped lang="scss">
@import "../assets/scss/global.scss";

.show-details {
  @include display-flex;
  @include flex-direction(column);
  @include flex-wrap(nowrap);
  @include align-items(flex-start);
  @include justify-content(flex-start);

  @include media-breakpoint-up(lg) {
    @include flex-direction(row);
  }

  &__image {
    width: 100%;

    @include media-breakpoint-up(lg) {
      width: 50%;
      max-width: 600px;
      @include marginRight(1);
    }
  }

  &__meta {
    width: 100%;

    @include media-breakpoint-up(lg) {
      max-width: calc(100% - 600px);
    }
  }
}
</style>
