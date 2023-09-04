<script>
import Footer from '../components/Footer.vue'

  export default {
    data () {
      return {
        items1: [
          {
            src: 'src/assets/insta_1.jpg',
          },
          {
            src: '/assets/insta_2.jpg',
          },
          {
            src: '../assets/insta_3.jpg',
          },
        ],
        items2: [
          {
            src: '/src/assets/pokemon_1.jpg',
          },
          {
            src: '/assets/pokemon_2.jpg',
          },
          {
            src: '/assets/pokemon_3.jpg',
          },
        ],
      }
    },
    components: {
      Footer
    }
  }
</script>

<template>
  <section class="main-text">
    <h1>
      Projects
    </h1>
  </section>

  <h2>
    <a href="https://instaclone-twwp.onrender.com" target="_blank">Instagram profile clone</a>
  </h2>
    
  <section class="carousel">
    <v-carousel
    cycle
    show-arrows="hover"
    height="300"
    hide-delimiters
    >
      <v-carousel-item
          v-for="(item,i) in items1"
          :key="i"
          :src="item.src"
          contain 
      ></v-carousel-item>
    </v-carousel>
  </section>

  <p>
    <b>Description</b>: Instagram profile design clone that loads random animal pictures from an API and
    presents them as posts with a random amount of likes and comments, utilizes infinite scroll. Created with React.
  </p>

  <p style="text-align: center">
    <a href="https://github.com/Nirem312/Instaclone" target="_blank">Repository</a> -
    <a href="https://instaclone-twwp.onrender.com" target="_blank">Live site</a>  
  </p>

  <hr/>

  <h2>
    <a href="https://guess-the-pokemon.onrender.com/" target="_blank">Guess the Pokemon</a>
  </h2>
    
  <section class="carousel carousel2">
    <v-carousel
    cycle
    show-arrows="hover"
    height="300"
    max-width="300"
    hide-delimiters
    >
      <v-carousel-item
        v-for="(item,i) in items2"
        :key="i"
        :src="item.src"
        contain 
      ></v-carousel-item>
    </v-carousel>
  </section>

  <p>
    <b>Description</b>: Application made with React and TypeScript that displays the silhouette of a random Pokemon, provides hints about it
    and once the Pokemon is correctly guessed displays its image. <br/> 
    Includes the option to display the Pokemon and its name in case the user can't guess it. <br/> 
    Keeps track of the number of correct guesses and provides a link to a wiki page for the Pokemon when it's revealed.
  </p>

  <p style="text-align: center">
    <a href="https://github.com/Nirem312/PokemonApp" target="_blank">Repository</a> -
    <a href="https://guess-the-pokemon.onrender.com/" target="_blank">Live site</a>  
  </p>

  <hr/>

  <h2>
    <a href="https://random-quote-vue.onrender.com/" target="_blank">Random quote generator</a>
  </h2>
  
  <p>
    <b>Description</b>: Responsive web application made using Vue that displays a random quote and its author when the
    "Generate" button is clicked, data is retrieved using an API.
  </p>

  <p style="text-align: center">
    <a href="https://github.com/Nirem312/test3.git" target="_blank">Repository</a> -
    <a href="https://random-quote-vue.onrender.com/" target="_blank">Live site</a>
  </p>

  <hr/>

  <Footer />
</template>

<style scoped>
.v-carousel{
    width: 600px !important;
  }

.carousel2{
  width: 300px !important;
}

h2{
  text-align: center;
  margin: 15px;
}

@media (max-width: 800px) {
  p{
    text-align: center;
  }
}
</style>