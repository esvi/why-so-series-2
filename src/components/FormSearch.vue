<template>
  <!-- Navbar -->
  <b-nav-form v-if="props.section === 'nav'" @submit.prevent="search">
    <!-- Input -->
    <b-form-input
      class="mr-1"
      placeholder="Find a show"
      name="query"
      :value="queryString"
    ></b-form-input>

    <!-- Submit -->
    <b-button size="sm" variant="info" type="submit">
      <font-awesome-icon icon="search" />
    </b-button>
  </b-nav-form>

  <!-- Error -->
  <b-nav-form
    v-else-if="props.section === 'error'"
    @submit.prevent="search"
    inline
  >
    <!-- Input -->
    <b-form-input
      placeholder="Find another show"
      name="query"
      :value="queryString"
    ></b-form-input>

    <!-- Submit -->
    <b-button size="sm" variant="info" type="submit">
      <font-awesome-icon icon="search" />
    </b-button>
  </b-nav-form>

  <!-- Search -->
  <b-nav-form v-else @submit.prevent="search" inline>
    <!-- Input -->
    <b-form-input
      placeholder="Find another show"
      name="query"
      :value="queryString"
    ></b-form-input>

    <!-- Submit -->
    <b-button size="sm" variant="info" type="submit">
      <font-awesome-icon icon="search" />
    </b-button>
  </b-nav-form>
</template>

<script setup lang="ts">
import { useSeriesStore } from "../store";
import { computed, defineProps } from "vue";
import { useRoute } from "vue-router";

const store = useSeriesStore();
const route = useRoute();

// TODO: Create interface
const props = defineProps<{
  section: "nav" | "error" | "search";
}>();
const queryString = computed(() => route.params.q);

function search(event: any) {
  store.getShowsByQuery(event.target.elements.query.value as string);
}
</script>

<style scoped lang="scss">
@import "../assets/scss/global.scss";

form {
  width: 100%;

  @include media-breakpoint-up(sm) {
    width: auto;
    max-width: 36rem;
  }

  // Override Bootstrap
  ::v-deep button {
    color: white !important;
  }
}
</style>
