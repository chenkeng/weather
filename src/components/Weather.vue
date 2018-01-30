<template>
  <div>
    <div class="page-swipe">
      <mt-swipe :show-indicators="false">
        <mt-swipe-item class="slide">
          <mt-header title="天气预报">
            <router-link to="/" slot="left">
              <mt-button icon="back">返回</mt-button>
            </router-link>
            <!-- <mt-button icon="more" slot="right"></mt-button> -->
          </mt-header>

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
          今天
        </div>
        <div class="tomorrow">
          明天
        </div>
      </section>
    <section class="hours">
      <div>
        显示每个小时的天气
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
        <a href="">数据来源于中国天气网</a>
      </div>
      <div class="copyright">Copyright &copy; 2018 All Rights Reserved</div>
    </footer>
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
.page-swipe {
  background-image: -webkit-linear-gradient(-90deg, #3bbcff, #4af4ff);
  position: relative;
}
.mint-header{
  background-color: unset;
}
.mint-swipe {
  height: 400px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  /* margin-bottom: 20px; */
}

.mint-swipe-item {
  line-height: 300px;
}

.landscape {
  width: 100%;
  height: 400px;
  position: absolute;
  bottom: 0;
  left: 0;
}

.landscape div {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 102px;
  background-position: center;
  background-size: 100% auto;
}

.layer1 {
  background: url(../assets/1.png) no-repeat;
}

.layer2 {
  background: url(../assets/2.png) no-repeat;
}

.layer3 {
  background: url(../assets/3.png) no-repeat;
}
.slide {
  /* background-color: #0089dc; */
  /* background-image: url(../assets/3.png); */

  color: #fff;
}
section {
  margin-bottom: 20px;
}
.recent {
  display: flex;
  height: 90px;
  line-height: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  /* margin-bottom: 10px; */
  /* padding-top: 26px; */
}
.recent .today,
.recent .tomorrow {
  flex: 1;
}
section.hours {
  height: 120px;
  /* line-height: 1; */
  background-color: #fff;
}
section.days {
  background-color: #fff;
  height: 300px;
}
section.life {
  background-color: #fff;
  /* height: 160px; */
  width: 100%;
}
section.life .life-list {
  /* display: flex; */
  box-sizing: border-box;
  height: 50vw;
  clear: both;
}
.life-list li {
  width: 25%;
  height: 25vw;
  box-sizing: border-box;
  display: inline-block;
  float: left;
  border-right: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
}
.life-list li:nth-child(4n) {
  border-right: 0;
}
.life-list li:nth-child(n + 5) {
  border-bottom: none;
}
footer {
  padding-bottom: 10px;
  color: #b2b2b2;
}
.link {
  line-height: 20px;
  height: 20px;
}
.link a {
  font-size: 12px;
  color: #b2b2b2;
  text-decoration: none;
}
</style>


