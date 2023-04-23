<!-- Listing view for shows -->
<template>
  <section class="show">
    <!-- Thumbnail -->
    <section class="show__image">
      <ImageThumbnail v-if="show.image" :image="show.image.original" />
    </section>

    <!-- Show details -->
    <section class="show__meta">
      <ShowSummary :show="show" :type="'details'" />
    </section>
  </section>
</template>

<script setup lang="ts">
// Imports: Store
import { storeToRefs } from "pinia";
import { useSeriesStore } from "../store";

// Imports: Router
import { useRoute } from "vue-router";

// Imports: Vue
import { onMounted, computed } from "vue";

// Imports: Components
import ShowSummary from "../components/ShowSummary.vue";
import ImageThumbnail from "../components/ImageThumbnail.vue";

// Props: Store
const store = useSeriesStore();
const { show } = storeToRefs(store);

// Props: Router
const route = useRoute();

// Props: Computed
const id = computed(() => route.params.id);

// Hooks
onMounted(() => {
  store.getShowById(id.value.toString()); // Make sure ID is of type string
});
</script>

<style scoped lang="scss">
@import "../assets/scss/global.scss";

.show {
  @include display-flex;
  @include flex-direction(column);
  @include flex-wrap(nowrap);
  @include align-items(flex-start);
  @include justify-content(flex-start);

  @include media-breakpoint-up(sm) {
    @include flex-direction(row);
  }

  &__image {
    width: 100%;
    @include marginBottom(1.5);

    @include media-breakpoint-up(sm) {
      width: 50%;
      max-width: 600px;
      @include paddingRight(1);
    }
  }

  &__meta {
    width: 100%;
  }
}
</style>
