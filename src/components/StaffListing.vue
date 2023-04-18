<template>
  <div class="staff-result">
    <div class="staff-result__count" v-if="data?.info?.results">
      Showing {{ data.info.results }} Staffs per page
    </div>
    <div class="staff-result__wrapper" v-if="data?.results">
      <StaffItem v-for="(staff, index) in data.results" :key="index" :staff="staff" />
    </div>
  </div>
</template>

<script>
import StaffItem from './StaffItem.vue'
export default {
  components: {
    StaffItem
  },

  props: {
    data: Object
  }
}
</script>

<style lang="scss" scoped>
.staff-result {
  &__count {
    font-weight: 500;
    margin: 1rem 0 1.5rem;
    font-family: Rokkitt, Helvetica, serif;
  }
  &__wrapper {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 1.5rem 1rem;
    @media (max-width: 1200px) {
      grid-template-columns: auto auto;
    }
    @media (max-width: 768px) {
      grid-template-columns: auto;
    }
  }
}
</style>
