<template>
	<div>
		
<button @click="test">dianji</button>
<h1 class="bb">iiiiiiii</h1>

<router-link to="/hi1">gotoHi1</router-link>
<router-link to="/hi2">gotoHi2</router-link>

<router-view></router-view>


<mt-popup
  v-model="popupVisible"
  position="left">
  
<h1>-------------------</h1>
  <h1>-------------------</h1>
</mt-popup>
	</div>
		
</template>

<!--父组件模板-->
<div id="parent-template">
	<child>
		<!--此处是待分发的内容-->
		<p slot="one">one</p>
		<p slot="two">two</p>
		<p>default</p>
	</child>
</div>

<!--子组件的模板-->
<div>
	<h1>内容被分发且重新组合</h1>
	<slot>默认分发处</slot>
	<slot name="two"></slot>
	<slot name="one"></slot>
</div>


<script >
import { Swipe, SwipeItem } from "mint-ui";
import { Popup } from "mint-ui";


export default {
  name: "liuhangkai",

  data() {
    return {
      msg: "ceshide shuju",
      popupVisible: false
    };
  },
  methods: {
    test: function() {
      this.popupVisible = true;
    }
  },
  components: {
    
  }
};
</script>


<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
h1 {
  display: block;
}
</style>