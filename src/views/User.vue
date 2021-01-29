<!--  -->
<template>
<div class='user'>
    id: {{$route.params.userId}}
    <el-row>
        <el-button type="success" @click.native="maddItem">添加控件</el-button>
    </el-row>
    <el-row>
        <grid-layout :layout="getResources"
                    :col-num="12"
                    :row-height="30"
                    :is-draggable="true"
                    :is-resizable="true"
                    :vertical-compact="true"
                    :use-css-transforms="true" 
                    :responsive="true"
                    @layout-created="layoutCreatedEvent"
                    @layout-before-mount="layoutBeforeMountEvent"
                    @layout-mounted="layoutMountedEvent"
                    @layout-ready="layoutReadyEvent"
                    @layout-updated="layoutUpdatedEvent"
                    @breakpoint-changed="breakpointChangedEvent" >
            <grid-item v-for="(item, index) in getResources" :key="index"
                :x="item.x"
                :y="item.y"
                :w="item.w"
                :h="item.h"
                :i="item.i"
                drag-allow-from=".vue-draggable-handle"
                drag-ignore-from=".no-drag"
                @resize="resizeEvent"
             >
                <div class="text">
                    <div class="vue-draggable-handle"></div>
                    <div class="no-drag">
                        <!-- <span>{{item.i}}</span> -->
                        <span class="remove" @click="removeItem({key: index})">x</span>
                        <el-button :style="
                         [{ width: getmywidth(index) + 'px'}, {marginTop: defaultTop + 'px'} ]" @click.native="myevent(item.i)" type="primary">click</el-button>
                    </div>
                </div>
             </grid-item>
        </grid-layout>
    </el-row>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import VueGridLayout from 'vue-grid-layout';
import * as lib from '../store/lib'
import { mapGetters, mapActions } from 'vuex'

export default {
//import引入的组件需要注入到对象中才能使用
components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
},
data() {
//这里存放数据
    return {
    layout: [
                    {"x":0,"y":0,"w":2,"h":2,"i":"0", "nw":80},
                    {"x":2,"y":0,"w":2,"h":4,"i":"1", "nw":80},
                    {"x":4,"y":0,"w":2,"h":5,"i":"2", "nw":80},
                    {"x":6,"y":0,"w":2,"h":3,"i":"3", "nw":80},
                    {"x":8,"y":0,"w":2,"h":3,"i":"4", "nw":80},
                ],
        draggable: true,
        resizable: true,
        index: 0,
        eventLog: [],
        resizeArr: {},
        myWidth: [],
        newMywidth: {},
        defaultTop: 10,
        removelayout: -1

    };
},
//监听属性 类似于data概念
computed: {
    ...mapGetters([
      'getResources',
      'getmywidth'
    ])

},
//监控data中的数据变化
watch: {
    eventLog: function() {
        const eventsDiv = this.$refs.eventsDiv;
        //eventsDiv.scrollTop = eventsDiv.scrollHeight;
    }
},
//方法集合
methods: {
    ...mapActions([
        'setResources',
        'maddItem',
        'fetchResources',
        'removeItem',
        'getItemIndex',
        'getnwidth'
    ]),
/*
    removeItem: function (val) {
            const index = this.layout.map(item => item.i).indexOf(val);
            this.layout.splice(index, 1);
            this.removelayout = index
    },
*/
    addItem: function() {
        console.log(lib.guid())
        this.layout.push({
            x: (this.layout.length * 2) % (this.colNum || 12),
            y: this.layout.length + (this.colNum || 12), // puts it at the bottom
            w: 2,
            h: 2,
            i: lib.guid(),
            "nw": 80
        });
    },
    myevent: function(index) {
        console.log("clicked: " + index)
    },
    moveEvent: function(i, newX, newY){
        const msg = "MOVE i=" + i + ", X=" + newX + ", Y=" + newY;
        this.eventLog.push(msg);
        console.log(msg);
    },
    movedEvent: function(i, newX, newY){
        const msg = "MOVED i=" + i + ", X=" + newX + ", Y=" + newY;
        this.eventLog.push(msg);
        console.log(msg);
    },
    resizeEvent: function(i, newH, newW, newHPx, newWPx){
        const msg = "RESIZE i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx;
        this.eventLog.push(msg);
        console.log(msg);
        //this.myWidth[i] = this.layout[i].nw = newW * 100
        //const itemindex = (item, i) => parseInt(item.i) == i
        var itemindex = this.$store.state.resources.findIndex(function(item) {
            return parseInt(item.i) == i 
        })
        console.log("getItemIndex:")
        console.log(itemindex)
        //this.myWidth[i] = 
        this.$store.state.resources[itemindex].nw = newW*100

    },
    resizedEvent: function(i, newX, newY, newHPx, newWPx){
        const msg = "RESIZED i=" + i + ", X=" + newX + ", Y=" + newY + ", H(px)=" + newHPx + ", W(px)=" + newWPx;
        this.eventLog.push(msg);
        console.log(msg);
    },
    containerResizedEvent: function(i, newH, newW, newHPx, newWPx){
        const msg = "CONTAINER RESIZED i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx;
        this.eventLog.push(msg);
        console.log(msg);
    },
    layoutCreatedEvent: function(newLayout){
        this.eventLog.push("Created layout");
        console.log("Created layout: ", newLayout)
    },
    layoutBeforeMountEvent: function(newLayout){
        this.eventLog.push("beforeMount layout");
        console.log("beforeMount layout: ", newLayout)
    },
    layoutMountedEvent: function(newLayout){
        this.eventLog.push("Mounted layout");
        console.log("Mounted layout: ", newLayout)
    },
    layoutReadyEvent: function(newLayout){
        this.eventLog.push("Ready layout");
        console.log("Ready layout: ", newLayout)
    },
    layoutUpdatedEvent: function(newLayout){
        this.eventLog.push("Updated layout");
        console.log("Updated layout: ", newLayout)
        //console.log(this.removelayout)
        //console.log(newLayout[this.removelayout])
        /*
        for(var i in newLayout) {
            if (this.myWidth[i] > (newLayout[i].w *100))
            this.myWidth[i] = newLayout[i].w *100
        }
        */
    },
    breakpointChangedEvent: function(newBreakpoint, newLayout){
        console.log("BREAKPOINT CHANGED breakpoint=", newBreakpoint, ", layout: ", newLayout );
    },
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.fetchResources()
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

.remove {
    position: absolute;
    left: 2px;
    top: 0;
    cursor: pointer;
    font-size: 62.5%;
    color: red;
}

.vue-grid-layout {
    background: #eee;
}
.vue-grid-item:not(.vue-grid-placeholder) {
    background: #ccc;
    border: 1px solid black;
}
.vue-grid-item .resizing {
    opacity: 0.9;
}
.vue-grid-item .static {
    background: #cce;
}
.vue-grid-item .text {
    font-size: 24px;
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 100%;
    width: 100%;
}
.vue-grid-item .no-drag {
    height: 100%;
    width: 100%;
}
.vue-grid-item .minMax {
    font-size: 12px;
}
.vue-grid-item .add {
    cursor: pointer;
}
.vue-draggable-handle {
    position: absolute;
    width: 10px;
    height: 10px;
    top: 0;
    right: 0;
    padding: 0 8px 8px 0;
    background-origin: content-box;
    background-color: black;
    box-sizing: border-box;
    border-radius: 10px;
    cursor: pointer;
}
.layoutJSON {
    background: #ddd;
    border: 1px solid black;
    margin-top: 10px;
    padding: 10px;
}
.eventsJSON {
    background: #ddd;
    border: 1px solid black;
    margin-top: 10px;
    padding: 10px;
    height: 100px;
    overflow-y: scroll;
}
</style>
