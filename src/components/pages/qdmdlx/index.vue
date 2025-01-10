<template>
<div class="container">
    <Sidebar />
    <!-- <div class="dataArea">
      <h1 class="data-style">数据填充区</h1>
      <router-view /> 
    </div> -->
    <div style="display:flex;flex:1;">
        <router-view /> 
    </div>
    <!-- <MainContent />  -->
</div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import MainContent from '@/components/MainContent.vue'
export default {
     name:'qdmdlx',
     components:{
        Sidebar,
        // MainContent,
     }
}
</script>

<style scoped>
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
</style>