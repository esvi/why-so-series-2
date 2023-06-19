<template>
  <div v-show="rating" class="star-rating">
    <!-- No rating (But default to .5 star) -->
    <div v-if="!rating || rating === 0" class="star-rating__stars">
      <font-awesome-icon icon="star-half" />
    </div>

    <!-- Stars -->
    <div v-else class="star-rating__stars">
      <font-awesome-icon
        v-for="index in floorRating"
        :key="index"
        icon="star"
      />

      <!-- If rating is not round number show some indication with .5 star -->
      <font-awesome-icon v-if="rating > floorRating" icon="star-half" />
    </div>

    <small>({{ rating }})</small>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";

const props = defineProps<{
  rating: number;
}>();
const floorRating = computed(() => Math.floor(props.rating));
</script>

<style scoped lang="scss">
@import "../assets/scss/global.scss";

.star-rating {
  @include display-flex;
  @include flex-direction(row);

  & svg {
    font-size: 18px;
    margin-right: 5px;
    width: 20px;
    height: 20px;
  }

  &__stars {
    @include display-flex;
    @include flex-direction(row);
    @include flex-wrap(nowrap);
    @include align-items(center);
    @include justify-content(flex-start);
  }
}
</style>
