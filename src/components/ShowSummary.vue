<template>
  <section class="show-summary">
    <!-- Title & status -->
    <section v-if="props.show.name">
      <h2 v-if="props.type === 'search'">
        {{ props.show.name }}
        <span v-if="props.show.premiered || props.show.ended">
          ({{ datesToRuntime(props.show.premiered, props.show.ended) }})
        </span>
      </h2>

      <h1 v-else class="show-summary__title">
        {{ props.show.name }}
        <span v-if="props.show.premiered || props.show.ended">
          ({{ datesToRuntime(props.show.premiered, props.show.ended) }})
        </span>
      </h1>
    </section>

    <section class="show-summary__meta">
      <!-- Genres -->
      <h5
        v-if="props.show.genres && props.show.genres.length"
        class="show-summary__genres"
      >
        <span v-for="(genre, index) in props.show.genres" :key="index">
          {{ genre }}
          <span v-if="index !== props.show.genres.length - 1"> · </span>
        </span>
      </h5>

      <!-- Star rating-->
      <section
        v-if="props.show.rating && props.show.rating.average"
        class="show-summary__rating"
      >
        <StarRating :rating="props.show.rating.average" />
      </section>
    </section>

    <!-- Plot summary -->
    <section v-if="props.show.summary" class="show-summary__plot">
      <h3 v-if="props.type === 'details'" class="show-summary__plot-heading">
        Plot Summary
      </h3>
      <section v-html="props.show.summary"></section>
    </section>

    <!-- Schedule -->
    <h5
      v-if="
        props.show.schedule &&
        props.show.schedule.days &&
        props.show.schedule.time
      "
      class="show-summary__schedule"
    >
      <span>
        Showing every
        <span v-for="(day, index) in props.show.schedule.days" :key="index"
          >{{ day
          }}<span v-if="index !== props.show.schedule.days.length - 1"
            >,
          </span></span
        >
        at {{ props.show.schedule.time
        }}<span v-if="props.show.network">
          on the
          <a :href="props.show.officialSite" target="_blank">{{
            props.show.network.name
          }}</a>
          network</span
        >.
      </span>
    </h5>

    <!-- Details -->
    <section v-if="props.type === 'search'" class="show-summary__link">
      <router-link :to="{ path: '/show/' + props.show.id }">
        <b-button variant="outline-info"> View Show Details </b-button>
      </router-link>
    </section>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { datesToRuntime } from "../filters";
import StarRating from "./StarRating.vue";

const props = defineProps<{
  show: any;
  type: string;
}>();
</script>

<style scoped lang="scss">
@import "../assets/scss/global.scss";

.show-summary {
  &__title {
    text-transform: uppercase;
  }

  &__meta {
    @include padding-bottom(0.75);
    @include dashed-border;
  }

  &__genres {
    @include margin-top(0.5);
  }

  &__plot {
    @include margin-top(0.75);
    @include padding-right(1);

    &-heading {
      @include margin-bottom(0.5);
      text-transform: uppercase;
    }
  }

  &__schedule {
    @include margin-top(0.75);
  }

  &__link {
    @include margin-top(0.75);

    ::v-deep button {
      &:hover {
        color: white;
      }
    }
  }
}
</style>
