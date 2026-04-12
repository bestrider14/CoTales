<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const showPassword = ref(false);
</script>

<template>
  <v-container fluid class="login-shell pa-0">
    <v-row no-gutters class="fill-height">
      <v-col cols="12" md="6" class="brand-panel d-flex align-center">
        <div class="brand-copy">
          <div class="mb-6 flex flex-wrap items-center gap-3">
            <span class="ui-badge">Vuetify + Tailwind</span>
            <span class="ui-pill">Exemple de cohabitation propre</span>
          </div>
          <p class="eyebrow">CoTales</p>
          <h1 class="title">Connecte-toi a ton espace.</h1>
          <p class="subtitle">
            Retrouve tes histoires, ton suivi et les prochains contenus depuis une interface claire.
          </p>

          <div class="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
            <div class="ui-panel">
              <div class="ui-panel-title">UI</div>
              <div class="ui-panel-text">Composants geres par Vuetify</div>
            </div>
            <div class="ui-panel">
              <div class="ui-panel-title">Layout</div>
              <div class="ui-panel-text">Espacements fins via Tailwind</div>
            </div>
            <div class="ui-panel">
              <div class="ui-panel-title">Build</div>
              <div class="ui-panel-text">Pipeline Vite valide</div>
            </div>
          </div>
        </div>
      </v-col>

      <v-col cols="12" md="6" class="form-panel d-flex align-center justify-center">
        <div class="ui-panel-strong w-full max-w-[460px]">
          <v-card class="login-card" elevation="12" rounded="xl">
            <v-card-item>
              <v-card-title class="text-h4 font-weight-bold">Connexion</v-card-title>
              <v-card-subtitle>Entre tes identifiants pour continuer.</v-card-subtitle>
            </v-card-item>

            <v-card-text>
              <v-form class="d-flex flex-column ga-4">
                <v-text-field
                  v-model="email"
                  label="Adresse e-mail"
                  type="email"
                  variant="outlined"
                  prepend-inner-icon="mdi-email-outline"
                  hide-details="auto"
                />

                <v-text-field
                  v-model="password"
                  :append-inner-icon="showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                  :type="showPassword ? 'text' : 'password'"
                  label="Mot de passe"
                  variant="outlined"
                  prepend-inner-icon="mdi-lock-outline"
                  hide-details="auto"
                  @click:append-inner="showPassword = !showPassword"
                />

                <div class="actions">
                  <v-checkbox label="Se souvenir de moi" density="comfortable" hide-details />
                  <a href="/" class="forgot-link">Mot de passe oublie ?</a>
                </div>

                <v-btn color="primary" size="large" block>Se connecter</v-btn>
                <v-btn variant="text" block to="/register">Creer un compte</v-btn>
              </v-form>

              <div class="ui-callout">
                <div class="ui-callout-title">Ou mettre Tailwind ?</div>
                <div class="ui-callout-text">
                  Utilise-le pour les wrappers, badges, espacements, overlays et ajustements
                  rapides.
                </div>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.login-shell {
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(198, 227, 255, 0.95), transparent 35%),
    linear-gradient(135deg, var(--app-surface) 0%, #f4f7fb 45%, #e8eef9 100%);
}

.brand-panel {
  min-height: 40vh;
  padding: 48px;
}

.brand-copy {
  max-width: 440px;
}

.eyebrow {
  margin-bottom: 16px;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--app-primary);
}

.title {
  font-size: clamp(2.4rem, 6vw, 4.8rem);
  line-height: 0.95;
  font-weight: 800;
  color: var(--app-text);
}

.subtitle {
  margin-top: 20px;
  max-width: 32rem;
  font-size: 1.05rem;
  color: var(--app-text-muted);
}

.form-panel {
  padding: 24px;
}

.login-card {
  width: min(100%, 460px);
  padding: 12px;
  backdrop-filter: blur(8px);
}

.actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.forgot-link {
  color: var(--app-primary);
  font-size: 0.95rem;
}

@media (max-width: 959px) {
  .brand-panel {
    padding: 32px 24px 8px;
  }

  .form-panel {
    padding: 24px;
  }

  .actions {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
