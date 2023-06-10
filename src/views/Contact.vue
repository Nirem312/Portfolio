<script>
  import Footer from '../components/Footer.vue'

  export default {
  components: {
    Footer
  }
}

</script>

<template>
  <section class="main-text">
    <h1>
      Contact
    </h1>
  </section>
  
  <section class="estudios"> 
    <p>
      You can reach out to me by dropping an email or through my LinkedIn profile: <br>
      <b>Email</b>: <a href="mailto:nicolasremigiofing@gmail.com" target="_blank">nicolasremigiofing@gmail.com</a> <br>
      <b>LinkedIn</b>: <a href="https://www.linkedin.com/in/nicolas-remigio-abc123/" target="_blank">https://www.linkedin.com/in/nicolas-remigio-abc123/</a><br>
    </p>
  </section>
  
  <Footer />
</template>

<style scoped>
@media (max-width: 800px) {
  p{
    text-align: center;
  }
}
</style>
