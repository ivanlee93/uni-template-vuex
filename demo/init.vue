/* 初始化模板 */
<style>
Page {
  background: #fff;
}
</style>

<template>
  <div>

  </div>
</template>
// flex布局兼容性写法
// flex：定义布局为盒模型
// flex-v：盒模型垂直布局
// flex-l：盒模型水平布局
// flex-1：子元素占据剩余的空间
// flex-align-center：子元素垂直居中
// flex-pack-center：子元素水平居中
// flex-pack-justify：子元素两端对齐
// border-box：元素padding不影响
// flex-text：按钮文本居中
<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState('', [])
  },
  components: {

  },
  onLoad() {

  },
  methods: {
    ...mapActions('', []),
    ...mapMutations('', []),
    ...mapGetters('', []),
    redirectTo() {
      uni.redirectTo({
        url: '/pages/index/index'
      });
    }
  }
}
</script>
