<script>
import Button from '../src/components/Button.vue'

export default {
  components: {
    Button
  }
}
</script>

<template>
  <div class="navbar">
    <ul>
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
  </div>
  
</template>

<style scoped>
.noUnderline{
  text-decoration: none;
  justify-content: center;
  display: flex;
}
</style>
