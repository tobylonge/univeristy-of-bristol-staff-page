<template>
  <ul class="pagination">
    <li class="pagination__item pagination__item--previous">
      <a href="#"><ArrowIcon /></a>
    </li>
    <li class="pagination__item pagination__item--active">
      <a href="#">1</a>
    </li>
    <li class="pagination__item">
      <a href="#">2</a>
    </li>
    <li class="pagination__item">
      <a href="#">3</a>
    </li>
    <li class="pagination__item">
      <a href="#">4</a>
    </li>
    <li class="pagination__item pagination__item--next">
      <a href="#"><ArrowIcon /></a>
    </li>
  </ul>
</template>

<script>
import ArrowIcon from './icons/IconArrow.vue'
export default {
  components: {
    ArrowIcon
  }
}
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;

  &__item {
    margin-right: 1rem;
    border-radius: 50%;
    border: solid 1px var(--c-light-grey);

    a {
      border-radius: 50%;
      height: 2.7rem;
      width: 2.7rem;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: var(--text-color);
      &:hover {
        background-color: var(--c-light-grey);
      }
    }
    &--active {
      background-color: var(--c-light-grey);
    }
    &--next {
      a svg {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
