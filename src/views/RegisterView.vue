<script setup lang="ts">
import { ref } from 'vue';

const fullName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const showPassword = ref(false);
</script>

<template>
  <v-container fluid class="register-shell pa-0">
    <v-row no-gutters class="fill-height">
      <v-col cols="12" md="5" class="info-panel d-flex align-center">
        <div class="info-copy">
          <p class="eyebrow">Rejoins CoTales</p>
          <h1 class="title">Cree ton compte en quelques secondes.</h1>
          <p class="subtitle">
            Organise tes lectures, suis tes progres et retrouve ton univers au meme endroit.
          </p>
        </div>
      </v-col>

      <v-col cols="12" md="7" class="form-panel d-flex align-center justify-center">
        <v-card class="register-card" elevation="10" rounded="xl">
          <v-card-item>
            <v-card-title class="text-h4 font-weight-bold">Inscription</v-card-title>
            <v-card-subtitle>Renseigne les informations de base pour commencer.</v-card-subtitle>
          </v-card-item>

          <v-card-text>
            <v-form class="d-flex flex-column ga-4">
              <v-text-field
                v-model="fullName"
                label="Nom complet"
                variant="outlined"
                prepend-inner-icon="mdi-account-outline"
                hide-details="auto"
              />

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

              <v-text-field
                v-model="confirmPassword"
                :type="showPassword ? 'text' : 'password'"
                label="Confirmer le mot de passe"
                variant="outlined"
                prepend-inner-icon="mdi-lock-check-outline"
                hide-details="auto"
              />

              <v-btn color="primary" size="large" block>Creer mon compte</v-btn>
              <v-btn variant="text" block to="/login">J'ai deja un compte</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.register-shell {
  min-height: 100vh;
  background:
    radial-gradient(circle at right top, rgba(255, 214, 165, 0.45), transparent 28%),
    linear-gradient(140deg, #f9f6f1 0%, var(--app-surface) 44%, #eef4fb 100%);
}

.info-panel,
.form-panel {
  padding: 32px;
}

.info-copy {
  max-width: 420px;
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
  font-size: clamp(2.2rem, 5vw, 4.4rem);
  line-height: 0.95;
  font-weight: 800;
  color: var(--app-text);
}

.subtitle {
  margin-top: 20px;
  font-size: 1.05rem;
  color: var(--app-text-muted);
}

.register-card {
  width: min(100%, 520px);
  padding: 12px;
}

@media (max-width: 959px) {
  .info-panel {
    padding: 32px 24px 8px;
  }

  .form-panel {
    padding: 24px;
  }
}
</style>
