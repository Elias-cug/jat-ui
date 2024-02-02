<template>
  <button
    class="jat-btn-wrap jat-btn inline-flex items-center justify-center shrink-0"
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
// TODO:loading Icon 待定，目前用饿了么icon
import JatIcon from "../../JatIcon/JatIcon.vue"
export default {
  name: "JatButton",
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
<style scoped lang="less">
.jat-btn-wrap {
  position: relative;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: var(--jat-fontSize-base);
  cursor: pointer;

  height: 32px;
  padding: 0 16px;
  margin-left: 10px;
  &:first-child {
    margin-left: 0;
  }
  &.small {
    height: 26px;
    padding: 0 4px;
    font-size: var(--jat-small-text-size);
  }
  &.button__type__primary {
    color: var(--jat-button-primary-text-color);
    background-image: var(--jat-button-primary-bgcolor);
    &:hover:not(.disable_btn):not(.loading_btn) {
      background-image: var(--jat-button-primary-hover-bgcolor);
    }
    &.disable_btn {
      color: var(--jat-button-primary-text-color);
      background: var(--jat-button-disabled-color);
    }
  }
  &.button__type__plain {
    color: var(--jat-button-plain-text-color);
    border: 1px solid var(--jat-button-plain-borderColor);
    background-image: var(--jat-button-plain-bgcolor);
    &:hover:not(.disable_btn):not(.loading_btn) {
      background-image: var(--jat-button-plain-hover-bgcolor);
    }
    &.disable_btn {
      color: var(--jat-button-disabled-plain-text-color);
      border: 1px solid var(--jat-button-disabled-color);
      background-color: var(--jat-button-disabled-plain-bgcolor);
      background-image: none;
    }
  }
  &.button__type__delete {
    color: var(--jat-button-delete-text-color);
    border: 1px solid var(--jat-button-delete-borderColor);
    background-image: var(--jat-button-delete-bgcolor);
    &:hover:not(.disable_btn):not(.loading_btn) {
      background-image: var(--jat-button-delete-hover-bgcolor);
    }
    &.disable_btn {
      color: var(--jat-button-disabled-plain-text-color);
      border: 1px solid var(--jat-button-disabled-color);
      background-color: var(--jat-button-disabled-plain-bgcolor);
      background-image: none;
    }
  }
  &.button__type__text_primary {
    color: var(--jat-button-primaryText-text-color);
    background-image: var(--jat-button-primaryText-bgcolor);
    padding: 0px 9px;
    height: 24px;
    text-decoration: var(--jat-button-textAll-style);
    &:hover:not(.disable_btn):not(.loading_btn) {
      color: var(--jat-button-primaryText-hover-color);
      background-image: var(--jat-button-primaryText-hover-bgcolor);
    }
    &.disable_btn {
      color: var(--jat-button-disabledText-text-color);
      background: var(--jat-button-disabledText-bgcolor);
    }
  }
  &.button__type__text_delete {
    color: var(--jat-button-deleteText-text-color);
    background-image: var(--jat-button-deleteText-bgcolor);
    padding: 0px 9px;
    height: 24px;
    text-decoration: var(--jat-button-textAll-style);
    &:hover:not(.disable_btn):not(.loading_btn) {
      color: var(--jat-button-deleteText-hover-color);
      background-image: var(--jat-button-deleteText-hover-bgcolor);
    }
    &.disable_btn {
      color: var(--jat-button-disabledText-text-color);
      background: var(--jat-button-disabledText-bgcolor);
    }
  }
  // 禁用
  &.jat-btn-wrap.disable_btn.jat-btn {
    cursor: not-allowed;

    opacity: 0.5;
  }

  // 加载
  &.jat-btn-wrap.loading_btn.jat-btn {
    cursor: not-allowed;
  }

  // bulingbuling
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    opacity: 0;
    transition: 0.3s;
    box-shadow: 0 0 0 6px #167cf3;
  }
  &:active:not(.disable_btn):not(.loading_btn)::after {
    box-shadow: none;
    opacity: 0.6;
    transition: 0s;
  }
}
</style>
