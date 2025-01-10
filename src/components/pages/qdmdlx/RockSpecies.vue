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
          <el-tab-pane label="Others" name="first" class="content_2d">
   <!-- <Others></Others> -->
              <Others></Others>
          </el-tab-pane>
        </el-tabs>
    </div>
  </div>
</div>
 
</template>

<script>
  import rockTypeApi from '@/api/getspecies.js'
  import bus from '@/utils/bus.js'
  import Others from '@/components/pages/qdmdlx/canvas/rockSpecies/others.vue'
export default {
  components: { Others },
  name:'RockSpecies',
  component:{
     Others,
  },
  data() {
    return {
      // 岩石数据源
      type:'花岗岩',
      rockId:'18',
      getData:[],         //辅助数组
      mergedArray:[],
      Igneous: [],
      Sedimentary: [],
      activeName: 'first',
      Metamorphic: [],
      // 合并后的数据结构
      mergedData: [],
      
      cellStyle: {
        padding: '10px',
        borderColor:'#5B9BD5!important',
      },
    };
  },
  methods: {
    // 合并数据，将岩石种类作为特殊行
    mergeData() {
      // 添加岩石种类的标题行
      this.mergedArray.push({ name: '火成岩', isCategory: true });
      console.log(this.mergedArray);
      // 添加 Igneous 岩石
      this.Igneous.forEach(item => {
       this.mergedArray.push({ name: item.name });
      });

      // 添加 Sedimentary 岩石种类标题
      this.mergedArray.push({ name: '沉积岩', isCategory: true });

      // 添加 Sedimentary 岩石
      this.Sedimentary.forEach(item => {
        this.mergedArray.push({ name: item.name });
      });

      // 添加 Metamorphic 岩石种类标题
      this.mergedArray.push({ name: '变质岩', isCategory: true });

      // 添加 Metamorphic 岩石
      this.Metamorphic.forEach(item => {
        this.mergedArray.push({ name: item.name });
      });

      this.mergedData = this.mergedArray;
    },
   // 动态设置标题行的样式
   rowClassName({ row }) {
      console.log(row.isCategory);
      return row.isCategory ? 'category-row' : '';  // 如果是标题行，返回自定义样式类
    },
    // 控制单选
    handleCurrentChange(val) {
      this.rockId = val.id;
      this.type = val.name;
    },

  },
  created(){
   bus.emit('rock-id-updated', {rockId:this.rockId});
        rockTypeApi.getRockType().then(response => {
            this.getData = response.data.data
            this.getData.map((item) => {
                if(item.type_code == '002001'){
                    this.Sedimentary.push({id:item.id,name:item.name,})
                }else if(item.type_code == '002002'){
                    this.Igneous.push({id:item.id,name:item.name,})
                   
                }else if(item.type_code == '002003'){
                    this.Metamorphic.push({id:item.id,name:item.name,})
                }
            });
            console.log(this.getData)
            this.mergeData();
        })
  },
  watch: {
  rockId(newVal) {
    console.log(newVal);
    bus.emit('rock-id-updated', { rockId: newVal });
  },
  type(newVal) {
    console.log(newVal);
    bus.emit('type-updated', { type: newVal });
       }
 }
}
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
