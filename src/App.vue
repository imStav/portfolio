<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <section class="fixed-nav">
      <nav class="navbar">
        <RouterLink to="/" class="nav-link" title="Home">
          <i class="fa-solid fa-house"></i>
          <span class="nav-link-extension">Home</span>
        </RouterLink>

        <RouterLink to="/portfolio" class="nav-link" title="My portfolio">
          <i class="fa-solid fa-film"></i>
          <span class="nav-link-extension">Portfolio</span>
        </RouterLink>

        <RouterLink to="/about" class="nav-link" title="About me">
          <i class="fa-solid fa-circle-question"></i>
          <span class="nav-link-extension">About</span>
        </RouterLink>

        <RouterLink
          to="#"
          class="nav-link cursor-not-allowed"
          title="Contact page is under construction"
        >
          <i class="fa-solid fa-comment-dots"></i>
          <span class="nav-link-extension">Contact</span>
        </RouterLink>
      </nav>
    </section>
  </header>

  <RouterView />
</template>
