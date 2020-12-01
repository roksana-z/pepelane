<template>
  <a class="user header__user" href="#">
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
  width: calc((100% - 113px) * 32 / 100);
  &__name {
    color: $midnight-blue;
    size: 16px;
    font-weight: 700;
  }
  &__img {
    border-radius: 16px;
  }
}

@include for-tablet-landscape-up {
  .user {
    width: fit-content;
  }
  .user__name {
    display: none;
  }
}
</style>
