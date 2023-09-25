<script setup>
import {useRoute} from 'vue-router'
import {reactive, onBeforeMount} from 'vue'

const post = reactive({})
const route = useRoute()
const id = route.params.id

onBeforeMount(() =>{
    fetch(`https://dummyjson.com/posts/${id}`)
    .then(res => res.json())
    .then(data =>{
        post.id = data.id
        post.title = data.title
        post.body = data.body
    })
})
</script>

<template>
    <article class="mb-10">
        <!-- <h1>{{ $route.params.id }}</h1> -->
        <h1 class="text-2xl mb-2">
            {{ post.title }}
        </h1>
        <p>
            <img :src="`//source.unsplash.com/random/300x200?${post.id}`" alt="">
            {{ post.body }}
        </p>
    </article>
</template>