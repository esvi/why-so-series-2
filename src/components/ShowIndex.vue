<template>
  <section class="show-index">
    <section class="show-index__seasons">
      <h3 class="show-index__seasons-heading">Seasons</h3>

      <b-tabs>
        <!-- Seasons -->
        <b-tab
          v-for="(season, index) in props.show.seasons"
          :key="index"
          :title="'S' + index"
        >
          <!-- Episodes -->
          <div
            v-for="(episode, index) in season"
            :key="index"
            class="show-index__episode"
          >
            <!-- Thumbnail -->
            <div class="show-index__episode-image">
              <ImageThumbnail
                v-if="episode.image"
                :image="episode.image.original"
              />
              <ImageThumbnail
                v-else
                :image="require(`@/assets/img/placeholder-landscape.jpg`)"
              />
            </div>

            <!-- Summary -->
            <div class="show-index__episode-meta">
              <h4 v-if="episode.name">
                E{{ episode.number }}: {{ episode.name }}
              </h4>

              <h6 v-if="episode.runtime">
                Duration: {{ episode.runtime }} minutes
              </h6>

              <div
                v-if="episode.summary"
                v-html="episode.summary"
                class="show-index__episode-plot"
              ></div>
            </div>
          </div>
        </b-tab>
      </b-tabs>
    </section>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import ImageThumbnail from "./ImageThumbnail.vue";

const props = defineProps<{
  show: any;
}>();
</script>

<style scoped lang="scss">
@import "../assets/scss/global.scss";

.show-index {
  &__seasons {
    position: relative;
    @include margin-top(0.5);

    &-heading {
      @include margin-bottom(0.5);
      text-transform: uppercase;
    }

    ::v-deep .nav-tabs {
      @include margin-bottom(0.5);

      & .nav-item {
        & .nav-link {
          width: 3.125rem;
          height: 3.125rem;
          padding: 0.313rem !important;
          margin: 0 1px 0 0 !important;
          color: $green-highlight;
          border: 1px solid $green-highlight !important;
          @include transition(all, 0.5s, ease-in-out);

          &.active,
          &:hover {
            color: white;
            background-color: $green-highlight;
            @include transition(all, 0.5s, ease-in-out);
          }
        }
      }
    }
  }

  &__episode {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 100%;
    grid-template-areas: "image" "meta";
    @include padding-bottom(0.5);
    @include padding-top(0.5);
    @include dashed-border-bottom;

    @include media-breakpoint-up(md) {
      grid-template-columns: 50% 50%;
      grid-template-areas: "image meta";
    }

    @include media-breakpoint-up(lg) {
      grid-template-columns: 30% 70%;
    }

    &:last-of-type {
      @include no-dashed-border-bottom;
    }

    &-image {
      grid-area: image;
      @include margin-bottom(0.5);

      @include media-breakpoint-up(md) {
        @include padding-right(0.5);
        @include margin-bottom(0);
      }
    }

    &-meta {
      grid-area: meta;
      @include padding-right(1);
    }

    &-plot {
      @include margin-top(0.5);
    }
  }
}
</style>
