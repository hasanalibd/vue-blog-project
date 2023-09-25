import {ref, reactive, computed} from 'vue'

const authStore = reactive({
    isAuthenticated: false,
    authenicate(){
        authStore.isAuthenticated= true
    },
    logout(){
        authStore.isAuthenticated= false
    }
})

export {authStore} 