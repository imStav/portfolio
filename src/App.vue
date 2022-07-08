<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <section class="fixed-nav">
      <nav class="navbar">
        <RouterLink to="/" class="pill" title="Home">
          <i class="fa-solid fa-house"></i>
          <span class="nav-link-extension">Home</span>
        </RouterLink>

        <RouterLink to="/portfolio" class="pill" title="My portfolio">
          <i class="fa-solid fa-film"></i>
          <span class="nav-link-extension">Portfolio</span>
        </RouterLink>

        <RouterLink to="/about" class="pill" title="About me">
          <i class="fa-solid fa-circle-question"></i>
          <span class="nav-link-extension">About</span>
        </RouterLink>

        <RouterLink to="/contact" class="pill" title="Contact me">
          <i class="fa-solid fa-comment-dots"></i>
          <span class="nav-link-extension">Contact</span>
        </RouterLink>
      </nav>
    </section>
  </header>

  <RouterView />
</template>
