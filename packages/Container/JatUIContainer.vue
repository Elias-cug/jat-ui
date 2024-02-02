<template>
  <div
    class="jat-cantainer"
    :style="{
      padding: padding
    }"
  >
    <slot />
  </div>
</template>
<script>
export default {
  name: "JatUIContainer",
  props: {
    padding: {
      default: "16px",
      type: String
    }
  }
}
</script>
