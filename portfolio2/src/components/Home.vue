<template>
  <div class="home_top_wrapper">
    <div class="home_title" :style="{top: naviHeight + 'px'}">
      
    </div>
  </div>
</template>

<script>
import anime from 'animejs'

export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      naviHeight: 64
    }
  },
  methods: {
    handleResize() {
      var naviHeight = -document.getElementById('naviBar').getBoundingClientRect().height;
      // FIXME: なぜか特定のサイズになると正しく高さがナビ分の高さが取得できない
      this.naviHeight = naviHeight;
    }
  },
  created() {
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }
}
</script>

<style>
</style>
