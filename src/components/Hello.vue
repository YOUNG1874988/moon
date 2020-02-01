<template>
  <div class="index">
    <div v-wechat-title="$route.meta.title"></div>
    <!-- 使用query方式获取路由被路由组件的参数 -->
    <p>{{this.$route.query.name}}
    </p>
    <p>{{this.$route.query.gender}}</p>

<!-- 用另外一个组件来展示获取到的数据 -->
    <div v-for="(item, index) in newsListShow" :key='index'>
      <news-cell
      :newsDate="item"

      ></news-cell>
    </div>
  </div>
</template>
 
<script>
import api from '../axios/api.js'
import NewsCell from './NewsCell.vue'
 
export default {
  name: 'index',
  data () {
    return {
      newsListShow: [],
    }
  },
  components: {
    NewsCell
  },
  created() {
    this.setNewsApi();
  },
  methods:{
    setNewsApi: function() {
        // 这里执行了从axios中传过来的axios请求，url和mock.js中的一致，前后端就可以传数据了
      api.JH_news('/news/index', 'type=top&key=123456')
      .then(res => {
        console.log(res);
        this.newsListShow = res.studentInfo;
      });
    },
  }
}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topNav{
  width: 100%;
  background: #ED4040;
  position: fixed;
  top:0rem;
  left: 0;
  z-index: 10;
}
.simpleNav{
  width: 100%;
  line-height: 1rem;
  overflow: hidden;
  overflow-x: auto;
  text-align: center;
  font-size: 0;
  font-family: '微软雅黑';
  white-space: nowrap;
}
.simpleNav::-webkit-scrollbar{height:0px}
.simpleNavBar{
  display: inline-block;
  width: 1.2rem;
  color:#fff;
  font-size:0.3rem;
}
.navActive{
  color: #000;
  border-bottom: 0.05rem solid #000;
}
.placeholder{
  width:100%;
  height: 1rem;
}
</style>