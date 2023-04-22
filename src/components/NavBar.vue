<template>
  <b-navbar toggleable="sm" fixed="top">
    <b-navbar-brand :to="{ name: 'home' }">
      <img src="@/assets/img/logo.png" class="logo" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'home' }" active>
          <font-awesome-icon icon="home" /> Home
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <FormSearch :type="'nav'" />
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script setup lang="ts">
import FormSearch from "./FormSearch.vue";
</script>

<style scoped lang="scss">
@import "../assets/scss/global.scss";

.logo {
  position: relative;
  width: 30px;
}
</style>
