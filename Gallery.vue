<template>
  {{test}}
</template>

<script>
export default {
  mounted() {
    console.log('mounted')
  },
  created() {
    console.log('created')
  },
  setup(){
    console.log('setup')
    return {
      test: 'Ali'
    }
  }
}
</script>

<style scoped>

</style>