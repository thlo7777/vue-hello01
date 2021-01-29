<!--  -->
<template>
    <div class='test01'>
        <div v-if="show"> {{var01}} </div>
        <div v-else> no </div>
        <div v-for="(item,index) in arrayData" :key="index">
            {{item}} --- {{index}}
        </div>
        <el-row>
            <el-button type="primary" icon="el-icon-edit"></el-button>
            <el-button type="primary" icon="el-icon-share"></el-button>
            <el-button type="primary" icon="el-icon-delete"></el-button>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
            <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
            <el-button type="primary" @click="openDialog">控件调用</el-button>
        </el-row>

        <!-- <Mydialog :visible.sync="dialogVisible"/> -->
        <!-- <ttdialog :visible.sync="dialogVisible"></ttdialog> -->
        <!-- <el-dialog :visible.sync="dialogVisible">fuck</el-dialog> -->
        <!-- <el-dialog :visible.sync="baiduMapVisible">我是中国地图的弹窗</el-dialog> -->
        <mydialog :show.sync="dialogVisible"></mydialog>
        <!-- <fuck :QualityDialogFlag.sync="QualityDialogFlag"></fuck> -->
        <!-- <el-button type="primary" @click="QualityClick">打开Dialog</el-button> -->
    </div>
</template>

<script>
import Mydialog from '@/components/Mydialog.vue';
import Ttdialog from './ttdialog.vue';
import Fuck from '@/components/fuck.vue';
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
//import引入的组件需要注入到对象中才能使用
    components: {
        Mydialog,
        Ttdialog,
        Fuck,
    },

    props: {
        show: {
            type: Boolean,
            default: false
        }
        //QualityDialogFlag: false,
    },

    data() {
    //这里存放数据
        return {
            //show: false,
            var01: "good, good",
            arrayData: [
                "hello",
                "take",
                "mad"
            ],
            dialogVisible: false,
            baiduMapVisible: false,
            QualityDialogFlag: false

        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {

        openDialog: function() {
            console.log("vvv");
            this.dialogVisible = true;
            //this.baiduMapVisible = true;
        },

        QualityClick() {
            this.QualityDialogFlag = true
        }
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
