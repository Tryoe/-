<template>
  <div class="sidebar">
    <div class="logo">
      <h2 class="font-css">全断面+楔形掏槽</h2>
    </div>
    <div class="menu-items">
      <div 
        v-for="item in menuItems" 
        :key="item.id"
        :class="['menu-item', { active: item.isActive }]"
        @click="setActiveItem(item.id)"
      >
        <img 
             :src="item.icon" 
             alt="icon" 
             class="menu-icon" />
        <span class="text-style">{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      menuItems: [
        { id: 1, text: '岩石种类', icon: require('@/assets/pic/icon/rockspecies.png'), isActive: true ,route: '/qdmdlx/rockspecies' },
        { id: 2, text: '岩石强度', icon: require('@/assets/pic/icon/rockstrength.png'), isActive: false,route: '/qdmdlx/rockstrength' },
        { id: 3, text: '岩石结构', icon: require('@/assets/pic/icon/rockstructure.png'), isActive: false,route: '/rockspecies'  },
        { id: 4, text: '岩体结构面', icon: require('@/assets/pic/icon/four.png'), isActive: false ,route: '/rockspecies' },
        { id: 5, text: '隧道地应力', icon: require('@/assets/pic/icon/five.png'), isActive: false ,route: '/rockspecies' },
        { id: 6, text: '岩体可爆性', icon: require('@/assets/pic/icon/seven.png'), isActive: false,route: '/rockspecies'  },
        { id: 7, text: '开挖轮廓线', icon: require('@/assets/pic/icon/eight.png'), isActive: false ,route: '/rockspecies' },
        { id: 8, text: '一键布置炮孔', icon: require('@/assets/pic/icon/eleven.png'), isActive: false,route: '/rockspecies'  },
        { id: 9, text: '装药量计算', icon: require('@/assets/pic/icon/twelve.png'), isActive: false ,route: '/rockspecies' },
        { id: 10, text: '起爆网络设计', icon: require('@/assets/pic/icon/thirteen.png'), isActive: false ,route: '/rockspecies' },
        {id: 11, text: '爆破效果预测', icon: require('@/assets/pic/icon/fourteen.png'), isActive: false,route: '/rockspecies'  },
        {id: 12, text: '爆破成本计算', icon: require('@/assets/pic/icon/fiveteen.png'), isActive: false ,route: '/rockspecies' },
        {id: 13, text: '爆破方案导出', icon: require('@/assets/pic/icon/sixteen.png'), isActive: false ,route: '/rockspecies' },
        {id: 14, text: '爆破方案优化', icon: require('@/assets/pic/icon/seventeen.png'), isActive: false ,route: '/rockspecies' },

      ]
    }
  },
  methods: {
    setActiveItem(id) {
      this.menuItems.forEach(item => {
        item.isActive = item.id === id;
      });
      // 路由跳转到点击的菜单对应的组件
      const activeItem = this.menuItems.find(item => item.id === id);
      this.$router.push(activeItem.route);
    }
  }
}
</script> 

<style scoped>

.menu-items {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  font-family:"pingfang SC", "helvetica neue", arial, "hiragino sans gb", "microsoft yahei ui", "microsoft yahei", simsun, sans-serif;
  font-size: 20px;
  font-weight: 500;
  transition: background-color 0.3s;
}

.menu-item:hover {
  background-color: #75787b;
}

.menu-item.active {
  background-color: #acb1b9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  color: #0469dc;
}
.menu-item.active .text-style {
  color: #0469dc;
}
.menu-item .menu-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.menu-item img {
  max-width: 20px;
  max-height: 20px;
  object-fit: contain;
}

.menu-item span {
  font-size: 16px;
}
.text-style{
  text-align-last:justify;
  text-align:justify;
  width: 100px;
  align-items: center;
  color: #000000;
}
.font-css{
  color: rgb(0, 0, 0);
}
</style>