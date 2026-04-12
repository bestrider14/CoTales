<template>
  <v-container class="py-16">
    <v-row align="center" class="home-hero">
      <v-col cols="12" md="7">
        <p class="home-kicker">CoTales</p>
        <h1 class="home-title">Une base propre en Vue 3 et Vuetify pour construire ton app.</h1>
        <p class="home-text">
          Le projet a maintenant un shell Vuetify coherent, une navigation simple et des ecrans
          de connexion et d'inscription prets a evoluer.
        </p>

        <div class="d-flex flex-wrap ga-3 mt-8">
          <v-btn color="primary" size="large" to="/login">Aller a la connexion</v-btn>
          <v-btn variant="outlined" size="large" to="/register">Creer un compte</v-btn>
        </div>

        <div
          class="ui-panel flex max-w-2xl flex-wrap items-center gap-3 rounded-3xl "
        >
          <span class="ui-badge">Tailwind actif</span>
          <span class="ui-panel-text mt-0">
            Ce bloc utilise uniquement des classes Tailwind CSS dans un composant Vuetify.
          </span>
        </div>
      </v-col>

      <v-col cols="12" md="5">
        <v-card rounded="xl" elevation="8" class="pa-6 home-card">
          <v-card-title class="text-h5 font-weight-bold">Etat du setup</v-card-title>
          <v-card-text class="pt-4">
            <div class="d-flex flex-column ga-4">
              <div>
                <div class="status-label">Vuetify</div>
                <div class="status-value">Initialise proprement</div>
              </div>
              <div>
                <div class="status-label">Routing</div>
                <div class="status-value">Pages Home, Login, Register et About actives</div>
              </div>
              <div>
                <div class="status-label">Build</div>
                <div class="status-value">Compilation et type-check valides</div>
              </div>
              <div>
                <div class="status-label">Tailwind CSS</div>
                <div class="status-value">Import Vite OK et utilitaires disponibles dans les vues</div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.home-hero {
  min-height: calc(100vh - 120px);
}

.home-kicker {
  margin-bottom: 16px;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--app-primary);
}

.home-title {
  max-width: 12ch;
  font-size: clamp(2.4rem, 5vw, 4.8rem);
  line-height: 0.95;
  font-weight: 800;
  color: var(--app-text);
}

.home-text {
  max-width: 40rem;
  margin-top: 20px;
  font-size: 1.05rem;
  color: var(--app-text-muted);
}

.home-card {
  background: linear-gradient(160deg, var(--home-card-start), var(--home-card-end));
}

.status-label {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--app-primary);
}

.status-value {
  margin-top: 4px;
  font-size: 1rem;
  color: var(--app-text);
}
</style>
