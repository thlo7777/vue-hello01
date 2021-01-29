<!--  -->
<template>
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>

  <p>
    <slot name="textend" v-bind:retValue="retValue">
        <h4>缺省 xingming{{retValue.user.firstName}}</h4>
        <!-- <span>price: {{user.price}}</span> -->
    </slot>
  </p>

   <p>
       <slot name="sku" v-bind:retValue="retValue"></slot>
   </p>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    name: "Slotexa01",
    props: ["title", "content"],
    inheritAttrs: false,
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
    return {
            retValue: {
                user: {
                    firstName: "thomas",
                    lastName: "luo",
                    price: 24
                },
                sku: {
                    color: "red",
                    weight: 5
                }
            }
        };
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

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
