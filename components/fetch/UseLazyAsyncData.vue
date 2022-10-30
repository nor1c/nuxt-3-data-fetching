<template>
  <div>
    <b>useLazyAsyncData</b>

    <div>
      <b>1. POST DATA</b>
      <div v-if="pendingPost">
        Loading post data..
      </div>
      <div v-else>
        <ul v-for="post in posts">
          <li>{{ post.id }} - {{ post.title }}</li>
        </ul>
      </div>
    </div>

    <!-- count -->
    <div>
      {{ pendingCount ? 'Loading' : count }}
    </div>

    <!-- mountains -->
    <div>
      <div v-if="!pendingMountain">
        {{ mountains }}
      </div>
      <div v-else>Loading mountains..</div>
    </div>
  </div>
</template>

<script setup>
console.log('proses server:', process.server);

const { data: posts, pendingPost } = await useLazyAsyncData(
  'posts', 
  () => $fetch('/api/posts')
)

const { pending: pendingCount, data: count } = useLazyAsyncData('count', () => $fetch('/api/count'))
watch(count, (newCount) => {
  // Because count starts out null, you won't have access
  // to its contents immediately, but you can watch it.
})

const { data: mountains, pending: pendingMountain, error, refresh } = await useLazyAsyncData(
  'mountains',
  () => $fetch('https://api.nuxtjs.dev/mountains')
)
</script>