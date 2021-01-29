<!--  -->
<template>
<div class='mycom'>
    <div>name: {{name}}</div>
    {{$route.params.newName}}

    <div>input value: {{inputText}}</div>
    <el-row>
        <el-input class="heClass" ref="myinput" v-model="inputText" placeholder="hello world"></el-input>
    </el-row>

</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {mapState} from 'vuex'

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    name: "缺省",
    inputText: ""
};
},
//监听属性 类似于data概念
computed: {
    ...mapState({
        count: 'count',
        userInfo: (state)=>state.userInfo
    })
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

    this.$store.commit("incfunc")
    //console.log(this.count)
    //console.log(this.userInfo)
    //console.log(this.$store.state.count)
    //console.log(this.$route)
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    console.log(this.$refs.myinput)

    this.$refs.myinput.$el.style.width = "40em"
    this.$refs.myinput.$el.style.left = "10em"
    console.log(this);

    var el = document.getElementById('app');
    var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    var myfontsize = parseFloat(style); 
    //var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
    //var myfontsize = document.documentElement.style.fontSize;
    console.log(myfontsize);

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
/* @import url(); 引入公共css类 */

.mycom >>> .heClass {
    position: absolute;
    font-size: 2em;
}

</style>
