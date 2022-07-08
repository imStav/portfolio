<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <section class="fixed-nav">
      <nav class="navbar">
        <RouterLink to="/" class="pill" title="Home">
          <i class="fa-solid fa-house"></i>
        </RouterLink>

        <RouterLink to="/portfolio" class="pill" title="My portfolio">
          <i class="fa-solid fa-film"></i>
        </RouterLink>

        <RouterLink to="/about" class="pill" title="About me">
          <i class="fa-solid fa-circle-question"></i>
        </RouterLink>

        <RouterLink to="/contact" class="pill" title="Contact me">
          <i class="fa-solid fa-comment-dots"></i>
        </RouterLink>
      </nav>

      <!-- <nav class="navbar">
      <RouterLink to="/" class="pill">Home</RouterLink>
      <RouterLink to="/portfolio" class="pill">Portfolio</RouterLink>
      <RouterLink to="/about" class="pill">About</RouterLink>
      <RouterLink to="/contact" class="pill">Contact</RouterLink>
    </nav> -->
    </section>
  </header>

  <RouterView />
</template>
