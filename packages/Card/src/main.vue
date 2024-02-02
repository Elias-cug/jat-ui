<template>
  <div
    class="jat-card"
    :style="{
      padding: padding
    }"
  >
    <div v-if="title || desc" class="jat-card__title--box">
      <div class="jat-card__title--left">
        <span v-if="decorate && title" class="jat-card__decorate" />
        <span v-if="title" class="jat-card__title">{{ title }}</span>
        <span v-if="desc" class="jat-card__desc" :style="descStyle">
          {{ desc }}
        </span>
      </div>
      <div class="jat-card__title--right">
        <slot name="title-right" />
      </div>
    </div>
    <div class="jat-card__title--content">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: "JatCard",
  props: {
    padding: {
      default: "16px",
      type: String
    },
    title: {
      default: "",
      type: String
    },
    desc: {
      default: "",
      type: String
    },
    descStyle: {
      type: Object,
      default: () => ({})
    },
    decorate: {
      default: true,
      type: Boolean
    }
  }
}
</script>
