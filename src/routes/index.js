import index from '../components/index/index.vue'
import category from '../components/category/category.vue'
import personal from '../components/personal/personal.vue'
import shopcar from '../components/shopcar/shopcar.vue'
import buy from '../components/buy/buy.vue'
export default [
    {path:'/index',component:index},
    {path:'/category',component:category},
    {path:'/personal',component:personal},
    {path:'/shopcar',component:shopcar},
    {path:'/buy',component:buy},
    {path:'/',redirect:'/index'}
]
