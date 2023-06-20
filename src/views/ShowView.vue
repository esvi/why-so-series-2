<!-- Listing view for shows -->
<template>
  <section class="show">
    <section class="show__details">
      <!-- Thumbnail -->
      <section class="show__image">
        <ImageThumbnail v-if="show.image" :image="show.image.original" />
      </section>

      <!-- Details -->
      <section class="show__meta">
        <ShowSummary :show="show" :type="'details'" />
      </section>

      <!-- Cast -->
      <section class="show__cast">
        <ShowCast :show="show" />
      </section>

      <!-- Index -->
      <section class="show__index">
        <ShowIndex :show="show" />
      </section>
    </section>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useSeriesStore } from "../store";
import { useRoute } from "vue-router";
import { onMounted, computed } from "vue";
import ShowSummary from "../components/ShowSummary.vue";
import ShowCast from "../components/ShowCast.vue";
import ShowIndex from "../components/ShowIndex.vue";
import ImageThumbnail from "../components/ImageThumbnail.vue";

const store = useSeriesStore();
const { show } = storeToRefs(store);
const route = useRoute();
const id = computed(() => route.params.id);

onMounted(() => {
  store.getShowById(id.value as string);
});
</script>

<style scoped lang="scss">
@import "../assets/scss/global.scss";

.show {
  &__details {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 100%;
    grid-template-areas: "image" "meta" "cast" "index";

    @include media-breakpoint-up(md) {
      grid-template-columns: 50% 50%;
      grid-template-areas: "image meta" "cast cast" "index index";
    }

    @include media-breakpoint-up(lg) {
      grid-template-columns: 30% 70%;
    }
  }

  &__image {
    grid-area: image;
    @include margin-bottom(1);

    @include media-breakpoint-up(md) {
      @include padding-right(1);
    }
  }

  &__meta {
    grid-area: meta;
    @include margin-bottom(1.5);
  }

  &__cast {
    grid-area: cast;
    @include dashed-border-top;
  }

  &__index {
    grid-area: index;
    @include dashed-border-top;
  }
}
</style>
