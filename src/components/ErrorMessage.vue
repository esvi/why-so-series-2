<template>
  <section v-if="message" class="error-message error">
    <section class="error-message__text">
      <h1 v-text="message.name"></h1>
      <h3 v-text="message.description"></h3>
    </section>
    <section class="error-message_search">
      <FormSearch :section="'error'" />
    </section>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import FormSearch from "./FormSearch.vue";
import { Message } from "@/types";

const props = defineProps<{
  message: Message;
}>();
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
