.<template>
  <div>
    <span class="card-page__short-desc">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    </span>
    <p>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. Exercitation veniam
      consequat sunt nostrud amet.
    </p>
    <span class="card-page__condition-title">Additional cpnditions</span>
    <ul class="card-page__conditions">
      <li class="card-page__text">
        <span>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </span>
      </li>
      <li class="card-page__text">
        <span>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </span>
      </li>
      <li class="card-page__text">
        <span>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.card-page__condition-title {
  font-size: 16px;
  color: $midnight-blue;
  font-weight: bold;
}

.card-page__conditions {
  padding-left: 3%;
  margin-bottom: 76px;
}

li {
  color: $pink;
}

li span {
  color: $dark-gray;
}
</style>
