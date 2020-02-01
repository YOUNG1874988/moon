<template>
  <div id="app">
<!-- 用router-link包裹需要执行路由的盒子，用to设置其的目标路由组件的path,即可实现点击路由的效果 -->
<router-link to='/home'>home</router-link>
<!-- 使用query方法给组件的url传递参数 ,这里要用v-bind绑定-->
<router-link :to="{path:'/hello',query:{name:'junjun',age:33,gender:'male'}}">hello</router-link>
<!-- 使用params方法传递参数 :在router/index.js中设置后在这里直接添加即可-->
<router-link to='/paramsjjjjjj'>params</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId:'lalalala'
    }
  },
  methods:{
  
  }
}
</script>

<style>

</style>
