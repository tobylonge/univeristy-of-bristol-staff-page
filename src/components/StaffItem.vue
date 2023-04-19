<template>
  <div class="staff-item">
    <div class="staff-item__profile-picture">
      <img
        v-if="staff?.picture"
        :src="staff.picture.large"
        :alt="`${staff?.name?.first} ${staff?.name?.last}`"
      />
    </div>
    <div class="staff-item__details">
      <h2>{{ staff?.name?.title }} {{ staff?.name?.first }} {{ staff?.name?.last }}</h2>
      <ul>
        <li v-if="staff?.email">
          <EmailIcon height="18" width="18" />
          <a :href="`mailto:${staff.email}`">{{ staff.email }}</a>
        </li>
        <li v-if="staff?.phone">
          <PhoneIcon height="18" width="18" />
          <a :href="`tel:${staff.phone}`">{{ staff.phone }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import EmailIcon from './icons/IconEmail.vue'
import PhoneIcon from './icons/IconPhone.vue'
export default {
  components: {
    EmailIcon,
    PhoneIcon
  },
  props: {
    staff: Object
  }
}
</script>

<style lang="scss" scoped>
.staff-item {
  background: var(--c-lighter-grey);
  display: flex;
  align-items: center;
  padding: 1rem;
  @media (max-width: 468px) {
    flex-direction: column;
  }

  &__profile-picture {
    img {
      // max-width: 100%;
      // height: auto;
      border-radius: 50%;
      height: 120px;
      width: 120px;
    }
  }
  &__details {
    margin-left: 1rem;
    h2 {
      font-size: 1.3rem;
      font-weight: 500;
      font-family: Rokkitt, Helvetica, serif;
    }
    ul {
      li {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;
        opacity: 0.75;
        a {
          margin-left: 0.5rem;
          text-decoration: none;
          color: var(--text-color);
          font-size: 0.875rem;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
