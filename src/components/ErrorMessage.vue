<template>
  <section class="error-message error">
    <section class="error-message__text">
      <h1>Oh no :(</h1>
      <h3>
        That show doesn't seem to be available yet... or something went horribly
        wrong!
      </h3>
    </section>
    <section class="error-message_search">
      <FormSearch :type="'error'" />
    </section>
  </section>
</template>

<script setup lang="ts">
// Imports
import FormSearch from "./FormSearch.vue";
</script>

<style scoped lang="scss">
@import "../assets/scss/global.scss";

.error-message {
  &__text {
    @include marginBottom(0.5);
    @include paddingBottom(0.5);
    border-bottom: 1px dashed $gold-highlight;
  }
}
</style>
