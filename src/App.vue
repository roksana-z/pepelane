<template>
  <div id="app">
    <body>
        <Header />
        <router-view />
    </body>
  </div>
</template>


<script>
import Header from  './components/header.vue';

export default {
  components: {
    Header,
  }
}
</script>


<style lang="scss">


a {
    text-decoration: none;
}

ul {
    padding: 0;
}

.container {
    width: calc(100% - 30px);
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

.max-width {
    max-width: 1920px;
}

.main-wrapper {
    padding: 56px 5%;
    background-color: $light-gray;
    border-radius: 16px;
}

.filter-block {
    display: flex;
    justify-content: space-between;
    &__title-wrapper {
        display: flex;
        align-items: center;
        font-weight: 300;
        font-style: normal;
        font-size: 40px;
        width: 26%;
    }
    &__btn {
        width: 48px;
        background-color: $dark-blue;
    }
    &__rent {
        color: $midnight-blue;
        margin-right: 5%;
    }
    &__whatever {
        color: $blue;
    }
}

.base-button {
    height: 48px;
    border-radius: 16px;
    color: white;
    border-style: none;
    border-width: 0;
}

.card-addition {
    display: flex;
    align-items: center;
    width: 13%;
    &__text {
        font-size: 20px;
        color: $blue;
        margin-right: 13%;
    }
}

.cards {
    display: grid;
    padding-top: 40px;
    padding-bottom: 40px;
    grid-template-columns: repeat(3, 31.5%);
    grid-auto-rows: repeat(4, auto);
    grid-gap: 32px 3%;
}
</style>
