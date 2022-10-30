<template>
  <div>
    <b>useAsyncData</b>

    <div>
      <b>1. POST DATA</b>
      <ul v-for="post in posts">
        <li>{{ post.id }} - {{ post.title }}</li>
      </ul>
    </div>
    
    <b>counter:</b> {{ counter }}
    <br>
    <b>mountains:</b> {{ mountains }}
  </div>
</template>

<script setup>
const { data: posts } = await useAsyncData(
  'posts', 
  () => $fetch('/api/posts')
)

const { data: counter } = await useAsyncData('count', () => $fetch('/api/count'))

const { data: mountains, pending, error, refresh } = await useAsyncData(
  'mountains',
  () => $fetch('https://api.nuxtjs.dev/mountains')
)
</script>