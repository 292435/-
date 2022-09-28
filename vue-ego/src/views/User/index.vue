<template>
  <div class="user">
    <!-- 1. 合同查看 -->
    <div class="hetong">
      签约合同内容：<el-button type="primary" size="small" @click="look"
        >查看合同</el-button
      >
    </div>
    <VuePdf ref="myPdf" />

 
  </div>
</template>

<script>
import VuePdf from "./VuePdf.vue";
import img from "../../assets/images/11.jpg";
import { export2Excel } from "../../common/js/util";
export default {
  data() {
    return {
      imgUrl: img,
      columns: [//定义表头
        { title: "日期", key: "date" },
        { title: "姓名", key: "name" },
        { title: "地址", key: "address" },
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  components: {
    VuePdf,
  },
  methods: {
    /**
     * 查看合同
     */
    look() {
      this.$refs.myPdf.dialogVisible = true;
    },


  },
};
</script>

<style lang='less' scoped>
.user {
  margin: 10px;
}
.hetong,
.table {
  padding: 10px;
  border: 1px solid #eee;
  background: #fff;
  color: #666;
}
.money {
  margin: 10px 0;
}
.header{
    display: flex;
    padding: 10px;
    .title{
        flex: 1;
        color: #333;
        font-weight: bold;
    }
}
</style>