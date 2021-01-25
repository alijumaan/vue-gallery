import {computed, onMounted, reactive, ref, watch, watchEffect} from 'vue';

export function useCustomFunction() {
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