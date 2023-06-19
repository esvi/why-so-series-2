<template>
  <b-navbar toggleable="sm" fixed="top">
    <!-- Logo -->
    <b-navbar-brand :to="{ name: 'home' }">
      <img src="@/assets/img/logo.png" class="navbar__logo" />
    </b-navbar-brand>

    <!-- Burger menu -->
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Links -->
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'home' }" active>
          <font-awesome-icon icon="home" /> Home
        </b-nav-item>
      </b-navbar-nav>

      <!-- Search -->
      <b-navbar-nav class="ml-auto">
        <FormSearch :section="'nav'" />
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script setup lang="ts">
import FormSearch from "./FormSearch.vue";
</script>

<style scoped lang="scss">
@import "../assets/scss/global.scss";

.navbar {
  &__logo {
    position: relative;
    width: 30px;
  }

  // Override Bootstrap
  ::v-deep .navbar {
    &-brand {
      @include marginRight(0.25);
    }

    &-nav {
      @include marginRight(0.25);
    }

    &-toggler {
      &:focus {
        box-shadow: none;
      }
    }
  }
}
</style>
