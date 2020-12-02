<template>
  <a class="user" href="#">
    <span class="user__name">Bessie Cooper</span>
    <img class="user__img" src="../assets/images/user.png" alt="user" />
  </a>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__name {
    color: $midnight-blue;
    size: 16px;
    font-weight: 700;
  }
  &__img {
    border-radius: 16px;
  }
}

@include for-tablet {
  .user__name {
    display: none;
  }
}
</style>
