<template>
  <div>
    <h2 @click="update">{{ text }}</h2>
    <h2 @click="updateCount">{{ count }}</h2>
    <h3 @click="updateUser('name', 'Saad')">{{ user.name }}</h3>
    <h5 @click="updateUser('email', 'saad@gamil.com')">{{ user.email }}</h5>
  </div>
</template>

<script>
import {ref, reactive} from 'vue';
export default {
  mounted() {
    console.log('mounted')
  },
  created() {
    console.log('created')
  },
  setup(){
    const text = ref('Hello')
    const count = ref(0)
    const user = reactive({
      name: 'Ali',
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
    return {
      text, update, count, updateCount, user, updateUser
    }
  }
}
</script>

<style scoped>

</style>