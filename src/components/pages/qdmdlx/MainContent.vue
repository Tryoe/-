<template>
    <div>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="2D Page" name="first" class="content_2d">
          <two-dimension></two-dimension>
        </el-tab-pane>
        <el-tab-pane label="3D page" name="second" class="content_2d">
          <three-dimension></three-dimension>
        </el-tab-pane>
        <el-tab-pane label="Others" name="first" class="content_2d">Others</el-tab-pane>
           <others></others>
      </el-tabs>
    </div>
</template>

<script>
import twoDimension from '@/components/twoDimension.vue';
import threeDimension from '@/components/threeDimension.vue';
import Others from '@/components/others.vue';

export default {
  name:'EL',
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

<style scoped>
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