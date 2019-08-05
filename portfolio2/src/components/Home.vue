<template>
  <div class="home_top_wrapper">
    <div class="home_title_wrapper" :style="{'height': homeTitleHeight - naviHeight + 'px'}">
      <h1 class="display-3 home_title" v-if="!this.bulma.isMobile">Welcome to kazy's portfolio</h1>
      <div v-else>
        <h1 class="display-2 home_title" >Welcome to</h1>
        <h1 class="display-2 home_title" >kazy's portfolio</h1>
      </div>
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
      naviHeight: 64,
      homeTitleHeight: window.innerHeight
    }
  },
  methods: {
    handleResize() {
      // FIXME: なぜか特定のサイズになると正しく高さがナビ分の高さが取得できない
      this.naviHeight = document.getElementById('naviBar').getBoundingClientRect().height;
      this.homeTitleHeight = window.innerHeight;
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

<style scoped>
.home_title_wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  text-align: center;
  position: relative;
  background-image: url("../assets/top_image1.jpg");
}
.home_title {
  position: relative;
  top: -50px;
  font-family: 'Cutive Mono', monospace, "Hiragino Kaku Gothic ProN" ,"メイリオ", sans-serif!important;
}
</style>
