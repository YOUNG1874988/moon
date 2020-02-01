<!--  -->
<template>
<div>
    <div v-wechat-title="$route.meta.title"></div>
    <h1>this is params !</h1>
    <!-- 获取餐素 -->
    {{this.$route.params.id}}
</div>
</template>

<script>
export default {
data() {
return {

}
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>