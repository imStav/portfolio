<template>
  <div class="about-text">
    <p class="mb-4">
      Hi there! My name is Steven Averlant (or Stav on the Internet). I am 26
      years old and currently living in France. I've learned front-end web
      development mostly by myself and followed an IT cursus at Pop School then
      (a web developer "school" located in the North of the France).
    </p>

    <p>
      Passionate by web design (UI / UX) and front-end development, I discovered
      technologies and trends I am actually trying to master as much as I can.
      Thus, I am always trying to keep in touch with tech news to stay informed.
    </p>
  </div>

  <div class="about-text">
    <p>
      To sum it up, I am working with modern technologies like:

      <code>
        <ul class="text-gradient my-4 w-fit">
          <li>Vue 3</li>
          <li>Nuxt 3</li>
          <li>Vite</li>
          <li>Pinia</li>
          <li>JavaScript</li>
          <li>TypeScript (currently learning)</li>
          <li>Cypress (currently learning)</li>
          <li>Tailwind CSS</li>
          <li>SCSS / SASS</li>
          <li>Git & Github</li>
          <li>Netlify</li>
        </ul>
      </code>

      Also I can work a bit with:

      <code>
        <ul class="text-gradient my-4 w-fit">
          <li>Symfony</li>
          <li>Python 3</li>
          <li>SQL</li>
        </ul>
      </code>
    </p>
  </div>

  <RouterLink to="/contact" class="cta-btn w-fit" title="Contact me">
    <font-awesome-icon icon="fa-solid fa-comment-dots"></font-awesome-icon> Contact me
  </RouterLink>
</template>
