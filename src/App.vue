<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <!-- The nav <section> is fixed to top, but the <nav> block 
    itself inside is flex sensitive. Also, the 'nav-links-extension' 
    are not displayed in mobile and tablet layout -->
    <section class="fixed-nav">
      <nav class="navbar">
        <RouterLink to="/" class="nav-link" title="Home">
          <font-awesome-icon icon="fa-solid fa-house" class="-text-gradient"></font-awesome-icon>
          <span class="nav-link-extension">Home</span>
        </RouterLink>

        <RouterLink to="/portfolio" class="nav-link" title="My portfolio">
          <font-awesome-icon icon="fa-solid fa-film"></font-awesome-icon>
          <span class="nav-link-extension">Portfolio</span>
        </RouterLink>

        <RouterLink to="/about" class="nav-link" title="About me">
          <font-awesome-icon icon="fa-solid fa-circle-question"></font-awesome-icon>
          <span class="nav-link-extension">About</span>
        </RouterLink>

        <RouterLink to="/contact" class="nav-link" title="Contact me">
          <font-awesome-icon icon="fa-solid fa-comment-dots"></font-awesome-icon>
          <span class="nav-link-extension">Contact</span>
        </RouterLink>
      </nav>
    </section>
  </header>

  <RouterView />
</template>
