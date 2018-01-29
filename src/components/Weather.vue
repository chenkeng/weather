<template>
  <div>
    <div class="page-swipe">
      <mt-swipe :show-indicators="false">
        <mt-swipe-item class="slide1">
          <mt-header title="天气预报">
            <router-link to="/" slot="left">
              <mt-button icon="back">返回</mt-button>
            </router-link>
          <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        </mt-swipe-item>
      </mt-swipe>

      <section class="container recent">
        <div class="today">
          今天
        </div>
        <div class="tomorrow">
          明天
        </div>
      </section>
    </div> 
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
.page-swipe{
  background-image: -webkit-linear-gradient(-90deg,#3bbcff,#4af4ff);
}
.mint-swipe {
  height: 300px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
}

.mint-swipe-item {
  line-height: 300px;
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
}
.recent{
  display: flex;
  height: 60px;
  line-height: 1;
  justify-content: center;
  
}
.recent .today,.recent .tomorrow{
  flex: 1;
}
</style>


