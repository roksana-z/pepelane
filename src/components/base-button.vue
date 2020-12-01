<template>
  <button class="base-button">
    <slot></slot>
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.base-button {
  height: 48px;
  border-radius: 16px;
  color: white;
  border-style: none;
  border-width: 0;
}

@include for-phone-only {
  .base-button {
    border-radius: 8px;
  }
}
</style>
