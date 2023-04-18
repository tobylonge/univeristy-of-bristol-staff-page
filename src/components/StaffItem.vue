<template>
  <div class="staff-item">
    <div class="staff-item__profile-picture">
      <img
        src="https://research-information.bris.ac.uk/ws/files/288843964/_1JJ0057_crop.jpg"
        alt="title"
      />
    </div>
    <div class="staff-item__details">
      <h2>Dr John Doe</h2>
      <ul>
        <li>
          <EmailIcon height="18" width="18" />
          <a href="#">Email</a>
        </li>
        <li>
          <PhoneIcon height="18" width="18" />
          <a href="#">Phone</a>
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
  }
}
</script>

<style lang="scss" scoped>
.staff-item {
  background: var(--c-lighter-grey);
  display: flex;
  align-items: center;
  padding: 1rem;
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
      font-size: 1.5rem;
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
