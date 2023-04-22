<template>
  <div v-show="rating" class="star-rating">
    <!-- No rating -->
    <div v-if="!rating || rating === 0">
      <font-awesome-icon icon="star-half" />
    </div>

    <!-- Stars -->
    <div v-else>
      <div v-for="index in floorRating" :key="index">
        <font-awesome-icon icon="star" />
      </div>

      <div v-if="rating > floorRating">
        <font-awesome-icon icon="star-half" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Imports: Vue
import { defineProps, computed } from "vue";

// Props: Component
const props = defineProps<{
  rating: number;
}>();

// Props: Computed
const floorRating = computed(() => Math.floor(props.rating));
</script>

<style scoped lang="scss">
@import "../assets/scss/global.scss";

.star-rating {
  @include display-flex;
  @include flex-direction(row);
  @include flex-wrap(nowrap);
  @include align-items(center);
  @include justify-content(flex-start);

  & svg {
    font-size: 18px;
    margin-right: 5px;
    width: 20px;
    height: 20px;
  }
}
</style>
