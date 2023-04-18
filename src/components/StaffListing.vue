<template>
  <div class="staff-result">
    <div class="staff-result__count">Showing 1100 Staffs</div>
    <div class="staff-result__wrapper">
      <StaffItem />
      <StaffItem />
      <StaffItem />
    </div>
    <PaginationItem />
  </div>
</template>

<script>
import StaffItem from './StaffItem.vue'
import PaginationItem from './PaginationItem.vue'
export default {
  components: {
    StaffItem,
    PaginationItem
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
    gap: 1rem;
  }
}
</style>
