<script>
  import Button from '../src/components/Button.vue'

  export default {
    components: {
      Button
    }
  }
</script>

<template>
  <div>
    <ul class="navbar">
      <li>
        <RouterLink to="/" class="noUnderline">
          <Button text="Home" />
        </RouterLink>
      </li>

      <li>
        <RouterLink to="Projects" class="noUnderline">      
          <Button text="Projects" />
        </RouterLink>
      </li>

      <li>
        <RouterLink to="Contact" class="noUnderline">      
          <Button text="Contact" />
        </RouterLink>
      </li>
    </ul>
    <RouterView></RouterView>
    <a href="#"><button class="backToTop btn"><img src="../public/down-chevron-svgrepo-com.svg" alt="Icon of an arrow pointing up"></button></a>
  </div>
</template>

<style scoped>
  .backToTop{
    display: none;
  }

  .noUnderline{
    text-decoration: none;
    justify-content: center;
    display: flex;
  }

  .navbar{
    position: sticky;
    top: 0;
    backdrop-filter: blur(5px);
    border-bottom: 1px solid grey;
    background-image: linear-gradient(rgba(18, 16, 55, 0), rgba(16, 14, 53, 1));
  }

  @media (max-width: 800px) {
    .navbar{
      all: unset;
    }
    
    .backToTop{
      display: flex;
      border-radius: 50%;
      font-size: 15px;
      padding: 11px;
      position: fixed;
      left: 0;
      bottom: 5vh;
    }

    img{
      height: 32px;
      transform: rotate(180deg);
    }
  }
</style>