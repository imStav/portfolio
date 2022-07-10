<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <main class="home home-section">
    <div class="-mt-36 text-center">
      <h1 class="text-4xl font-bold">
        Hi! I am <strong class="text-5xl text-gradient">Steven Averlant</strong>
      </h1>
      <p class="text-2xl">
        A Junior <strong class="text-gradient">Front-End</strong> developer
      </p>
    </div>
  </main>

  <RouterView />
</template>
