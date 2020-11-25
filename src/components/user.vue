<template>
  <a class="user header__user" href="#">
        <span class="user__name">Bessie Cooper</span>
        <img  class="user__img" src="../assets/user.png" alt="user">
    </a>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.user {
    display: flex;
    align-items: center;
    width: 14%;
    justify-content: space-around;
    &__name {
        color: $midnight-blue;
        size: 16px;
        font-weight: 700;
    }
    &__img {
        border-radius: 16px;
    }
}
</style>