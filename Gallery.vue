<template>
  <div>
    <h2 @click="update">{{ text }}</h2>
    <h2 @click="updateCount">{{ count }}</h2>
    <h3 @click="updateUser('name', 'Saad')">{{ user.name }}</h3>
    <h5 @click="updateUser('email', 'saad@gamil.com')">{{ user.email }}</h5>
    <a :href="twitterUrl" target="_blank">visit twitter</a>
  </div>
</template>

<script>
import {ref, reactive, computed, watch, watchEffect, onMounted} from 'vue';
export default {
  // mounted() {
  //   console.log('mounted')
  // },
  // created() {
  //   console.log('created')
  // },
  setup(){
    const text = ref('Hello')
    const count = ref(0)
    const user = reactive({
      name: 'Aalhbbash',
      email: 'alila3883@gmail.com'
    })

    const update = () => {
      text.value = 'New Hello'
    }

    const updateCount = () => {
      count.value++;
    }

    const updateUser = (key, value) => {
      user[key] = value
    }

    const twitterUrl = computed(() => {
      return `https://twitter.com/${user.name}`
    })

    watch(user, () => {
      console.log(user)
    }, {
      immediate: true
    })

    watchEffect(() => {
      console.log(user.name)
    })

    onMounted(() => {
      setTimeout(() => {
        user.name = 'Ahmed'
      }, 2000)
    });

    return {
      text, update, count, updateCount, user, updateUser, twitterUrl
    }
  }
}
</script>

<style scoped>

</style>