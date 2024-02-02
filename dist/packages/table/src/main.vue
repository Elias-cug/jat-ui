<template>
  <div class="jat-table-wrap">
    <div class="jat-table">
      列表
      <ElTable />
    </div>
  </div>
</template>
<script>
import { Table } from "element-ui";
export default {
  name: "JatTable",
  components: {
    ElTable: Table
  },
  data() {
    return {
      data: [],
      columns: [
        {
          prop: "aa",
          name: "bb"
        }
      ]
    }
  }
}
</script>