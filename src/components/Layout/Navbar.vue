<template>
  <v-app-bar flat class="app-bar">
    <v-container class="d-flex align-center justify-space-between py-0">
      <div class="d-flex align-center ga-3">
        <img alt="CoTales logo" class="brand-logo" src="../../assets/logo.svg" />
        <div>
          <div class="brand-title">CoTales</div>
          <div class="brand-subtitle">Bibliotheque d'histoires connectee</div>
        </div>
      </div>

      <div class="d-none d-md-flex align-center ga-2">
        <v-btn v-for="link in links" :key="link.to" :to="link.to" variant="text" rounded="pill">
          {{ link.label }}
        </v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
  const links = [
    { label: 'Accueil', to: '/' },
    { label: 'Histoires', to: '/stories' },
  ];
</script>

<style scoped></style>
