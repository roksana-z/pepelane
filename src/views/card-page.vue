<template>
  <div class="card-page container max-width">
    <img class="card-page__img" v-bind:src="card.image" alt="helecopter" />
    <div class="card-page__content">
      <h1 class="card-page__title">{{ card.name }}</h1>
      <ul class="card-page__menu menu">
        <router-link class="menu__link" :to="{ name: 'specification' }"
          ><li class="menu__item">Specifications</li></router-link
        >
        <router-link :to="{ name: 'team' }" class="menu__link"
          ><li class="menu__item">Team</li></router-link
        >
        <router-link :to="{ name: 'terms' }" class="menu__link"
          ><li class="menu__item">Rent terms</li></router-link
        >
      </ul>
      <router-view class="content"></router-view>
      <RentBox v-bind:price="card.rent" class="rent" />
    </div>
  </div>
</template>

<script>
import RentBox from '../components/rent-box.vue'

export default {
  props: ['id'],
  computed: {
    card() {
      return this.$store.getters.getCardById(this.id)
    }
  },
  components: {
    RentBox
  }
}
</script>

<style lang="scss" scoped>
.card-page {
  display: flex;
  align-items: center;
  font-size: 14px;
  &__content {
    display: flex;
    height: 604px;
    flex-direction: column;
  }
  &__img {
    height: 700px;
    width: 55%;
    max-width: 712px;
    margin-right: 5%;
    border-radius: 24px;
  }
  &__title {
    font-size: 40px;
    color: $midnight-blue;
    font-weight: normal;
  }
  &__team-short-desc {
    margin: 32px 0 49px 0;
  }
  &__text {
    margin-bottom: 16px;
  }
  &__condition-title {
    font-size: 16px;
    font-weight: bold;
  }
  &__conditions {
    padding-left: 25px;
    margin-bottom: 78px;
  }
  &__menu {
    margin-bottom: 32px;
  }
}

.rent {
  flex: 0 0 auto;
}

.content {
  flex: 1 0 auto;
}

.menu {
  display: flex;
  list-style: none;
  &__item {
    font-size: 16px;
    font-weight: bold;
  }
  &__link {
    color: $gray;
    margin-right: 5%;
    &:hover {
      color: $blue;
    }
  }
}

@include for-tablet {
  .card-page__img {
    margin-right: 0px;
    width: auto;
    height: 332px;
    min-height: auto;
  }
  .card-page {
    flex-direction: column;
  }
}
</style>
