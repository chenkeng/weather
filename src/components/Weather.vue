<template>
  <div>
    <div class="page-swipe">
      <mt-swipe :getDegree="degree">
        <mt-swipe-item class="slide">
          <mt-header title="天气预报">
            <router-link to="/" slot="left">
              <mt-button icon="back">返回</mt-button>
            </router-link>
            <!-- <mt-button icon="more" slot="right"></mt-button> -->
          </mt-header>
          <div class="air">
            <p>空气</p>
            <p>优</p>
          </div>
          <div class="degree">
            <h1>{{degree}}</h1>
          </div>
          <div class="main-weather">{{weather}}</div>
          <div class="humidity">湿度 {{humidity}}</div>
          <div class="tips">
            <p>天气有点冷,注意保暖~</p>
          </div>
        </mt-swipe-item>
      </mt-swipe>
      <div class="landscape">
        <div class="layer1"></div>
        <div class="layer2"></div>
        <div class="layer3"></div>
      </div>
    </div> 
    <section class="container recent">
        <div class="today">
          <div class="top">
            <p>今天</p>
            <p>1/-7°</p>
          </div>
          <div class="bottom">
            <p>多云转晴</p>
            <p><img src="" alt="图片"></p>
          </div>
        </div>
        <div class="tomorrow">
          <div class="top">
            <p>今天</p>
            <p>1/-7°</p>
          </div>
          <div class="bottom">
            <p>多云转晴</p>
            <p><img src="" alt="图片"></p>
          </div>
        </div>
      </section>
    <section class="hours">
      <div id="wrapper">
        <div id="scroller">
          <ul>
            <li>
              <p>10:00</p>
              <div><img src="" alt="图片"></div>
              <p>6°</p>
            </li>
            <li>
              <p>10:00</p>
              <div><img src="" alt="图片"></div>
              <p>6°</p>
            </li>
            <li>
              <p>10:00</p>
              <div><img src="" alt="图片"></div>
              <p>6°</p>
            </li>
            <li>
              <p>10:00</p>
              <div><img src="" alt="图片"></div>
              <p>6°</p>
            </li>
          </ul>
        </div>
      </div> 
    </section>
    <section class="days">
        <div>
          显示一周的天气
        </div>
    </section>
    <section class="life">
      <ul class="life-list">
        <li class="item">1</li>
        <li class="item">2</li>
        <li class="item">3</li>
        <li class="item">4</li>
        <li class="item">5</li>
        <li class="item">6</li>
        <li class="item">7</li>
        <li class="item">8</li>
      </ul>
    </section>
    <footer>
      <div class="link">
        <a href="/liuhangkai">数据来源于中国天气网--kaige</a>
      </div>
      <div class="copyright">Copyright &copy; 2018 All Rights Reserved</div>
    </footer>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Weather",
  data() {
    return {
      msg: "welcome to weather forecast!",
      weather:"",
      humidity:"",
      degree:""
    };
  },
  methods:{
    getInfo(){
      axios.get("/api/weatherlist1.json").then(this.getInfoSucc);
    },
    getInfoSucc(res){
      res=res.data.data;
      console.log(res);
      this.degree=res.observe.degree;
      this.weather=res.observe.weather;
      this.humidity=res.observe.humidity;
    }
  },
  mounted(){
    this.getInfo();
  }
};
</script>
<style scoped>
@import "../common/style.css"
</style>


