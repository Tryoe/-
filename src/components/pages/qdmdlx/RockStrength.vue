<template>
  <div class="rowDirection">
  <div class="dataArea">
    <h1 class="data-style">数据填充区</h1>
    <div class="table-style" style="border:1px solid #8caddb; width: 275px;">
    <el-scrollbar wrap-style="overflow-x:hidden;" style="height: 100%;">
      <el-table
        ref="mergedTable"
        :data="mergedData"
        :show-header="false"
        :cell-style="cellStyle"
        :highlight-current-row="true"
        @current-change="handleCurrentChange"
        :row-class-name="rowClassName"
        style="width:100%; font-size: 15px; color: black;">
        
        <el-table-column
          label="Rock Name"
          :min-width="100"
          prop="name"
          >
        </el-table-column>

      </el-table>
    </el-scrollbar>
  </div>
  </div>
  <div class="main-content">
    <div class="fixed-header">
        <div class="header-container">
          <div class="header-left">
          </div>
          <div class="header-right">
            <div class="user-actions">
              <i class="fas fa-cog"></i>
              <i class="fas fa-bell"></i>
              <div class="user-avatar">
                <img src="@/assets/pic/icon.jpg" alt="用户头像">
                <span>用户信息</span>
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="2D Page" name="first" class="content_2d">
          <two-dimension></two-dimension>
        </el-tab-pane>
        <el-tab-pane label="3D page" name="second" class="content_2d">
          <three-dimension></three-dimension>
        </el-tab-pane>
        <el-tab-pane label="Others" name="first" class="content_2d">Others
          <others></others>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</div>
 
   
  </template>
  
<script>
import twoDimension from '@/components/twoDimension.vue';
import threeDimension from '@/components/threeDimension.vue';
import Others from '@/components/others.vue';
  export default {
    name:'RockStength',
    components:{
      twoDimension,
      threeDimension,
      Others,
    },
    data() {
      return {
        activeName: 'first',
      };
    },
  };
</script>
  
<style scoped>
.table-style {
    margin-left: 5px;
    border: 1px solid #8caddb;
  }
  
.el-table .el-table__body-wrapper tr {
    background-color: white;
  }
  
.el-table .el-table__body-wrapper tr.selected {
    background-color: #75787b;
  }
  
  /* 为标题行添加自定义样式 */
::v-deep .category-row {
    color: rgb(10, 10, 10) !important;  /* 设置文字颜色 */
    font-weight: 700 !important;  /* 设置加粗字体 */
    text-align: center !important;  /* 设置文本居中 */
    font-size: 20px;  /* 可以适当调整字体大小 */
    border-bottom: 2px solid #5B9BD5; /* 可添加底部边框，以区分不同类型的岩石 */
  }
  
.demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
    height: 700px;
  }
.content_2d{
    height: 700px;
  }
.dataArea{
  /* 数据填充区 */
      width: 300px;
      background-color: #f8f7fd;
      padding: 20px 0;
      border-right: 1px solid #eee;
      /* 设置最大高度为视口高度减去其他部分的高度（例如MainContent） */
     height: calc(100vh - 20px); /* 60px 可以根据实际需要调整 */
    
     /* 如果内容超出容器，开启滚动 */
     overflow-y: auto;  /* 允许垂直滚动 */
  }
.data-style{
      width: 60%;
      background-color: #f8f7fd;
      margin: 0px 10px 10px 22%;
  }
.rowDirection{
      flex: 1;
      background-color: #ffffff;
      display: flex;
      flex-direction: row;
      position: relative;
      height: 100vh;
      box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.03);
  }
  </style>
  