<template>
  <div id="app">
    <body>
      <Header />
      <router-view />
      
    </body>
  </div>
</template>

<script>
import Header from './components/header.vue';
import { getVehicles } from './assets/data/request.js';




export default {
  components: {
    Header,

  },
  methods: {
    addVehicle (vehicle) {
      this.$store.commit('ADD_VEHICLE', vehicle)
    }
  },
    beforeCreate () {
      this.$store.getVehicles
      getVehicles().then(data => {
       data.forEach(vehicle => {
         this.addVehicle(vehicle);
       })})
       .catch(error => console.log(error))
  }

}
</script>

<style lang="scss">
@import './assets/font/stylesheet.css';

body {
    font-family: 'Codec Pro';
    font-weight: 300;
    font-size: 12px;
    font-style: normal;
    line-height: 20px;
    color: $dark-gray;
}

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
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: repeat(4, auto);
  grid-gap: 32px 3%;
}

@include for-tablet-landscape-up {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@include for-phone-only {
  .cards {
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
  }
}
</style>
