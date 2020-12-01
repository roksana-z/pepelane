<template>
  <header class="container max-width">
    <div class="header">
      <div class="header__logo-wrapper">
      <Logo v-bind:size="{ width: '13px', height: '48px'}"/>
    </div>
    <div class="header__short-desc">
      World's first affordable airsharing
    </div>
    <div class="header__right">
       <a class="mod header__mod" href="#">
      <img class="mod__img icon" src="../assets/images/NightMo.png" alt="moon" />
      <span class="mod__text">Night mod</span>
      </a>
      <a class="header__chat" href="#">
        <img src="../assets/images/chat.png" alt="chat" />
      </a>
      <a class="header__notification" href="#">
        <img src="../assets/images/notification.png" alt="notification" />
      </a>
      <User />
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
  &__chat {
    margin-right: 2%;
  }
  &__notification {
    margin-right: 5%;
  }
}

.mod {
  display: flex;
  align-items: center;
  min-width: 122px;
  justify-content: space-between;
  margin-right: 20%;
  color: $dark-gray;
}

@include for-tablet-landscape-up {
  .header{
    &__short-desc {
    margin-right: 2%;
    }
    &__right {
      width: calc((100% - 113px) * 60 / 100);
      justify-content: flex-end;
    }
    &__logo-wrapper {
     
    }
    &__notification {
     
    }
  }
  .mod {
    margin-right: 1%;
    min-width: fit-content;
    display: block;
    &__text {
      display: none;
    }
  }
}

  
//    @include for-tablet-landscape-up  {
//     .header {
//       width: 90%;
//       justify-content: space-between;
//       &__chat, &__notification, &__mod, &__logo-wrapper {
//         margin-right: 0px;
//       }
//     }
//   }
 @include for-phone-only {
    
    .header__short-desc{
      display: none;
    }
    .header__right {
      width: calc(100% - 113px);
      justify-content: flex-end;
    }
  }

</style>
