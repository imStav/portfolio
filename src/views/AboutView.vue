<script setup>
import AboutMe from "../components/AboutMe.vue";
</script>

<template>
  <section class="about about-section">
    <h2 class="category-heading">About me</h2>

    <div class="about-grid" v-motion-pop>
      <AboutMe />
    </div>
  </section>
</template>
