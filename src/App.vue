<template>
  <v-app>
   <Navbar />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from './components/Layout/Navbar.vue';
const links = [
  { label: 'Accueil', to: '/' },
  { label: 'Connexion', to: '/login' },
  { label: 'Inscription', to: '/register' },
  { label: 'A propos', to: '/about' },
];
</script>


<style scoped>
.app-bar {
  background: rgba(248, 244, 237, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(20, 33, 61, 0.08);
}

.brand-logo {
  width: 36px;
  height: 36px;
}

.brand-title {
  font-size: 1rem;
  font-weight: 800;
  line-height: 1.1;
  color: #14213d;
}

.brand-subtitle {
  font-size: 0.8rem;
  color: rgba(20, 33, 61, 0.68);
}
</style>
