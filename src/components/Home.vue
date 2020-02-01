<!--  -->
<template>
<div>
  <!-- 这里的div用于找到router/index.js中的路由配置中的该组件的title ,这样既可实现不同组件切换时页面有不同的title-->
  <div v-wechat-title="$route.meta.title"></div>

<div class="todo">
<span @click=addClick>【新增】</span><span @click=saveClick>【保存】</span><span @click=deleteClick class="deletebtn">【删除】</span>

</div>

 <table border="1" cellspacing=0 cellpadding=10>
        <thead>
            <tr class="headrow">
                <th>学生编码</th>
                <th>入学日期</th>
                <th>性别</th>
                <th>年龄</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>A001</td>
                <td>2019-01-01</td>
                <td>男</td>
                <td>6</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import api from '../axios/api.js'
import modifyapi from '../axios/modifyapi.js'
import data from '../util/mock';

export default {
data() {
return {

    studentInfo:[],
    modifyStudentInfo:[]

}
},
methods:{
    addClick(){
        var data = this.studentInfo
        // 获取当前点击之前页面的行数，以此来确定要添加第几条数据
        const currentRow = document.querySelectorAll('tr').length
        // console.log(currentRow)

        const tbody = document.querySelector('tbody')
        const row = document.createElement('tr')
                    row.className = 'bodyrow'
        tbody.appendChild(row)
        // console.log(data[currentRow - 2])
        // *********
         for (let m = 0; m < 4; m++) {
                const td = document.createElement('td')
                
                row.appendChild(td)

            }
            const tds = row.querySelectorAll('td')
           
              // 将每个对象的name给每一行的第一个单元格，依次类推进行赋值操作
            tds[0].innerText = 'A'+data[currentRow - 2].studentId
            tds[1].innerText = data[currentRow - 2].startDate
            tds[2].innerText = data[currentRow - 2].sex
            tds[3].innerText = data[currentRow - 2].age
    },
     saveClick(){
// function2:点击保存进入一个定时器方法，保存当前要修改的某一个值，用于后面在控制台展示；
// 修改目标：当前页面最后一条数据
// 如何实现修改：清空原来的数据，将新的数据给它
// 注意这里的this指向问题！！！
var that = this
that.modifyNewsApi()

  setTimeout(function(){
var stuData = that.modifyStudentInfo
        // var data = this.studentInfo
        // console.log('777')
// console.log(stuData)
var trs = document.querySelectorAll('tr')
var currRow = trs.length - 1
// console.log(currRow)
// 让当前页面最后一行的值为空
var currentTr = trs[currRow]
var currentTds = currentTr.querySelectorAll('td')
var oldage = currentTds[3].innerText
var olddate = currentTds[1].innerText
var newage = stuData.age

for(var j = 0;j < 4;j++){
    currentTds[j].innerHTML = ''
}
     console.log('将年龄的值由' +'【'+ oldage+'】'+'变更为'+'【'+ newage+'】')
     
     currentTds[0].innerText = 'A'+stuData.studentId
     currentTds[1].innerText = stuData.startDate
      currentTds[2].innerText = stuData.sex
      currentTds[3].innerText = stuData.age
    // 3秒后发起修改数据的请求
  },3000);
    }, 
    deleteClick(){
        //  取消获取数据
         var CancelToken = axios.CancelToken;
      var source = CancelToken.source();

axios.get('modify/news/index', {
  cancelToken: source.token
}).catch(function(thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
  }
});
// 取消请求（message 参数是可选的）
source.cancel('Operation canceled by the user.');


// 删除
        var deletebtn = document.querySelector('.deletebtn')
        var curRow = document.querySelectorAll('tr').length - 1 
        // console.log(curRow)
        var tbodytwo = document.querySelector('tbody')
        // 只有一行数据时点击删除无效
        if(curRow !== 1){
            tbodytwo.removeChild(tbodytwo.children[1])
        }
    },
  
    setNewsApi() {
        // 这里执行了从axios中传过来的axios请求，url和mock.js中的一致，前后端就可以传数据了
      api.JH_news('/news/index', 'type=top&key=123456')
      .then(res => {
        //   console.log('the new result is:')
        // console.log(res);
        this.studentInfo = res.studentInfo;
      });
    },
    modifyNewsApi(){
        let CancelToken = axios.CancelToken
        // 取消请求的函数
        api.JH_news('modify/news/index',  {
              cancelToken: new CancelToken(function executor(c) {
                self.cancel = c
                console.log('cancelll')
                console.log(c)
                // 这个参数 c 就是CancelToken构造函数里面自带的取消请求的函数，这里把该函数当参数用
              })
            })
      .then(res => {
          console.log('the modify result is:')
        console.log(res);
        this.modifyStudentInfo = res.studentInfo;
      });
    }
},
//生命周期 - 创建完成（访问当前this实例）
created() {
    // this.getStudentInfo()
    this.setNewsApi()
    
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.todo{
    position:absolute;
    left:36%;
    top:10%;
}
 .headrow {
            background-color: #D1D3D0;
        }
        
        table {
            width: 400px;
            /* 让表格水平居中 */
            position: absolute;
            left: 50%;
            margin-left: -200px;
            margin-top: 100px;
        }
        
        td {
            /* text-align: center; */
        }
        
        .bodyrow {
            height: 30px;
            text-align: center;
        }
</style>