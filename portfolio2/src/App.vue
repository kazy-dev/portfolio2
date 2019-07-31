<template>
  <v-app>
    <NaviBar />
    <v-content>
      <transition mode="out-in">
        <router-view />
      </transition>
    </v-content>
    <!-- <div id="app">
      <div id="nav">
        <router-link to="/">HOME</router-link><span>|</span>
        <router-link to="/about">ABOUT</router-link><span>|</span>
        <router-link to="/skills">SKILLS</router-link><span>|</span>
        <router-link to="/works">WORKS</router-link><span>|</span>
        <router-link to="/contact">CONTACT</router-link>
      </div>
      <transition mode="out-in">
        <router-view/>
      </transition>
    </div> -->
  </v-app>
</template>

<script>
import NaviBar from "@/components/NaviBar.vue"
export default {
  name: 'App',
  components: { NaviBar },
  data () {
    return {
      //
    }
  }
}

</script>

<style>
.v-enter-active, .v-leave-active {
  transition: .2s;
}

.v-enter, .v-leave-to {
  opacity: 0
}
</style>
