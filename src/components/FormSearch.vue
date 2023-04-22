<template>
  <b-nav-form v-if="props.type === 'nav'" @submit.prevent="search">
    <b-form-input
      placeholder="Find a show"
      name="query"
      :value="queryString"
    ></b-form-input>
    <b-button size="sm" variant="info" type="submit">
      <font-awesome-icon icon="search" />
    </b-button>
  </b-nav-form>

  <b-form v-else-if="props.type === 'error'" @submit.prevent="search" inline>
    <b-form-input
      placeholder="Find another show"
      name="query"
      :value="queryString"
    ></b-form-input>
    <b-button size="sm" variant="info" type="submit">
      <font-awesome-icon icon="search" />
    </b-button>
  </b-form>

  <b-form v-else @submit.prevent="search" inline>
    <b-form-input
      placeholder="Find another show"
      name="query"
      :value="queryString"
    ></b-form-input>
    <b-button size="sm" variant="info" type="submit">
      <font-awesome-icon icon="search" />
    </b-button>
  </b-form>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";
import { useSeriesStore } from "../store";
import { defineProps } from "vue";

const store = useSeriesStore();

const props = defineProps<{
  type: string;
}>();

const route = useRoute();

const queryString = computed(() => route.params.q);

function search(event: any) {
  const query = event.target.elements.query.value;

  store.getShowsByQuery(query);
}
</script>

<style scoped lang="scss">
@import "../assets/scss/global.scss";
</style>
