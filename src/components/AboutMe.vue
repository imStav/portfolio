<template>
  <div class="about-text">
    <p class="mb-4">
      Hi there! My name is Steven Averlant (or Stav on the Internet). I am 25
      years old and currently living in France. I've learned front-end web
      development mostly by myself and followed an IT cursus at Pop School then
      (a web developer "school" located in the North of the France).
    </p>

    <p>
      Passionate by web design (UI / UX) and front-end development, i discovered
      technologies and trends i am actually trying to master as much as i can.
      Thus, i am always trying to keep in touch with tech news to stay informed.
    </p>
  </div>

  <div class="about-text">
    <p>
      To sum it up, i am working with modern technologies like:

      <code>
        <ul class="text-gradient my-4 w-fit">
          <li>Vue.js (v3)</li>
          <li>Vite</li>
          <li>Pinia</li>
          <li>Tailwind CSS</li>
          <li>SCSS / SASS</li>
        </ul>
      </code>

      Also i can work a bit with:

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
    <i class="fa-solid fa-comment-dots"></i> Contact me
  </RouterLink>
</template>
