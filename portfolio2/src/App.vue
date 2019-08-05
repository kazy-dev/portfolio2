<template>
  <v-app>
    <NaviBar />
    <v-content>
      <transition mode="out-in">
        <router-view />
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import NaviBar from "@/components/NaviBar.vue"

export default {
  name: 'App',
  components: { 
    NaviBar,
  },
  data () {
    return {
    }
  }
}

</script>

<style>
.v-application {
  font-family: monospace, "Hiragino Kaku Gothic ProN" ,"メイリオ", sans-serif!important;
}

.v-enter-active, .v-leave-active {
  transition: .2s;
}

.v-enter, .v-leave-to {
  opacity: 0
}
</style>
