<script>
export default {
    name: 'Button',
    data () {
      return {}
    },
		props: ['text']
}
</script>

<template>
	<button
		type="button" 
		class="btn btn-effect"
		role="link"
	>
    {{ text }}
  </button>
</template>
  