<template>
  <header class="container max-width">
    <div class="header">
      <div class="header__logo-wrapper">
        <Logo v-bind:size="{ width: '13px', height: '48px' }" />
      </div>
      <div class="header__short-desc">
        World's first affordable airsharing
      </div>
      <div class="header__right">
        <a class="mod header__mode" href="#">
          <img src="../assets/images/NightMo.png" alt="moon" />
          <span class="mod__text">Night mode</span>
        </a>
        <a class="header__chat" href="#">
          <img src="../assets/images/chat.png" alt="chat" />
        </a>
        <a class="header__notification" href="#">
          <img src="../assets/images/notification.png" alt="notification" />
        </a>
        <User class="header__user" />
      </div>
    </div>
  </header>
</template>

<script>
import Logo from './logo.vue'
import User from './user.vue'

export default {
  components: {
    Logo,
    User
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 48px;
  padding-bottom: 40px;

  &__short-desc {
    margin-right: calc((100% - 113px) * 22 / 100);
    font-size: 16px;
    color: $dark-gray;
  }
  &__right {
    display: flex;
    align-items: center;
    width: calc((100% - 113px) * 47 / 100);
    justify-content: flex-end;
  }
  &__logo-wrapper {
    margin-right: calc((100% - 113px) * 5 / 100);
    width: 13%;
    min-width: 113px;
  }
  &__mode {
    min-width: 122px;
    margin-right: 20%;
    color: $dark-gray;
  }
  &__chat {
    margin-right: 2%;
  }
  &__notification {
    margin-right: 5%;
  }
  &__user {
    width: calc((100% - 113px) * 32 / 100);
  }
}

.mod {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@include for-tablet {
  .header {
    &__short-desc {
      margin-right: 2%;
    }
    &__right {
      width: calc((100% - 113px) * 60 / 100);
      justify-content: flex-end;
    }
    &__mode {
      margin-right: 1%;
      display: block;
      min-width: fit-content;
    }
    &__user {
      width: fit-content;
    }
  }
  .mod {
    &__text {
      display: none;
    }
  }
}

@include for-phone-only {
  .header {
    padding-top: 12px;
    padding-bottom: 12px;
  }
  .header__short-desc {
    display: none;
  }
  .header__right {
    width: calc(100% - 113px);
    justify-content: flex-end;
  }
}
</style>
