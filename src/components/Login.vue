<script setup>
// const aunthenticate = () =>{
//     localStorage.setItem('token', '12345')
// }

// const logout = () =>{
//     localStorage.setItem('token', 'abcd')
// }

import {authStore} from '../store/store'
</script>

<template>
    <h1 class="text-3xl font-semibold">This is login Page</h1>
    <div class="my-5">
        <button @click="authStore.authenicate()" class="btn btn-info mr-10">
            <span v-if="authStore.isAuthenticated">You 're already logged in'</span>
            <span v-else>Click to Login</span>
        </button>
        <button @click="authStore.logout()" class="btn btn-info">Log Out</button>
    </div>
</template>