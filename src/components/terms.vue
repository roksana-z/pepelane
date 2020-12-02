.<template>
  <div class="terms">
    <span>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    </span>
    <p>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. Exercitation veniam
      consequat sunt nostrud amet.
    </p>
    <span class="terms__title">Additional cpnditions</span>
    <ul class="terms__conditions">
      <li>
        <span>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </span>
      </li>
      <li>
        <span>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </span>
      </li>
      <li>
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
.terms__title {
  font-size: 16px;
  color: $midnight-blue;
  font-weight: bold;
}

.terms__conditions {
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
