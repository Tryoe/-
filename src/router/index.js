import { createRouter, createWebHistory } from 'vue-router';
import RockSpecies from '@/components/pages/qdmdlx/RockSpecies.vue';
import RockStrength from '@/components/pages/qdmdlx/RockStrength.vue';
import index from '@/components/index.vue';
import login from '@/components/login.vue';
import qdmdlx from'@/components/pages/qdmdlx/index.vue';
import register from '@/components/register.vue'

// 其他组件依此类推...

const routes = [
  {
    path: '/qdmdlx',
    component:qdmdlx ,
    children: [
      {
        path: 'rockspecies',
        component: RockSpecies,
      },
      { 
        path: 'rockstrength',
        component: RockStrength
      },
    ]
  },
  { path: '/', redirect: '/index' },  // 重定向根路径到 /index
  { path: '/index', component: index },  // 显示 index 组件
  {path:'/register',component:register},
  { path: '/login', component: login},

  // 其他路径和组件...
];

// 创建 Vue Router 实例
const router = createRouter({
    history: createWebHistory(),  // 使用 HTML5 History 模式
    routes,  // 注册路由
  })

export default router;
