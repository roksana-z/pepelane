<template>
  <div class="filter-block">
    <div class="filter-block__title-wrapper">
      <span class="filter-block__rent"
        >Rent <span class="filter-block__whatever">whatever</span></span
      >
      <div class="select">
        <svg display="none">
          <symbol viewBox="0 0 12 8" id="select_arrow">
            <path
              d="M6 8L0 1.99965L2.00094 0L6 4.00071L9.99906 0L12 1.99965L6 8Z"
              fill="#4959FF"
            />
          </symbol>
        </svg>
        <svg>
          <use
            xlink:href="#select_arrow"
            width="12px"
            height="8px"
            class="select__btn"
          ></use>
        </svg>
        <select class="select__list" v-model="select">
          <option v-for="type in types" v-bind:key="type">{{ type }}</option>
        </select>
      </div>
    </div>
    <div class="filter-block__card-addition card-addition">
      <span class="card-addition__text">Add new</span>
      <BaseButton class="filter-block__btn">+</BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from './base-button.vue'

export default {
  components: {
    BaseButton
  },
  beforeMount() {},
  computed: {
    types() {
      const types = this.$store.getters.getTypes
      return Array.from(new Set(types))
    },
    select: {
      get() {
        return this.$store.state.selectedType
      },
      set(value) {
        this.$store.commit('SELECT_VEHICLES', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
//

.select {
  position: relative;
  display: inline-block;
  height: 10px;
  width: 5%;
  display: inline-block;
}

.select_stretched {
  width: 100%;
}

.select__list {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  rigth: 0;

  height: 100%;
  cursor: pointer;
  appearance: none;
  opacity: 0;
}

.filter-block {
  width: 100%;
  display: flex;
  justify-content: space-between;
  &__title-wrapper {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-style: normal;
    font-size: 40px;
    width: 50%;
  }
  &__card-addition {
    width: 12%;
    min-width: 151px;
  }
  &__btn {
    width: 48px;
    background-color: $dark-blue;
    &:hover {
      opacity: 0.7;
      cursor: pointer;
    }
  }
  &__rent {
    color: $midnight-blue;
    margin-right: 3%;
  }
  &__whatever {
    color: $blue;
  }
}

@include for-phone-only {
  .filter-block__title-wrapper {
    display: flex;
    font-size: 24px;
  }
  .filter-block__card-addition {
    justify-content: flex-end;
  }
  .card-addition__text {
    font-size: 16px;
    margin-right: 12px;
  }
  .filter-block__btn {
    width: 32px;
    height: 32px;
  }
}
</style>
