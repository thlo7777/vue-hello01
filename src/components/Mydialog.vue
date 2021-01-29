<!--  -->
<template>
    <el-dialog
        title="提示"
        width="30%"
        :visible.sync="visible"
        :close-on-click-modal="false"
        >
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="cancelClose">取 消</el-button>
            <el-button type="primary" @click="confirm">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
// :before-close="handleClose">
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
    name: "Mydialog",
    inheritAttrs: false,
    props: {
        show: false,
    },

    components: {},

    data() {
        //这里存放数据
        return {
            visible: false
        };
    },
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {
    show() {
        this.visible = this.show 
    }
},
//方法集合
methods: {
    cancelClose: function() {
        this.visible = false;
        this.$emit("update:show", false);
    },
    confirm: function() {
        this.visible = false;
        this.$emit("update:show", false);
    }
    /*
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});

        this.$emit("update:show", false);
    }
    */
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

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
