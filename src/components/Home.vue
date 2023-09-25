<script setup>
// const isAuthenticated = () =>{
//     return localStorage.getItem('token') === '12345'
// }
import {authStore} from '../store/store'

</script>

<template>
    <h1 class="text-3xl font-bold">This is Home page</h1>
    <p class="text-xl font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam vel in eum quidem quia! Aperiam eaque eos, architecto quae ipsam et voluptatibus, quia voluptate, obcaecati sapiente quos. Earum delectus molestiae facilis quidem! Fugit, enim nemo, aliquam ut qui necessitatibus voluptatibus aliquid ducimus nesciunt, earum porro. Est sit quae nesciunt odio.</p><br>

    <div v-if="authStore.isAuthenticated">
        <h1 class="text-4xl font-semibold text-red-400">This is secret content</h1>
        <div class="avatar online mt-5">
            <div class="w-24 rounded-full">
                <img src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4debc8557eb595d15a3fc1d44a7b748c-1563085343816/005cdd83-dfef-4a5b-b6bb-1bced34fa3ce.png" />
            </div>
        </div>
    </div>
    
</template>