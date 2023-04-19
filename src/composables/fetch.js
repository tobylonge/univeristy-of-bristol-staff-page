import { ref } from 'vue'

export function useFetch() {
  const data = ref(null)
  const error = ref(null)

  // Function accepts a string as endpoint and returns data fetched from endpoint
  /**  This function fetches content from randomuser.me API using fetch
   *   It returns data if successful and error if failed
   *   @param pageNo Number - Page to be fetched from the API
   */
  const loadData = (pageNo) => {
    const baseUrl = import.meta.env.VITE_BASE_URL || 'https://randomuser.me/api/'
    const endpoint = `${baseUrl}?page=${pageNo || 1}&results=12&seed=bristol`
    fetch(endpoint)
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((err) => (error.value = err))
  }

  return { data, error, loadData }
}
