<template>
  <div class="show-summary">
    <!-- Title & status -->
    <div v-if="props.show.name">
      <h2 v-if="props.type === 'search'">
        {{ props.show.name }}
      </h2>

      <h1 v-else class="show-summary__title">
        {{ props.show.name }}
      </h1>
    </div>

    <!-- Premiered date -->
    <h6 v-if="props.show.premiered">Premiered on {{ props.show.premiered }}</h6>

    <!-- Star rating-->
    <StarRating v-if="props.show.rating" :rating="props.show.rating.average" />

    <!-- Genres -->
    <h5
      v-if="props.type === 'details' && props.show.genres"
      class="show-summary__genres text-uppercase"
    >
      <span v-for="(genre, index) in props.show.genres" :key="index">
        {{ genre }}
        <span v-if="index !== props.show.genres.length - 1"> | </span>
      </span>
    </h5>

    <!-- Plot summary -->
    <div v-if="props.show.summary" class="show-summary__summary">
      <h3 v-if="props.type === 'details'" class="show-summary__plot-heading">
        Plot
      </h3>
      <div v-html="props.show.summary"></div>
    </div>

    <!-- Schedule -->
    <h5 v-if="props.show.schedule" class="show-summary__schedule">
      <span v-if="props.show.schedule.days && props.show.schedule.time">
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

    <!-- Cast -->
    <div
      v-if="props.type === 'details' && props.show.cast"
      class="show-summary__cast"
    >
      <h3 v-if="props.show.cast" class="show-summary__cast-heading">Cast</h3>

      <CarouselCast v-if="props.show.cast" :cast="props.show.cast" />
    </div>

    <!-- Seasons -->
    <div
      v-if="props.type === 'details' && props.show.seasons"
      class="show-summary__seasons"
    >
      <h3 class="show-summary__seasons-heading">Seasons</h3>

      <b-tabs>
        <b-tab
          v-for="(season, index) in props.show.seasons"
          :key="index"
          :title="'Season ' + index"
        >
          <div
            v-for="(episode, index) in season"
            :key="index"
            class="show-summary__episode"
          >
            <div class="show-summary__episode-image">
              <ImageThumbnail
                v-if="episode.image"
                :image="episode.image.original"
              />
              <ImageThumbnail
                v-else
                :image="require(`@/assets/img/placeholder-landscape.jpg`)"
              />
            </div>

            <div class="show-summary__episode-summary">
              <h4 v-if="episode.name">
                Episode {{ episode.number }}: {{ episode.name }}
              </h4>

              <h6 v-if="episode.runtime">
                Duration: {{ episode.runtime }} minutes
              </h6>

              <div
                v-if="episode.summary"
                v-html="episode.summary"
                class="show-summary__episode-plot"
              ></div>
            </div>
          </div>
        </b-tab>
      </b-tabs>
    </div>

    <!-- Details -->
    <div v-if="props.type === 'search'" class="show-summary__link">
      <router-link :to="{ path: '/show/' + props.show.id }">
        <b-button variant="outline-info"> View Show Details </b-button>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
// Imports: Vue
import { defineProps } from "vue";

// Imports: Components
import ImageThumbnail from "./ImageThumbnail.vue";
import CarouselCast from "./CarouselCast.vue";
import StarRating from "./StarRating.vue";

// Props
const props = defineProps<{
  show: any;
  type: string;
}>();
</script>

<style scoped lang="scss">
@import "../assets/scss/global.scss";

.show-summary {
  &__summary {
    @include paddingRight(1);
  }

  &__title {
    @include marginBottom(0.25);
    @include paddingBottom(0.25);
    border-bottom: 1px dashed $gold-highlight;
  }

  &__plot {
    &-heading {
      @include marginBottom(0.5);
      text-transform: uppercase;
    }
  }

  &__schedule,
  &__summary,
  &__genres,
  &__link {
    @include marginTop(0.5);
  }

  &__cast,
  &__seasons {
    position: relative;
    @include marginTop(0.5);

    &-heading {
      @include marginBottom(0.5);
      text-transform: uppercase;
    }
  }

  &__episode {
    @include display-flex;
    @include align-items(flex-start);
    @include justify-content(flex-start);
    @include flex-direction(column);
    @include flex-wrap(wrap);
    @include paddingBottom(0.5);
    @include paddingTop(0.5);
    border-bottom: 1px dashed $gold-highlight;

    &:last-of-type {
      border-bottom: 0;
    }

    @include media-breakpoint-up(xl) {
      @include flex-direction(row);
      @include flex-wrap(nowrap);
    }

    &-image {
      width: 100%;
      @include marginBottom(0.5);

      @include media-breakpoint-up(xl) {
        width: 50%;
        max-width: 250px;
        @include marginRight(0.5);
        margin-bottom: 0;
      }
    }

    &-summary {
      width: 100%;
      @include paddingRight(1);
    }

    &-plot {
      @include marginTop(0.5);
    }
  }

  &__nav {
    position: absolute;
    width: 44px;
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
}
</style>
