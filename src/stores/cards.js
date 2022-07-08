import { defineStore } from 'pinia'

export const cardStore = defineStore({
  id: 'portfolio',
  state: () => ({
    
    cards: {
      pokedesk: {
        name: 'Pokedesk',
        preview: 'https://raw.githubusercontent.com/imStav/pokedesk/main/src/assets/screenshots/preview.JPG',
        description: "A fictional desktop session of the Pokémon's Pr Chen. Imitating a Windows 11 like user interface, the project has been made using Vite, Vue.js, Pinia and Tailwind CSS.",
        appLink: 'pokedesk.netlify.app',
        repo: 'https://github.com/imStav/pokedesk'
      },

      rickandmorty: {
        name: 'Tracking Rick & Morty',
        preview: 'https://raw.githubusercontent.com/imStav/tracking-rickandmorty/main/src/assets/screenshots/rickApi_preview.JPG',
        description: 'Tracking Rick & Morty is a minimalistic app that aims to track the characters statuses of the TV show Rick & Morty.',
        appLink: 'tracking-rickandmorty.netlify.app',
        repo: 'https://github.com/imStav/tracking-rickandmorty'
      },

      abstract: {
        name: 'Abstract',
        preview: 'https://raw.githubusercontent.com/imStav/abstract/main/abstract-wallpapers_preview.JPG',
        description: 'Abstract is a static website that provides free wallpapers. All made by myself using Figma. Fully written in HTML5 and Tailwind CSS. The project is live, deployed with Netlify.',
        appLink: 'abstract-wallpapers.netlify.app',
        repo: 'https://github.com/imStav/abstract'
      },

      dbz: {
        name: 'DBZ JS',
        preview: 'https://raw.githubusercontent.com/imStav/dbz-js/main/screenshots/dbz_js_preview.JPG',
        description: "DBZ JS for 'Dragon Ball FighterZ JavaScript', is a simple JS program that takes 2 random fighters, launches a brawl and return the winner by an alert.",
        appLink: 'abstract-wallpapers.netlify.app',
        repo: 'https://github.com/imStav/dbz-js'
      }
    }
  })
  }
)
