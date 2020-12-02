.<template>
  <div class="rent-box">
    <span
      >Rent for <span class="rent-box__price">{{ price }} $/h</span></span
    >
    <BaseButton class="rent-box__btn">Rent now</BaseButton>
  </div>
</template>

<script>
import BaseButton from './base-button'

export default {
  props: ['price'],
  components: {
    BaseButton
  }
}
</script>

<style lang="scss" scoped>
.rent-box {
  display: flex;
  font-weight: 300;
  font-size: 20px;
  background-color: $light-gray;
  justify-content: space-between;
  align-items: center;
  padding: 32px 3%;
  border-radius: 16px;
  &__price {
    color: $pink;
  }
  &__btn {
    width: 25%;
    background-color: $blue;
    &:hover {
      opacity: 0.7;
      cursor: pointer;
    }
  }
}

@include for-tablet {
  .rent-box {
    position: sticky;
    bottom: 0;
  }
}
</style>
