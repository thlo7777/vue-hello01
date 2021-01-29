<template>

    <div>
        <h1>This is an about page</h1>
        <slotexa-01>
            <template v-slot:header>
                <h1>Here might be a page title</h1>
            </template>

            <p>A paragraph for the main content.</p>
            <p>And another one.</p>

            <template v-slot:footer>
                <p>Here's some contact info</p>
            </template>

            <template v-slot:textend="slotProps">
                <h4>父组件姓 {{slotProps.retValue.user.lastName}}</h4>
                <span>价格： {{slotProps.retValue.user.price + 22}}  + 22</span>
            </template>

            <template v-slot:sku="other">
                <h3>颜色： {{other.retValue.sku.color}}</h3>
                <h2>重量： {{other.retValue.sku.weight}}</h2>
            </template>
        </slotexa-01>

    </div>



</template>


<script>
// @ is an alias to /src
import Slotexa01 from '../components/slotexa01.vue'
export default {
  name: 'Home',
  data() {
      return {

          content: "<div>hello</div>",
          title: "fuck my life",
          user: {
              lastName: "liu",
              firstName: "llll"
          }
      };
  },
  components: {
    Slotexa01
  }
}
</script>

