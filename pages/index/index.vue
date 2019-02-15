<template>
  <view class="content">
    <image class="logo" src="../../static/logo.png"></image>
    <view>
      <text class="title">{{motto == '' ? title : motto}}</text>
    </view>
    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <button class="counter" @click="goCounter">去往Vuex示例页面</button>
    <view>
      <text class="title">我是全局数据：{{count}}</text>
    </view>
  </view>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      title: 'Hello',
      motto: 'Hello World'
    }
  },
  computed: {
    ...mapState('counter', [
      'count'
    ])
  },
  onLoad () {

  },
  methods: {
    goCounter () {
      uni.redirectTo({
        url: '/pages/counter/counter'
      });
    }
  }
}
</script>

<style>
.content {
  text-align: center;
  height: 400upx;
}
.logo {
  height: 200upx;
  width: 200upx;
  margin-top: 200upx;
}
.title {
  font-size: 36upx;
  color: #8f8f94;
}
.form-control {
  width: 500upx;
  display: block;
  padding: 0 12upx;
  margin: 20upx auto;
  border: 1px solid #ccc;
  text-align: left;
}
.counter {
  display: inline-block;
  margin: 10upx auto;
  padding: 5upx 10upx;
  color: blue;
  border: 1px solid blue;
}
</style>
