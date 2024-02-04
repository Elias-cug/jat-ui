<template>
  <button
    class="el-button"
    @click="onClick"
    :class="{
      [typeClass]: true,
      disable_btn: disabled,
      loading_btn: loading
    }"
    type="button"
  >
    <i v-if="loading" class="el-icon-loading mr-6px"></i>
    <JatIcon
      v-if="iconName && !loading"
      :iconName="iconName"
      class="mr-6px mt-1px"
    />
    <slot />
  </button>
</template>

<script>
import JatIcon from "../../Icon/index"
export default {
  name: "JatUIButton",
  components: {
    JatIcon
  },
  props: {
    /** 和 jatIcon传参一致 */
    iconName: String,
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    /** "primary" | "plain" | "delete"|"text_primary"|"text_delete"  **/
    type: {
      type: String,
      default: "primary"
    }
  },
  computed: {
    typeClass: function () {
      return `button__type__${this.type}`
    }
  },
  methods: {
    onClick() {
      !this.disabled && !this.loading && this.$emit("click")
    }
  }
}
</script>
