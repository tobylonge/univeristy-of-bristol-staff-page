<template>
  <ul class="pagination">
    <li class="pagination__item pagination__item--previous">
      <button @click="$emit('prevPage')" :disabled="pageNo <= 1"><ArrowIcon /></button>
    </li>
    <p class="pagination__label">Page {{ pageNo }}</p>
    <li class="pagination__item pagination__item--next">
      <button @click="$emit('nextPage')"><ArrowIcon /></button>
    </li>
  </ul>
</template>

<script>
import ArrowIcon from './icons/IconArrow.vue'
export default {
  components: {
    ArrowIcon
  },
  emits: ['prevPage', 'nextPage'],
  props: {
    pageNo: Number
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

  &__label {
    margin-left: 0.75rem;
    margin-right: 0.75rem;
  }

  &__item {
    border-radius: 50%;
    border: solid 1px var(--c-light-grey);

    button {
      border-radius: 50%;
      height: 2.7rem;
      width: 2.7rem;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: var(--text-color);
      border: none;
      &:hover {
        background-color: var(--c-light-grey);
      }
      &:disabled {
        cursor: not-allowed;
        opacity: 0.3;
      }
      @media (max-width: 768px) {
        height: 1.5rem;
        width: 1.5rem;
      }
    }
    &--next {
      button svg {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
