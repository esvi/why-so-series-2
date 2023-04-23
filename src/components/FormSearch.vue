<template>
  <!-- Navbar -->
  <b-nav-form v-if="props.type === 'nav'" @submit.prevent="search">
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

  <!-- Error page -->
  <b-nav-form
    v-else-if="props.type === 'error'"
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

  <!-- Search results page -->
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
// Imports: Store
import { useSeriesStore } from "../store";

// Imports: Vue
import { computed, defineProps } from "vue";

// Imports: Router
import { useRoute } from "vue-router";

// Props: Store
const store = useSeriesStore();

// Props: Component
const props = defineProps<{
  type: string;
}>();

// Props: Router
const route = useRoute();

// Props: Computed
const queryString = computed(() => route.params.q);

// Methods
function search(event: any) {
  store.getShowsByQuery(event.target.elements.query.value.toString());
}
</script>

<style scoped lang="scss">
@import "../assets/scss/global.scss";

form {
  width: 100%;

  @include media-breakpoint-up(sm) {
    width: auto;
    max-width: 576px;
  }

  // Override Bootstrap
  ::v-deep button {
    color: white !important;
  }
}
</style>
