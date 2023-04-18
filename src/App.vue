<script setup>
import SearchBox from './components/SearchBox.vue'
import StaffListing from './components/StaffListing.vue'
</script>

<template>
  <main>
    <SearchBox />
    <StaffListing />
  </main>
</template>

<style scoped lang="scss">
main {
  padding: 2.4rem 4rem;
}
</style>
