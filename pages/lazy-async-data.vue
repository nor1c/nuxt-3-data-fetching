<template>
  <div>
    <nuxt-link to="/">go to index</nuxt-link>

    <UseLazyAsyncData />
  </div>
</template>

<script setup>
import UseLazyAsyncData from '~/components/fetch/UseLazyAsyncData.vue'
</script>