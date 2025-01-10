<template>
  <!-- <div class="container"> -->
    <router-view></router-view>
    <!-- <Sidebar />
    <div class="dataArea">
      <h1 class="data-style">数据填充区</h1>
      <router-view /> 
    </div>
    <MainContent /> -->
  <!-- </div> -->
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import MainContent from './components/MainContent.vue'

export default {
  name: 'App',
  components: {
    // Sidebar,
    // MainContent,
  }
}
</script> 
