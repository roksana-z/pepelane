<template>
<router-link :to="{ name: 'specification', params: { id: card.id } }" class="card">
    <img class="card__img" v-bind:src="card.preview" alt="helecopter">
    <div class="card__content">
        <span class="card__title">{{card.name}}</span>
        <span class="card__description">{{card.description}}</span>
        <span class="card__price">{{card.rent}} $/h</span>
    </div>
</router-link>
</template>

<script>

export default {
    props: ['card'],
}
</script>

<style lang="scss" scoped>
.card {
    display: flex;
    background-color: $white;
    padding: 24px 6%;
    border-radius: 16px;
    
    &__content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 6%;
    }
    &__title {
        font-size: 16px;
        color: $navy;
        font-weight: 700;
    }
    &__description {
        color: $dark-gray;
    }
    &__price {
        color: $pink;
        font-size: 14px;
    }
    &__img {
        border-radius: 24px;
        width: 88px;
        height: 88px;
    }
}

@include for-max-phone  {
    .card__conten {
        justify-content: center;
    }
}
</style>