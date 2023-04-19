<template>
  <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
  <main class="container" v-else>
    <h1>STAFF DIRECTORY</h1>
    <SearchBox />
    <StaffListing :data="data" />
    <Pagination @prev-page="getPrevPage" @next-page="getNextPage" :page-no="pageNo" />
  </main>
</template>

<script>
import { ref } from 'vue'
import { useFetch } from './composables/fetch.js'
import SearchBox from './components/SearchBox.vue'
import StaffListing from './components/StaffListing.vue'
import Pagination from './components/PaginationItem.vue'

export default {
  components: {
    SearchBox,
    StaffListing,
    Pagination
  },

  setup() {
    const pageNo = ref(1)

    // Returns data from usefetch composable
    const { data, error, loadData } = useFetch()

    loadData(pageNo.value)

    //Function to get previous page number and load content for it
    const getPrevPage = () => {
      pageNo.value = Number(pageNo.value) - 1
      loadData(pageNo.value)
    }

    //Function to get next page number and load content for it
    const getNextPage = () => {
      pageNo.value = Number(pageNo.value) + 1
      loadData(pageNo.value)
    }

    return { data, error, getPrevPage, getNextPage, pageNo }
  }
}
</script>

<style scoped lang="scss">
main {
  padding: 2.4rem 0;
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
  h1 {
    font-size: 1.7rem;
    margin-bottom: 1rem;
    font-family: Rokkitt, Helvetica, serif;
    color: var(--c-primary-color);
    font-weight: 800;
  }
}
</style>
