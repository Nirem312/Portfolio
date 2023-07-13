<script>
export default {
    name: 'Section',
    data () {
      return {}
    },
		props: ['title', 'text']
}
</script>

<template>
    <h2 >
        {{ title }}
    </h2>
    <p>
        {{ text }}
    </p>
</template>
  