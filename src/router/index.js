import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import Personnel from '../views/Personnel'

Vue.use(VueRouter)

const routes = [
  {
      id:0,
      path: '/',
      name: 'index',
      tochange:true,
      component:()=>import('../views/Intern.vue'),
      title:'首页',
      meta:{title:"首页"},
      icon:'icon-shouye'
  },
  {
      path:'/work',
      name:'work',
      meta:{title:"工作列表",parent:{
        id:1,
        title:"工作",
        tochange:false,
        icon:'icon-gongzuo'
      }},
      component:()=>import('../views/Work.vue'),
    },
    {
      path:'/employees',
      name:'employees',
      meta:{title:"员工",parent:{
        id:2,
        title:'人员',
        tochange:false,
        icon:'icon-renyuan'
      }},
      component:()=>import('../views/Employees.vue'),
    },
    {
      path:'/intern',name:'intern',
      meta:{
        title:'实习生',
        parent:{
          id:2,
          title:'人员',
          tochange:false,
          icon:'icon-renyuan'
        }
      },
      component:()=>import('../views/Intern.vue')
    },
    {
      path:'/salary',
      name:'salary',
      meta:{
        title:'工资列表',
        parent:{
          id:3,
          title:'工资',
          tochange:false,
          icon:'icon-gongzi'
        }
      },
      component:()=>import('../views/Salary.vue')
    },
    {
      path:'/course',
      name:'course',
        meta:{title:"课程列表",parent:{
        id:4,
        title:'课程',
        tochange:false,
        icon:'icon-kecheng'
      }},
      component:()=>import('../views/Course.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 全局路由守卫
router.beforeEach((to,from,next)=>{
  document.title="实习生后台-"+to.meta.title
  // console.log(to)
  next()
})

export default router
