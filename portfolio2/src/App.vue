<template>
  <div id="app">
    <img src="./assets/logo.png">
    <transition mode="out-in">
      <router-view/>
    </transition>
    <p>テスト</p>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.v-enter-active, .v-leave-active {
  transition: opacity .5s
}

.v-enter, .v-leave-to {
  opacity: 0
}
</style>
