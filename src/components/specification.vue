.<template>
  <div class="specification">
    <span class="card-page__short-desc">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    </span>
    <div class="card-page__sub-title">Features:</div>
    <div class="feature">
        <div class="feature__icon-container">
            <img src="../assets/images/pilot.png" alt="pilot">
        </div>
        <div class="feature__content">
            <div class="feature__title">A challenge for a true champion</div>
            <span class="feature__short-desc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</span>
        </div>
    </div>

    <div class="feature">
        <div class="feature__icon-container">
            <img src="../assets/images/cube.png" alt="cube">
        </div>
        <div class="feature__content">
            <div class="feature__title">Pilot's sweaty hands</div>
            <span class="feature__short-desc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.card-page__sub-title {
    margin: 32px 0;
    font-size: 24px;
    color: $midnight-blue;
    font-weight: bold;
}

.feature {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    &__content {
        width: 81%;
    }
    &__title {
        font-size: 16px;
        color: $midnight-blue;
        font-weight: bold;
        font-style: normal;
        margin-bottom: 8px;
    }
    &__icon-container {
        height: 96px;
        width: 15%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 16px;
        background-color: $light-gray;
        margin-right: 4%;
    }

    @include for-desktop-up {
    .specification {
        display: inline-block;
    }
}
}
</style>