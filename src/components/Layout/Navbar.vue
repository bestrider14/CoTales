<template>
  <v-app-bar flat class="app-bar">
    <v-container fluid class="d-flex align-center justify-space-between px-4 px-md-8">
      <div class="d-flex align-center ga-3">
        <img alt="CoTales logo" class="brand-logo" src="../../assets/logo.svg" />
        <div>
          <div class="brand-title">CoTales</div>
        </div>
      </div>

      <div class="d-none d-md-flex align-center ga-2">
        <v-btn class="btn-dark" v-for="link in links" :key="link.to" :to="link.to" variant="text" rounded="pill">
          {{ link.label }}
        </v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
const links = [
  { label: 'Accueil', to: '/' },
  { label: 'Inscription', to: '/register' },
  { label: 'A propos', to: '/about' },
];
</script>

<style scoped>
.app-bar {
  background: var(--accent-color-2);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--accent-color-3);
}

.brand-logo {
  width: 36px;
  height: 36px;
}

.brand-title {
  font-size: 1rem;
  font-weight: 800;
  line-height: 1.1;
  color: var(--accent-color-3)
}

</style>
