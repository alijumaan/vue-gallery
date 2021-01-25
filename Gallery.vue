<template>
  <div>
    <h2 @click="updateCount">{{ count }}</h2>
    <h3 @click="updateUser('name', 'Saad')">{{ user.name }}</h3>
    <h5 @click="updateUser('email', 'saad@gamil.com')">{{ user.email }}</h5>
    <a :href="twitterUrl" target="_blank">visit twitter</a>
  </div>
</template>

<script>
import {useCustomFunction} from './customFunction.js';

export default {
  setup(){
    const {count, updateCount, user, updateUser, twitterUrl} = useCustomFunction();
    return {
      count, updateCount, user, updateUser, twitterUrl
    }
  }
}
</script>

<style scoped>

</style>