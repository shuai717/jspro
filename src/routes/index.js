// import index from '../components/index/index.vue'
const index = ()=> import(/*webpackChunkName:"index"*/"../components/index/index.vue");
const search = ()=> import(/*webpackChunkName:"search"*/"../components/index/search.vue");
const category = ()=> import(/*webpackChunkName:"category"*/"../components/category/category.vue");
const personal = ()=> import(/*webpackChunkName:"personal"*/"../components/personal/personal.vue");
const shopcar = ()=> import(/*webpackChunkName:"shopcar"*/"../components/shopcar/shopcar.vue");
const buy = ()=> import(/*webpackChunkName:"buy"*/"../components/buy/buy.vue");
const loginRoot = ()=> import(/*webpackChunkName:"loginRoot"*/"../components/login/loginRoot.vue");
const login = ()=> import(/*webpackChunkName:"login"*/"../components/login/login.vue");
// import search from '../components/index/search.vue'
// import category from '../components/category/category.vue'
// import personal from '../components/personal/personal.vue'
// import shopcar from '../components/shopcar/shopcar.vue'
// import buy from '../components/buy/buy.vue'
export default [
    {path:'/index',component:index,meta:{showFooter:true}},
    {path:'/search',component:search,meta:{showFooter:false}},
    {path:'/category',component:category,meta:{showFooter:true}},
    {path:'/personal',component:personal,meta:{showFooter:true}},
    {path:'/shopcar',component:shopcar,meta:{showFooter:true}},
    {path:'/buy',component:buy,meta:{showFooter:true}},
    {path:'/loginRoot',component:loginRoot,meta:{showFooter:false}},
    {path:'/login/:id',component:login,meta:{showFooter:false},props:true},
    {path:'/',redirect:'/index'}
]
