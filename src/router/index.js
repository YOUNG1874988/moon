import Vue from 'vue'
import Router from 'vue-router'
// 导入被路由的组件
// import Home from '@/components/Home'
// import About from '@/components/About'
// import User from '@/components/User'

// 使用路由懒加载的方式导入组件
const Home = () =>
    import ('../components/Home')
const Hello = () =>
    import ('../components/Hello')
const Params = () =>
    import ('../components/Params')
Vue.use(Router)

const routes = [
    // 重定向,当用户首次进入页面时，path为缺省值，此时重定向到home页
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: {
            title: 'hometitle'
        }

    },
    {
        path: '/hello',
        component: Hello,
        meta: {
            title: 'hellotitle'
        }
    },
    {
        path: '/params:id',
        component: Params,
        meta: {
            title: 'paramstitle'
        }
    }
]
export default new Router({
    routes,
    // 默认为哈希模式，这里可以将其改为history模式
    mode: 'history'
})

// 设置路由钩子函数，用于在组件切换的时候切换相应的title
// Router.beforeEach(to,from,next) => {
//     document.title = to.
// }