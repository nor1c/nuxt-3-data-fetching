<template>
  <div>
    <b>useFetch</b>
    <div>
      <ul
        v-for="data in data.data.works"
      >
        <li>{{ data.id }} {{ data.users.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch('https://api.upy.moe/artworks/most?per_page=5&page=0&range=daily&by=none')

onBeforeMount(() => {
  console.log('before mount:', data.value)
})
</script>