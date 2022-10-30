<template>
  <div>
    <b>useLazyFetch</b>
    pending? {{ pending }}
    <div v-if="pending">
      Loading data..
    </div>
    <div v-else>
      <ul
        v-for="data in data.data.works"
      >
        <li>{{ data.id }} {{ data.users.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { pending, data } = await useLazyFetch('https://api.upy.moe/artworks/most?per_page=5&page=0&range=daily&by=none')
</script>