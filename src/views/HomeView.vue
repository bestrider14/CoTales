<script setup lang="ts"></script>
<template>
  <v-container class="py-16">
    <v-row align="center" class="home-hero">
      <v-col cols="12" md="7">
        <p class="home-kicker">CoTales</p>
        <h1 class="home-title">Bienvenue sur CoTales!</h1>
        <p class="home-text">
          Crée des histoires en tout genre et vois jusqu'où elles peuvent te mener.
        </p>

        <div class="d-flex flex-wrap ga-3 mt-8">
          <v-btn color="primary" size="large" variant="flat" to="/login"
            >Aller a la connexion</v-btn
          >
          <v-btn variant="outlined" size="large" to="/register">Creer un compte</v-btn>
        </div>
      </v-col>

      <v-col cols="12" md="5">
        <v-card rounded="xl" elevation="8" class="pa-6 home-card">
          <v-card-title class="text-h5 font-weight-bold">Featured Tale</v-card-title>
          <v-card-text class="pt-4">
            <div class="d-flex flex-column ga-4">
              <div>
                <div class="status-label">Le seigneur des balançoires</div>
                <div class="status-value">Paul fait la loi et l'ordre aux balançoires.</div>
                <div class="author">Mariecloe28</div>
              </div>
              <div>
                <div class="status-label">Post #2</div>
                <div class="status-value">Lorem</div>
                <div class="author">auteur</div>
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
    color: var(--text-soft);
  }

  .home-title {
    max-width: 12ch;
    font-size: clamp(2.4rem, 5vw, 4.8rem);
    line-height: 0.95;
    font-weight: 800;
    color: var(--text-soft);
    letter-spacing: -0.02em;
  }

  .home-text {
    max-width: 40rem;
    margin-top: 20px;
    font-size: 1.05rem;
    color: var(--text-muted);
  }

  .home-card {
    background: linear-gradient(160deg, var(--div-background-color), var(--accent-color-3));
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.25s ease;
  }
  .home-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }

  .status-label {
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-soft);
  }

  .status-value {
    margin-top: 4px;
    font-size: 1rem;
    color: var(--text-soft);
  }

  .author {
    margin-top: 6px;
    font-size: 0.8rem;
    text-align: right;
    color: var(--text-muted);
    font-style: italic;
  }
</style>
