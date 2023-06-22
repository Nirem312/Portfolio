<script>
import Footer from '../components/Footer.vue'
import { onMounted } from 'vue';

  export default {
    setup(){
      onMounted(() => {
        carousel()
      })
    },
    components: {
      Footer
    }
  }

  var myIndex = 0;
  export function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var y = document.getElementsByClassName("mySlides2");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
      y[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    y[myIndex-1].style.display = "block"; 
    setTimeout(carousel, 3500);
  }
</script>

<template>
    <section class="main-text">
      <h1>
        Projects
      </h1>
    </section>
    
    <section> 
      <h2>
        <a href="https://github.com/Nirem312/test3.git" target="_blank">Random quote generator</a>
      </h2>
      
      <section class="carousel" style="max-width:700px">
        <img class="mySlides" src="../assets/quote_1.jpg" style="width:100%">
        <img class="mySlides" src="../assets/quote_2.jpg" style="width:100%">
        <img class="mySlides" src="../assets/quote_3.jpg" style="width:100%">
      </section>
      
      <p>
        <b>Description</b>: Responsive web application made using Vue that displays a random quote and its author when the
        "Generate" button is clicked, data is retrieved using an API.
      </p>
    </section>
    
      <p style="text-align: center">
        <a href="https://github.com/Nirem312/test3.git" target="_blank">Repository</a> -
        <a href="https://random-quote-vue.onrender.com/" target="_blank">Live site</a>
      </p>
    <hr/>

      <h2>
        <a href="https://github.com/Nirem312/PokemonApp" target="_blank">Guess the Pokemon</a>
      </h2>
      
      <section class="carousel" style="max-width:400px">
        <img class="mySlides2" src="../assets/pokemon_1.jpg" style="width:100%">
        <img class="mySlides2" src="../assets/pokemon_2.jpg" style="width:100%">
        <img class="mySlides2" src="../assets/pokemon_3.jpg" style="width:100%">
      </section>

      <p>
        <b>Description</b>: Application made with React and TypeScript that displays the silhouette of a random Pokemon, provides hints about it
        and once the Pokemon is correctly guessed displays its image. <br/> 
        Also includes an option to display the Pokemon and its name in case the user can't guess it. <br/> 
        Keeps track of the number of correct guesses and provides a link to a wiki page for the Pokemon when it's revealed.
      </p>

      <p style="text-align: center">
        <a href="https://github.com/Nirem312/PokemonApp" target="_blank">Repository</a> -
        <a href="https://guess-the-pokemon.onrender.com/" target="_blank">Live site</a>  
      </p>
 
    <hr/>

    <!-- Project 3 coming soon -->
    
    <Footer />
</template>

<style scoped>

h2{
  text-align: center;
}

@media (max-width: 800px) {
  p{
    text-align: center;
  }
}
</style>
