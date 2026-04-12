<template>
  <v-app class="app-shell">
    <Navbar />
    <v-main>
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
  background: var(--app-background);
}
</style>
