<template>
  <el-dialog
    :visible.sync="dialogVisible"
    :fullscreen="isFullScreen"
    :show-close="false"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <span slot="title">
      <slot name="title">
        <div class="jat-dialog-title">
          <div class="jat-dialog-title-text">{{ title }}</div>
          <div class="jat-dialog-title-btns">
            <span v-if="isShowFullScreen">
              <JatIcon
                class="cursor-pointer"
                width="18px"
                height="18px"
                :icon-name="
                  !isFullScreen ? 'icon-fullscreen' : 'icon-fullscreen-quit'
                "
                @click="isFullScreen = !isFullScreen"
              />
            </span>

            <i @click="handleClose" class="el-icon-close cursor-pointer"></i>
          </div>
        </div>
      </slot>
    </span>
    <slot></slot>
    <span slot="footer" class="dialog-footer">
      <slot name="footer"
        ><JatUIButton @click="handleClose" type="plain">取消</JatUIButton>
        <JatUIButton @click="handleConfirm()" type="primary"
          >确定</JatUIButton
        ></slot
      >
    </span>
  </el-dialog>
</template>

<script>
import JatUIButton from "../Button/JatUIButton.vue"
import JatIcon from "../../JatIcon/JatIcon.vue"
export default {
  name: "jatDialog",
  props: {
    /** 标题 */
    title: {
      type: String,
      default: ""
    },
    visible: {
      type: Boolean,
      default: false
    },
    isShowFullScreen: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    dialogVisible: {
      get() {
        return this.visible
      },
      set(val) {
        this.$emit("update:visible", val)
      }
    }
  },
  components: { JatUIButton, JatIcon },
  data() {
    return {
      isFullScreen: false
    }
  },
  methods: {
    handleClose() {
      this.$emit("update:visible", false)
      this.$emit("close")
    },
    handleConfirm() {
      this.$emit("confirm")
    }
  }
}
</script>

<style lang="less" scoped></style>
