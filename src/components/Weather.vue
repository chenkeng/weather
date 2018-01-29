<template>
  <div>
      <mt-header title="天气预报">
          <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
          </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <p>这里是weather页面</p>
      <h1>{{msg}}</h1>
  </div>
</template>
<script>
export default {
  name: "Weather",
  data() {
    return {
      msg: "welcome to weather forecast!"
    };
  }
};
</script>
<style>

</style>


