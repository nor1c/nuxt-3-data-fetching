<template>
  <div>
    <nuxt-link to="about">go to about page</nuxt-link>&nbsp;
    <nuxt-link to="lazy-async-data">go to useLazyAsyncData() page</nuxt-link>

    <UseFetch />
    <UseLazyFetch />
    <UseAsyncData />
  </div>
</template>

<script setup>
import UseFetch from '~/components/fetch/UseFetch.vue'
import UseLazyFetch from '~/components/fetch/UseLazyFetch.vue'
import UseAsyncData from '~/components/fetch/UseAsyncData.vue'
</script>