<!--  -->
<template>
    <div >
        <el-row>
            <el-badge  :value="this.$store.state.count" class="item">
            <el-button ref="badgeHW" size="small">评论</el-button>
            </el-badge>
        </el-row>
        <el-button type="info" @click="handleActive">去激活</el-button>
        <el-button type="primary" >打开</el-button>

        <VueDragResize :isActive="myActive" 
            @mousedown="onSelectElement($event)" @touchstart="onSelectElement($event)"
            :w="200" :h="200" 
            v-on:resizing="resize" 
            v-on:dragging="resize">
                <h3>Hello World!</h3>
                <p>{{ top }} х {{ left }} </p>
                <p>{{ width }} х {{ height }}</p>
                <el-button  type="primary" @click="buttonClick">确认</el-button>

            <el-radio v-model="radio" label="1">备选项</el-radio>
            <el-radio v-model="radio" label="2">备选项</el-radio>
            <el-input v-model="input" placeholder="请输入内容"></el-input>
        </VueDragResize>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import VueDragResize from 'vue-drag-resize'

export default {
//import引入的组件需要注入到对象中才能使用
components: {
    VueDragResize
},
data() {
    //这里存放数据
    return {
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        myActive: false,
        radio: '1',
        input: ''
    };
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
    methods: {
        buttonClick() {
            console.log("b clicked")
        },
        resize(newRect) {
            this.width = newRect.width;
            this.height = newRect.height;
            this.top = newRect.top;
            this.left = newRect.left;
        },
        handleActive: function() {
            if(this.myActive) {
                this.myActive = false
            } else {
                this.myActive = true
            }
        },
        onSelectElement(event) {
            console.log(event.target.tagName)
        },
    },
//生命周期 - 创建完成（可以访问当前this实例）
created() {

    //console.log(this.$route.params)
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    console.log(this.$refs.badgeHW)
    console.log("宽度：" + this.$refs.badgeHW.$el.clientWidth)
    this.$refs.badgeHW.$el.style.height = "56px"

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

</style>
