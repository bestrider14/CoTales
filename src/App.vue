<template>
  <v-app class="app-shell">
    <Navbar />
    <v-main class="main-content">
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import Navbar from './components/Layout/Navbar.vue';
</script>

<style scoped>
  .app-shell {
    background-color: var(--main-background-color);
  }

  .main-content {
    min-height: 100vh;
    width: 100%;
  }
</style>
