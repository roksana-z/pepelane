.<template>
  <div class="rent-box">
        <span>Rent for <span class="rent-box__price">{{price}} $/h</span></span>
        <button class="base-button rent-box__btn">Rent now</button>
    </div>
</template>

<script>
export default {
    props: ['price']
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
    }
}

@include for-tablet-landscape-up {
    .rent-box {
        position: sticky;
        bottom: 0;
    }
}
</style>