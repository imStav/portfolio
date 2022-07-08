<script setup>
import { RouterView } from "vue-router";
import CardTemplate from "../components/CardTemplate.vue";
</script>

<template>
  <section class="portfolio portfolio-section">
    <h2 class="category-heading">My Portfolio</h2>

    <div class="portfolio-grid">
      <CardTemplate />
    </div>
  </section>

  <RouterView />
</template>
