<script setup>
import {ref, reactive, onBeforeMount} from 'vue'
import axios from 'axios'
const posts = ref([])
const isLoading = ref(true)

// function getSlug(title){
//  return title.toLowerCase().replace(/\s+/g, '-')
// }

onBeforeMount(async ()=>{
    // fetch('https://dummyjson.com/posts')
    // .then(res => res.json())
    // .then(data =>{
    //     posts.value = data.posts
    //     isLoading.value=false
    // })

    // let res = await axios.get("https://dummyjson.com/posts")
    // posts.value = res.data.posts;
    // isLoading.value=false;

    let url = "https://dummyjson.com/posts"
    let res = await axios.get(url)
    posts.value = res.data.posts
    isLoading.value= false
})

</script>

<template>
    <!-- <div v-if="isloading" class="flex justify-center items-center mt-20">
            <span className="loading loading-ring loading-lg">Loading....</span>
    </div> -->

    <h1 v-if="isLoading">loading.....</h1>

    <div v-if="!isLoading">
        <article class="mb-10" v-for="post in posts" :key="post.id">
        <h1 class="text-2xl mb-2">
            <!-- {{ post.title }} -->
            <router-link :to="{ name: 'post', params: { id: post.id}}">{{ post.title }}</router-link>
        </h1>
        <p>
            <router-link :to="{ name: 'post', params: { id: post.id}}">
            <img :src="`//source.unsplash.com/random/300x200?${post.id}`" alt="">
            </router-link>
        </p>
    </article>
    </div>

    
</template>