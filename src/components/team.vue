.<template>
  <div class="team">
    <span class="card-page__short-desc">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    </span>
    <p class="card-page__sub-title">Qualified specialists</p>
    <div class="specialists">
      <div class="specialist">
        <img
          class="specialist__img"
          src="../assets/images/specialist1.png"
          alt="specialist"
        />
        <div class="specialist__content">
          <div class="specialist__name">Marvin McKinney</div>
          <div class="specialist__specification">Pilot assistant</div>
        </div>
      </div>
      <div class="specialist">
        <img
          class="specialist__img"
          src="../assets/images/specialist2.png"
          alt="specialist"
        />
        <div class="specialist__content">
          <div class="specialist__name">Savannah Nguyen</div>
          <div class="specialist__specification">Mechanic</div>
        </div>
      </div>
      <div class="specialist">
        <img
          class="specialist__img"
          src="../assets/images/specialist3.png"
          alt="specialist"
        />
        <div class="specialist__content">
          <div class="specialist__name">Courtney Henry</div>
          <div class="specialist__specification">Stewardess</div>
        </div>
      </div>
    </div>
    <p>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. Exercitation veniam
      consequat sunt nostrud amet.
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.team {
  width: 100%;
}
.specialists {
  display: flex;
  margin-bottom: 32px;
}

.card-page__short-desc {
  margin-bottom: 32px;
}

.card-page__sub-title {
  font-size: 24px;
  color: $midnight-blue;
  font-weight: bold;
  margin-bottom: 32px;
}

.specialist {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 14px;
  margin-right: 4%;
  &__img {
    border-radius: 16px;
    margin-bottom: 16px;
    width: 100%;
  }
  &__name {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 8px;
  }
  &__specification {
    font-size: 12px;
  }
}

@include for-phone-only {
  .specialists {
    flex-direction: column;
  }
  .specialist {
    flex-direction: row;
    justify-content: start;
    &__img {
      width: auto;
      margin-right: 4%;
    }
    &__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
}
</style>
