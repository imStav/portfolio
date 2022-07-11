import { defineStore } from "pinia";

export const cardStore = defineStore({
  id: "portfolio",
  state: () => ({
    cards: {
      pokedesk: {
        name: "Pokedesk",
        preview:
          "/src/assets/screenshots/pokedesk_dark_preview.png",
        description:
          "A fictional desktop session of the Pokémon's Pr Chen. Imitating a Windows 11 like user interface, the project has been made using Vite, Vue.js, Pinia and Tailwind CSS.",
        appLink: "",
        prefix: "",
        repo: "https://github.com/imStav/pokedesk",
      },

      rickandmorty: {
        name: "Tracking Rick & Morty",
        preview:
          "/src/assets/screenshots/tracking-rickandmorty_preview.png",
        description:
          "Tracking Rick & Morty is a minimalistic app that aims to track the characters statuses of the TV show Rick & Morty.",
        appLink: "tracking-rickandmorty.netlify.app",
        prefix: "https://",
        repo: "https://github.com/imStav/tracking-rickandmorty",
      },

      abstract: {
        name: "Abstract",
        preview:
          "/src/assets/screenshots/abstract_dark_preview.png",
        description:
          "Abstract is a static website that provides free wallpapers. All made by myself using Figma. Fully written in HTML5 and Tailwind CSS. The project is live, deployed with Netlify.",
        prefix: "https://",
        appLink: "abstract-wallpapers.netlify.app",
        repo: "https://github.com/imStav/abstract",
      },

      dbz: {
        name: "DBZ JS",
        preview:
          "/src/assets/screenshots/dbz-js_preview.png",
        description:
          "DBZ JS for 'Dragon Ball FighterZ JavaScript', is a simple JS program that takes 2 random fighters, launches a brawl and return the winner by an alert.",
        appLink: "",
        prefix: "",
        repo: "https://github.com/imStav/dbz-js",
      },
    },
  }),
});
