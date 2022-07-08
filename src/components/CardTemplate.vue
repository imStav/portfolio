<script setup>
import { cardStore } from "@/stores/cards";
const getCards = cardStore();
</script>

<template>
  <div v-for="card in getCards.cards" class="portfolio-card">
    <h2 class="text-xl font-semibold">{{ card.name }}</h2>

    <div class="my-5">
      <img
        :src="card.preview"
        :title="`${card.name} preview`"
        alt="failed to load"
      />
      <p class="my-3">{{ card.description }}</p>
      <a :href="card.appLink" class="app-link font-mono my-3">
        <i class="fa-solid fa-link"></i>
        {{ card.appLink }}
      </a>
    </div>

    <a :href="card.repo" class="cta-btn font-mono" target="_blank">
      <i class="fa-solid fa-code-branch"></i> Github repository
    </a>
  </div>
</template>
