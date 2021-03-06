import { defineStore } from "pinia";

export const cardStore = defineStore({
  id: "portfolio",
  state: () => ({
    cards: {
      pokedesk: {
        name: "Pokedesk",
        preview:
          "https://raw.githubusercontent.com/imStav/pokedesk/main/src/assets/screenshots/pokedesk_dark_preview.png",
        description:
          "A fictional desktop session of the Pokémon's Pr Chen. Imitating a Windows 11 like user interface, the project has been made using Vite, Vue.js, Pinia and Tailwind CSS.",
        appLink: "",
        prefix: "",
        repo: "https://github.com/imStav/pokedesk",
      },

      rickandmorty: {
        name: "Tracking Rick & Morty",
        preview:
          "https://raw.githubusercontent.com/imStav/tracking-rickandmorty/main/src/assets/screenshots/tracking-rickandmorty_preview.png",
        description:
          "Tracking Rick & Morty is a minimalistic app that aims to track the characters statuses of the TV show Rick & Morty.",
        appLink: "tracking-rickandmorty.netlify.app",
        prefix: "https://",
        repo: "https://github.com/imStav/tracking-rickandmorty",
      },

      abstract: {
        name: "Abstract",
        preview:
          "https://raw.githubusercontent.com/imStav/abstract/main/src/assets/screenshots/abstract_dark_preview.JPG",
        description:
          "Abtract is a small web app that provides free wallpapers i've made with Figma. This new version is based on Vue 3 and Tailnd CSS.",
        prefix: "https://",
        appLink: "abstract-wallpapers.netlify.app",
        repo: "https://github.com/imStav/abstract",
      },

      dbz: {
        name: "DBZ JS",
        preview:
          "https://raw.githubusercontent.com/imStav/dbz-js/main/screenshots/dbz_js_preview.JPG",
        description:
          "DBZ JS for 'Dragon Ball FighterZ JavaScript', is a simple JS program that takes 2 random fighters, launches a brawl and return the winner by an alert.",
        prefix: "",
        appLink: "",
        repo: "https://github.com/imStav/dbz-js",
      },

      undefined: {
        name: "Pop School undefined",
        preview:
          "https://raw.githubusercontent.com/imStav/popschool-undefined/main/assets/pop-undefined_preview.png",
        description:
          "A little Vanilla JavaScript project that just aims to introduce my current Pop School class composition. Made using a dedicated API. #undefined",
        prefix: "https://",
        appLink: "pop-undefined.netlify.app",
        repo: "https://github.com/imStav/popschool-undefined",
      }
    },
  }),
});
