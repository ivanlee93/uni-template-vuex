<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <button @click="goHome" class="home">去往首页</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('counter', [
      'count'
    ])
  },
  methods: {
    ...mapActions('counter', ['increment',
      'decrement', 'getProvince']),
    goHome() {
      uni.redirectTo({
        url: '/pages/index/index'
      });
    }
  },
  async onLoad() {
    // await 写法
    // try {
    //   let resp = await this.$iBox.http('globalUrl.getProvince', { city: '汕头' })({
    //     method: 'get'
    //   })
    //   console.log('await处理的接口回调' + resp.data.province)
    // } catch (error) {
    //   console.log(error)
    // }
    // .then写法
    // this.getProvince({ city: '深圳' }).then(res => {
    //   console.log('页面中接口回调后的提示：' + res.data.city)
    // })
    let provinceinfo = await this.getProvince({ city: '深圳' })
    console.log(provinceinfo.data.city)
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100upx;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5upx 10upx;
  color: blue;
  border: 1px solid blue;
}
</style>
