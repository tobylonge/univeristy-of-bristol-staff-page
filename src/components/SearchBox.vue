<template>
  <div class="search-box">
    <div class="search-box__input">
      <div class="search-box__label">Search Staff:</div>
      <div class="search-box__input-wrapper">
        <input type="text" placeholder="Example: Christine" v-model="query" />
        <button title="Submit a search query">
          <SearchIcon />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import SearchIcon from './icons/IconSearch.vue'
export default {
  components: {
    SearchIcon
  },
  setup() {
    const query = ref('')
    return {
      query
    }
  }
}
</script>

<style lang="scss" scoped>
.search-box {
  background: var(--c-light-grey);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  &__label {
    text-transform: uppercase;
    color: var(--c-text-color);
    margin-right: 1rem;
  }
  &__input {
    display: flex;
    align-items: center;
    width: 60%;
  }
  &__input-wrapper {
    display: flex;
    flex-grow: 1;
    input {
      appearance: none;
      border: none;
      padding: 1rem;
      border-radius: 0;
      width: 100%;
      max-width: 40rem;
      &:focus-visible,
      &:focus {
        outline: 1px solid var(--c-primary-color);
        + button {
          outline: 1px solid var(--c-primary-color);
        }
      }
    }
    button {
      border: 0;
      border-radius: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 3.2rem;
      background: var(--c-primary-color);
    }
  }
}
</style>
