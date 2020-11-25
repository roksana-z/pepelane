<template>
  <header class="header container max-width">
      <div class="header__logo-wrapper">
        <Logo />
      </div>
      <div class="header__short-desc">
            World's first affordable airsharing
        </div>
        <a class="mod header__mod" href="#">
            <img  class="mod__img icon" src="../assets/NightMo.png" alt="moon">
            <span class="mod__text">Night mod</span>
        </a>
        <a class="header__chat" href="#">
            <img src="../assets/chat.png" alt="chat">
        </a>
        <a class="header__notification" href="#">
            <img src="../assets/notification.png" alt="notification">
        </a>
        <User />
  </header>
</template>

<script>
import Logo from './logo.vue';
import User from './user.vue';

export default {
    components: {
        Logo,
        User
    }
}
</script>

<style lang="scss" scoped>
    .header {
    display: flex;
    align-items: center;
    padding-top: 48px;
    padding-bottom: 40px;
    &__short-desc {
        margin-right: 21%;
        font-size: 16px;
        @media(max-width: 980px) {
            display: none;
        }
    }
    &__logo-wrapper {
        margin-right: 5%;
        width: 13%;
        min-width: 113px;
    }
    &__chat {
        margin-right: 2%;
    }
    &__notification {
        margin-right: 5%;
    }

    .mod {
    display: flex;
    align-items: center;
    width: 9%;
    justify-content: space-between;
    margin-right: 8%;
    color: $dark-gray;
}
}

</style>