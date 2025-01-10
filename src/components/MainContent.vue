<template>
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
        <el-tab-pane label="Others" name="third" class="content_2d">Others</el-tab-pane>
           <others></others>
      </el-tabs>
    </div>
 
  </div>

</template>

<script>
import twoDimension from './twoDimension.vue';
import threeDimension from './threeDimension.vue';
import Others from './others.vue';

export default {
  name: 'MainContent',
  components:{
     twoDimension,
     threeDimension,
     Others,
  },
  data(){
    return {
      searchQuery: '',
      activeName: 'first'
    }
  },
  methods:{ 
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style>
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
</style>