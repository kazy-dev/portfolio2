<template>
	<div>
		<div class="home_title">
    	<h1>Welcome kazy's ポートフォリオ</h1>
		</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
        return {
          drawer: null,
          items: [
            { title: 'Home', icon: 'dashboard' },
            { title: 'About', icon: 'question_answer' },
          ],
        }
    }
}
</script>

<style>
.home_title {
	position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  margin: auto;

  width: 80vw;
  height: 40px;
	text-align: center;
}
</style>
